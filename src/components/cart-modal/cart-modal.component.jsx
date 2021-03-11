import React, { Component } from 'react'
import { Button, Modal } from 'react-bootstrap'
import CartCard from '../cart-card/cart-card.components'


export default class CartModal extends Component {
  constructor(){
    super();

    this.state = {
        cart: [],
        subId:[],
        orderaddress:{},
        totalamount:null
    }
    this.handleChange = this.handleChange.bind(this) 
    this.handleSubmit = this.handleSubmit.bind(this) 
} 
totalPrice=0
subserviceKIID=[];
subserviceKPrice=[];


AddId(){
  this.state.cart.map(({subservice_id,price})=>{
  if (this.subserviceKIID.indexOf(subservice_id) === -1) {
      this.subserviceKIID.push(subservice_id)
      this.subserviceKPrice.push(price)
      this.totalPrice=this.totalPrice+price
  //  this.setState({totalamount: this.totalPrice})
      
     
  }
 
    
  })}
 
    
  componentDidMount() {
    console.log(this.totalPrice)
     this.refreshlist()  
      //  this.AddId() 
    
  }
  refreshlist(){
    var customer_id = '26';
     var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("http://localhost:4000/api/ViewFromCart/"+customer_id, requestOptions)
  .then(response => response.json())
    .then(result =>{this.setState({cart: result})
  })
  .catch(error => console.log('error', error));

  fetch("http://localhost:4000/api/ViewOrderAddress/"+customer_id, requestOptions)
  .then(response => response.json())
    .then(result =>{this.setState({orderaddress: result})
  })
  .catch(error => console.log('error', error));
   
}
componentDidUpdate(){
  this.refreshlist(); 
  this.AddId()   
  }
 
  placeorder(e){
    alert(this.state.orderaddress.address)
  }

  handleChange(event){ 
    console.log(event.target.name,event.target.value)
    let orderaddress = this.state.orderaddress;
    switch (event.target.name) {
      case 'address':
          orderaddress.address = event.target.value
        break;
        case 'area':
          orderaddress.area = event.target.value
        break;
        case 'city':
          orderaddress.city = event.target.value
        break;
      default:
        break;
    }
    console.log(orderaddress.address);
    this.setState({ orderaddress })
    console.log("val"+this.state.orderaddress.address)
  } 
  customer_id='26'
  handleSubmit(event){ 
    event.preventDefault() 
    let i;
    for(i=0;i<this.subserviceKIID.length;i++){
      console.log(this.subserviceKIID[i],this.state.orderaddress.address,this.state.orderaddress.area,this.state.orderaddress.city,this.subserviceKPrice[i])
      var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("customer_id", this.customer_id);
        urlencoded.append("subservice_id", this.subserviceKIID[i]);
        urlencoded.append("address", this.state.orderaddress.address);
        urlencoded.append("area", this.state.orderaddress.area);
        urlencoded.append("amount", this.subserviceKPrice[i]);
        urlencoded.append("city", this.state.orderaddress.city);

        var requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: urlencoded,
          redirect: 'follow'
        };

        fetch("http://localhost:4000/api/PlaceOrder", requestOptions)
          .then(response => response.json())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
    
    
    }
  } 
  render() {
    
    
    
    return (

      <div>
        <form onSubmit={(e)=>{e.preventDefault()}}>
                <Modal
              
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            
            Your Cart
         
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="container-fluid d-flex row nthcard">
         
        {this.state.cart.map(({ cart_id, ...otherCartProps}) => (
           
        <CartCard key={cart_id} {...otherCartProps} cart_id={cart_id} />
           ))}  

        </Modal.Body>
        <Modal.Footer>
        <form onSubmit={this.handleSubmit}>
          <div>
          <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
         
                     
                       
                            <div className="cardi h-100">
	                            <div className="cardi-body">
		                            <div className="row gutters">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				                            <div className="form-group">
				                            	<label htmlFor="Street">Address</label>
				                            	<input type="text" name='address' defaultValue={this.state.orderaddress.address}  className="form-control" id="Street" onChange={this.handleChange}  placeholder="Enter Address" />
				                            </div>
			                            </div>
			                            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
			                            	<div className="form-group">
			                            		<label htmlFor="Pincode">Pincode</label>
			                            		<input type="text" name='pincode' className="form-control" defaultValue={this.state.orderaddress.area} onChange={this.handleChange} id="sTate" placeholder="Enter Pincode" />
			                            	</div>

			                            </div>
                                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
			                            	<div className="form-group">
			                            		<label htmlFor="ciTy">City</label>
			                            		<input type="name" name='city' defaultValue={this.state.orderaddress.city}  className="form-control" onChange={this.handleChange} id="ciTy" placeholder="Enter City" />
			                            	</div>
			                            </div>
          </div></div></div>
          </div>
          </div>
          <div style={{marginTop:0}}>
          <label style={{fontWeight:"bold",marginRight:15,fontSize:20}}>Total Amount: ₹{this.totalPrice}</label>
          <Button type="submit"> Place Order</Button>
          </div>
          </form> 
         
          {/* <Button onClick={this.props.onHide}>Close</Button> */}
        </Modal.Footer>
      </Modal>
      </form>
            </div>
        )
      }
    }
    // console.log(this.state);




