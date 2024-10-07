import React from 'react'
interface Notification{
  buttonClick: ()=>void;
}
const TradingComponent: React.FC<Notification> = ({ buttonClick }) => {
  return (
    <div>
      <div className="Trading-wrapper flex text-[black]">
        <div className="trading-text w-[50%]">
          <div className='trading-header flex'>
            <span style={{ backgroundColor: '#03fc9d', paddingLeft: '5px', paddingRight: '5px', color: '#003b2f', fontWeight: 'bold' }}>
              Advanced
            </span>
            <h1 className='text-white pl-[1rem]'>
              trading tools
            </h1>
          </div>
          <section className='grid-cols-2 grid gril'>
            <div>
              <h4>
                Professional access, non-stop availability
              </h4>
              <p>
                We provide premium access to crypto trading for both individuals and institutions through high liquidity,
                reliable order execution and constant uptime.
              </p>
            </div>
            <div>
              <h4>
                A range of powerful APIs
              </h4>
              <p>
                Set up your own trading interface or deploy your algorithmic strategy with our high-performance FIX and HTTP APIs.
                Connect to our WebSocket for real-time data streaming.
              </p>
            </div>
            <div className='support'>
              <h4>
                Constant support
              </h4>
              <p>
                Live customer support available to all customers worldwide by phone or email. Dedicated account managers for partners
              </p>
            </div>
          </section>
          <div className="trading-btn flex gap-[1rem] mt-[1rem]">
            <button onClick={buttonClick} className="trading-btn w-[215px] font-medium" style={{ height: '45px', backgroundColor: 'white', borderRadius: '.3rem', marginTop: '1rem', color: '#003b2f' }}>
              More for pro traders
            </button>
            <button onClick={buttonClick} className="trading-btn font-medium" style={{ width: '160px', height: '45px', backgroundColor: '#03fc9d', borderRadius: '.3rem', marginTop: '1rem', color: '#003b2f' }}>
              Get started
            </button>
          </div>
        </div>
        <section className='trading-widget flex items-center'>
          <img src="https://assets.bitstamp.net/msc/_ipx/f_webp&s_583x463/bitstampImageUrl/trading_tools_e82bf5c7fd.webp" alt="" />
        </section>
      </div>
    </div>
  )
}

export default TradingComponent
