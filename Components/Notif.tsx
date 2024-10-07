'use client'
import React from 'react'

interface Notification {
    buttonClick: () => void;
}
const Notif: React.FC<Notification> = ({ buttonClick }) => {
    return (
        <div>
            <div className="notif-wrapper absolute top-0">
                <div>
                    <section>
                        <h1>
                            Sorry!
                        </h1>
                        <p>
                            This page is still cooking.
                        </p>
                    </section>
                    <section className='notif-btn'>
                        <button onClick={buttonClick}>
                            Close
                        </button>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Notif
