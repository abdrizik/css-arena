import { Outlet } from 'react-router'
import { Footer } from '~/components/Footer'
import { Logo } from '~/components/Logo'

export function meta() {
  return [
    { title: 'CSS Arena' },

    {
      name: 'description',
      content: ''
    }
  ]
}

export default function Layout() {
  return (
    <div className='w-full pt:10 flex max-w-[1400px] flex-col items-center justify-center gap-20 p-5 md:mx-auto md:p-5 md:pt-12'>
      <Logo />
      <Outlet />
      <Footer />
    </div>
  )
}
