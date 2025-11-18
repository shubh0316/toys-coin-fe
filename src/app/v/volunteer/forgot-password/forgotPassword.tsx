"use client";

import React, { useState } from "react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { forgotPassword } from "@/services/api"; 
import { toast } from "react-hot-toast";
import Link from "next/link";

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }), // ✅ Updated key to 'email'
});

type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>;

const ForgotPassword: FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: { email: "" },
  });

  const onSubmit = async (data: ForgotPasswordValues) => {
    setLoading(true);
    const toastId = toast.loading("Sending reset email...");

    try {
      await forgotPassword(data.email); // ✅ Pass only email string
      toast.dismiss(toastId);
      toast.success("Password reset link sent! Check your email.");
      setTimeout(() => router.push("/v/volunteer/Login"), 2000); // ✅ Redirect after success
    } catch (error: any) {
      toast.dismiss(toastId);
      toast.error(error?.message || "Failed to send reset link. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mt-20 mx-auto border-2 border-gray-500 rounded-2xl p-6 shadow-md">
      <h2 className="text-4xl font-frank mb-4 text-center">Forgot Password</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Input */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" className="border-2 rounded-2xl border-gray-500 p-5" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" disabled={loading} className="w-full rounded-2xl">
            {loading ? "Sending..." : "Send Reset Link"}
          </Button>
          
          {/* Back to Login Link */}
          <div className="text-center mt-4">
            <Link href="/v/volunteer/Login" className="text-sm text-gray-600 hover:underline">
              Back to Login
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ForgotPassword;
