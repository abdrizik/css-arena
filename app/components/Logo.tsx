import { Link } from 'react-router'

export function Logo() {
  return (
    <Link
      to='/'
      className='w-12 h-12 transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-12 self-start'
    >
      <img src='/origami.svg' alt='Origami Logo' />
    </Link>
  )
}
