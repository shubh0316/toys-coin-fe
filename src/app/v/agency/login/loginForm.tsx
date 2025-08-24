"use client";

import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { AgencyLogin, getAgencyDataById } from "@/services/api";
import toast from "react-hot-toast"; // ✅ Using react-hot-toast
import Link from "next/link";

const loginSchema = z.object({
  contact_email: z.string().email("Invalid email address"),
  choose_password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

const LoginForm: FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      contact_email: "",
      choose_password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setLoading(true);
    const toastId = toast.loading("Logging in..."); // ✅ Show loading toast

    try {
      // Step 1: Attempt login
      const loginResponse = await AgencyLogin(data);
      console.log("🔍 API Login Response:", loginResponse);


      if (!loginResponse || !loginResponse.id) {
        toast.dismiss(toastId);
        toast.error("User does not exist."); // ✅ Show error toast
        return;
      }

      const id = loginResponse.id;

      // Step 2: Fetch agency details using the ID
      const agencyData = await getAgencyDataById(id);

      if (agencyData.status === "review") {
        toast.dismiss(toastId);
        router.push(`/v/agency/${id}/reviewScreen`)
        return;
      }
      
      // Step 3: Successful login & agency approved, redirect to dashboard
      toast.dismiss(toastId);
      toast.success("Login successful! Redirecting...");
      router.push(`/v/agency/${id}/account`);

    } catch (err: any) {
      toast.dismiss(toastId);
      console.error("Login failed:", err.message);
      toast.error(err.message || "Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mt-20 mx-auto border-2 border-gray-500 rounded-2xl p-6 shadow-md">
      <h2 className="text-4xl font-frank mb-4 text-center">Agency Login</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <FormField
            control={form.control}
            name="contact_email"
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

          {/* Password */}
          <FormField
            control={form.control}
            name="choose_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" className="border-2 rounded-2xl border-gray-500 p-5" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Forgot Password Link */}
          <div className="flex justify-between">
            <Link href="/v/agency/forgot-password" className="text-black-500 hover:underline">Forgot Password?</Link>
          </div>

          {/* Submit Button */}
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Logging in..." : "Login"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
