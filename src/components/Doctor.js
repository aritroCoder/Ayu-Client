import React from 'react'
import CardDoc from './CardDoc'
import FadeInWhenVisible from './FadeInWhenVisible';

const Doctor = () => {
    return (
        <>
            <div style={{ height: '100px' }}></div>
            <FadeInWhenVisible>
                <h1 style={{ textAlign: 'center' }}>Our Doctors</h1>
            </FadeInWhenVisible>
                <div className="container" style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    <CardDoc />
                    <CardDoc />
                    <CardDoc />
                    <CardDoc />
                    <CardDoc />
                    <CardDoc />
                    <CardDoc />
                    <CardDoc />
                    <CardDoc />
                    <CardDoc />
                    <CardDoc />
                    <CardDoc />
                </div>
            <div style={{ height: '100px' }}></div>
        </>
    )
}

export default Doctor