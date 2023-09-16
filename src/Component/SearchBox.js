import React from 'react'
import { Row,Col,Form,Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useState } from 'react'


const SearchBox = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch=useDispatch();

 const searchByName=(event)=>{
  event.preventDefault();
  dispatch({type: "SEARCH_BY_USERNAME", payload: { keyword }})
 }

  return (
    <Form onSubmit={searchByName}>
      <Row >
      <Col lg='10' className="right-box">
       <Form.Control onChange={(event) => setKeyword(event.target.value)} className="right-input" type="text" placeholder="Search Name" />      
      </Col>     

      <Col lg='2' className="right-box">
       <Button type="submit" className="right-btn" variant="dark">Search</Button>
      </Col>
    </Row>
    </Form>
    
  )
}

export default SearchBox