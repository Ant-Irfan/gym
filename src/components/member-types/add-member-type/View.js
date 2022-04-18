import React, { useState } from 'react'
import Logo from "../../../assets/logo.png"

const AddMemberType = (props) => {
    const { actions } = props
   const [name, setName] = useState("")
   const [description, setDescription] = useState("")
   const [price, setPrice] = useState("")

   const handleSubmit = (e) => {
        e.preventDefault()
        const memberType = {
            name,
            description,
            price
        }
       actions.addMemberType(memberType)
    }

  return (
    <div className="registration-form">
    <form onSubmit={handleSubmit}>
        <div className='text-center'>
            <img src={Logo} height="200" width="200"/>
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
            <button type="submit" className="btn btn-warning btn-block create-account w-100">Kreiraj kategoriju</button>
        </div>
    </form>
</div>
  )
}
export default AddMemberType