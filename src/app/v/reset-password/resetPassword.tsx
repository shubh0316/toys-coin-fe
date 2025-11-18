"use client";

import React, { useState, useEffect } from "react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { resetPassword } from "@/services/api";
import { toast } from "react-hot-toast";
import Link from "next/link";

const resetPasswordSchema = z.object({
  newPassword: z.string().min(6, { message: "Password must be at least 6 characters" }),
  confirmPassword: z.string().min(6, { message: "Password must be at least 6 characters" }),
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

type ResetPasswordValues = z.infer<typeof resetPasswordSchema>;

const ResetPassword: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState<string | null>(null);
  const [tokenError, setTokenError] = useState<string | null>(null);

  useEffect(() => {
    const tokenParam = searchParams.get("token");
    if (!tokenParam) {
      setTokenError("Invalid or missing reset token. Please request a new password reset link.");
    } else {
      setToken(tokenParam);
    }
  }, [searchParams]);

  const form = useForm<ResetPasswordValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: ResetPasswordValues) => {
    if (!token) {
      toast.error("Invalid reset token. Please request a new password reset link.");
      return;
    }

    setLoading(true);
    const toastId = toast.loading("Resetting password...");

    try {
      await resetPassword({
        token,
        newPassword: data.newPassword,
        confirmPassword: data.confirmPassword,
      });
      
      toast.dismiss(toastId);
      toast.success("Password reset successful! Redirecting to login...");
      
      setTimeout(() => {
        router.push("/v/(auth)/Login");
      }, 2000);
    } catch (error: any) {
      toast.dismiss(toastId);
      toast.error(error?.message || "Failed to reset password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (tokenError) {
    return (
      <div className="max-w-md mt-20 mx-auto border-2 border-red-500 rounded-2xl p-6 shadow-md">
        <h2 className="text-4xl font-frank mb-4 text-center text-red-600">Invalid Token</h2>
        <p className="text-center mb-4">{tokenError}</p>
        <Button 
          onClick={() => router.push("/v/(auth)/forgot-password")} 
          className="w-full rounded-2xl"
        >
          Request New Reset Link
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-md mt-20 mx-auto border-2 border-gray-500 rounded-2xl p-6 shadow-md">
      <h2 className="text-4xl font-frank mb-4 text-center">Reset Password</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* New Password Input */}
          <FormField
            control={form.control}
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New Password</FormLabel>
                <FormControl>
                  <Input 
                    type="password" 
                    className="border-2 rounded-2xl border-gray-500 p-5" 
                    placeholder="Enter new password"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Confirm Password Input */}
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input 
                    type="password" 
                    className="border-2 rounded-2xl border-gray-500 p-5" 
                    placeholder="Confirm new password"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" disabled={loading || !token} className="w-full rounded-2xl">
            {loading ? "Resetting..." : "Reset Password"}
          </Button>
          
          {/* Back to Login Link */}
          <div className="text-center mt-4">
            <Link href="/v/(auth)/Login" className="text-sm text-gray-600 hover:underline">
              Back to Login
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ResetPassword;

