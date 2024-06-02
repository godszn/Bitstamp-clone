import React from 'react'

const GuaranteeComponent = () => {
  return (
    <div>
      <div className="guarantee-wrapper flex p-[7rem] justify-between">
        <div className="guarantee-component w-[29%]">
          <main className='guarantee-widget'>
            <img src="https://assets.bitstamp.net/msc/_ipx/f_webp&s_96x96/bitstamp.net/ease_of_trading_e2d0069e0b.webp" alt="" />
            <div className='flex mt-[2rem] text-[1.7rem]'>
              <span style={{ backgroundColor: 'white', paddingLeft: '10.5px', paddingRight: '10.5px', color: 'black' }}>
                Ease
              </span>
              <h1 className='text-[1.7rem] ml-[.5rem]'>
                of Trading
              </h1>
            </div>
            <div className="guarantee-options mt-[2rem] text-[18px] text-[#003b2f] font-semibold" style={{listStyle: 'none'}}>
              <li className='pb-[.7rem] pt-[.7rem]' style={{borderBottom: '2px solid white'}}>
                Intuitive interface
              </li>
              <li className='pb-[.7rem] pt-[.7rem]' style={{borderBottom: '2px solid white'}}>
                Instant deposit options
              </li>
              <li className='pb-[.7rem] pt-[.7rem]'>
                Cash out directly to your bank account
              </li>
            </div>
          </main>
        </div>
        <div className="guarantee-component w-[32%]">
          <main className='guarantee-widget'>
            <img src="https://assets.bitstamp.net/msc/_ipx/f_webp&s_96x96/bitstamp.net/institutional_grade_32894f37ec.webp" alt="" />
            <div className='mt-[2rem] text-[1.7rem]'>
              <span style={{ backgroundColor: 'white', paddingLeft: '10.5px', paddingRight: '10.5px', color: 'black' }}>
                Institutional-grade
              </span>
              <h1 className='text-[1.7rem]'>
                Security
              </h1>
            </div>
            <div className="guarantee-options mt-[2rem] text-[18px] text-[#003b2f] font-semibold" style={{listStyle: 'none'}}>
              <li className='pb-[.7rem] pt-[.7rem]' style={{borderBottom: '2px solid white'}}>
                95% of assets stored safely offline
              </li>
              <li className='pb-[.7rem] pt-[.7rem]' style={{borderBottom: '2px solid white'}}>
                Highly encrypted personal data
              </li>
              <li className='pb-[.7rem] pt-[.7rem]'>
                Whitelisting and transaction confirmations
              </li>
            </div>
          </main>
        </div>
        <div className="guarantee-component w-[30%]">
          <main className='guarantee-widget'>
            <img src="https://assets.bitstamp.net/msc/_ipx/f_webp&s_96x96/bitstamp.net/proven_reliability_3643ecefba.webp" alt="" />
            <div className='flex mt-[2rem] text-[1.7rem]'>
              <span style={{ backgroundColor: 'white', paddingLeft: '10.5px', paddingRight: '10.5px',color: 'black' }}>
                Proven
              </span>
              <h1 className='text-[1.7rem] ml-[.5rem]'>
                Reliability
              </h1>
            </div>
            <div className="guarantee-options mt-[2rem] text-[18px] text-[#003b2f] font-semibold" style={{listStyle: 'none'}}>
              <li className='pb-[.7rem] pt-[.7rem]' style={{borderBottom: '2px solid white'}}>
                Serving customers since 2011
              </li>
              <li className='pb-[.7rem] pt-[.7rem]' style={{borderBottom: '2px solid white'}}>
                Live customer support
              </li>
              <li className='pb-[.7rem] pt-[.7rem]'>
                Industry-leading uptime
              </li>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default GuaranteeComponent
