import React from 'react'
import './subservice-card.styles.scss'

const SubserviceCard = ({ id, name, price, imageUrl }) => {
    return (
        <div className='subservice-card'>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}} />
                <div className='subcard-footer'>
                    <span className='name'>{ name }</span>
                    <span className='price'>{ price }</span>
            </div>
        </div>
    )
}
export default SubserviceCard;