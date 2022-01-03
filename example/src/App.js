import React from 'react'

import { getKoreanNumber } from 'numberconvert'

const App = () => {
  const example = getKoreanNumber('12455,12,43', 'NORMAL')
  return (
    <div>
      {example}
    </div>
  )
}
export default App
