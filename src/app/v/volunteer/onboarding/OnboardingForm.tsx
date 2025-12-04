//@ts-nocheck
"use client";

import { FC, useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { volunteerRegister, getVolunteerDataById } from "@/services/api";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const onboardingSchema = z
  .object({
    contact_person_name: z.string().min(2, "Contact person name is required"),
    contact_email: z.string().email("Invalid email address"),
    contact_phone: z.string().min(10, "Invalid phone number"),
    zip_code: z.string().min(5, "Zip code must be at least 5 characters"),
    choose_password: z.string().min(6, "Password must be at least 6 characters"),
    repeat_password: z.string().min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.choose_password === data.repeat_password, {
    message: "Passwords must match",
    path: ["repeat_password"],
  });

type OnboardingFormValues = z.infer<typeof onboardingSchema>;

const OnboardingForm: FC = () => {
  const { id } = useParams(); // Get ID from URL params
  const [loading, setLoading] = useState(false);
  const [contactEmail, setContactEmail] = useState("");
  const router = useRouter();
  const form = useForm<OnboardingFormValues>({
    resolver: zodResolver(onboardingSchema),
    defaultValues: {
      contact_person_name: "",
      contact_email: "",
      contact_phone: "",
      zip_code: "",
      choose_password: "",
      repeat_password: "",
    },
  });


  const onSubmit = async (data: OnboardingFormValues) => {
    try {
      setLoading(true);
      const response = await volunteerRegister(data);
      toast.success(response?.message || "Volunteer registered successfully!");
      router.push('/v/volunteer/Login');
    } catch (error: any) {
      // Display specific error message from backend
      const errorMessage = error?.message || "Failed to register volunteer. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-4 sm:mt-6 md:mt-8 lg:mt-10 rounded-2xl p-4 sm:p-5 md:p-6 px-4 sm:px-6">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-3 sm:mb-4 text-start font-frank leading-tight">Volunteer Onboarding</h2>
      <p className="text-sm sm:text-base md:text-lg font-inter tracking-wider mb-4 sm:mb-6 leading-relaxed">Volunteers can help in many ways, from wrapping presents to helping organize events. Please fill out the form and if your help is needed, you will be contacted directly by one of our agency partners or Foster Toys.</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 sm:space-y-4">
    
          <FormField control={form.control} name="contact_person_name" render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Person</FormLabel>
              <FormControl>
                <Input className="rounded-xl border-0" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="contact_email" render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  className="rounded-xl border-0"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="choose_password" render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" className="rounded-xl border-0" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="repeat_password" render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" className="rounded-xl border-0" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="contact_phone" render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input type="tel" className="rounded-xl border-0" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="zip_code" render={({ field }) => (
            <FormItem>
              <FormLabel>Enter your zip code (we will match you with events within 50 miles)</FormLabel>
              <FormControl>
                <Input className="rounded-xl border-0" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <div className="flex justify-end">
            <Button className="w-full mt-4 sm:mt-6 rounded-xl text-sm sm:text-base py-4 sm:py-5" type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default OnboardingForm;
