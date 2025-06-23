import { battles } from '~/data/battles'
import { Target } from './Target'
import { hasSolution } from '~/utils/markdownLoader'

interface BattleDetailsProps {
  battle: (typeof battles)[number]
}

export function Battle({ battle }: BattleDetailsProps) {
  return (
    <div className='relative flex w-full flex-col items-start gap-12 font-sans lg:flex-row md:gap-x-35'>
      {/* Left Info Column */}
      <div className='flex w-full flex-col gap-4 md:w-[256px] md:gap-9'>
        <div className='flex w-full flex-col gap-3'>
          <div className='flex items-center gap-2'>
            <span className='bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full px-2 py-0.5 text-xs font-medium'>
              #{battle.number}
            </span>
            <h2 className='text-gray-900 dark:text-gray-100 selection:bg-gray-300 selection:text-gray-900 dark:selection:bg-gray-700 dark:selection:text-gray-100 text-xl font-medium'>
              {battle.name}
            </h2>
          </div>

          <p className='text-gray-800 dark:text-gray-200 selection:bg-gray-300 selection:text-gray-900 dark:selection:bg-gray-700 dark:selection:text-gray-200 text-sm leading-relaxed'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          {/* Total Target Count */}
          <div className='flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400'>
            <span className='bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded px-2 py-0.5'>
              {battle.targets.length} Target
              {battle.targets.length === 1 ? '' : 's'}
            </span>
          </div>
        </div>

        {/* Tags */}
        {/* 
        <div className="flex w-full flex-wrap gap-2">
          {['react', 'tailwindcss', 'framer motion'].map((tag) => (
            <div
              key={tag}
              className="bg-gray-100 text-gray-900 dark:bg-gray-600 dark:text-gray-100 w-fit cursor-default rounded-md pt-[2px] pr-2 pb-[2px] pl-2 font-sans text-[12px]"
            >
              {tag}
            </div>
          ))}
        </div>
        */}
      </div>

      {/* Target Thumbnails */}
      <div className='items-center justify-center rounded-lg md:flex-1 w-full overflow-hidden'>
        <div className='w-full relative overflow-hidden'>
          <div className='w-full overflow-hidden'>
            <div className='flex flex-wrap  gap-4 w-full pb-2'>
              {battle.targets.map((target) => (
                <div
                  key={target.number}
                  className='group w-full max-w-[11rem] sm:max-w-[10rem] md:max-w-[10.5rem] flex-grow basis-[calc(50%-0.5rem)] sm:basis-[calc(33.333%-1rem)] md:basis-[calc(25%-1rem)]'
                >
                  <Target target={target} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
