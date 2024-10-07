import React from 'react'
interface Notification{
    buttonClick: ()=>void;
}
const PlatformComponent: React.FC<Notification> = ({ buttonClick }) => {
    return (
        <div>
            <div className="platform-wrapper relative flex justify-between pt-[4rem] pb-[4rem] pl-[4rem] pr-[4rem]">
                <div className="platform-widget">
                    <img className='absolute top-[8%] w-[42%]' src="https://assets.bitstamp.net/msc/_ipx/f_webp&s_575x572/bitstamp.net/mobile_apps_2a4011f645.webp" alt="" />
                </div>
                <div className="platform-text w-[50%] pt-[4rem]">
                    <section>
                        <div className='flex' style={{ color: '#003b2f', fontSize: '3rem', fontWeight: 'bold' }}>
                            <span style={{ backgroundColor: '#03fc9d', paddingLeft: '5px', paddingRight: '5px', color: '#003b2f' }}>
                                Trade
                            </span>
                            <h1 className='way' style={{ marginLeft: '1rem' }}>
                                on the go with our
                            </h1>
                        </div>
                        <h1 style={{color: '#003b2f'}}>
                            mobile apps.
                        </h1>
                    </section>
                    <section className='pmh' style={{ marginTop: '2rem' }}>
                        <h4 className='w-[83%]' style={{ color: '#003b2f', fontSize: '1.5rem', fontWeight: 'bold' }}>
                            Take control of your crypto anytime with the app that fits your experience
                        </h4>
                        <p className='mt-[1rem] mb-[1rem]' style={{ color: '#003b2f', fontSize: '1rem'}}>
                            Choose between the Bitstamp app, the easiest way to buy and sell crypto, or the Bitstamp Pro app, built for pro traders and crypto experts.
                        </p>
                        <p className='text-[12px]' style={{ color: '#003b2f'}}>
                            Not yet available in UK & USA but coming soon.

                            Explore the Apps
                        </p>
                    </section>
                    <button onClick={buttonClick} className="landing-btn text-[.9rem]" style={{ width: '160px', height: '45px', backgroundColor: '#03fc9d', borderRadius: '.3rem', marginTop: '2rem', color: '#003b2f' }}>
                        Explore the apps
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PlatformComponent
