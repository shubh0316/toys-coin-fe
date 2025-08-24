// @ts-nocheck
"use client";

import { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { getAgencyDataById, reviewAgency, pauseActiveStatus, onboardingAgency } from "@/services/api";
import { useParams } from "next/navigation";
import { toast } from "react-hot-toast";

// ✅ Validation Schema
const accountSchema = z.object({
  organization_name: z.string().min(2, "Organization name is required"),
  contact_person_name: z.string().min(2, "Contact person name is required"),
  contact_email: z.string().email("Invalid email address"),
  contact_phone: z.string().min(10, "Invalid phone number"),
  shipping_address: z.string().min(5, "Address is required"),
  state: z.string().min(2, "State is required"),
  zip_code: z.string().min(5, "Invalid ZIP code"),
  amazon_private: z.string().min(2, "Amazon Private Link is required"),
  amazon_public: z.string().min(2, "Amazon Public Link is required"),
});

type AccountFormValue = z.infer<typeof accountSchema>;

const AccountForm: FC = () => {
  const { id } = useParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [agency, setAgency] = useState<any>(null);

  const form = useForm<AccountFormValue>({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      organization_name: "",
      contact_person_name: "",
      contact_email: "",
      contact_phone: "",
      shipping_address: "",
      state: "",
      zip_code: "",
      amazon_private: "",
      amazon_public: "",
    },
  });

  // ✅ Fetch Agency Data
  useEffect(() => {
    if (id) {
      const fetchAgencyData = async () => {
        try {
          const response = await getAgencyDataById(id);
          if (response?.agency) {
            setAgency(response.agency);
            setIsActive(response.agency.status === "active");
            form.reset(response.agency);
          }
        } catch (error) {
          toast.error("Failed to fetch agency data");
        }
      };

      fetchAgencyData();
    }
  }, [id, form]);

  // ✅ Toggle Status (Active/Pause)
  const handleToggle = async () => {
    try {
      if (!id) return;
      const updatedStatus = await pauseActiveStatus(id);
      setIsActive(updatedStatus === "active");
      toast.success(`Agency is now ${updatedStatus}`);
    } catch (error) {
      toast.error("Failed to update agency status");
    }
  };

  // ✅ Submit Form (Always Hits Onboarding API)
  const onSubmit = async (data: AccountFormValue) => {
    try {
      if (!data.amazon_public || !data.amazon_private) {
        toast.error("Amazon Public and Private Links are required.");
        return;
      }

      setIsSubmitting(true);

      const formData = {
        agencyId: id,
        ...data, // Sending all form data
      };

      // ✅ Always hit onboardingAgency API
      await onboardingAgency({...formData, id});
      toast.success("Agency onboarded successfully!");

      // ✅ If status is "review", also hit reviewAgency API
      if (agency?.status === "review") {
        await reviewAgency(id, formData);
        toast.success("Review status updated successfully!");
      }

    } catch (error) {
      toast.error("Failed to submit form");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 rounded-2xl p-6">
      <h2 className="text-6xl mb-4 text-center font-frank">Edit Account</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          
          {/* ✅ Organization Name */}
          <FormField control={form.control} name="organization_name" render={({ field }) => (
            <FormItem>
              <FormLabel>Organization Name</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          {/* ✅ Contact Person */}
          <FormField control={form.control} name="contact_person_name" render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Person</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          {/* ✅ Contact Email */}
          <FormField control={form.control} name="contact_email" render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl><Input type="email" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          {/* ✅ Contact Phone */}
          <FormField control={form.control} name="contact_phone" render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl><Input type="tel" {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          {/* ✅ Shipping Address */}
          <FormField control={form.control} name="shipping_address" render={({ field }) => (
            <FormItem>
              <FormLabel>Shipping Address</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          {/* ✅ State */}
          <FormField control={form.control} name="state" render={({ field }) => (
            <FormItem>
              <FormLabel>State</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          {/* ✅ Zip Code */}
          <FormField control={form.control} name="zip_code" render={({ field }) => (
            <FormItem>
              <FormLabel>ZIP Code</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          {/* ✅ Amazon Private Link */}
          <FormField control={form.control} name="amazon_private" render={({ field }) => (
            <FormItem>
              <FormLabel>Amazon Private Link</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          {/* ✅ Amazon Public Link */}
          <FormField control={form.control} name="amazon_public" render={({ field }) => (
            <FormItem>
              <FormLabel>Amazon Public Link</FormLabel>
              <FormControl><Input {...field} /></FormControl>
              <FormMessage />
            </FormItem>
          )} />

          {/* ✅ Toggle Button for Agency Status */}
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold">Agency Status:</span>
            <Switch checked={isActive} onCheckedChange={handleToggle} />
            <span>{isActive ? "Active" : "Paused"}</span>
          </div>

          {/* ✅ Submit Button */}
          <Button className="w-full mt-6" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>

        </form>
      </Form>
    </div>
  );
};

export default AccountForm;
