
// components/profile/ExperienceTab.tsx
'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/cards"
import { Calendar } from 'lucide-react'

export default function ExperienceTab() {
  return (
    <div className="space-y-6">
      <Card className="bg-white/5 border-white/10">
        <CardHeader>
          <CardTitle>Professional Experience</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* QuickShine Experience */}
          <div>
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center">
                  {/* <Rocket className="h-5 w-5 text-purple-300 mr-2" /> */}
                  <h3 className="text-xl font-semibold text-[#EFEEEA]">Founder & CEO</h3>
                </div>
                <p className="text-gray-300">QuickShine</p>
              </div>
              <div className="text-sm text-gray-400">
                <Calendar className="inline h-4 w-4 mr-1" />
                <span>Feb 2025 - Present</span>
              </div>
            </div>
            <p className="mt-2 text-gray-300">
              Founder & CEO of QuickShine, a premium doorstep bike & car cleaning service in Bangalore.
            </p>
            <ul className="mt-4 space-y-3 list-disc list-inside text-gray-300">
              <li><span className="font-medium">Business Development:</span> Expanding customer reach, scaling operations & driving revenue growth</li>
              <li><span className="font-medium">Sales & Marketing:</span> Creating brand awareness through strategic marketing, referrals & direct sales</li>
              <li><span className="font-medium">Operations Management:</span> Ensuring top-quality service, hiring & training staff, and streamlining processes</li>
              <li><span className="font-medium">Customer Relations:</span> Building trust, handling feedback, and maintaining high client satisfaction</li>
              <li><span className="font-medium">Innovation & Expansion:</span> Developing future plans to grow QuickShine into a multi-city brand</li>
            </ul>
          </div>

          {/* Addam */}
          <div className="pt-6 border-t border-white/10">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-[#EFEEEA]">Founder & CEO</h3>
                <p className="text-gray-300">Addam</p>
              </div>
              <div className="text-sm text-gray-400">
                <Calendar className="inline h-4 w-4 mr-1" />
                <span>June 2023 - Present</span>
              </div>
            </div>
            <ul className="mt-4 space-y-2 list-disc list-inside text-gray-300">
              <li>Leading frontend architecture and development for core products</li>
              <li>Implementing design systems and component libraries</li>
              <li>Optimizing application performance and accessibility</li>
              <li>Mentoring junior developers and conducting code reviews</li>
            </ul>
          </div>

          {/* Previous */}
          <div className="pt-6 border-t border-white/10">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-[#EFEEEA]">Frontend Developer</h3>
                <p className="text-gray-300">Previous Company</p>
              </div>
              <div className="text-sm text-gray-400">
                <Calendar className="inline h-4 w-4 mr-1" />
                <span>Jan 2020 - May 2023</span>
              </div>
            </div>
            <ul className="mt-4 space-y-2 list-disc list-inside text-gray-300">
              <li>Developed responsive web applications using React and TypeScript</li>
              <li>Collaborated with designers to implement UI/UX best practices</li>
              <li>Integrated with RESTful APIs and third-party services</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
