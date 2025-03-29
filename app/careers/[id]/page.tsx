"use client"

import { useParams, notFound, useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Briefcase, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { jobListings } from "@/lib/job-data"

export default function JobDetails() {
  const { id } = useParams()
  const router = useRouter()
  const job = jobListings.find((job) => job.id === id)

  if (!job) {
    notFound()
  }

  const handleApply = () => {
    router.push("/contact?job=apply")
  }

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/careers">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to all positions
          </Link>
        </Button>

        <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
          {job.title}
        </h1>

        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex items-center text-muted-foreground">
            <Briefcase className="mr-2 h-5 w-5" />
            {job.department}
          </div>
          <div className="flex items-center text-muted-foreground">
            <MapPin className="mr-2 h-5 w-5" />
            {job.location}
          </div>
          <div className="flex items-center text-muted-foreground">
            <Calendar className="mr-2 h-5 w-5" />
            Posted {job.postedDate}
          </div>
        </div>

        <Card className="p-6 mb-8 border-none shadow-lg overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-primary to-purple-600 -mx-6 -mt-6 mb-6"></div>
          <div className="prose max-w-none">
            <h2 className="text-xl font-semibold mb-4">About the Role</h2>
            <p>{job.description}</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">Responsibilities</h2>
            <ul>
              {job.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">Requirements</h2>
            <ul>
              {job.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">Benefits</h2>
            <ul>
              {job.benefits.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </Card>

        <div className="text-center bg-gradient-to-r from-slate-50 to-slate-100 p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Apply for this Position
          </h2>
          <p className="text-muted-foreground mb-6">
            If you're passionate about e-commerce and looking for your next challenge, we'd love to hear from you.
          </p>
          <Button
            onClick={handleApply}
            size="lg"
            className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white border-none"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </div>
  )
}

