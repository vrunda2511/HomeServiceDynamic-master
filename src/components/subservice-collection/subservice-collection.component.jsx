import React from 'react'
import SubserviceCard from '../subservice-card/subservice-card.component'
import './subservice-collection.styles.scss'

const SubserviceCollection = ({ title, items }) => {
    return (
        <div className='preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='collection'>
                {
                    items.filter((item, index)=> index < 4 ).map(({id, ...otherItemProps})=>(
                        <SubserviceCard key={id} {...otherItemProps} />
                    ))
                }
            </div>
        </div>
    )
}

export default SubserviceCollection
