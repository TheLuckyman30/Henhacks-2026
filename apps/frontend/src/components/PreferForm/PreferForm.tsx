'use client'
import { useState } from 'react'

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

export function PreferenceForm() {
  const [useCases, setUseCases] = useState<string[]>([])
  const [itemTypes, setItemTypes] = useState<string[]>([])
  const [eventTypes, setEventTypes] = useState<string[]>([])
  const [locations, setLocations] = useState<string[]>([])

  return (
    <section className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-10 space-y-10">
      <h2 className="text-3xl font-bold text-[#6c3b27]">
        Personalize Your Experience 🌱
      </h2>

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

      <div className="flex justify-end pt-6">
        <button className="bg-[#6c3b27] text-white px-8 py-3 rounded-full shadow-md hover:bg-[#5a2f1f] transition">
          Save Preferences
        </button>
      </div>
    </section>
  )
}
