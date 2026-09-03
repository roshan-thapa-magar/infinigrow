import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default async function ProfilePage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  const user = session.user;
  const initials =
    user?.name?.charAt(0) ?? user?.email?.charAt(0) ?? "?";

  return (
    <div className="px-4 py-12">
      <div className="mx-auto max-w-2xl">
        <Card>
          <CardContent className="p-8">
            {/* Header */}
            <div className="flex items-center gap-5">
              <Avatar className="h-20 w-20">
                <AvatarImage src={user?.image ?? undefined} alt={user?.name ?? "Profile picture"} />
                <AvatarFallback className="text-2xl font-semibold">
                  {initials}
                </AvatarFallback>
              </Avatar>

              <div>
                <h1 className="text-xl font-semibold">
                  {user?.name ?? "Unnamed User"}
                </h1>
                <p className="text-sm text-muted-foreground">{user?.email}</p>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Details */}
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Role
                </dt>
                <dd className="mt-1 text-sm capitalize">
                  {user?.role ?? "member"}
                </dd>
              </div>

              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Status
                </dt>
                <dd className="mt-1">
                  <Badge variant="outline">
                    {user?.isActive ? "Active" : "Inactive"}
                  </Badge>
                </dd>
              </div>
            </dl>

            {/* Sign out */}
            <form
              action={async () => {
                "use server";
                const { signOut } = await import("@/lib/auth");
                await signOut({ redirectTo: "/login" });
              }}
              className="mt-8"
            >
              <Button type="submit" variant="outline">
                Sign out
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}