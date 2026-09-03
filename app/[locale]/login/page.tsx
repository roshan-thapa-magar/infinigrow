// app/login/page.tsx
import { signIn } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    FaGithub
} from "react-icons/fa6"
export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
      <div className="w-full max-w-sm">
        <Card>
          <CardContent className="flex flex-col items-center gap-6 p-8">
            {/* Logo / mark */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full border">
              <FaGithub className="h-5 w-5" />
            </div>

            {/* Heading */}
            <div className="space-y-1.5 text-center">
              <h1 className="text-xl font-semibold tracking-tight">
                Welcome back
              </h1>
              <p className="text-sm text-muted-foreground">
                Sign in with your GitHub account to continue
              </p>
            </div>

            {/* Sign in */}
            <form
              action={async () => {
                "use server";
                await signIn("github", { redirectTo: "/dashboard" });
              }}
              className="w-full"
            >
              <Button type="submit" variant="outline" className="w-full gap-2">
                <FaGithub className="h-4 w-4" />
                Continue with GitHub
              </Button>
            </form>

            {/* Footer note */}
            <p className="text-center text-xs text-muted-foreground">
              Access is restricted to approved accounts only.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}