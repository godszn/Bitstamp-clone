import React from 'react'

const StepsComponent = () => {
  return (
    <div>
      <main className="Steps-wrapper flex">
        <div className="step-leftcontent mt-12 mb-12 w-[50%]">
          <section className='flex gap-4'>
            <span className=' text-center pr-[.5rem] font-bold' style={{ backgroundColor: '#03fc9d', paddingLeft: '5px', paddingRight: '5px', color: '#003b2f' }}>
              3 steps
            </span>
            <h1 style={{color: '#003b2f'}}>
              to start trading
            </h1>
          </section>
          <button className="steps-btn " style={{ width: '160px', height: '45px', backgroundColor: '#03fc9d', borderRadius: '.3rem', marginTop: '3.5rem', color: '#003b2f' }}>
            Get started
          </button>
        </div>
        <div className="step-rightcontent mt-12 mb-12 flex w-[50%]" style={{color: '#003b2f'}}>
          <main className="step1">
            <div>
              <h4 >
                1.
              </h4>
              <img className='mt-4' src="https://assets.bitstamp.net/msc/_ipx/f_webp&s_96x96/bitstampImageUrl/register_a0962b5bb3.webp" alt="" />
            </div>
            <div>
              <h4 className='mt-6 mb-4'>
                Register
              </h4>
              <p className='w-[80%]'>
                Choose the right account type and verify your identity.
              </p>
            </div>
          </main>

          <main className="step2">
            <div>
              <h4>
                2.
              </h4>
              <img className='mt-4' src="https://assets.bitstamp.net/msc/_ipx/f_webp&s_96x96/bitstampImageUrl/fund_43d0a9aed3.webp" alt="" />
            </div>
            <div>
              <h4 className='mt-6 mb-4'>
                Fund
              </h4>
              <p className='w-[80%]'>
                Use your debit or credit card or a range of global bank deposit methods.
              </p>
            </div>
          </main>

          <main className="step3">
            <div>
              <h4>
                3.
              </h4>
              <img className='mt-4' src="https://assets.bitstamp.net/msc/_ipx/f_webp&s_96x96/bitstampImageUrl/trade_777dbac7e3.webp" alt="" />
            </div>
            <div>
              <h4 className='mt-6 mb-4'>
                Trade
              </h4>
              <p className='w-[80%]'>
                Buy, sell and transfer leading cryptocurrencies.
              </p>
            </div>
          </main>
        </div>
      </main>
    </div>
  )
}

export default StepsComponent
