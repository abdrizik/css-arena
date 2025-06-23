import { hasSolution } from '~/utils/markdownLoader'
import { Link } from 'react-router'

interface TargetProps {
  target: {
    number: number
    name: string
  }
}

export function Target({ target }: TargetProps) {
  const solved = hasSolution(target.number)
  const isDisabled = !solved
  const href = solved ? `/${target.number}` : '#'

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isDisabled) {
      e.preventDefault()
    }
  }

  return (
    <Link
      to={href}
      onClick={handleClick}
      aria-disabled={isDisabled}
      tabIndex={isDisabled ? -1 : 0}
      className={`relative inline-block overflow-hidden rounded-lg shadow-sm transition-all duration-200 transform ${
        isDisabled ? 'cursor-not-allowed  pointer-events-none' : ''
      }`}
    >
      <img
        src={`/images/thumbnails/${target.number}.png`}
        alt={target.name}
        className={`w-full h-full object-cover ${solved ? '' : ''}`}
      />

      {/* Gradient overlay */}
      <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-50'></div>

      {/* Hover overlay */}
      <div className='absolute inset-0 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md'></div>

      {/* Target number badge */}
      <div className='absolute top-2 left-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-full w-6 h-6 flex items-center justify-center text-xs font-medium'>
        {target.number}
      </div>

      {solved && (
        <div className='absolute top-2 right-2 flex items-center justify-center'>
          <span className='flex items-center justify-center w-6 h-6 bg-gradient-to-br from-emerald-400 to-green-500 text-white rounded-full shadow-sm text-xs animate-fadeIn'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='w-3.5 h-3.5'
            >
              <path
                fillRule='evenodd'
                d='M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z'
                clipRule='evenodd'
              />
            </svg>
          </span>
        </div>
      )}

      {/* View button */}
      <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        {solved ? (
          <span className='bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-gray-700'>
            View
          </span>
        ) : (
          <span className='bg-gray-500/80 text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-sm cursor-not-allowed backdrop-blur-sm'>
            Unsolved
          </span>
        )}
      </div>

      {/* Target name */}
      <div className='absolute bottom-0 left-0 right-0 p-2'>
        <p className='text-white text-xs font-medium truncate'>{target.name}</p>
      </div>
    </Link>
  )
}
