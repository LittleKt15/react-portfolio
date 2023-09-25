import { useState } from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'

function App() {

  return (
    <div>
      <Sidenav />
      <Main />
      <Work />
      {/* https://www.youtube.com/watch?v=22CxRxryQFE 51:24 */}
    </div>
  )
}

export default App
