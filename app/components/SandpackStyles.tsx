import { getSandpackCssText } from '@codesandbox/sandpack-react'

/**
 * Ensures styles are loaded server side.
 */
export function SandPackCSS() {
  return (
    <style
      dangerouslySetInnerHTML={{ __html: getSandpackCssText() }}
      id='sandpack'
    />
  )
}
