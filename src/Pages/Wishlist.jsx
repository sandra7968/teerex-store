import React from 'react'
import { Row, Col, Card, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'

function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()
  const handleWishlistCart = (product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
  }
  return (
    <div style={{marginTop:'100px'}}>
      <Row className='container m-5'>
      {
          wishlistArray.length>0?
          wishlistArray.map((product,index)=>(
            <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
      <Card className='shadow rounded' style={{ width: '18rem', height:'30rem' }}>
      <Card.Img height={'220px'} variant="top" src={product.imageURL} />
      <Card.Body>
        <Card.Title className='fw-bold' style={{height:'50px'}}>{product?.name}</Card.Title>
        <Card.Text>
        <h5  style={{height:'30px'}}>${product?.price}</h5>
        </Card.Text>
        <div className='d-flex justify-content-between'>
          <Button onClick={()=>dispatch(removeFromWishlist(product.id))}  className='btn btn-dark'><i className="fa-solid fa-trash text-danger "></i></Button>
          <Button onClick={()=>handleWishlistCart(product)} className='btn btn-dark'><i className="fa-solid fa-cart-plus text-success"></i></Button>
  
        </div>
      </Card.Body>
    </Card>
      </Col>
      )):
           <div className='text-center'>
            <img style={{width:'190px',height:'190px', borderRadius:'290px'}}  src= "https://assets-v2.lottiefiles.com/a/5e73658c-117c-11ee-b252-0feba9ce2d45/dTs9No2eNH.gif" alt="" />
            <h2 className='m-3' style={{height:'40px', color:'beige'}}>Your Wishlist is Empty!</h2>
            <Link to={'/'} className='btn btn-dark  '>Back to Home</Link>
          </div>
        }
      </Row>
    </div>
  )
}

export default Wishlist