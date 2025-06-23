import React from 'react'
import { Battle } from '~/components/Battle'
import { Header } from '~/components/Header'
import { battles } from '~/data/battles'

export default function Page() {
  return (
    <div>
      <Header />

      <div className='flex w-full flex-col gap-24 md:gap-32'>
        {battles.map((battle) => (
          <Battle key={battle.number} battle={battle} />
        ))}
      </div>
    </div>
  )
}
