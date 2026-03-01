import { Navbar } from '#/components/navbar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/myProfile/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="w-full min-h-screen bg-container flex flex-col">
      {/* Header */}
      <header className="w-full">
        <Navbar />
      </header>

      <main className="flex-1 flex flex-col mt-20 items-center pt-20 py-20 space-y-16">
        <section className="w-5/6">
          <div className="relative h-[280px] rounded-2xl shadow-xl overflow-hidden">
            {/* Banner Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#606c38] via-[#dda15e] to-[#bc6c25] opacity-90"></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Profile Info */}
            <div className="relative z-10 h-full flex flex-col md:flex-row items-center md:items-end justify-between p-8 text-white">
              <div className="flex items-center gap-6">
                {/* Avatar */}
                <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center text-4xl text-[#6c3b27] shadow-lg">
                  ♻️
                </div>

                <div>
                  <h1 className="text-3xl font-bold">
                    Selin and Brandon (Hi !)
                  </h1>
                  <p className="text-white/90">
                    Community Recycler • Newark, DE
                  </p>
                  <p className="text-sm text-white/80 mt-1">
                    Member since March 2026
                  </p>
                </div>
              </div>

              <button className="mt-6 md:mt-0 bg-white text-[#6c3b27] px-6 py-3 rounded-lg shadow-md hover:scale-105 transition">
                Edit Profile
              </button>
            </div>
          </div>
        </section>
        <section className="w-5/6">
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h2 className="text-2xl font-bold text-[#6c3b27] mb-8">
              Your Impact 🌎
            </h2>

            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-[#606c38]">128</p>
                <p className="text-gray-600">Items Shared</p>
              </div>

              <div>
                <p className="text-4xl font-bold text-[#606c38]">94</p>
                <p className="text-gray-600">Items Reused</p>
              </div>

              <div>
                <p className="text-4xl font-bold text-[#606c38]">5</p>
                <p className="text-gray-600">Events Attended</p>
              </div>

              <div>
                <p className="text-4xl font-bold text-[#606c38]">4.8/5</p>
                <p className="text-gray-600">Eco Rating</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-5/6">
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <div>
              <h2 className="text-2xl font-bold text-[#6c3b27] mb-8">
                Your Active Listings 📦
              </h2>

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
          </div>
        </section>
        <section className="w-5/6">
          <div className="bg-white rounded-2xl shadow-xl p-10">
            <h2 className="text-2xl font-bold text-[#6c3b27] mb-6">
              Recent Activity 📝
            </h2>

            <ul className="space-y-4 text-gray-700">
              <li>✔️ You shared “Egg Cartons (24)”</li>
              <li>🌱 You diverted 2kg of cardboard waste</li>
              <li>📦 Your listing “Glass Jars” was claimed</li>
              <li>🏅 You earned the “Landfill Defender” badge</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
