import React, { useRef, useState } from 'react'

export default function CodeWrapper({
  children
}: {
  children: React.ReactNode
}) {
  const [isCopied, setIsCopied] = useState(false)
  const codeBlockRef = useRef<HTMLDivElement>(null)

  async function copyCode() {
    if (!codeBlockRef.current) return

    try {
      const codeText = codeBlockRef.current.textContent || ''
      await navigator.clipboard.writeText(codeText)

      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className='relative'>
      <button
        onClick={copyCode}
        className={`absolute top-3 right-3 py-1 px-2 bg-gray-200 border-none rounded text-xs cursor-pointer opacity-70 hover:opacity-100 transition-opacity z-10 ${isCopied ? 'bg-emerald-500 text-white' : ''}`}
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </button>

      <div ref={codeBlockRef}>{children}</div>
    </div>
  )
}
