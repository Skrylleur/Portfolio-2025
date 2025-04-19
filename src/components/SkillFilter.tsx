'use client'

import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { Check, ChevronDown } from 'lucide-react'

export default function SkillFilter({
  selectedSkill,
  onChange,
  allSkills,
}: {
  selectedSkill: string | null
  onChange: (value: string | null) => void
  allSkills: string[]
}) {
  const options = ['Toutes les compétences', ...allSkills]

  return (
    <div className="w-full max-w-xs mx-auto mb-12">
      <Listbox
        value={selectedSkill ?? 'Toutes les compétences'}
        onChange={(value) => onChange(value === 'Toutes les compétences' ? null : value)}
      >
        <div className="relative">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-gray-800/70 py-2 pl-4 pr-10 text-left text-white shadow-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition">
            <span className="block truncate">{selectedSkill ?? 'Toutes les compétences'}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-lg bg-gray-800 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {options.map((skill, index) => (
                <Listbox.Option
                  key={index}
                  value={skill}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-cyan-600 text-white' : 'text-gray-200'
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                        {skill}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                          <Check className="h-4 w-4" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}