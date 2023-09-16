import React from 'react'
import {Button,Form} from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { type } from '@testing-library/user-event/dist/type';

const ContactForm = () => {
  let [name,setName]=useState('')
  let [phonenum,setPhonenum]=useState(0)

  let dispatch=useDispatch()

  const addContact=(event)=>{
    event.preventDefault()
    dispatch({type:'ADD_CONTACT', payload:{name,phonenum}})
  }


  return (
    <div className="enter-box">
      <Form onSubmit={(event)=>addContact(event)}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label className="box_title">Name</Form.Label>
        <Form.Control onChange={event=>setName(event.target.value)} className="box_input" type="text" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formContact">
        <Form.Label className="box_title">Phone Number</Form.Label>
        <Form.Control  onChange={event=>setPhonenum(event.target.value)} className="box_input" type="number" placeholder="Phone Number" />
      </Form.Group>

      <Button className="box_btn" variant="outline-dark" type="submit">
        Create
      </Button>
    </Form>
    </div>
  )
}

export default ContactForm