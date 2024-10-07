import React from 'react'
interface Notification{
  buttonClick: ()=>void;
}
const SliderComponent: React.FC<Notification> = ({ buttonClick }) => {
  return (
    <div>
      <main className="landing-wrapper flex" style={{ backgroundColor: '#003b2f', paddingTop: '4rem', paddingLeft: '6.2rem', paddingRight: '2.3rem', justifyContent: 'space-between' }}>
        <div className="landing-text" style={{ width: '50%' }}>
          <div>
            <span style={{ backgroundColor: '#03fc9d', paddingLeft: '5px', paddingRight: '5px', color: '#003b2f' }}>
              Buy & trade
            </span>
            <h1 style={{ paddingLeft: '15px', lineHeight: '1.2' }}>
              with ease on the trusted crypto exchange.
            </h1>
          </div>
          <div className='minitext'>
            <p style={{ fontSize: '19px', marginTop: '2rem', width: '73%' }}>
              Designed for simplicity, Bitstamp helps you feel good about crypto. Trusted Crypto Exchange Since 2011.
            </p>
          </div>
          <button onClick={buttonClick} className="landing-btn" style={{ width: '160px', height: '45px', backgroundColor: '#03fc9d', borderRadius: '.3rem', marginTop: '3rem', color: '#003b2f' }}>
            Get Started
          </button>
          <div className='download flex' style={{ gap: '20px', marginTop: '2rem' }}>
            <img src="https://assets.bitstamp.net/static/webapp/images/app-store.17d326cb7ee37a202be68daf91087f9e59d131eb.svg" alt="" />
            <img src="https://assets.bitstamp.net/static/webapp/images/google-play.b5d4bf2604f09e2e08d9a745e8cd61f0c9ed0155.svg" alt="" />
          </div>
        </div>
        <div className="video-container">
          <img className='iphone' src="https://assets.bitstamp.net/static/webapp/images/landing/mobile.e6fd172ce1de2b580c11a05f4724d9d1a6a75fdb.avif" alt="" />
          <video autoPlay loop muted className="landing-spotlight" poster="https://assets.bitstamp.net/static/webapp/images/landing/simple-app-poster.a1b7dfe70742fbcb21db7e0af9c3e2d8afbc509f.png">
            <source src="https://assets.bitstamp.net/static/webapp/video/simple-app.7ed2b3ddb8d981788ad653cf1f024bfc236ff66d.mp4" type="video/mp4" />
          </video>
        </div>
      </main>
    </div>
  )
}

export default SliderComponent
