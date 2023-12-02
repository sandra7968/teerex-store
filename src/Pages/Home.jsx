import React from 'react'
import { Row, Col , Card, Button} from 'react-bootstrap'
import useFetch from '../api'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import {addToCart} from '../redux/slices/cartSlice'
function Home() {
   const data = useFetch('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json')

  const dispatch = useDispatch()
  return (
    <Row className='ms-5 ' style={{marginTop:'100px'}}>
{ 
     data?.length>0?data.map((product,index)=>(

     <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
     <Card className='shadow rounded' style={{ width: '18rem', height:'30rem' }}>
     <Card.Img height={'220px'} variant="top" src={product.imageURL} />
     <Card.Body>
       <Card.Title className='fw-bold' style={{height:'50px'}}>{product.name} </Card.Title>
       <Card.Text>
       <h5  style={{height:'30px'}}>${product.price}</h5>
       </Card.Text>
       <div className='d-flex justify-content-between'>
         <Button onClick={()=>dispatch(addToWishlist(product))}   className='btn btn-primary'><i className="fa-solid fa-heart text-danger "></i></Button>
         <Button onClick={()=>dispatch(addToCart(product))}  className='btn btn-primary'><i className="fa-solid fa-cart-plus text-success"></i></Button>
 
       </div>
     </Card.Body>
   </Card>
     </Col>
     )): <p className='text-danger fw-bolder fs-4'>Nothing to display!</p>
    }
   </Row>
  )
}

export default Home