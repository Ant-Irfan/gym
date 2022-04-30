import React, { useState } from 'react'
import { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./members.css"
import User from "../../../assets/user.png"
import { w3cwebsocket as W3CWebSocket } from "websocket";
import moment from 'moment';
import Modal from 'react-modal';
import MemberTime from '../memberTime/memberTime';
import { DatePicker, Space } from 'antd';
import Pagination from '../Pagination/Pagination';

const client = new W3CWebSocket('ws://127.0.0.1:8000');
const { RangePicker } = DatePicker;
const Members = ( props ) => {

    const { actions, members } = props;
    const [hints, sethints] = useState([])
    const [cardId, setCardId] = useState(null)
    const [modalIsOpen, setIsOpen] = useState(false);
    const [showDatePicker, setshowDatePicker] = useState(false);
    const [currentActiveUser, setcurrentActiveUser] = useState(null);
    const [startDate, setstartDate] = useState(null);
    const [endDate, setendDate] = useState(null);
    const [currentActiveUserActivity, setcurrentActiveUserActivity] = useState(null)
    const [membersToShow, setMembersToShow] = useState([{
        name: "Irfan Duric",
        email: "irfan98@live.com",
        category: "Studentski paket",
        phone: "12321",
        addres: "sad",
        cardId: "04dc456ae13f84",
        startDate: "2022-04-27",
        endDate: "2022-05-09"
    },
    {
        name: "Irfan Duric",
        email: "irfan98@live.com",
        category: "Studentski paket",
        phone: "12321",
        addres: "sad",
        cardId: "04dc456ae13f84",
        startDate: "2022-04-27",
        endDate: "2022-05-09"
    },{
        name: "Irfan Duric",
        email: "irfan98@live.com",
        category: "Studentski paket",
        phone: "12321",
        addres: "sad",
        cardId: "04dc456ae13f84",
        startDate: "2022-04-27",
        endDate: "2022-05-09"
    },
    {
        name: "Irfan Duric",
        email: "irfan98@live.com",
        category: "Studentski paket",
        phone: "12321",
        addres: "sad",
        cardId: "04dc456ae13f84",
        startDate: "2022-04-27",
        endDate: "2022-05-09"
    },
    {
        name: "Irfan Duric",
        email: "irfan98@live.com",
        category: "Studentski paket",
        phone: "12321",
        addres: "sad",
        cardId: "04dc456ae13f84",
        startDate: "2022-04-27",
        endDate: "2022-05-09"
    },
    {
        name: "Irfan Duric",
        email: "irfan98@live.com",
        category: "Studentski paket",
        phone: "12321",
        addres: "sad",
        cardId: "04dc456ae13f84",
        startDate: "2022-04-27",
        endDate: "2022-05-09"
    },
    {
        name: "Irfan Duric",
        email: "irfan98@live.com",
        category: "Studentski paket",
        phone: "12321",
        addres: "sad",
        cardId: "04dc456ae13f84",
        startDate: "2022-04-27",
        endDate: "2022-05-09"
    },
    {
        name: "Irfan Duric",
        email: "irfan98@live.com",
        category: "Studentski paket",
        phone: "12321",
        addres: "sad",
        cardId: "04dc456ae13f84",
        startDate: "2022-04-27",
        endDate: "2022-05-09"
    },
    {
        name: "Irfan Duric",
        email: "irfan98@live.com",
        category: "Studentski paket",
        phone: "12321",
        addres: "sad",
        cardId: "04dc456ae13f84",
        startDate: "2022-04-27",
        endDate: "2022-05-09"
    },])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = membersToShow && membersToShow.slice(indexOfFirstPost, indexOfLastPost);

     // Change page
    const paginate = pageNumber => {
        console.log(pageNumber);
        setCurrentPage(pageNumber);
    }

    
    const modal = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)'
        },
    };

    function onChange(value, dateString) {
        console.log("dad");
        setstartDate(dateString[0])
        setendDate(dateString[1])
    }
  
  function onOk(value) {
    console.log('onOk: ', value);
  }
    
    useEffect(() => {
        actions.getMembers();
    },[])

    useEffect(() => {
        client.onopen = () => {
            console.log('WebSocket Client Connected');
            client.onmessage = (message) => {
                const dataFromServer = JSON.parse(message.data);
                console.log(dataFromServer);
                setcurrentActiveUser(dataFromServer);
                handleMemberCheckIn(dataFromServer);
            }
        };
    }, [])


  /*   useEffect(() => {
        if (members) {
            setMembersToShow(members)
        }
    }, [members]) */

    const handleMemberCheckIn = (member) => {
        const given = moment(member.endDate, "YYYY-MM-DD");
        const current = moment().startOf('day'); 
        const activity = moment.duration(given.diff(current)).asDays()
        setcurrentActiveUserActivity(activity)
        if (activity >= 10) {
            actions.memberCheckedIn(member);
        }
        else 
            openActivityModal()
    }

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

   const openActivityModal = () => {
    setIsOpen(true)
   }

   const closeActivityModal = () => {
    setIsOpen(false)
    }

    const extendByNewDate = () => {
        if (startDate && endDate) {
            const memberUpdated = {
                ...currentActiveUser,
                startDate,
                endDate
            }
            console.log(memberUpdated);
            actions.editMember(memberUpdated, currentActiveUser._id)
        }
    }

    const extendByOneMonth = () => {
        const newEndDateMonth = moment(currentActiveUser.endDate).add(1, 'M');
        if (currentActiveUser) {
            const memberUpdated = {
                ...currentActiveUser,
                startDate: currentActiveUser.endDate,
                endDate: moment(newEndDateMonth).format("YYYY-MM-DD")
            }
            console.log(memberUpdated);
            actions.editMember(memberUpdated, currentActiveUser._id)
        }
    }

    const handleFilterChange = (e) => {
        if (e.target.value === "aktivni") {
            const activeMembers = members.filter(member => isActiveMember(member))
            setMembersToShow(activeMembers)
        }
        else if (e.target.value === "neaktivni") {
            const unActiveMembers = members.filter(member => isUnactiveMember(member))
            setMembersToShow(unActiveMembers)
        }
        else if (e.target.value === "predistek") {
            const nearlyZero = members.filter(member => isNearlyZero(member))
            setMembersToShow(nearlyZero)
        }
        else
            setMembersToShow(members)
            
    }
    
    const isActiveMember = (member) => {
        var given = moment(member.endDate, "YYYY-MM-DD");
        var current = moment().startOf('day');
        return moment.duration(given.diff(current)).asDays() >= 10
    }

    const isUnactiveMember = (member) => {
        var given = moment(member.endDate, "YYYY-MM-DD");
        var current = moment().startOf('day');
        console.log(moment.duration(given.diff(current)).asDays());
        return moment.duration(given.diff(current)).asDays() <= 0 || moment.duration(given.diff(current)).asDays() === NaN
    }

    const isNearlyZero = (member) => {
        var given = moment(member.endDate, "YYYY-MM-DD");
        var current = moment().startOf('day');
        return moment.duration(given.diff(current)).asDays() > 0 && moment.duration(given.diff(current)).asDays() < 10
    }

  return (
    <div className='container mt-5'>
         <div className="input-group mb-3">
            <button className="btn btn-outline-primary" type="button" id="button-addon1">Pretrazi</button>
            <input 
            style={{ width: "40%" }}
            onChange={(e) => handleChange(e)}
            type="text" className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" />
            <select 
                onChange={(e) => handleFilterChange(e)}
                class="form-select" aria-label="Default select example">
                <option value="svi">Svi</option>
                <option value="aktivni">Aktivni</option>
                <option value="neaktivni">Neaktivni</option>
                <option value="predistek">Pred istek</option>
            </select>
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
                                Od: {member.startDate} <br></br>
                                Do: {member.endDate}
							</td>
                                    <MemberTime
                                        startDate={member.startDate}
                                        endDate={member.endDate}
                                    />
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
            hints.length === 0 && membersToShow !== undefined && membersToShow && membersToShow.map(member => {
                return (
                    <tr>
                        <td>
                            <img src={User} alt="" />
                            <b>{member.name}</b>
                            <div className="user-subhead">{member.memberType}</div>
                        </td>
                        <td>
                            Od: {member.startDate} <br></br>
                            Do: {member.endDate}
                        </td>
                        <MemberTime
                                startDate={member.startDate}
                                endDate={member.endDate}
                            />
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

        <Pagination
            postsPerPage={postsPerPage}
            totalPosts={membersToShow && membersToShow.length}
            paginate={paginate}
        />
        
        {
            currentActiveUser && currentActiveUserActivity &&  
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeActivityModal}
            style={modal}
            contentLabel="Example Modal"
      >
          <div className='p-5'>
              <h2 className='text-center'>Status: {
              currentActiveUserActivity >= 10 ? "Aktivan" : 
              currentActiveUserActivity < 10 && currentActiveUserActivity > 0 ? "Clanarina vazi jos: "+ currentActiveUserActivity + " dana" : 
              "Clanarina istekla: " + currentActiveUser.endDate
              }</h2>
              <h3 className='text-center'>Ime: {currentActiveUser.name}</h3>
              <h4 className='text-center'>Kategorija: {currentActiveUser.memberType}</h4>
              <h5 className='text-center'>Clanarina od: {moment(currentActiveUser.startDate).format('LL')} </h5>
              <h5 className='text-center'>Clanarina do: {moment(currentActiveUser.endDate).format('LL')} </h5>
              <div className='mt-4 text-center'>
              {
                      currentActiveUserActivity < 10 && currentActiveUserActivity > 0  && 
                      <button type="button" className="btn btn-block btn-outline-primary  mb-3" style={{ width:"300px", fontWeight: "bold" }}>Check in</button>
                  }
              <button type="button" onClick={extendByOneMonth} className="btn btn-block btn-outline-success m-auto d-block" style={{ width:"300px", fontWeight: "bold"}}>Produzi za mjesec dana</button>
              </div>  
              <div className='text-center'> 
             <button 
                onClick={() => setshowDatePicker(!showDatePicker)}
                type="button" className="btn btn-block btn-outline-danger mt-3" style={{ width:"300px", fontWeight: "bold"}}>Produzi na novi datum</button>
                {
                    showDatePicker &&
                <div className='text-center mt-4'>
                    <Space direction="vertical" size={12}>
                        <RangePicker
                        onChange={onChange}
                        onOk={onOk}
                        dateRender={current => {
                            const style = {};
                            if (current.date() === 1) {
                            style.border = '1px solid #1890ff';
                            style.borderRadius = '50%';
                            }
                            return (
                            <div className="ant-picker-cell-inner" style={style}>
                                {current.date()}
                            </div>
                            );
                        }}
                        />
                    </Space>
                    <div className='text-center'>
                    <button type="button" className="btn btn-block btn-outline-primary mt-3" onClick={extendByNewDate} style={{ fontWeight: "bold" }}>Produzi</button>
                    </div>
                </div>
                }

            </div>
        </div>
      </Modal>
        }
    </div>
  )
}

export default Members