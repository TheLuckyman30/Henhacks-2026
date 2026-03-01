'use client'
import { useState, useEffect } from 'react'

type PreferenceFormModalProps = {
  isOpen: boolean
  onClose: () => void
}

type TagGroupProps = {
  title: string
  options: string[]
  selected: string[]
  setSelected: (value: string[]) => void
}

function TagGroup({ title, options, selected, setSelected }: TagGroupProps) {
  const toggleTag = (tag: string) => {
    if (selected.includes(tag)) {
      setSelected(selected.filter((item) => item !== tag))
    } else {
      setSelected([...selected, tag])
    }
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-[#6c3b27]">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {options.map((tag) => (
          <button
            type="button"
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-4 py-2 rounded-full border transition 
              ${
                selected.includes(tag)
                  ? 'bg-[#6c3b27] text-white border-[#6c3b27]'
                  : 'bg-[#fefae0] text-[#6c3b27] border-[#dda15e] hover:bg-[#bc6c25]/20'
              }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  )
}

export function PreferenceForm({ isOpen, onClose }: PreferenceFormModalProps) {
  const [useCases, setUseCases] = useState<string[]>([])
  const [itemTypes, setItemTypes] = useState<string[]>([])
  const [eventTypes, setEventTypes] = useState<string[]>([])
  const [locations, setLocations] = useState<string[]>([])

  // Lock scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-90 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl z-50 max-h-[90vh] overflow-y-auto mx-6 bg-white rounded-3xl shadow-2xl p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-[#6c3b27] text-xl hover:opacity-70"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold text-[#6c3b27] mb-10 z-50">
          Personalize Your Experience 🌱
        </h2>

        <div className="space-y-10 z-50">
          <TagGroup
            title="What will you use the platform for?"
            options={[
              'DIY Projects',
              'Art & Crafts',
              'School Projects',
              'Community Organizing',
              'Small Business',
              'Donation & Reuse',
            ]}
            selected={useCases}
            setSelected={setUseCases}
          />

          <TagGroup
            title="What items are you most likely looking for?"
            options={[
              'Glass Containers',
              'Fabric & Textiles',
              'Paper & Cardboard',
              'Art Supplies',
              'Wood Scraps',
              'Plastic Materials',
              'Tools',
            ]}
            selected={itemTypes}
            setSelected={setItemTypes}
          />

          <TagGroup
            title="What types of events should we promote to you?"
            options={[
              'Community Swap Events',
              'DIY Workshops',
              'Upcycling Classes',
              'Sustainability Talks',
              'Local Markets',
              'Donation Drives',
            ]}
            selected={eventTypes}
            setSelected={setEventTypes}
          />

          <TagGroup
            title="What locations are you interested in?"
            options={[
              'Downtown',
              'Nearby Neighborhoods',
              'Within 5 Miles',
              'Within 10 Miles',
              'Campus Area',
              'Citywide',
            ]}
            selected={locations}
            setSelected={setLocations}
          />
        </div>

        <div className="flex justify-end pt-10">
          <button
            className="bg-[#6c3b27] text-white px-8 py-3 rounded-full shadow-md hover:bg-[#5a2f1f] transition"
            onClick={onClose}
          >
            Save Preferences
          </button>
        </div>
      </div>
    </div>
  )
}
