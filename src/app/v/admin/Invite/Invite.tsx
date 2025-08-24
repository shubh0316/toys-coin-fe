"use client";
import { FC } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { InviteAgency } from "@/services/api"; // Import Invite API function
import { useState } from "react";
import { toast } from "react-hot-toast";

const inviteAgencySchema = z.object({
  contact_email: z.string().email({ message: "Invalid email address" }).nonempty({ message: "Email is required" }),
});

type InviteAgencyValue = z.infer<typeof inviteAgencySchema>;

const InviteForm: FC = () => {
  const [loading, setLoading] = useState(false);
  const form = useForm<InviteAgencyValue>({
    resolver: zodResolver(inviteAgencySchema),
    defaultValues: { contact_email: "" },
  });

  const onSubmit = async (data: InviteAgencyValue) => {
    try {
      setLoading(true);
      console.log("Sending Invite Data:", data);

      toast.success("Invitation sent successfully!");

      form.reset(); // Reset form after successful submission
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to send invitation");
      console.error("Error inviting agency:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mt-10 mx-auto rounded-2xl p-6">
      <h2 className="text-6xl mb-4 text-center font-frank">NEW ACCOUNT</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-10">
          <FormField
            control={form.control}
            name="contact_email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Invite Agency</FormLabel>
                <FormControl>
                  <Input type="email" className="border-2 rounded-2xl border-gray-500 p-5" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Buttons */}
          <div className="flex mt-8 justify-end">
            <Button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default InviteForm;
