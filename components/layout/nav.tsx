import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";

import { ModeToggle } from "../ui/toggle-mode";

import Container from "./container";
import { Hero } from "../content";

const Nav = () => {
  return (
    <nav className=" fixed w-full px-6 top-0 bg-background z-50">
      <Container>
        <div className="relative flex items-center justify-between w-full border-b py-3 h-16">
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
              duration: 0.3,
            }}
          >
            <Link href={"/"} className="ml-0 flex flex-row gap-2 items-center">
              <h1 className="text-lg font-bold">{"//NNEGARA"}</h1>
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
              duration: 0.3,
            }}
          >
            <ModeToggle />
          </motion.div>
        </div>
      </Container>
    </nav>
  );
};

export default Nav;
