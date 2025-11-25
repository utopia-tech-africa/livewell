"use client";

import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(6, "Enter a valid phone number"),
  role: z.string().min(1, "Please select a volunteer role"),
});

export const VolunteerForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      role: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        throw new Error("Failed to submit volunteer form");
      }

      await res.json();
      setSubmitMessage({
        type: "success",
        text: "Form submitted successfully! Check your email for confirmation.",
      });
      form.reset();
    } catch (error) {
      setSubmitMessage({
        type: "error",
        text:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col justify-center h-full overflow-hidden">
      <h2 className="leading-[39px] text-center md:text-start font-bold text-3xl font-satoshi text-primary-700 mb-2">
        Together, we make change possible.
      </h2>

      <p className="text-neutral-900 mb-8 text-base font-semibold sm:text-base leading-6">
        By volunteering your voice, time, or resources, you can drive meaningful
        change. Together, we can strengthen our communities, share inspiring
        stories, and create awareness.
      </p>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm leading-3.5 font-medium text-neutral-1000 font-general">
            Full name <span className="text-red-500">*</span>
          </label>
          <Input
            placeholder="John Doe"
            {...form.register("name")}
            disabled={isSubmitting}
            className="rounded-full p-6 mt-2 placeholder:text-sm placeholder:leading-3.5 placeholder:font-medium placeholder:text-neutral-500 font-general"
          />
          {form.formState.errors.name && (
            <p className="text-sm text-red-500 mt-1">
              {String(form.formState.errors.name.message)}
            </p>
          )}
        </div>

        {/* Role Dropdown */}
        <div>
          <label className="block text-sm font-medium text-neutral-1000 font-general">
            Volunteer Role <span className="text-red-500">*</span>
          </label>

          <Controller
            name="role"
            control={form.control}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                disabled={isSubmitting}
              >
                <SelectTrigger className="rounded-full w-full p-6 mt-2 font-general disabled:opacity-50">
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Medical">Medical</SelectItem>
                  <SelectItem value="Fitness">Fitness</SelectItem>
                  <SelectItem value="Nutrition">Nutrition</SelectItem>
                  <SelectItem value="Marketplace">Marketplace</SelectItem>
                  <SelectItem value="Registration">Registration</SelectItem>
                  <SelectItem value="Crowd Management">
                    Crowd Management
                  </SelectItem>
                  <SelectItem value="Hospitality">Hospitality</SelectItem>
                  <SelectItem value="Children & Family">
                    Children & Family
                  </SelectItem>
                  <SelectItem value="Media">Media</SelectItem>
                </SelectContent>
              </Select>
            )}
          />

          {form.formState.errors.role && (
            <p className="text-sm text-red-500 mt-1">
              {String(form.formState.errors.role.message)}
            </p>
          )}
        </div>

        {/* Email + Phone */}
        <div className="flex flex-col md:flex-row justify-between gap-2 items-center">
          <div className="w-full">
            <label className="block text-sm leading-3.5 font-medium text-neutral-1000 font-general">
              Email <span className="text-red-500">*</span>
            </label>
            <Input
              type="email"
              placeholder="example@email.com"
              {...form.register("email")}
              disabled={isSubmitting}
              className="rounded-full p-6 mt-2 placeholder:text-sm placeholder:leading-3.5 placeholder:font-medium placeholder:text-neutral-500 font-general"
            />
            {form.formState.errors.email && (
              <p className="text-sm text-red-500 mt-1">
                {String(form.formState.errors.email.message)}
              </p>
            )}
          </div>

          <div className="w-full">
            <label className="block text-sm leading-3.5 font-medium text-neutral-1000 font-general">
              Phone <span className="text-red-500">*</span>
            </label>
            <div className="rounded-full border border-input bg-background p-4 mt-2">
              <Controller
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <PhoneInput
                    international
                    defaultCountry="GH"
                    value={field.value}
                    onChange={field.onChange}
                    disabled={isSubmitting}
                    className="phone-input w-full border-none outline-none bg-transparent rounded-full placeholder:text-sm placeholder:font-medium placeholder:text-neutral-500 font-general"
                  />
                )}
              />
            </div>
            {form.formState.errors.phone && (
              <p className="text-sm text-red-500 mt-1">
                {String(form.formState.errors.phone.message)}
              </p>
            )}
          </div>
        </div>

        {submitMessage && (
          <div
            className={`p-4 rounded-full text-sm font-medium ${
              submitMessage.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {submitMessage.text}
          </div>
        )}

        {/* Submit */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full shadow-none hover:shadow-none border border-neutral-500 text-primary-600 bg-neutral-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </div>
  );
};
