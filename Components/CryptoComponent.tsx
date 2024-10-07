import React from 'react'
interface Notification{
  buttonClick: ()=>void;
}
const CryptoComponent: React.FC<Notification> = ({ buttonClick }) =>  {
  return (
    <div>
      <main className="crypto-wrapper relative flex h-[103vh]">
        <div className="crypto-widget w-[60%] h-[100%]">
          <img className='absolute left-[-10%]' src="https://assets.bitstamp.net/msc/_ipx/f_webp&s_780x702/bitstampImageUrl/guy_e7100f4155.webp" alt="" />
        </div>
        <div className="crypto-tectx mt-[9%] w-[60%]">
          <div className='flex items-center buycryp'>
            <h1 className='mr-[.8%]' style={{ color: '#003b2f' }}>
              Buy crypto
            </h1>
            <span className='ml-[.8%]' style={{ backgroundColor: '#03fc9d', paddingLeft: '5px', paddingRight: '5px', color: '#003b2f' }}>
              Instantly
            </span>
          </div>
          <div className="crypto-grid justify-between flex text-[#003b2f] mt-[10%] mr-[20%]">
            <div className='w-[26%]'>
              <h4>
                Effortless ways to buy
              </h4>
              <p>
                Pay with credit, debit cards or Apple Pay, Google Pay (some exceptions apply).
              </p>
            </div>
            <div className='w-[26%]'>
              <h4>
                Available everywhere
              </h4>
              <p>
                Deposit and withdraw funds easily from anywhere in the world. US customers can use ACH for instant deposits.
              </p>
            </div>
            <div className='w-[26%]'>
              <h4>
                Cash out in seconds
              </h4>
              <p>
                Withdraw funds directly to your bank account quickly and securely.
              </p>
            </div>
          </div>
          <button onClick={buttonClick} className="cryptoo-btn " style={{ width: '160px', height: '45px', backgroundColor: '#003b2f', borderRadius: '.3rem', marginTop: '2.5rem', color: '#03fc9d' }}>
            Get started
          </button>
        </div>
      </main>
    </div>
  )
}

export default CryptoComponent
