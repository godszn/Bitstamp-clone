'use client'
import { log } from 'console'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import Link from 'next/link'

interface Notification {
  buttonCLick: () => void;
  menuOpen: boolean;
  toggleMenu: () => void;
}

const HeaderComponent: React.FC<Notification> = ({ buttonCLick, menuOpen, toggleMenu }) => {
  const [header, setHeader] = useState(false)

  const scrollHeader = () => {
    if (window.scrollY > 20) {
      setHeader(true)
      console.log(window, 'window');

    } else {
      setHeader(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollHeader)

    return () => {
      window.addEventListener('scroll', scrollHeader)
    }
  }, [])

  return (
    <div className={header ? 'fixed w-[100%] z-[1000]' : 'bg-[transparent]'}>
      <main className="header-wrapper flex" style={{ backgroundColor: '#f1f1f1', height: '60px', alignContent: 'center' }}>
        <div className="header-component flex" style={{ justifyContent: 'space-around', width: '100%', alignItems: 'center' }}>
          <div className="navbrand flex" style={{ alignContent: 'center' }}>
            <svg style={{ width: 'auto', height: '1.5rem' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 20" width="88px" height="20px" fill="#003b2f"><path d="M13.58,11.49c0-1.63-.95-2.94-2.48-3.47,1.16-.53,1.97-1.63,1.97-3.05,0-2.22-1.87-3.77-4.51-3.77H1v1.89c1.19,0,2.15,.96,2.15,2.15s-.96,2.15-2.15,2.15v1.7c1.19,0,2.15,.96,2.15,2.15s-.96,2.15-2.15,2.15v2.06h7.89c2.71,0,4.68-1.61,4.68-3.94M5.06,3.25h3.11c1.27,0,2.18,.83,2.18,1.99s-.91,1.97-2.18,1.97h-3.11V3.25Zm0,10.13v-4.3h3.39c1.4,0,2.35,.87,2.35,2.14s-.95,2.16-2.35,2.16h-3.39Z"></path><path d="M16.65,.46c.95,0,1.63,.68,1.63,1.63s-.68,1.63-1.63,1.63-1.61-.68-1.61-1.63,.68-1.63,1.61-1.63m-1.36,4.6h2.71V15.44h-2.71V5.05Z"></path><path d="M23.25,5.05h2.88v2.06h-2.88v4.96c0,.79,.63,1.45,1.42,1.46,.41,0,.87-.06,1.38-.19l.36,2.03c-.83,.21-1.61,.32-2.35,.32-2.08,0-3.52-1.36-3.52-3.35V2.68c0-.37,.3-.67,.67-.67h2.04v3.05Z"></path><path d="M31.62,4.8c1.21,0,2.5,.25,3.81,.72l-.59,1.95c-1.04-.4-2.08-.66-3.01-.66s-1.61,.44-1.61,1.12c0,1.88,5.55,.51,5.55,4.53,0,1.89-1.7,3.22-4.15,3.22-1.27,0-2.67-.28-4.13-.83l.57-1.93c1.21,.49,2.35,.74,3.35,.74s1.7-.49,1.7-1.21c0-1.97-5.53-.59-5.53-4.53,0-1.82,1.65-3.14,4.05-3.14"></path><path d="M40.09,5.05h2.88v2.06h-2.88v4.96c0,.79,.63,1.45,1.42,1.46,.41,0,.87-.06,1.38-.19l.36,2.03c-.83,.21-1.61,.32-2.35,.32-2.08,0-3.52-1.36-3.52-3.35V2.68c0-.38,.31-.68,.68-.68h2.03v3.05Z"></path><path d="M57.3,5.05h2.16l.34,1.42c.83-1.08,2.03-1.67,3.41-1.67,1.5,0,2.73,.72,3.33,1.91,.95-1.23,2.25-1.91,3.75-1.91,2.27,0,3.88,1.57,3.88,3.79v6.84h-2.71v-6.42c0-1.16-.83-1.99-2.01-1.99-1.38,0-2.35,1.04-2.35,2.52v5.89h-2.71v-6.42c0-1.16-.83-1.99-1.99-1.99-1.4,0-2.37,1.04-2.37,2.52v5.89h-2.71V5.05Z"></path><path d="M76.41,5.05h2.16l.34,1.34c.76-1.02,1.95-1.59,3.33-1.59,2.8,0,4.77,2.25,4.77,5.45s-1.97,5.44-4.77,5.44c-1.27,0-2.37-.51-3.12-1.44v4.62c0,.37-.3,.68-.68,.68h-2.04V5.05Zm5.13,1.89c-1.44,0-2.46,1.08-2.46,2.61v1.4c0,1.5,1.02,2.61,2.46,2.61,1.59,0,2.71-1.38,2.71-3.3s-1.12-3.31-2.71-3.31"></path><path d="M52.19,10.94c0,1.5-1.02,2.61-2.46,2.61-1.59,0-2.71-1.38-2.71-3.3s1.12-3.31,2.71-3.31c1.44,0,2.46,1.08,2.46,2.61v1.4Zm2.67-.6h0V5.05h-2.16l-.34,1.34c-.76-1.02-1.95-1.59-3.33-1.59-2.8,0-4.77,2.25-4.77,5.45s1.97,5.44,4.77,5.44c.16,0,.32,0,.48-.03,1.17-.12,2.17-.67,2.85-1.56l.34,1.34h2.16v-5.09Z"></path></svg>
          </div>
          <div className="navlinks-wrapper flex" style={{ alignItems: 'center' }}>
            <ul className='flex navlink-container' style={{ color: '#58595b', alignItems: 'center' }}>
              <li>
                Institutions
              </li>
              <li>
                Pro
              </li>
              <li>
                Mobile Apps
              </li>
              <li>
                Earn Stake
              </li>
              <li>
                Earn Lend
              </li>
              <li>
                Market
              </li>
              <li>
                Tradeview
              </li>
              <li>
                Blog
              </li>
              <li>
                Learn
              </li>
            </ul>
          </div>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: '#f1f1f1',
              display: menuOpen ? 'flex' : 'none',
              flexDirection: 'column',
              color: '#58595b',
              fontSize: '25px',
              gap: '25px',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000,
              transition: 'all 0.3s ease',
            }}>
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                textAlign: 'center',
              }}
              className='dropdown-list'
            >
              <div className='flex end absolute top-[5%] right-[8%] h-[30px]' onClick={toggleMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path style={{color: 'red'}} d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
              </div>
              <li style={{ margin: '10px 0' }}>
                Institutions
              </li>
              <li style={{ margin: '10px 0' }}>
                Pro
              </li>
              <li style={{ margin: '10px 0' }}>
                Mobile Apps
              </li>
              <li style={{ margin: '10px 0' }}>
                Earn Stake
              </li>
              <li style={{ margin: '10px 0' }}>
                Earn Lend
              </li>
              <li style={{ margin: '10px 0' }}>
                Market
              </li>
              <li style={{ margin: '10px 0' }}>
                Tradeview
              </li>
              <li style={{ margin: '10px 0' }}>
                Blog
              </li>
              <li style={{ margin: '10px 0' }}>
                Learn
              </li>
            </ul>
          </div>
          <div className="account-btns flex" style={{ alignItems: 'center', gap: '15px' }}>
            <p style={{ color: '#2c3e50', fontSize: '14px', textDecoration: 'underline', cursor: 'pointer' }}>
              Log in
            </p>
            <button onClick={buttonCLick} className='header-btn' style={{ width: '140px', height: '37px', backgroundColor: '#003b2f', letterSpacing: '.7px', border: '1px solid #003b2f', borderRadius: '.3rem', fontSize: '13px', color: '#03fc9d', fontWeight: 'bold' }}>
              Get Started
            </button>
            <aside className='menu' onClick={toggleMenu}>
              <input />
            </aside>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HeaderComponent
