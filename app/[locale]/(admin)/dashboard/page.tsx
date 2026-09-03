// app/dashboard/page.tsx
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await auth();
  if (!session) redirect("/login");

  return <>
  <h1>Welcome, {session.user?.email}</h1>
  <p>{session.user?.role}</p>
  <span>{session.user?.isActive}</span>
  </>;
}