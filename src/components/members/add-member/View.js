import React, { useState, useEffect } from 'react'
import "./add-member.css"
import Logo from "../../../assets/logo.png"

const AddMember = (props) => {

    const { actions, memberTypes } = props

   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [category, setCategory] = useState("")
   const [phone, setPhone] = useState("")
   const [address, setAddress] = useState("")

   useEffect(() => {
        actions.getMemberTypes()
        console.log(memberTypes);
   }, [])
   

   const handleSubmit = (e) => {
        e.preventDefault()
        const member = {
            name,
            email,
            category,
            phone,
            address
        }
        actions.addMember(member)
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
                type="text" className="form-control item" id="name" placeholder="Ime i Prezime" />
            </div>
            <div className="form-group">
                <input 
                onChange={e => setEmail(e.target.value)}
                type="text" className="form-control item" id="email" placeholder="Email" />
            </div>
            <div className="form-group">
            <select 
            onChange={e => setCategory(e.target.value)}
            class="form-select item" aria-label="Default select example">
                { memberTypes && memberTypes.map(memberType => {
                    return(
                        <option value={memberType.typeName}>{memberType.typeName}</option>
                    )
                })}
            </select>
            </div>
            <div className="form-group">
                <input 
                onChange={e => setPhone(e.target.value)}
                type="text" className="form-control item" id="phone" placeholder="Broj telefona" />
            </div>
            <div className="form-group">
                <input 
                onChange={e => setAddress(e.target.value)}
                type="text" className="form-control item" id="address" placeholder="Adresa" />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-warning btn-block create-account w-100">Kreiraj clana</button>
            </div>
        </form>
    </div>
  )
}

export default AddMember