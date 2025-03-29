"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Briefcase, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { jobListings } from "@/lib/job-data"

export default function Careers() {
  const [filter, setFilter] = useState("all")

  const filteredJobs = filter === "all" ? jobListings : jobListings.filter((job) => job.department === filter)

  const departments = ["all", ...new Set(jobListings.map((job) => job.department))]

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            Join Our Team
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Career Opportunities
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're looking for passionate individuals to help us build the future of e-commerce. Explore our open
            positions below.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {departments.map((dept) => (
            <Button
              key={dept}
              variant={filter === dept ? "default" : "outline"}
              onClick={() => setFilter(dept)}
              className={`capitalize ${filter === dept ? "bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 border-none" : ""}`}
            >
              {dept}
            </Button>
          ))}
        </div>

        {/* Job Listings */}
        <div className="grid gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <Card
                key={job.id}
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="h-1 bg-gradient-to-r from-primary to-purple-600"></div>
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl">{job.title}</CardTitle>
                  <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2">
                    <span className="flex items-center">
                      <Briefcase className="mr-2 h-4 w-4 text-muted-foreground" />
                      {job.department}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                      {job.location}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{job.summary}</p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Posted {job.postedDate}</span>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 border-none"
                  >
                    <Link href={`/careers/${job.id}`}>
                      View Position <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))
          ) : (
            <div className="text-center py-12 bg-slate-50 rounded-lg">
              <p className="text-muted-foreground">No open positions in this department at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

