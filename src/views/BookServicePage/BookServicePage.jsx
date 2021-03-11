import React, { Component } from 'react';
import SUBSERVICE_DATA from './Subservice.data';
import SubserviceCollection from '../../components/subservice-collection/subservice-collection.component'
import './BookServicePage.styles.css'
import Navbar from '../../components/navabar/navbar.components';
import Footer from '../../components/footer/footer.components';


class BookServicePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            subservices: SUBSERVICE_DATA
        }
    }
    render() {
      const { subservices } = this.state;
        return (
        <div>
        <Navbar />
            <div className='bookservicepage'>{
              subservices.map(({ id, ...otherSubservicesProps }) =>(
                <SubserviceCollection key={id} {...otherSubservicesProps} />
              ))}
            </div>
        <Footer />
          </div>
            );
    }
}

export default BookServicePage;