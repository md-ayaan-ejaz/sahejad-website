'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/cards"
import { Calendar, Briefcase } from 'lucide-react'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { FaX } from "react-icons/fa6"

export default function ProfileTab() {
    return (
        <div className="space-y-6">
            {/* About Me Card */}
            <Card className="bg-white/5 border-white/10">
                <CardHeader className="flex flex-row items-center space-x-4">
                    <div>
                        <CardTitle>About Me</CardTitle>
                        <div className="flex items-center text-sm text-gray-300 mt-1">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>Joined June 2023</span>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-300">
                        Founder of QuickShine & Addam I&#39;m an entrepreneur
                        driven by the vision of building businesses that provide
                        real value to people&#39;s lives. From brainstorming ideas to executing them in the
                        real world, my journey has been all about learning, adapting, and growing. With QuickShine,
                        I&#39;m revolutionizing vehicle cleaning by offering convenient doorstep services in Bangalore,
                        making car and bike maintenance effortless for busy individuals. As we scale, my goal is
                        to establish our own supply chain by manufacturing shampoos and polishing materials.
                        Beyond QuickShine, I&#39;m also working on Addam, a tech-driven company focused on software,
                        website development, and innovative digital solutions. I believe in taking action,
                        learning from every challenge, and continuously pushing forward. Let&#39;s connect and
                        create something impactful together!
                    </p>

                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-medium text-gray-200">Location</h3>
                            <p className="text-gray-400">Bangalore, India</p>
                        </div>
                        <div>
                            <h3 className="font-medium text-gray-200">Focus Areas</h3>
                            <p className="text-gray-400">
                                Vision & Strategy, Team Building & Leadership, Sales & Marketing,
                                Product & Customer Experience
                            </p>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="mt-6">
                        <h3 className="font-medium text-gray-200 mb-2">Connect with Me</h3>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/in/sahejadthariya?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                <FaLinkedin className="h-6 w-6" />
                            </a>
                            <a href="https://www.instagram.com/shahezadaaaaaa?igsh=b203dnhjYXFmcWxy" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                <FaInstagram className="h-6 w-6" />
                            </a>
                            <a href="https://x.com/sahejad_?t=InlUtpWeb4ehqOEp07LRsA&s=09" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                                <FaX className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Professional Experience Summary Card */}
            <Card className="bg-white/5 border-white/10">
                <CardHeader className="flex items-center space-x-3">
                    <Briefcase className="text-white w-5 h-5" />
                    <CardTitle>Professional Experience Summary</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-300 space-y-4">
                    <div>
                        <h4 className="font-semibold text-white">Founder & CEO — QuickShine</h4>
                        <p className="text-sm text-gray-400">Feb 2025 – Present</p>
                        <ul className="list-disc list-inside mt-1 text-sm">
                            <li>Expanded customer base and scaled revenue</li>
                            <li>Built brand awareness through marketing and referrals</li>
                            <li>Managed operations, hiring, and service quality</li>
                            <li>Maintained strong customer relationships</li>
                            <li>Planning product manufacturing and multi-city expansion</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white">Founder & CEO — Addam</h4>
                        <p className="text-sm text-gray-400">June 2023 – Present</p>
                        <ul className="list-disc list-inside mt-1 text-sm">
                            <li>Architected frontend systems and design libraries</li>
                            <li>Optimized performance and accessibility</li>
                            <li>Mentored junior engineers and led code reviews</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold text-white">Frontend Developer — Previous Company</h4>
                        <p className="text-sm text-gray-400">Jan 2020 – May 2023</p>
                        <ul className="list-disc list-inside mt-1 text-sm">
                            <li>Built responsive apps using React & TypeScript</li>
                            <li>Collaborated with designers for UI/UX</li>
                            <li>Integrated APIs and third-party services</li>
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
