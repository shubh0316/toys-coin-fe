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
    shipping_address: z.string().min(5, "Address is required"),
    choose_password: z.string().min(6, "Password must be at least 6 characters"),
    repeat_password: z.string().min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.choose_password === data.repeat_password, {
    message: "Passwords must match",
    path: ["confirm_password"],
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
      shipping_address: "",
      choose_password: "",
      repeat_password: "",
    },
  });


  const onSubmit = async (data: OnboardingFormValues) => {
    try {
      setLoading(true);
      await volunteerRegister(data);
      toast.success("Onboarding successful!");
      router.push('/v/volunteer/Login');
    } catch (error) {
      toast.error("Failed to onboard volunteer. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 rounded-2xl p-6">
      <h2 className="text-7xl mb-4 text-start font-frank">Volunteer Onboarding</h2>
      <p className="font-inter tracking-wider mb-4">Volunteers can help in many ways, from wrap presents for holidays to helping to organize events. Please fill out the form and if your help is needed, you will be contacted directly by the agency partner or Foster Toys.</p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
    
          <FormField control={form.control} name="contact_person_name" render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Person</FormLabel>
              <FormControl>
                <Input className="border-2 bg-white  border-white p-4" {...field} />
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
                  className="border-2 bg-white  border-white p-4"
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
                <Input type="password" className="border-2 bg-white border-white p-4" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="confirm_password" render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" className="border-2 bg-white  border-white p-4" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="contact_phone" render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input type="tel" className="border-2 bg-white border-white p-4" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="zip_code" render={({ field }) => (
            <FormItem>
              <FormLabel>Enter your zip code (we will match you with events within 50 miles)</FormLabel>
              <FormControl>
                <Input className="border-2  bg-white border-white p-4" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <div className="flex justify-end rounded-xl">
            <Button className="mt-6" type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default OnboardingForm;
