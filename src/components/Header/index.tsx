import React from 'react'
// import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa'

import {
  HomeIcon,
  BookmarkAltIcon,
  TerminalIcon,
  NewspaperIcon,
} from '@heroicons/react/outline'

export interface IHeaderProps {
  isMobile: boolean
  onChange?
}

export function Header() {
  return (
    <header className="w-full flex justify-center p-2 items-center bg-principal-100 absolute bottom-0 border-t-2 border-white h-14  lg:w-16 lg:h-full lg:border-t-0 lg:border-r-2  lg:flex-col ">
      <a
        href="/"
        className="flex flex-1 items-center justify-center lg:flex-none lg:mb-6"
      >
        <HomeIcon className="w-6 text-white stroke-1" />
      </a>
      <a
        href="/"
        className="flex flex-1 items-center justify-center lg:flex-none lg:mb-6"
      >
        <BookmarkAltIcon className="w-6 text-white stroke-1" />
      </a>
      <a
        href="/"
        className="flex flex-1 items-center justify-center lg:flex-none lg:mb-6"
      >
        <TerminalIcon className="w-6 text-white stroke-1" />
      </a>
      <a
        href="/"
        className="flex flex-1 items-center justify-center lg:flex-none lg:mb-6"
      >
        <NewspaperIcon className="w-6 text-white stroke-1" />
      </a>

      <hr className="hidden lg:block lg:w-full lg:bg-white" />

      <a
        href="https://monts.com.br/"
        target="_blank"
        rel="noreferrer"
        className="flex flex-1 items-center justify-center lg:flex-none lg:mt-6"
      >
        <img src="/logo.svg" alt="Monts" className="w-8 h-8" />
      </a>
    </header>
    // <Container isMobile={props.isMobile}>
    //   <div className="menuContent">
    //     <div
    //       className="mobileHeader"
    //       onClick={() => props.onChange(!props.isMobile)}
    //       onKeyDown={() => props.onChange(!props.isMobile)}
    //       role="menuitem"
    //       tabIndex={0}
    //     >
    //       {props.isMobile === false ? <FaBars /> : <FaTimes />}
    //     </div>
    //     <ul>
    //       <li>
    //         <a href="/">Início</a>
    //       </li>
    //       <li>
    //         <a href="/knowledge">Conhecimentos</a>
    //       </li>
    //       <li>
    //         <a href="/projects">Projetos</a>
    //       </li>
    //       <div className="socialMedia">
    //         <a
    //           href="https://github.com/Jeanluca-Moren0"
    //           target="_blank"
    //           rel="noreferrer"
    //         >
    //           <FaGithub />
    //         </a>
    //         <a
    //           href="https://www.linkedin.com/in/jeanlucam/"
    //           target="_blank"
    //           rel="noreferrer"
    //         >
    //           <FaLinkedin />
    //         </a>
    //       </div>
    //     </ul>
    //   </div>
    // </Container>
  )
}
