'use client'
import { Navbar } from '#/components/navbar'
import { createFileRoute } from '@tanstack/react-router'

import '../listing.css'

import { useState } from 'react'
import { ListingFormModal } from '#/components/ListingForm/ListingForm.tsx'
import { ListingCard } from '#/components/ListingCard/ListingCard'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import type { PostingOut } from '@repo/db-types'
import { fetcher } from '#/utils/fetcher'

export const Route = createFileRoute('/_protected-routes/listings/')({
  component: RouteComponent,
})

const CATEGORIES = ['Glass', 'Plastic', 'Fabric', 'Wood', 'Metal', 'Other']

function RouteComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [category, setCategory] = useState(CATEGORIES[0])
  const [zipcode, setZipcode] = useState('19711')
  const [radius, setRadius] = useState(10)
  const [available, setAvailable] = useState('All')
  const qc = useQueryClient()

  const { data, isLoading } = useQuery<PostingOut[]>({
    queryKey: ['postings'],
    queryFn: () =>
      fetcher<PostingOut[]>({
        endpoint: `/posting?zipcode=${zipcode}`,
      }),
    refetchOnWindowFocus: false,
  })
  const postings =
    data?.filter(
      (p) =>
        p.distance <= radius &&
        p.category === category &&
        (available === 'All' || p.status === available),
    ) ?? []

  if (isLoading) return <div>Loading...</div>

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

            <div className="relative z-10 h-full flex flex-col justify-between items-center text-white text-center px-6 py-8">
              <h1 className="text-4xl mt-30 font-bold">
                Community Treasures ♻️
              </h1>
              <p className=" max-w-2xl text-white/90 text-xl">
                Browse items shared by your neighbors and give them a second
                life. Or put up your own treasures for others to find!
              </p>

              <p className=" max-w-2xl text-white/90 text-sm">
                Some great examples: Plastic and paper bags, egg cartons,
                cardboard, empty spray bottles, etc.
              </p>
            </div>
          </div>
        </section>

        {/* Filter / Search Bar */}
        <section className="bg-white rounded-2xl shadow-xl p-12 w-5/6">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* ================= FILTER SIDEBAR ================= */}
            <aside className="lg:w-1/4 bg-[#fefae0] rounded-2xl p-6 shadow-md space-y-8">
              <h3 className="text-xl font-semibold text-[#6c3b27]">
                Filters 🌱
              </h3>

              <div className="space-y-6">
                {/* Category */}
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Category
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-[#dda15e] focus:outline-none focus:ring-2 focus:ring-[#bc6c25]"
                  >
                    {CATEGORIES.map((cat, index) => (
                      <option key={index} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* ZIP Code */}
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                    placeholder="Enter ZIP code"
                    className="w-full px-4 py-2 rounded-xl border border-[#dda15e] focus:outline-none focus:ring-2 focus:ring-[#bc6c25]"
                  />
                </div>

                {/* Radius Slider */}
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Radius:{' '}
                    <span className="font-medium text-[#6c3b27]">
                      {radius} miles
                    </span>
                  </label>

                  <input
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={radius}
                    onChange={(e) => setRadius(Number(e.target.value))}
                    className="w-full accent-[#bc6c25] cursor-pointer"
                  />

                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1 mi</span>
                    <span>50 mi</span>
                  </div>
                </div>

                {/* Availability */}
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Availability
                  </label>
                  <select
                    onChange={(e) => setAvailable(e.target.value)}
                    className="w-full px-4 py-2 rounded-xl border border-[#dda15e] focus:outline-none focus:ring-2 focus:ring-[#bc6c25]"
                  >
                    <option value={'All'}>All</option>
                    <option value={'Available'}>Available</option>
                    <option value={'Pending'}>Pending</option>
                  </select>
                </div>

                <button
                  onClick={() =>
                    qc.invalidateQueries({ queryKey: ['postings'] })
                  }
                  className="w-full bg-[#6c3b27] text-white py-2 rounded-xl shadow-md hover:scale-105 transition"
                >
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

              <section className="w-full mx-auto mt-10 space-y-10">
                {/* ================= YOUR LISTINGS ================= */}
                <div>
                  <h3 className="text-2xl font-semibold text-[#6c3b27] mb-4">
                    Your Listings
                  </h3>

                  <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
                    {[1, 2, 3, 4, 5].map((item) => (
                      <div
                        key={item}
                        className="min-w-[250px] bg-white rounded-2xl shadow-lg p-4 border border-[#dda15e]/30 snap-start hover:scale-105 transition"
                      >
                        <div className="h-32 bg-gray-200 rounded-xl mb-3"></div>
                        <h4 className="text-lg font-medium text-[#6c3b27]">
                          Fabric Scraps
                        </h4>
                        <p className="text-sm text-gray-600 truncate">
                          Assorted cotton pieces for crafts.
                        </p>
                        <p className="text-sm mt-4 text-green-800">Available</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Listings Grid */}

              <h3 className="text-2xl font-semibold text-[#6c3b27] mb-4">
                Listings near you
              </h3>

              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Listing Card */}
                {!postings.length && (
                  <div className="text-gray-400">No Listings Available!</div>
                )}
                {postings.map((posting) => (
                  <ListingCard
                    category={posting.category}
                    title={posting.title}
                    status={posting.status}
                    description={posting.description}
                    distance={posting.distance}
                  />
                ))}
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
