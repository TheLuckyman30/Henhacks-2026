import { Navbar } from '#/components/navbar'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/_protected-routes/community/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [isRSVP, setIsRSVP] = useState(false)

  return (
    <div className="w-full min-h-screen bg-container flex flex-col">
      {/* Header */}
      <header className="w-full">
        <Navbar />
      </header>

      <main className="flex-1 flex flex-col items-center space-y-16 mb-20">
        <section className="w-full">
          <div className="relative h-[360px] shadow-xl overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#606c38] via-[#dda15e] to-[#bc6c25] opacity-90"></div>
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative z-10 h-full flex flex-col mt-10 justify-center items-center text-white text-center px-6">
              <h1 className="text-4xl font-bold">
                Community Swap & Sustainability Events 🌱
              </h1>
              <p className="mt-4 max-w-2xl text-white/90">
                Connect with neighbors, exchange reusable materials, and build a
                stronger eco-conscious community together.
              </p>
            </div>
          </div>
        </section>

        <section className="w-5/6">
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h2 className="text-2xl font-bold text-[#6c3b27] mb-6">
              🌟 Weekly Featured Event
            </h2>

            <div className="bg-[#fefae0] rounded-xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h3 className="text-xl font-semibold text-[#6c3b27]">
                  Spring Community Swap Meet
                </h3>
                <p className="text-gray-700 mt-2">
                  Bring reusable items, art supplies, jars, fabrics, and more.
                  Meet local creators and reduce landfill waste together.
                </p>
                <p className="text-sm text-gray-600 mt-4">
                  📍 Riverfront Park • April 12 • 10AM–2PM
                </p>
              </div>
              <div className="gap-3 flex">
                <button className="bg-[#606c38] text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition">
                  Details
                </button>
                <button
                  className="bg-[#6c3b27] text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition"
                  onClick={() => setIsRSVP(!isRSVP)}
                >
                  {isRSVP ? 'Un-RSVP' : 'RSVP'}
                </button>
              </div>
            </div>
            <div className="mt-8 text-sm text-gray-500">
              <h2 className="text-2xl font-bold text-[#6c3b27] mb-8">
                Upcoming Events 📅
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-[#fefae0] rounded-xl p-6 shadow-md">
                  <h3 className="font-semibold text-[#6c3b27]">
                    Art Supply Exchange 🎨
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Swap unused craft materials with local artists.
                  </p>
                  <p className="text-sm mt-4 text-gray-500">
                    April 20 • Community Center
                  </p>
                  <div className="gap-3 flex mt-6">
                    <button className="bg-[#606c38] text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition">
                      Details
                    </button>
                    <button
                      className="bg-[#6c3b27] text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition"
                      onClick={() => setIsRSVP(!isRSVP)}
                    >
                      {isRSVP ? 'Un-RSVP' : 'RSVP'}
                    </button>
                  </div>
                </div>

                <div className="bg-[#fefae0] rounded-xl p-6 shadow-md">
                  <h3 className="font-semibold text-[#6c3b27]">
                    Neighborhood Cleanup 🌍
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Join volunteers to clean and sort recyclables.
                  </p>
                  <p className="text-sm mt-4 text-gray-500">
                    May 3 • Lincoln Park
                  </p>
                  <div className="gap-3 flex mt-6">
                    <button className="bg-[#606c38] text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition">
                      Details
                    </button>
                    <button
                      className="bg-[#6c3b27] text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition"
                      onClick={() => setIsRSVP(!isRSVP)}
                    >
                      {isRSVP ? 'Un-RSVP' : 'RSVP'}
                    </button>
                  </div>
                </div>

                <div className="bg-[#fefae0] rounded-xl p-6 shadow-md">
                  <h3 className="font-semibold text-[#6c3b27]">
                    Container Swap Day 🫙
                  </h3>
                  <p className="text-gray-600 mt-2">
                    Exchange jars, bins, and reusable packaging.
                  </p>
                  <p className="text-sm mt-4 text-gray-500">
                    May 18 • Downtown Plaza
                  </p>
                  <div className="gap-3 flex mt-6">
                    <button className="bg-[#606c38] text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition">
                      Details
                    </button>
                    <button
                      className="bg-[#6c3b27] text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition"
                      onClick={() => setIsRSVP(!isRSVP)}
                    >
                      {isRSVP ? 'Un-RSVP' : 'RSVP'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-5/6">
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center space-y-6">
            <h2 className="text-3xl font-bold text-[#6c3b27]">
              Want to Host an Event? 🤝
            </h2>

            <p className="text-gray-700 max-w-2xl mx-auto">
              Organize a neighborhood swap, art drive, or cleanup day. We’ll
              help you connect with members nearby.
            </p>

            <button className="bg-[#606c38] text-white px-8 py-4 rounded-lg shadow-md hover:scale-105 transition">
              Create Event
            </button>
          </div>
        </section>

        <section className="w-5/6">
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h2 className="text-2xl font-bold text-[#6c3b27] mb-8">
              Top 3 Events This Month 🏆
            </h2>

            <div className="space-y-6">
              {/* 1st Place */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-[#6c3b27]">
                    🥇 School Art Supply Drive
                  </span>
                  <span className="text-sm text-gray-600">540 RSVPs</span>
                </div>

                <div className="w-full bg-[#fefae0] rounded-full h-4 overflow-hidden">
                  <div className="bg-[#6c3b27] h-4 rounded-full w-[100%]"></div>
                </div>
              </div>

              {/* 2nd Place */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-[#6c3b27]">
                    🥈 Winter Fabric Swap
                  </span>
                  <span className="text-sm text-gray-600">320 RSVPs</span>
                </div>

                <div className="w-full bg-[#fefae0] rounded-full h-4 overflow-hidden">
                  <div className="bg-[#bc6c25] h-4 rounded-full w-[60%]"></div>
                </div>
              </div>

              {/* 3rd Place */}
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-[#6c3b27]">
                    🥉 Fall Community Cleanup
                  </span>
                  <span className="text-sm text-gray-600">80 Volunteers</span>
                </div>

                <div className="w-full bg-[#fefae0] rounded-full h-4 overflow-hidden">
                  <div className="bg-[#dda15e] h-4 rounded-full w-[15%]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
