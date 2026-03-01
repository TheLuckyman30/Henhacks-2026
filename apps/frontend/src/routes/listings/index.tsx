import { Navbar } from '#/components/navbar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/listings/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="relative w-full min-h-screen flex flex-col bg-container">
      {/* Header */}

      <header className="w-full z-index-20">
        <Navbar />
      </header>

      <main className="flex-1 w-full px-6 md:px-16 pt-20 space-y-12 mt-20">
        {/* Page Title Section */}

        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#6c3b27]">
            Community Treasures ♻️
          </h1>
          <p className="text-lg text-[#3a3a3a] max-w-2xl mx-auto">
            Browse items shared by your neighbors and give them a second life.
          </p>
        </section>

        {/* Filter / Search Bar */}
        <section className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <input
            type="text"
            placeholder="Search for jars, cardboard, fabric..."
            className="w-full md:w-1/2 px-5 py-3 rounded-xl border border-[#dda15e] focus:outline-none focus:ring-2 focus:ring-[#bc6c25]"
          />

          <div className="flex gap-3">
            <select className="px-4 py-3 rounded-xl border border-[#dda15e]">
              <option>All Categories</option>
              <option>Glass</option>
              <option>Plastic</option>
              <option>Paper</option>
              <option>Art Supplies</option>
            </select>

            <button className="bg-[#6c3b27] text-white px-6 py-3 rounded-xl shadow-md hover:scale-105 transition">
              Filter
            </button>
          </div>
        </section>

        {/* Listings Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Listing Card */}
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition">
            <div className="relative h-52 overflow-hidden">
              <img
                src="/placeholder.jpg"
                alt="Glass Jars"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-[#6c3b27] text-white text-xs px-3 py-1 rounded-full">
                Glass
              </div>
            </div>

            <div className="p-6 space-y-3">
              <h2 className="text-xl font-semibold text-[#6c3b27]">
                10 Empty Pasta Sauce Jars
              </h2>

              <p className="text-sm text-gray-600">
                Perfect for storage or craft projects. Cleaned and ready for
                pickup.
              </p>

              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>2 miles away</span>
                <span>Posted 1 day ago</span>
              </div>

              <button className="w-full bg-[#dda15e] text-white py-2 rounded-lg hover:bg-[#bc6c25] transition">
                Claim Item
              </button>
            </div>
          </div>

          {/* Duplicate cards as needed */}
        </section>
      </main>
    </div>
  )
}
