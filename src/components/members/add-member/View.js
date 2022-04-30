import React, { useState, useEffect } from 'react'
import "./add-member.css"
import Logo from "../../../assets/logo.png"
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { DatePicker, Space } from 'antd';
import Modal from 'react-modal';
import moment from 'moment';

const client = new W3CWebSocket('ws://127.0.0.1:8000/dodaj-clana');
const { RangePicker } = DatePicker;
const modal = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

const AddMember = (props) => {

    const { actions, memberTypes } = props

   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [category, setCategory] = useState("")
   const [phone, setPhone] = useState("")
   const [address, setAddress] = useState("")
   const [cardId, setCardId] = useState(null) 
   const [modalIsOpen, setIsOpen] = useState(false);
   const [startDate, setstartDate] = useState(null);
   const [endDate, setendDate] = useState(null);

   useEffect(() => {
    actions.getMemberTypes()
    console.log(memberTypes);
}, [])

    useEffect(() => {
    client.onopen = () => {
        console.log('WebSocket Client Connected');
        client.onmessage = (message) => {
            const dataFromServer = JSON.parse(message.data);
            const { memberCardId } = dataFromServer
            setCardId(memberCardId)
        }
    };
    }, [])

    useEffect(() => {
        client.onclose = () => {
            console.log('WebSocket Client Closed');
        };
        }, [])

    function onChange(value, dateString) {
        console.log("dad");
        setstartDate(dateString[0])
        setendDate(dateString[1])
    }
  
  function onOk(value) {
    console.log('onOk: ', value);
  }

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const sendMemberToWebsocket = () => {
    const member = {
        name,
        email,
        category,
        phone,
        address,
        cardId,
        startDate,
        endDate
    }
    client.send(JSON.stringify({
        type: "message",
        msg: member
    }))
  } 

   

   const handleSubmit = (e) => {
        e.preventDefault()
        const member = {
            name,
            email,
            category,
            phone,
            address,
            cardId,
            startDate,
            endDate
        }
        var given = moment(endDate, "YYYY-MM-DD");
        var current = moment().startOf('day');
        console.log(moment.duration(given.diff(current)).asDays());
        console.log(member);
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
                <input 
                value={cardId}
                type="text" className="form-control item" id="cardId" placeholder="ID Kartice" />
            </div>
            <div className="form-group text-center mb-4">
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
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-warning btn-block create-account w-100">Kreiraj clana</button>
            </div>
        </form>

        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={modal}
            contentLabel="Example Modal"
      >
          <div className='p-5'>
              <h3 className='text-center'>Prislonite karticu </h3>
        </div>
      </Modal>
    </div>
  )
}

export default AddMember
Modal.setAppElement("#root");
