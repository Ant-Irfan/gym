import React, { useState } from 'react'
import "./login.css"
import Logo from '../../assets/logo.png'

const Login = (props) => {

  const { actions } = props

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = (e) => {
      e.preventDefault()
      const loginDetails = {
          email,
          password
      }
      actions.Login(loginDetails)
  }

  return (
    <section className="vh-100 bg-secondary" >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" 
        style={{ border: "2px solid #ffc900"}}
        >
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img
                src={Logo}
                alt="login form"
                className="img-fluid p-3"
              />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form onSubmit={handleSubmit}>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-dumbbell fa-2x me-3"
                    ></i>
                  </div>

                  <h3 className="fw-normal mb-3 pb-3" 
                  >Loguj se na akaunt
                  </h3>

                  <div className="form-outline mb-4">
                    <input 
                    onChange={e => setEmail(e.target.value)}
                    type="email" id="form2Example17" className="form-control form-control-lg" />
                    <label className="form-label" for="form2Example17">Email adresa</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input 
                    onChange={e => setPassword(e.target.value)}
                    type="password" id="form2Example27" className="form-control form-control-lg" />
                    <label className="form-label" for="form2Example27">Password</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Login