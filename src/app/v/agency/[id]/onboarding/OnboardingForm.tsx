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
import { onboardingAgency, getAgencyDataById } from "@/services/api";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const onboardingSchema = z
  .object({
    organization_name: z.string().min(2, "Organization name is required"),
    contact_person_name: z.string().min(2, "Contact person name is required"),
    contact_email: z.string().email("Invalid email address"),
    contact_phone: z.string().min(10, "Invalid phone number"),
    shipping_address: z.string().min(5, "Address is required"),
    state: z.string().min(2, "State is required"),
    zip_code: z.string().min(5, "Invalid ZIP code"),
    choose_password: z.string().min(6, "Password must be at least 6 characters"),
    confirm_password: z.string().min(6, "Password must be at least 6 characters"),
  })
  .refine((data) => data.choose_password === data.confirm_password, {
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
      organization_name: "",
      contact_person_name: "",
      contact_email: "",
      contact_phone: "",
      shipping_address: "",
      state: "",
      zip_code: "",
      choose_password: "",
      confirm_password: "",
    },
  });


  useEffect(() => {
    if (id) {
      const fetchAgencyData = async () => {
        try {
          const agencyData = await getAgencyDataById(id);
          console.log(agencyData, "hellloooooo")
          if (agencyData?.agency?.contact_email) {
            const email = agencyData?.agency?.contact_email;
            setContactEmail(email);
            form.setValue("contact_email", email);
          }
        } catch (error) {
          toast.error("Failed to fetch agency data");
        }
      };

      fetchAgencyData();
    }
  }, [id, form]);

  const onSubmit = async (data: OnboardingFormValues) => {
    try {
      setLoading(true);
      await onboardingAgency({...data, id});
      toast.success("Onboarding successful!");
      router.push('/v/agency/login');
    } catch (error) {
      toast.error("Failed to onboard agency. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 rounded-2xl p-6">
      <h2 className="text-7xl mb-4 text-center font-frank">Onboarding</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField control={form.control} name="organization_name" render={({ field }) => (
            <FormItem>
              <FormLabel>Organization Name</FormLabel>
              <FormControl>
                <Input className="border-2 rounded-2xl border-gray-500 p-4" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="contact_person_name" render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Person</FormLabel>
              <FormControl>
                <Input className="border-2 rounded-2xl border-gray-500 p-4" {...field} />
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
                  className="border-2 rounded-2xl border-gray-500 p-4 bg-gray-200 cursor-not-allowed"
                  {...field}
                  disabled
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />

          <FormField control={form.control} name="choose_password" render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" className="border-2 rounded-2xl border-gray-500 p-4" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="confirm_password" render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" className="border-2 rounded-2xl border-gray-500 p-4" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="contact_phone" render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input type="tel" className="border-2 rounded-2xl border-gray-500 p-4" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
         <FormField control={form.control} name="shipping_address" render={({ field }) => (
            <FormItem>
              <FormLabel>Shipping Address</FormLabel>
              <FormControl>
                <Input className="border-2 rounded-2xl border-gray-500 p-4" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="state" render={({ field }) => (
            <FormItem>
              <FormLabel>State</FormLabel>
              <FormControl>
                <Input className="border-2 rounded-2xl border-gray-500 p-4" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <FormField control={form.control} name="zip_code" render={({ field }) => (
            <FormItem>
              <FormLabel>ZIP Code</FormLabel>
              <FormControl>
                <Input className="border-2 rounded-2xl border-gray-500 p-4" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )} />
          <div className="flex justify-end">
            <Button className="w-full mt-6" type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default OnboardingForm;
