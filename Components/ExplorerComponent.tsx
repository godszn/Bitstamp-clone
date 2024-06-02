import React from 'react'

const ExplorerComponent = () => {
    return (
        <div>
            <div className="explorer-wrapper p-[4rem] flex justify-around">
                <div className="explorer-text w-[44%]">
                    <section>
                        <h1>
                            Join Bitstamp’s
                        </h1>
                        <span style={{ backgroundColor: '#03fc9d', paddingLeft: '5px', paddingRight: '5px', color: '#003b2f', fontSize: '2rem' }}>
                            crypto explorers
                        </span>
                    </section>
                    <div className='mt-[2rem]'>
                        <p>
                            Take a journey to crypto clarity with our handy guide: Crypto Categories Unveiled
                        </p>
                    </div>
                    <button className="landing-btn" style={{ width: '160px', height: '45px', backgroundColor: '#03fc9d', borderRadius: '.3rem', marginTop: '3rem', color: '#003b2f' }}>
                        Start exploring
                    </button>
                </div>
                <div className="explorer-widget w-[40%]">
                    <img src="https://assets.bitstamp.net/msc/_ipx/f_webp&s_680x488/bitstamp.net/crypto_categories_43fed5d51c.webp" alt="" />
                </div>
            </div>
        </div>
    )
}

export default ExplorerComponent
