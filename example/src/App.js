import React from 'react'

import { useMyHook } from 'numberconvert'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
