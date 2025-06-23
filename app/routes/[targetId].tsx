import { Target } from '~/components/Target'

import {
  SandpackCodeEditor,
  SandpackLayout,
  SandpackPreview,
  SandpackProvider
} from '@codesandbox/sandpack-react'
import { getSolution } from '~/utils/markdownLoader'
import { getTargetInfo, getTargetsForBattle } from '~/data/battles'
import { Link, redirect } from 'react-router'
import { useLoaderData } from 'react-router'

interface TargetDetailsProps {
  target: {
    number: number
    name: string
    battleNumber: number
    battleName: string
  }
}

interface RelatedTargetsProps {
  battleNumber: number
  allBattleTargets: Array<{
    number: number
    name: string
  }>
}

export function loader({ params }: { params: { targetId: string } }) {
  const targetNumber = Number(params.targetId)

  try {
    const solution = getSolution(targetNumber)
    const target = getTargetInfo(targetNumber)
    const allBattleTargets = getTargetsForBattle(target.battleNumber)

    return { solution, target, allBattleTargets }
  } catch (error: any) {
    throw redirect(`/404?message=${encodeURIComponent(error.message)}`)
  }
}

export default function Page() {
  const { solution, target, allBattleTargets } = useLoaderData()

  if (!target) return

  return (
    <div>
      <div className='flex flex-col w-full gap-8 font-sans'>
        <BackToButton />

        <div className='flex flex-col lg:flex-row justify-between gap-8'>
          <TargetDetails target={target} />
          <InteractiveSandbox solution={solution} />
        </div>

        <RelatedTargets
          battleNumber={target.battleNumber}
          allBattleTargets={allBattleTargets}
        />
      </div>
    </div>
  )
}

function BackToButton() {
  return (
    <Link
      to='/'
      aria-label='Back to Battles'
      className='flex items-center gap-2 text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline'
    >
      <svg
        width='16'
        height='16'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='m15 18-6-6 6-6'></path>
      </svg>
      Back to Battles
    </Link>
  )
}

function TargetDetails({ target }: TargetDetailsProps) {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center gap-3 mb-2'>
        <span className='bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full px-2 py-0.5 text-xs font-medium'>
          #{target.number}
        </span>
        <h1 className='text-gray-900 dark:text-gray-100 text-xl font-medium'>
          {target.name}
        </h1>
      </div>

      <p className='text-gray-500 dark:text-gray-400 text-sm'>
        From Battle #{target.battleNumber}: {target.battleName}
      </p>

      {/* Solution metadata */}
      <div className='mt-2 flex flex-col gap-1'>
        <p className='text-sm text-gray-500 dark:text-gray-400'>
          Match:
          <span className='font-medium text-green-600 dark:text-green-400'>
            &nbsp;100%
          </span>
        </p>
      </div>
    </div>
  )
}

function InteractiveSandbox({ solution }: { solution: string }) {
  const sandpackFiles = {
    '/index.html': solution,
    '/styles.css': `body {
      position: relative;
      height: 300px;
      width: 400px;
      margin: 0 auto;
      overflow: hidden;
    }`,
    '/index.js': `import "./styles.css";`
  }

  return (
    <div className='w-full md:w-[800px]'>
      <h2 className='text-gray-900 dark:text-gray-100 text-lg font-medium mb-4'>
        Interactive Sandbox
      </h2>
      <div className='w-full'>
        <SandpackProvider
          theme='auto'
          files={sandpackFiles}
          options={{
            activeFile: '/index.html'
          }}
        >
          <SandpackLayout>
            <SandpackPreview
              showNavigator={false}
              showOpenInCodeSandbox={false}
              showRefreshButton={false}
            />
            <SandpackCodeEditor showLineNumbers={false} showTabs={false} />
          </SandpackLayout>
        </SandpackProvider>
        {/* <Sandpack
          files={sandpackFiles}
          options={{
            showTabs: false,
            showNavigator: false,
            rtl: true,
            // showLineNumbers: false,
            activeFile: '/index.html'

            // codeEditor: {
            //   extensions: [autocompletion()]
            // }
          }}
        /> */}
      </div>
    </div>
  )
}

function RelatedTargets({
  battleNumber,
  allBattleTargets
}: RelatedTargetsProps) {
  return (
    <div className='flex flex-col gap-4 mt-4'>
      <h3 className='text-gray-900 dark:text-gray-100 text-lg font-medium'>
        All Targets from Battle #{battleNumber}
      </h3>

      {/* Target Grid */}
      <div className='flex flex-wrap gap-4 w-full pb-2 justify-start'>
        {allBattleTargets.map((target) => (
          <div
            key={target.number}
            className='group w-full max-w-[11rem] sm:max-w-[10rem] md:max-w-[10.5rem] flex-grow basis-[calc(50%-0.5rem)] sm:basis-[calc(33.333%-1rem)] md:basis-[calc(25%-1rem)]'
          >
            <Target target={target} />
          </div>
        ))}
      </div>
    </div>
  )
}
