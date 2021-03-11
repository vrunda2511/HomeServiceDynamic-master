import React from 'react'
import Orders from '../../components/orders/orders.components'
import Navbar from '../../components/navabar/navbar.components'
import Footer from '../../components/footer/footer.components'

const OrderPage = () => {
    return (
        <div>
            <Navbar />
            <Orders />
            <Footer />
        </div>
    )
}

export default OrderPage
