import jars from '../../../public/images/jars.jpg'

interface ListingCardProps {
  category: string
  status: string
  title: string
  description: string
  distance: number
}

export function ListingCard({
  category,
  status,
  title,
  description,
  distance,
}: ListingCardProps) {
  return (
    <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden hover:scale-[1.02] transition">
      <div className="relative h-52 overflow-hidden">
        <img
          src={jars}
          alt="Glass Jars"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          <div className="bg-[#6c3b27] text-white text-xs px-3 py-1 rounded-full">
            {category}
          </div>

          <div className="bg-[#6c3b27] text-white text-xs px-3 py-1 rounded-full">
            {status}
          </div>
        </div>
      </div>

      <div className="p-6 space-y-3">
        <h2 className="text-xl font-semibold text-[#6c3b27]">{title}</h2>

        <p className="text-sm text-gray-600">{description}</p>

        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>
            {distance <= 1 ? '<1 mile away' : `${distance} miles away`}{' '}
          </span>
          <span>Posted 1 day ago</span>
        </div>

        <button className="w-full bg-[#dda15e] text-white py-2 rounded-lg hover:bg-[#bc6c25] transition">
          Details
        </button>
      </div>
    </div>
  )
}
