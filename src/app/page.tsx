'use client'
import { useState } from 'react';
import { User, Briefcase, Building } from 'lucide-react'
import ProfileTab from '@/components/ProfileTab'
import ExperienceTab from '@/components/ExperienceTab'
import AboutAddamTab from '@/components/AboutCompanies'
import Image from 'next/image'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('profile')

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-slate-900 text-slate-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Glassmorphism container */}
        <div className="backdrop-blur-lg bg-white/10 rounded-2xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="p-6 md:p-8 border-b border-white/10">
            <div className="flex items-center space-x-4">
              <div className="w-20 h-20 relative rounded-full overflow-hidden border-2 border-white/20">
                <Image
                  src="https://quickshine.co/assets/founder.jpeg"
                  alt="Profile Logo"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#ECEFCA]">Sahejad Thariya</h1>
                <p className="text-lg md:text-xl text-[#EFEEEA] mt-1">Senior Frontend Engineer & Entrepreneur</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex border-b border-white/10">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-6 py-4 font-medium flex items-center space-x-2 hover:cursor-pointer ${activeTab === 'profile' ? 'text-white border-b-2 border-white' : 'text-gray-300'}`}
            >
              <User className="h-5 w-5" />
              <span>Profile</span>
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-4 font-medium flex items-center space-x-2 hover:cursor-pointer ${activeTab === 'experience' ? 'text-white border-b-2 border-white' : 'text-gray-300'}`}
            >
              <Briefcase className="h-5 w-5" />
              <span>Experience</span>
            </button>
            <button
              onClick={() => setActiveTab('addam')}
              className={`px-6 py-4 font-medium flex items-center space-x-2 hover:cursor-pointer ${activeTab === 'addam' ? 'text-white border-b-2 border-white' : 'text-gray-300'}`}
            >
              <Building className="h-5 w-5" />
              <span>About Companies</span>
            </button>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            {/* Profile Section */}
            {activeTab === 'profile' && <ProfileTab />}
            {activeTab === 'experience' && <ExperienceTab />}
            {activeTab === 'addam' && <AboutAddamTab />}

          </div>
        </div>
      </div>
    </div>
  )
}
