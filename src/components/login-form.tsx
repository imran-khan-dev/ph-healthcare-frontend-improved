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
    </form>
  );
};

export default LoginForm;
