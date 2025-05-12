'use client'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/cards"
import { Building } from "lucide-react"
import Image from "next/image"

export default function AboutAddamTab() {
    return (
        <div className="space-y-6">
            <Card className="bg-white/5 border-white/10">
                <CardHeader>
                    <CardTitle>
                        <a
                            href="https://quickshine.co"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:underline inline-flex items-center space-x-2"
                        >
                            <Building className="h-5 w-5 text-purple-300" />
                            <span>Addam</span>
                        </a>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-start space-x-4">
                        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex-shrink-0" />
                        <div>
                            <p className="text-gray-300">
                                Addam is an innovative technology company specializing in digital transformation solutions.
                                We help businesses leverage cutting-edge technologies to improve their operations and customer experiences.
                            </p>
                            <p className="text-gray-300 mt-4">
                                As a Senior Frontend Engineer at Addam, I contribute to building robust web applications that power
                                our clients&#39; digital transformation journeys. The company fosters innovation and provides opportunities
                                to work with modern technologies while maintaining a strong focus on user experience.
                            </p>
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium text-gray-200">Industry</h3>
                                    <p className="text-gray-400">Technology & Consulting</p>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-200">Specializations</h3>
                                    <p className="text-gray-400">Web Development, Cloud Solutions, AI</p>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-200">Company Size</h3>
                                    <p className="text-gray-400">51-200 employees</p>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-200">Tech Stack</h3>
                                    <p className="text-gray-400">React, TypeScript, Node.js, AWS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
                <CardHeader>
                    <CardTitle>
                        <a
                            href="https://quickshine.co"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:underline inline-flex items-center space-x-2"
                        >
                            <Building className="h-5 w-5 text-purple-300" />
                            <span>QuickShine</span>
                        </a>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 relative rounded-xl border-2 border-dashed bg-white flex-shrink-0 overflow-hidden">
                            <Image
                                src="https://quickshine.co/assets/logo.png"
                                alt="QuickShine Logo"
                                width={500}
                                height={500}
                                className="object-contain rounded-xl border-2 border-dashed bg-white"
                            />
                        </div>
                        <div>
                            <p className="text-gray-300">
                                As the <span className="font-semibold text-white">Founder & CEO</span> of <span className="font-semibold text-white">QuickShine</span>, I&#39;m revolutionizing the vehicle cleaning industry by offering premium doorstep car and bike wash services.
                                Based in Bangalore, QuickShine is designed for busy individuals who value convenience, quality, and time.
                            </p>
                            <p className="text-gray-300 mt-4">
                                From idea to execution, I&#39;ve led every aspect of the journey—customer experience, operations, branding, and growth.
                                Our next leap is vertical integration: building our own supply chain by manufacturing shampoos and polishing products, ensuring consistency and innovation at every step.
                            </p>
                            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-medium text-gray-200">Industry</h3>
                                    <p className="text-gray-400">Automotive Services</p>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-200">Service Model</h3>
                                    <p className="text-gray-400">On-demand, Doorstep Vehicle Cleaning</p>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-200">Location</h3>
                                    <p className="text-gray-400">Bangalore, India</p>
                                </div>
                                <div>
                                    <h3 className="font-medium text-gray-200">Future Plans</h3>
                                    <p className="text-gray-400">In-house Product Manufacturing & Multi-city Expansion</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
