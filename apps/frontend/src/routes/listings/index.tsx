'use client'
import { Navbar } from '#/components/navbar'
import { createFileRoute } from '@tanstack/react-router'
import jars from '../../../public/images/jars.jpg'

import { useState } from 'react'
import { ListingFormModal } from '#/components/ListingForm/ListingForm.tsx'

export const Route = createFileRoute('/listings/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="relative w-full min-h-screen flex flex-col bg-container">
      {/* Header */}

      <header className="w-full z-index-20">
        <Navbar />
      </header>

      <main className="flex-1 flex flex-col items-center space-y-16 mb-20">
        {/* Page Title Section */}

        <section className="w-full">
          <div className="relative h-[360px] shadow-xl overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#606c38] via-[#dda15e] to-[#bc6c25] opacity-90"></div>
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative z-10 h-full flex flex-col mt-10 justify-center items-center text-white text-center px-6">
              <h1 className="text-4xl font-bold">Community Treasures ♻️</h1>
              <p className="mt-4 max-w-2xl text-white/90">
                Browse items shared by your neighbors and give them a second
                life.
              </p>
            </div>
          </div>
        </section>

        {/* Filter / Search Bar */}
        <section className="bg-white rounded-2xl shadow-xl p-12 w-5/6">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* ================= FILTER SIDEBAR ================= */}
            <aside className="lg:w-1/4 bg-[#fefae0] rounded-2xl p-6 shadow-md space-y-6">
              <h3 className="text-xl font-semibold text-[#6c3b27]">
                Filters 🌱
              </h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Category
                  </label>
                  <select className="w-full px-4 py-2 rounded-xl border border-[#dda15e]">
                    <option>All Categories</option>
                    <option>Glass</option>
                    <option>Plastic</option>
                    <option>Paper</option>
                    <option>Art Supplies</option>
                    <option>Fabric</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Distance
                  </label>
                  <select className="w-full px-4 py-2 rounded-xl border border-[#dda15e]">
                    <option>Any Distance</option>
                    <option>Within 1 mile</option>
                    <option>Within 5 miles</option>
                    <option>Within 10 miles</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Availability
                  </label>
                  <select className="w-full px-4 py-2 rounded-xl border border-[#dda15e]">
                    <option>All</option>
                    <option>Available</option>
                    <option>Pending</option>
                  </select>
                </div>

                <button className="w-full bg-[#6c3b27] text-white py-2 rounded-xl shadow-md hover:scale-105 transition">
                  Apply Filters
                </button>
              </div>
            </aside>

            {/* ================= MAIN CONTENT ================= */}
            <div className="lg:w-3/4 flex flex-col space-y-10">
              {/* Centered Search Bar */}
              <div className="flex justify-center">
                <input
                  type="text"
                  placeholder="Search for anything..."
                  className="w-full md:w-2/3 px-6 py-4 rounded-2xl border border-[#dda15e] focus:outline-none focus:ring-2 focus:ring-[#bc6c25] shadow-md"
                />
                <button className="ml-4 bg-[#6c3b27] text-white px-6 py-4 rounded-2xl shadow-md hover:scale-105 transition">
                  Search
                </button>
                <button
                  className="ml-4 bg-[#606c38] text-white px-6 py-4 rounded-2xl shadow-md hover:scale-105 transition"
                  onClick={() => setIsModalOpen(true)}
                >
                  Create Listing
                </button>
              </div>
              <ListingFormModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
              />

              {/* Listings Grid */}
              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Listing Card */}
                <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={jars}
                      alt="Glass Jars"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 flex gap-2">
                      <div className="bg-[#6c3b27] text-white text-xs px-3 py-1 rounded-full">
                        Glass
                      </div>

                      <div className="bg-[#6c3b27] text-white text-xs px-3 py-1 rounded-full">
                        Available
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h2 className="text-xl font-semibold text-[#6c3b27]">
                      10 Empty Pasta Sauce Jars
                    </h2>

                    <p className="text-sm text-gray-600">
                      Perfect for storage or craft projects. Cleaned and ready
                      for pickup.
                    </p>

                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>2 miles away</span>
                      <span>Posted 1 day ago</span>
                    </div>

                    <button className="w-full bg-[#dda15e] text-white py-2 rounded-lg hover:bg-[#bc6c25] transition">
                      Details
                    </button>
                  </div>
                </div>

                {/* Duplicate cards as needed */}
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
