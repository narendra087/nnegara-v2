import React from 'react'
import Link from 'next/link'
import Image from "next/image"

import { motion } from 'framer-motion'

import { ModeToggle } from '../ui/toggle-mode'

import Container from './container'

const Nav = () => {
  return (
    <header className='flex justify-between py-3 px-4 border-b'>
      <Container>
        <div className='relative px-8 flex h-16 items-center justify-between w-full'>
          <motion.div
            initial={{
              x: -250,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.3
            }}
          >
            <Link href={'/'} className='ml-0 flex flex-row gap-2 items-center'>
              <h1 className='text-lg font-bold'>{'//NNEGARA'}</h1>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{
              x: 200,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.3
            }}
          >
            <ModeToggle />
          </motion.div>

        </div>
      </Container>
    </header>
  )
}

export default Nav