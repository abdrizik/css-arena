import React from 'react'
import { Link } from 'react-router'

export function Footer() {
  return (
    <footer className='w-full mt-20 py-4 text-gray-500'>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <div className='mb-4 md:mb-0'>
          Made with ❤️ by{' '}
          <Link
            to='https://bsky.app/profile/abdrizik.bsky.social'
            target='_blank'
          >
            @abdrikik
          </Link>
        </div>
        <div>© {new Date().getFullYear()} All rights reserved.</div>
      </div>
    </footer>
  )
}
