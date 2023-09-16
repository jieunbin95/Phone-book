import React from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'
import { useState,useEffect } from 'react'

const ContactList = () => {
  let {contactList,keyword}=useSelector(state=>state)
  let [filteredList, setFilteredList] = useState([]);

  useEffect(()=>{
    if(keyword !== ''){
      let list=contactList.filter(item=>item.name.includes(keyword));

      setFilteredList(list)
    } else {setFilteredList(contactList)}
  },[keyword])

  return (
    <div className="phone-list">
      <SearchBox/>
      {filteredList.map((item)=>(<ContactItem item={item}/>))}  
    </div>
  )
}

export default ContactList