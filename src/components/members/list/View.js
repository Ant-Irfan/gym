import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./members.css"
import User from "../../../assets/user.png"

const Members = ( props ) => {

    const { actions, members } = props;
    const [hints, sethints] = useState([])
    
    useEffect(() => {
        actions.getMembers();
    },[])

    const handleChange = (e) => {
        const val = e.target.value;
        let hints = [];
		if (val.length > 0) {
			const regex = new RegExp(`^${val}`, 'i');
			hints = members.sort((a, b) =>
				a.name.localeCompare(b.name)
			);
			hints = hints.filter(hint => regex.test(hint.name));
		}
        sethints(hints)
        console.log(hints);
    }
    
  return (
    <div className='container mt-5'>
         <div className="input-group mb-3">
            <button className="btn btn-outline-primary" type="button" id="button-addon1">Pretrazi</button>
            <input 
            onChange={(e) => handleChange(e)}
            type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
            <div style={{marginLeft: '20px'}}>
            <NavLink to="/dodaj-clana">
            <button className="btn btn-outline-success" type="button" id="button-addon1">Dodaj novog clana</button>
            </NavLink>
            </div>
        </div>
        {hints.length > 0 && <h3 className='text-center my-3'>Rezultati pretrage</h3>}
        {hints.length === 0 && <h3 className='text-center my-3'>Svi clanovi</h3>}


<div className="row">
	<div className="col-lg-12">
		<div className="main-box clearfix">
			<div className="table-responsive">
				<table className="table user-list">
					<thead>
						<tr>
							<th><span>Clan</span></th>
							<th><span>Clanarina</span></th>
							<th className="text-center"><span>Status</span></th>
							<th><span>Email</span></th>
							<th><span>Akcije</span></th>
						</tr>
					</thead>
                    <tbody>
                    {
                hints.length > 0 && hints.map(member => {
                return (
						<tr>
							<td>
								<img src={User} alt="" />
								<b>{member.name}</b>
								<div className="user-subhead">{member.memberType}</div>
							</td>
							<td>
								2013/08/08
							</td>
							<td className="text-center">
								<span className="label label-default">Inactive</span>
							</td>
							<td>
								{member.email}
							</td>
							<td style={{width: "20%"}}>
								<span className="table-link success" style={{color: '#2aa493', cursor:'pointer'}}>
									<span className="fa-stack">
										<i className="fa fa-square fa-stack-2x" style={{ color: 'cadetblue'}}></i>
										<i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
									</span>
								</span>
								<span 
                                onClick={() => actions.deleteMember(member._id)}
                                className="table-link danger" style={{color: '#fe635f', cursor:'pointer'}}>
									<span className="fa-stack">
										<i className="fa fa-square fa-stack-2x"></i>
										<i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
									</span>
								</span>
							</td>
						</tr>
                )
            })}
            {
            hints.length === 0 && members !== undefined && members.map(member => {
                return (
                    <tr>
                        <td>
                            <img src={User} alt="" />
                            <b>{member.name}</b>
                            <div className="user-subhead">{member.memberType}</div>
                        </td>
                        <td>
                            2013/08/08
                        </td>
                        <td className="text-center">
                            <span className="label label-default" style={{ backgroundColor: "#ef3d39", color:'white', padding:"5px", borderRadius:'4px'}}>Neaktivan</span>
                        </td>
                        <td>
                            {member.email}
                        </td>
                        <td style={{width: "20%"}}>
                            <span className="table-link success" style={{color: '#2aa493', cursor:'pointer'}}>
                            <Link style={{ textDecoration: 'none' }}  to={`clanovi/${member._id}`}>
                                <span className="fa-stack">
                                    <i className="fa fa-square fa-stack-2x" style={{ color: 'cadetblue'}}></i>
                                    <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
                                </span>
                            </Link>
                            </span>
                            <span className="table-link danger" style={{color: '#fe635f', cursor:'pointer'}}>
                                <span 
                                onClick={() => actions.deleteMember(member._id)}
                                className="fa-stack">
                                    <i className="fa fa-square fa-stack-2x"></i>
                                    <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                                </span>
                            </span>
                        </td>
                    </tr>
            )})}
                        </tbody>

                    </table>
			</div>
            </div>
            </div>
            </div>
        
        <div>
        </div>
    </div>
  )
}

export default Members