import React from 'react'

export function Footer() {
  return (
    <footer className='w-full mt-20 py-4 text-gray-500'>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <div className='mb-4 md:mb-0'>Made with ❤️ by @abdrikik</div>
        <div>© {new Date().getFullYear()} All rights reserved.</div>
      </div>
    </footer>
  )
}
