import React from 'react'
interface Notification{
    buttonClick: ()=>void;
}
const InstitutionComponent: React.FC<Notification> = ({ buttonClick }) => {
    return (
        <div>
            <main className="instituition-wrapper p-[4rem]">
                <div className="instituition-header">
                    <div className='flex justify-center'>
                        <span className=' text-center pr-[.5rem]' style={{ backgroundColor: '#03fc9d', paddingLeft: '5px', paddingRight: '5px', color: '#003b2f' }}>
                            Reliable
                        </span>
                        <h4 className=' text-center pl-[.5rem]' style={{ color: '#003b2f' }}>
                            institutional access
                        </h4>
                    </div>
                    <div>
                        <h4 className='text-center' style={{ color: '#003b2f' }} >
                            to crypto 
                        </h4>
                    </div>
                </div>
                <div className="instituition-widget flex justify-center pt-[4rem]">
                    <main className='justify-around inst flex w-[50%]'>
                        <div>
                            <img src="https://assets.bitstamp.net/msc/_ipx/f_webp&s_189x43/bitstampImageUrl/Dukascopy_888acd9202.webp" alt="" />
                        </div>
                        <div>
                            <img src="https://assets.bitstamp.net/msc/_ipx/f_webp&s_238x46/bitstampImageUrl/Swissquote_5fc90c4cef.webp" alt="" />
                        </div>
                    </main>
                </div>
                <div className='inst-button w-[100%] flex justify-center mt-[4rem]'>
                    <button onClick={buttonClick} className="instituition-btn font-semibold" style={{ width: '260px', height: '45px', backgroundColor: '#03fc9d', borderRadius: '.3rem', marginTop: '1rem', color: '#003b2f' }}>
                        Learn about instituitional offer
                    </button>
                </div>
            </main>
        </div>
    )
}

export default InstitutionComponent
