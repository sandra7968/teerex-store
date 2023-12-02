import React from 'react'
import { Nav,Navbar,Container, Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProducts } from '../redux/slices/productSlice'


function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)
  return (
    <div>
       <Navbar style={{zIndex:'1'}} bg="primary" data-bs-theme="dark" className='position-fixed top-0 w-100 mb-5'>
       <Container>
       <Navbar.Brand><Link to={'/'} style={{textDecoration:'none',color:'white',fontWeight:'bold'}}><i className='fa-solid fa-truck-fast me-2'></i>TeeRex Store</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">

            <Nav.Link className='btn border'><Link to={'/wishlist'} className='d-flex align-items-center' style={{textDecoration:'none',color:'white',fontWeight:'bold'}}><i className='fa-solid fa-heart text-danger me-2 '></i>Wishlist <Badge className='ms-2 ' bg="light">{wishlist.length}</Badge></Link></Nav.Link>
            <Nav.Link className='btn border ms-3'><Link to={'/cart'} className='d-flex align-items-center' style={{textDecoration:'none',color:'white',fontWeight:'bold'}}><i className='fa-solid fa-cart-shopping text-warning me-2 '></i>Cart <Badge className='ms-2 ' bg="light">{cart.length}</Badge></Link></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
        </Container> 
        </Navbar>
        
    </div>
  )
}

export default Header