"use server"

import { revalidatePath } from "next/cache"

type JobApplicationData = {
  firstName: string
  lastName: string
  email: string
  phone: string
  position: string
  resumeFile?: string
  coverLetter?: string
}

export async function submitJobApplication(data: JobApplicationData) {
  try {
    // In a real implementation, you would send an email here
    // For demonstration purposes, we're simulating a successful submission

    console.log("Job application received:", data)
    console.log("Would send email to: info@ecommersion.com")

    // Simulate a delay to make the submission feel more realistic
    await new Promise((resolve) => setTimeout(resolve, 1000))

    revalidatePath("/careers")
    return { success: true, message: "Your application has been submitted successfully!" }
  } catch (error) {
    console.error("Error submitting job application:", error)
    return { success: false, message: "There was an error submitting your application. Please try again." }
  }
}

