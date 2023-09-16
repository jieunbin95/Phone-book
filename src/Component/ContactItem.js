import React from 'react'
import { Row,Col } from 'react-bootstrap'

const ContactItem = ({item}) => {
  console.log(item)
  return (
    <Row className="item-box">
      <Col lg={2} >
        <img 
        width={80}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/800px-Unknown_person.jpg"/>
      </Col>
      <Col lg={10}>
        <div className="box-name" >{item.name}</div>
        <div className="box-num">{item.phonenum}</div>
      </Col>
    </Row>
  )
}

export default ContactItem