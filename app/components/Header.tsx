import { battles } from '~/data/battles'
import { getProgress } from '~/utils/markdownLoader'

// Get progress information for all battles
const targetsCount = battles.reduce(
  (acc, battle) => acc + battle.targets.length,
  0
)
const progress = getProgress(targetsCount)

export function Header() {
  return (
    <div className='flex w-full flex-col gap-6 mb-36'>
      <h1 className='text-4xl font-bold text-gray-900 dark:text-gray-100'>
        CSS Arena
      </h1>
      <p className='text-gray-600 dark:text-gray-300 text-lg max-w-2xl'>
        A collection of my CSSBattle solutions — showcasing precision,
        creativity, and code elegance.
      </p>
      <div className='w-full max-w-md bg-gray-50 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700'>
        <div className='flex items-center justify-between mb-3'>
          <p className='text-gray-700 dark:text-gray-200 font-medium'>
            Progress: <span className='font-bold'>{progress.percent}%</span>
          </p>
          <p className='text-gray-600 dark:text-gray-300 text-sm'>
            {progress.completed}/{targetsCount} targets
          </p>
        </div>
        <div className='h-2 w-full bg-gray-200 dark:bg-gray-600 rounded-full'>
          <div
            className='h-2 bg-blue-500 dark:bg-blue-400 rounded-full transition-all duration-300'
            style={{ width: `${progress.percent}%` }}
          />
        </div>
      </div>
      {/* Battles info is rendered below this header section */}
      <div className='text-sm text-gray-500 dark:text-gray-400'>
        {battles.length} battles available
      </div>
    </div>
  )
}
