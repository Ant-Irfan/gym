import React from 'react'
import { NavLink } from 'react-router-dom'
import "./memberCard.css"

const MemberTypeCard = ({ memberType, actions }) => {
  console.log(memberType)
  return (
    <div className="d-flex justify-content-center">

<div className="card card-custom bg-white border-white border-0" style={{width:"18rem"}}>
          <div className="card-custom-img"></div>
          <div className="card-custom-avatar">

          </div>
          <div className="card-body" style={{overflowY: "auto" }}>
            <h4 className="card-title">{memberType.typeName}</h4>
            <div className="card-text">
                <b>Opis: </b> { memberType.typeDescription } <br />
                <b>Clanarina: </b> { memberType.pay } KM
            </div>
          </div>
          <div className="card-footer" style={{background: "inherit", borderColor: "inherit"}}>
            <div className="col">
            <NavLink
            to={`kategorije/${memberType._id}`}
            >
            <button type="button" className="btn btn-block btn-primary text-white" style={{ width: "120px", marginRight:'10px'}}>Uredi</button>
            </NavLink> 
            <button 
            onClick={() => actions.deleteMemberType(memberType._id)}
            type="button" className="btn btn-block btn-danger" style={{ width: "120px"}}>Izbrisi</button>
            </div>
          </div>
        </div>        
            </div>

            
  )
}

export default MemberTypeCard