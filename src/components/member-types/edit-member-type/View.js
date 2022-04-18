import React, { useState, useEffect } from 'react'
import Logo from "../../../assets/logo.png"
import { useLocation } from "react-router-dom";

const EditMemberType = (props) => {
    const { actions, memberType } = props
    const location = useLocation();
   const [name, setName] = useState("")
   const [description, setDescription] = useState("")
   const [price, setPrice] = useState("")

   useEffect(() => {
    const id = location.pathname.split('/')[2]
    actions.getMemberTypeById(id)
}, [location])

   const handleSubmit = (e) => {
        e.preventDefault()
        const updatedMemberType = {
            typeName: name,
            typeDescription: description,
            pay: price
        }
       actions.updateMemberType(updatedMemberType, memberType._id)
    }

  return (
    <div className="registration-form">
    <form 
    style={{ boxShadow: '0px 2px 10px #5f9ea0' }}   
    onSubmit={handleSubmit}>
        <div className='text-center'>
            <img src={Logo} height="200" width="200"/>
            <h3 className='text-center'>Uredi clana</h3>
        </div>
        <div className="form-group">
            <input 
            onChange={e => setName(e.target.value)}
            type="text" className="form-control item" id="name" placeholder="Ime kategorije" />
        </div>
        <div className="form-group">
            <input 
            onChange={e => setDescription(e.target.value)}
            type="text" className="form-control item" id="email" placeholder="Opis" />
        </div>
        <div className="form-group">
            <input 
            onChange={e => setPrice(e.target.value)}
            type="text" className="form-control item" id="address" placeholder="Cijena" />
        </div>
        <div className="form-group">
            <button 
            style={{ backgroundColor: '#5f9ea0'}}
            type="submit" className="btn btn-warning btn-block create-account w-100">Uredi kategoriju</button>
        </div>
    </form>
</div>
  )
}
export default EditMemberType