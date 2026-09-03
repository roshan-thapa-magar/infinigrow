// app/[locale]/(protected)/user-requests/page.tsx
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import UserRequestsClient from "@/components/admin/user-requests";

export default async function UserRequestsPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return <UserRequestsClient />;
}