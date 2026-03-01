import { Navbar } from '#/components/navbar'
import { Link, createFileRoute } from '@tanstack/react-router'
import jars from '../../images/jars.jpg'

export const Route = createFileRoute('/listings/$listingID')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="relative w-full min-h-screen flex flex-col bg-container">
      {/* Header */}
      <header className="w-full z-20">
        <Navbar />
      </header>

      <main className="flex-1 w-full px-6 md:px-16 mt-20 py-20">
        {/* Back Button */}
        <div className="mb-10">
          <Link
            to="/listings"
            className="text-[#6c3b27] hover:underline text-lg"
          >
            ← Back to Listings
          </Link>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT SIDE – Image Section */}
          <div className="space-y-6 mt-26">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={jars}
                alt="Item"
                className="w-full h-[500px] object-cover"
              />

              <div className="absolute top-4 right-4 bg-[#6c3b27] text-white text-xs px-4 py-1 rounded-full">
                Glass
              </div>
            </div>

            {/* Optional Impact Badge */}
            <div className="bg-white/70 backdrop-blur-lg rounded-xl p-4 shadow-md text-sm">
              🌱 Reusing this item saves approximately 0.6 lbs of landfill
              waste.
            </div>
          </div>

          {/* RIGHT SIDE – Info + Contact */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-[#6c3b27]">
                10 Empty Pasta Sauce Jars
              </h1>

              <p className="text-gray-600 mt-2">
                Posted 1 day ago • 2 miles away
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-[#6c3b27] mb-2">
                  Description
                </h2>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#6c3b27] rounded-full"></div>
                  <div>
                    <p className="font-semibold text-[#6c3b27]">
                      Posted by Selin
                    </p>
                    <p className="text-sm text-gray-500">
                      5 successful exchanges
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Cleaned and label-free glass jars perfect for storage, pantry
                  organization, DIY candle projects, or small planters. Porch
                  pickup available.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#6c3b27] mb-2">
                  Pickup Details
                </h2>

                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>📍 Newark, NJ</li>
                  <li>🚗 Porch Pickup Available</li>
                  <li>🕒 Available Evenings</li>
                </ul>
              </div>

              {/* Message Seller */}
              <div className="pt-6 border-t border-[#dda15e]/40 space-y-4">
                <h2 className="text-xl font-semibold text-[#6c3b27]">
                  Message the Lister
                </h2>

                <textarea
                  placeholder="Hi! I’m interested in these jars..."
                  className="w-full p-4 rounded-xl border border-[#dda15e] focus:outline-none focus:ring-2 focus:ring-[#bc6c25] resize-none h-32"
                />

                <button className="w-full bg-[#6c3b27] text-white py-3 rounded-xl hover:bg-[#bc6c25] transition shadow-md">
                  Send Message
                </button>
              </div>
            </div>

            {/* Claim Button */}
            <button className="w-full bg-[#dda15e] text-white py-4 rounded-2xl text-lg font-semibold hover:bg-[#bc6c25] transition shadow-xl">
              Claim This Item
            </button>
          </div>
          <h2 className="text-2xl font-bold text-[#6c3b27] mt-24">
            More From Your Community
          </h2>
        </div>
      </main>
    </div>
  )
}
