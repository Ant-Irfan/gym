import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import "./add-member.css"
import Logo from "../../../assets/logo.png"

const EditMember = (props) => {

    const { actions, memberTypes, member } = props
    const location = useLocation();

   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [category, setCategory] = useState("")
   const [phone, setPhone] = useState("")
   const [address, setAddress] = useState("")

   useEffect(() => {
        const id = location.pathname.split('/')[2]
        actions.getMemberTypes()
        actions.getMemberById(id)
   }, [])
   

   const handleSubmit = (e) => {
        const id = location.pathname.split('/')[2]
        e.preventDefault()
        const member = {
            name,
            email,
            address,
            telephone: phone,
            memberType: category
        }
        actions.editMember(member, id)
    }

  return (
        <div className="registration-form">
        <form 
        style={{ boxShadow: '0px 2px 10px #5f9ea0' }}
        onSubmit={handleSubmit}>
            <div className='text-center'>
                <img src={Logo} height="200" width="200"/>
                <h3 className='my-4 text-center'>Uredi clana</h3>
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
                <button 
                style={{ backgroundColor: '#5f9ea0'}}
                type="submit" className="btn btn-secondary btn-block create-account w-100">Uredi clana</button>
            </div>
        </form>
    </div>
  )
}

export default EditMember