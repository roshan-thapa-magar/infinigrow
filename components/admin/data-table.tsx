"use client";

import { useState, useMemo, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Plus,
  Search,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Settings2,
  Filter,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

// Export the interface
export interface ColumnDefinition<T> {
  id: string;
  name: string;
  align?: "center" | "left" | "right";
  width?: string;
  render?: (item: T) => React.ReactNode;
}

interface DataTableProps<T extends Record<string, any>> {
  data: T[];
  columns: ColumnDefinition<T>[];
  initialColumnVisibility: Record<string, boolean>;
  searchPlaceholder: string;
  addLabel?: string;
  onAddClick: () => void;
  searchKey: keyof T;
  loading?: boolean;
  pagination?: {
    currentPage: number;
    rowsPerPage: number;
    totalCount: number;
    onPageChange: (page: number) => void;
    onRowsPerPageChange: (limit: number) => void;
  };
}

export default function DataTable<T extends Record<string, any>>({
  data,
  columns,
  initialColumnVisibility,
  searchPlaceholder,
  addLabel,
  onAddClick,
  searchKey,
  pagination,
  loading
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [columnVisibility, setColumnVisibility] = useState<
    Record<string, boolean>
  >(initialColumnVisibility);
  const [searchTerm, setSearchTerm] = useState("");

  const currentPage = pagination?.currentPage || 1;
  const rowsPerPage = pagination?.rowsPerPage || 10;
  const totalCount = pagination?.totalCount || data.length;
  const [customRows, setCustomRows] = useState<string>("");
  const [isCustom, setIsCustom] = useState(false);
  
  const filteredData = useMemo(() => {
    if (!searchTerm) return data;
    return data.filter((item) =>
      String(item[searchKey]).toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [data, searchTerm, searchKey]);

  const totalPages = Math.ceil(totalCount / rowsPerPage);

  const displayData = useMemo(() => {
    if (searchTerm) {
      return filteredData.slice(0, rowsPerPage);
    }
    return data;
  }, [data, filteredData, searchTerm, rowsPerPage]);

  const startIndex = (currentPage - 1) * rowsPerPage;

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      const newSelected = new Set(displayData.map((_, index) => index));
      setSelectedRows(newSelected);
    } else {
      setSelectedRows(new Set());
    }
  };

  const handleSelectRow = (rowIndex: number, checked: boolean) => {
    setSelectedRows((prev) => {
      const newSelected = new Set(prev);
      if (checked) newSelected.add(rowIndex);
      else newSelected.delete(rowIndex);
      return newSelected;
    });
  };

  const handleColumnVisibilityChange = (columnId: string, checked: boolean) => {
    setColumnVisibility((prev) => ({
      ...prev,
      [columnId]: checked,
    }));
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    if (pagination?.onPageChange) {
      pagination.onPageChange(1);
    }
  };

  const allRowsSelected = displayData.length > 0 &&
    displayData.every((_, index) => selectedRows.has(index));
  const someRowsSelected = displayData.length > 0 &&
    displayData.some((_, index) => selectedRows.has(index)) && !allRowsSelected;

  const visibleColumns = columns.filter((col) => columnVisibility[col.id]);

  return (
    // min-w-0 stops this whole component from forcing its parent
    // flex container wider than the viewport — without it, the table
    // below causes the entire page (sidebar included) to scroll
    // horizontally on small screens instead of scrolling internally.
    <div className="flex h-full min-w-0 flex-col bg-gradient-to-br from-background to-muted/20">
      {/* Header Section - Enhanced Design */}
      <div className="sticky top-0 z-10 flex-shrink-0 border-b bg-card/50 backdrop-blur-sm">
        <div className="space-y-3 p-2 sm:space-y-4">
          <div className="flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center sm:gap-4">
            <div className="relative w-full sm:max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={searchPlaceholder}
                  className="h-10 border-muted-foreground/20 bg-background pl-9 pr-4 transition-all duration-200 focus:border-primary/50 sm:h-11"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
            
            <div className="flex items-center justify-end gap-2">
              <DropdownMenu>
                {/*
                  IMPORTANT: do NOT nest a <Button> inside this trigger.
                  This project's dropdown-menu.tsx is built on Base UI
                  (MenuTrigger), which merges props via a `render` prop,
                  not Radix's `asChild`. Passing `asChild` + a child
                  <Button> here causes TWO <button> elements to render
                  (one from Base UI's trigger, one from Button), which is
                  invalid HTML and throws a hydration error:
                  "<button> cannot be a descendant of <button>".
                  Instead, style the trigger element directly below.
                */}
                <DropdownMenuTrigger
                  className={cn(
                    "inline-flex h-9 shrink-0 items-center justify-center gap-2 rounded-md border border-muted-foreground/20 bg-background px-3 text-sm font-medium shadow-sm outline-none transition-all duration-200 hover:bg-muted/50 focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  )}
                >
                  <Settings2 className="h-4 w-4" />
                  <span className="hidden sm:inline">Customize</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  {columns.map((column) => (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      checked={columnVisibility[column.id]}
                      onCheckedChange={(checked) =>
                        handleColumnVisibilityChange(column.id, checked)
                      }
                    >
                      {column.name}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              {addLabel && onAddClick && (
                <Button
                  size="sm"
                  className="h-9 px-4 shadow-sm hover:shadow-md transition-all duration-200"
                  onClick={onAddClick}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">{addLabel}</span>
                  <span className="sm:hidden">Add</span>
                </Button>
              )}
            </div>
          </div>

          {/* Selected rows indicator */}
          {selectedRows.size > 0 && (
            <div className="flex items-center gap-2 text-sm bg-primary/10 text-primary px-3 py-2 rounded-md animate-in slide-in-from-top-1">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span>{selectedRows.size} row(s) selected</span>
            </div>
          )}
        </div>
      </div>

      {/* Table Section - Enhanced Styling */}
      <div className="hide-scrollbar min-w-0 flex-1 overflow-auto p-2 pt-4">
        <div className="min-w-0 overflow-hidden rounded-xl border bg-card shadow-sm">
          {/*
            Horizontal scroll fix: shadcn's <Table> renders with `w-full`,
            so with many columns it just shrinks them to fit instead of
            overflowing — `overflow-x-auto` on the wrapper never actually
            triggers. Giving the table an explicit `min-width` stops it
            from shrinking below its natural size, so the wrapper below
            scrolls horizontally once the columns don't fit. `min-w-0` on
            every ancestor above is what lets that scroll stay contained
            instead of pushing the whole page wider.
          */}
          <div className="min-w-0 overflow-x-auto">
            <Table className="min-w-[1100px]">
              <TableHeader>
                <TableRow className="bg-muted/30 hover:bg-muted/30 border-b">
                  <TableHead className="w-[50px] h-12">
                    <Checkbox
                      checked={allRowsSelected}
                      onCheckedChange={handleSelectAll}
                      aria-label="Select all"
                      className="translate-y-[2px]"
                    />
                  </TableHead>
                  <TableHead className="w-[60px] text-center text-xs font-medium">
                    S.No
                  </TableHead>
                  {visibleColumns.map((column) => (
                    <TableHead
                      key={column.id}
                      className={cn(
                        "text-xs font-semibold uppercase tracking-wider whitespace-nowrap",
                        column.align === "center" && "text-center",
                        column.align === "right" && "text-right"
                      )}
                      style={{ width: column.width, minWidth: column.width ?? "140px" }}
                    >
                      {column.name}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              
              <TableBody>
                {loading ? (
                  <TableRow>
                    <TableCell 
                      colSpan={visibleColumns.length + 2} 
                      className="h-64 text-center"
                    >
                      <div className="flex flex-col items-center justify-center gap-3">
                        <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                        <p className="text-sm text-muted-foreground">Loading...</p>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : displayData.length === 0 ? (
                  <TableRow>
                    <TableCell 
                      colSpan={visibleColumns.length + 2} 
                      className="h-64 text-center"
                    >
                      <div className="flex flex-col items-center justify-center gap-2">
                        <div className="h-12 w-12 rounded-full bg-muted/50 flex items-center justify-center">
                          <Search className="h-6 w-6 text-muted-foreground" />
                        </div>
                        <p className="text-sm font-medium">No data found</p>
                        <p className="text-xs text-muted-foreground">
                          Try adjusting your search or filters
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  displayData.map((item, index) => {
                    const isSelected = selectedRows.has(index);
                    return (
                      <TableRow 
                        key={item._id || index}
                        className={cn(
                          "transition-colors duration-150",
                          isSelected && "bg-primary/5 hover:bg-primary/10",
                          !isSelected && "hover:bg-muted/30"
                        )}
                      >
                        <TableCell className="py-3">
                          <Checkbox
                            checked={isSelected}
                            onCheckedChange={(checked) =>
                              handleSelectRow(index, checked as boolean)
                            }
                            aria-label={`Select row ${index + 1}`}
                            className="translate-y-[2px]"
                          />
                        </TableCell>
                        <TableCell className="text-center text-sm text-muted-foreground font-mono">
                          {startIndex + index + 1}
                        </TableCell>
                        {visibleColumns.map((column) => (
                          <TableCell
                            key={column.id}
                            className={cn(
                              "py-3 whitespace-nowrap",
                              column.align === "center" && "text-center",
                              column.align === "right" && "text-right",
                              column.align === "left" && "text-left"
                            )}
                          >
                            {column.render ? column.render(item) : (
                              <span className="text-sm">
                                {item[column.id] || "-"}
                              </span>
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    );
                  })
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Footer Section - Enhanced Design */}
      <div className="flex-shrink-0 border-t bg-card/50 backdrop-blur-sm">
        <div className="p-2">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row sm:gap-4">
            <div className="text-xs text-muted-foreground sm:text-sm">
              Showing <span className="font-medium text-foreground">{displayData.length}</span> of{" "}
              <span className="font-medium text-foreground">{totalCount}</span> entries
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              {/* Rows per page */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Show</span>
                <Select
                  value={isCustom ? "custom" : String(rowsPerPage)}
                  onValueChange={(value) => {
                    if (value === "custom") {
                      setIsCustom(true);
                    } else {
                      setIsCustom(false);
                      setCustomRows("");
                      pagination?.onRowsPerPageChange(Number(value));
                    }
                  }}
                >
                  <SelectTrigger className="w-[80px] h-8 text-sm">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5">5</SelectItem>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="50">50</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              {isCustom && (
                <Input
                  type="number"
                  placeholder="Enter"
                  value={customRows}
                  onChange={(e) => {
                    const value = e.target.value;
                    setCustomRows(value);
                    if (Number(value) > 0) {
                      pagination?.onRowsPerPageChange(Number(value));
                    }
                  }}
                  className="w-[90px] h-8 text-sm"
                />
              )}

              {/* Page info */}
              <div className="text-sm text-muted-foreground">
                Page <span className="font-medium text-foreground">{currentPage}</span> of{" "}
                <span className="font-medium text-foreground">{totalPages}</span>
              </div>

              {/* Pagination buttons */}
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-muted"
                  onClick={() => pagination?.onPageChange(1)}
                  disabled={currentPage === 1}
                >
                  <ChevronsLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-muted"
                  onClick={() => pagination?.onPageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-muted"
                  onClick={() => pagination?.onPageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 hover:bg-muted"
                  onClick={() => pagination?.onPageChange(totalPages)}
                  disabled={currentPage === totalPages}
                >
                  <ChevronsRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}