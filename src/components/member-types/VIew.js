import React from 'react'
import { useEffect, useState } from 'react'
import MemberTypeCard from "./member-type-card/View"
import { NavLink } from 'react-router-dom';

const MemberTypes = (props) => {

    const { actions, memberTypes } = props;
    const [hints, sethints] = useState([])
    useEffect(() => {
        actions.getMemberTypes();
        console.log(memberTypes);
    },[])

    const handleChange = (e) => {
        const val = e.target.value;
        let hints = [];
		if (val.length > 0) {
			const regex = new RegExp(`^${val}`, 'i');
			hints = memberTypes.sort((a, b) =>
				a.typeName.localeCompare(b.typeName)
			);
			hints = hints.filter(hint => regex.test(hint.typeName));
		}
        sethints(hints)
    }

  return (
    <div className='container'>
        <h3 className='my-4 text-center'>Kategorije clanova</h3>
        <div className="input-group mb-3">
            <button className="btn btn-outline-primary" type="button" id="button-addon1">Pretrazi</button>
            <input 
            onChange={(e) => handleChange(e)}
            type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
            <div style={{marginLeft: '20px'}}>
            <NavLink to="/dodaj-kategoriju">
            <button className="btn btn-outline-success" type="button" id="button-addon1">Dodaj novu kategoriju</button>
            </NavLink>
            </div>
        </div>
        {hints.length > 0 && <h3 className='text-center my-4'>Rezultati pretrage</h3>}
        {hints.length === 0 && <h3 className='text-center my-4'>Sve kategorije</h3>}
        <div className='row m-auto'>
        {
            hints.length > 0 && hints.map(memberType => {
                return (
                <div className='col-4' style={{ marginBottom: '20px'}}>
                    <MemberTypeCard 
                    actions={actions}
                    memberType={memberType}
                />
                </div>

                )
            })
        }
        {
           hints.length === 0 && memberTypes && memberTypes.map(memberType => {
                return (
                    <div className='col-xs-12 col-md-6 col-lg-4' style={{ marginBottom: '40px'}}>
                <MemberTypeCard 
                    actions={actions}
                    memberType={memberType}
                />
                </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default MemberTypes