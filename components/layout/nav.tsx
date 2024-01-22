import React from 'react'
import { ModeToggle } from '../ui/toggle-mode'

const Nav = () => {
  return (
    <div className='flex flex-row justify-between items-center'>
      <p className='text-2xl font-bold'>NNEGARA V2</p>

      <ModeToggle />
    </div>
  )
}

export default Nav