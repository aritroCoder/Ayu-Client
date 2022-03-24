import React from 'react'
import CardItem from './CardItem';
import bg from '../Assets/img/bg.jpg'
import FadeInWhenVisible from './FadeInWhenVisible';

const mainbody = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})` }}>
            <FadeInWhenVisible>
            <div style={{height: '200px'}}></div>
                <h3 style={{ textAlign: 'center', fontSize: '45px', padding: '20px 0' }}>World class treatment. Available completely online</h3>
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <CardItem />
                    <CardItem />
                    <CardItem />
                    <CardItem />
                </div>
                <div style={{height: '200px'}}></div>
            </FadeInWhenVisible>
        </div>
    )
}

export default mainbody