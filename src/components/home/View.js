import React, {useEffect, useState} from 'react'
import moment from "moment"
import MemberTime from "../../components/members/memberTime/memberTime"
import './home.css'

const Home = (props) => {

    const { membersInGym, actions } = props

    const [membersToShow, setMembersToShow] = useState(null)
    useEffect(() => {
      actions.getMembersInGym()
      console.log(membersInGym);
    }, [])

    useEffect(() => {
      if (membersInGym) {
          setMembersToShow(membersInGym)
          console.log("here", membersInGym);
      }
  }, [membersInGym])
    
  return (
    <div style={{ backgroundColor: 'black', color: 'white', paddingBottom:'50px'}}>
    <section class="hero">
			<div class="hero__image">
				<img src="https://raw.githubusercontent.com/RaddyTheBrand/Gym-Landing-Page-HTML-CSS-SCSS--JS/main/img/hero.jpg" alt="Lifting heavy!" loading="lazy" />
			</div>

			<div class="container hero__container">

				<div class="hero-wrapper">
					<h1 class="hero-wrapper__heading">CSRP <span>GYM</span>.</h1>
					<p class="hero-wrapper__body">
						Web aplikacija za menadzment CSRP teretane i fitness centra
					</p>
					<a href="#statistika" class="button button--primary" data-content="Find Out More" area-label="Find out more">
            Pogledaj statistiku
          </a>
				</div>

			</div>

		</section>
        <section id='statistika' class="training-options pt-1">

        <div class="container">

            <h1 class="training-option__heading text-center">Statistika <span>clanova</span></h1>


        <div class="training training--options pt-1">


            <a href="#" class="training__card">
                <h3 class="training__card-title text-white">Trenutni clanovi u teretani</h3>
                <h6 class="training__card-title  text-white"
                style={{ fontSize: "32px" }}
                >Broj Clanova u teretani: {membersToShow && membersToShow.length}</h6>
                <p class="training__card-body" style={{ overflowY: "auto", overflowX: "hidden", width: "100%"}}>
                {
                membersToShow && membersToShow.length > 0 &&
                membersToShow.map(member => {
                  return (
                  <div className='row mt-1'>
                    <div className='col-4'>{member.member.name}</div>
                    <div className='col-4'>{member.member.memberType}</div>
                    <div className='col-4'>
                    <MemberTime
                        startDate={member.member.startDate}
                        endDate={member.member.endDate}
                    />
                    </div>
                  </div>
                  )
                })
                }
                </p>
                <div class="image-overlay"></div>
                <div class="training__image">
                    <img src="https://raw.githubusercontent.com/RaddyTheBrand/Gym-Landing-Page-HTML-CSS-SCSS--JS/main/img/support.jpg" alt="One To One" />
                </div>
            </a>
        </div>


        </div>

    </section>
    
    </div>
  )
}

export default Home