"use client"
import { FC } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginForm: FC = () => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log("Login Data:", data);
    // Handle login logic here
  };

  return (
    <div className="max-w-md mt-20 mx-auto border-2 border-gray-500 rounded-2xl shadow-md px-4 py-10 sm:p-8 bg-white">
      <h2 className="text-4xl mb-6 text-center">Partner Login</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" className="border-2 rounded-2xl border-gray-500 p-5"  {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" className="border-2 rounded-2xl border-gray-500 p-5"  {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Forgot Password Link */}
          <div className="flex justify-between text-sm">
            <Link href="/v/(auth)/forgot-password" className="text-black hover:underline">Forgot Password?</Link>
          </div>

          {/* Submit Button */}
          <Button className="w-full rounded-2xl px-8 py-4 text-base" type="submit">Login</Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
