"use client";

import { loginUser } from "@/services/auth/loginUser";
import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";
import InputFieldError from "./shared/InputFieldError";
import { Button } from "./ui/button";
import { Field, FieldDescription, FieldGroup, FieldLabel } from "./ui/field";
import { Input } from "./ui/input";

const DEMO_CREDENTIALS = {
  admin: {
    email: "admin@gmail.com",
    password: "45.86.86.86",
  },
  doctor: {
    email: "ahsan.rahman@phdoc.com",
    password: "45.86.86.86",
  },
  patient: {
    email: "demopatient2@phdoc.com",
    password: "Patient@123",
  },
};

const LoginForm = ({ redirect }: { redirect?: string }) => {
  const [state, formAction, isPending] = useActionState(loginUser, null);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (state && !state.success && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  const fillDemoCredentials = (role: keyof typeof DEMO_CREDENTIALS) => {
    const creds = DEMO_CREDENTIALS[role];
    if (emailRef.current) emailRef.current.value = creds.email;
    if (passwordRef.current) passwordRef.current.value = creds.password;
  };

  const handleGoogleLogin = () => {
    const redirectPath = redirect ? `?redirect=${redirect}` : "";
    window.location.href = `${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/google${redirectPath}`;
  };

  return (
    <form action={formAction} className="space-y-6">
      {redirect && <input type="hidden" name="redirect" value={redirect} />}

      {/* Demo Login Buttons */}
      <div className="rounded-xl border bg-slate-50 p-4">
        <p className="text-sm font-medium text-slate-700 mb-3 text-center">
          Demo Login
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => fillDemoCredentials("admin")}
          >
            Admin
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={() => fillDemoCredentials("doctor")}
          >
            Doctor
          </Button>

          <Button
            type="button"
            variant="outline"
            onClick={() => fillDemoCredentials("patient")}
          >
            Patient
          </Button>
        </div>
      </div>

      <FieldGroup>
        <div className="grid grid-cols-1 gap-4">
          {/* Email */}
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              ref={emailRef}
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
            />
            <InputFieldError field="email" state={state} />
          </Field>

          {/* Password */}
          <Field>
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Input
              ref={passwordRef}
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
            />
            <InputFieldError field="password" state={state} />
          </Field>
        </div>

        <FieldGroup className="mt-4">
          <Field>
            <Button type="submit" disabled={isPending} className="w-full">
              {isPending ? "Logging in..." : "Login"}
            </Button>

            <FieldDescription className="px-6 text-center">
              Don&apos;t have an account?{" "}
              <a href="/register" className="text-blue-600 hover:underline">
                Sign up
              </a>
            </FieldDescription>

            <FieldDescription className="px-6 text-center">
              <a
                href="/forgot-password"
                className="text-blue-600 hover:underline"
              >
                Forgot password?
              </a>
            </FieldDescription>
          </Field>
        </FieldGroup>
      </FieldGroup>

      {/* Google Login */}
      <div className="space-y-2">
        <Button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 bg-white text-slate-800 border hover:bg-slate-50"
        >
          <svg width="18" height="18" viewBox="0 0 48 48">
            <path
              fill="#FFC107"
              d="M43.6 20.5H42V20H24v8h11.3C33.6 32.1 29.2 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.4 1.1 7.4 2.9l5.7-5.7C33.5 6.5 28.9 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"
            />
            <path
              fill="#FF3D00"
              d="M6.3 14.7l6.6 4.8C14.7 16.1 19 13 24 13c2.8 0 5.4 1.1 7.4 2.9l5.7-5.7C33.5 6.5 28.9 4 24 4c-7.7 0-14.4 4.3-17.7 10.7z"
            />
            <path
              fill="#4CAF50"
              d="M24 44c4.9 0 9.4-1.9 12.8-5l-6-5.1c-2 1.6-4.6 2.6-6.8 2.6-5.2 0-9.6-3.3-11.2-7.9l-6.5 5C9.6 39.6 16.3 44 24 44z"
            />
            <path
              fill="#1976D2"
              d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.3 5.4-6.3 6.9l6 5.1C38.6 36.1 44 30.6 44 24c0-1.3-.1-2.7-.4-3.5z"
            />
          </svg>
          Continue with Google
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
