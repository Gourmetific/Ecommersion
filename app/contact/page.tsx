"use client";

import type React from "react";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { jobListings } from "@/lib/job-data";
import { submitJobApplication } from "@/app/actions";

export default function Contact() {
  const searchParams = useSearchParams();
  const isJobApplication = searchParams.get("job") === "apply";
  const { toast } = useToast();

  const [formType, setFormType] = useState(
    isJobApplication ? "job" : "general"
  );
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleGeneralSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We've received your message and will get back to you soon.",
    });

    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
    setIsSubmitting(false);
  };

  const handleJobSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      firstName: formData.get("first-name") as string,
      lastName: formData.get("last-name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      position: formData.get("position") as string,
      coverLetter: formData.get("cover-letter") as string,
      resumeFile: "Resume file would be uploaded in a real implementation",
    };

    const result = await submitJobApplication(data);

    if (result.success) {
      toast({
        title: "Application Submitted!",
        description:
          "Your application has been sent to our team. We'll be in touch soon!",
      });
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    } else {
      toast({
        title: "Submission Error",
        description: result.message,
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a question or want to work with us? We'd love to hear from
              you.
            </p>
          </div>

          {/* Centered Email Card */}
          <div className="flex justify-center mb-16">
            <Card className="overflow-hidden border-none shadow-lg max-w-md w-full">
              <div className="h-2 bg-gradient-to-r from-primary to-purple-600"></div>
              <CardContent className="flex flex-col items-center text-center p-6 pt-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground">info@ecommersion.com</p>
              </CardContent>
            </Card>
          </div>

          <div className="w-full">
            <div className="w-full">
              <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                Contact Form
              </h2>

              <RadioGroup
                defaultValue={formType}
                onValueChange={setFormType}
                className="flex space-x-4 mb-8"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="general" id="general" />
                  <Label htmlFor="general">General Inquiry</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="job" id="job" />
                  <Label htmlFor="job">Job Application</Label>
                </div>
              </RadioGroup>

              {formType === "general" ? (
                <GeneralContactForm
                  onSubmit={handleGeneralSubmit}
                  isSubmitting={isSubmitting}
                />
              ) : (
                <JobApplicationForm
                  onSubmit={handleJobSubmit}
                  isSubmitting={isSubmitting}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GeneralContactForm({
  onSubmit,
  isSubmitting,
}: {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  isSubmitting: boolean;
}) {
  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="first-name">First Name</Label>
          <Input id="first-name" name="first-name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">Last Name</Label>
          <Input id="last-name" name="last-name" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input id="subject" name="subject" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={5} required />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

function JobApplicationForm({
  onSubmit,
  isSubmitting,
}: {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  isSubmitting: boolean;
}) {
  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="first-name">First Name</Label>
          <Input id="first-name" name="first-name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">Last Name</Label>
          <Input id="last-name" name="last-name" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" type="tel" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="position">Position</Label>
        <Select name="position" defaultValue={jobListings[0].id}>
          <SelectTrigger id="position">
            <SelectValue placeholder="Select a position" />
          </SelectTrigger>
          <SelectContent>
            {jobListings.map((job) => (
              <SelectItem key={job.id} value={job.id}>
                {job.title}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="resume">Resume/CV</Label>
        <Input
          id="resume"
          name="resume"
          type="file"
          className="cursor-pointer"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="cover-letter">Cover Letter</Label>
        <Textarea
          id="cover-letter"
          name="cover-letter"
          rows={5}
          placeholder="Tell us why you're interested in this position"
        />
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
}
