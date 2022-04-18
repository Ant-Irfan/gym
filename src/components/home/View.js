import React from 'react'
import './home.css'

const Home = () => {
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
                <h3 class="training__card-title text-white">Danasnji clanovi</h3>
                <p class="training__card-body">3.</p>
                <div class="image-overlay"></div>
                <div class="training__image">
                    <img src="https://raw.githubusercontent.com/RaddyTheBrand/Gym-Landing-Page-HTML-CSS-SCSS--JS/main/img/nutrition.jpg" alt="Small Group PT" />
                </div>
            </a>

            <a href="#" class="training__card">
                <h3 class="training__card-title text-white">Sedmicni dolasci</h3>
                <p class="training__card-body">432.</p>
                <div class="image-overlay"></div>
                <div class="training__image">
                    <img src="https://raw.githubusercontent.com/RaddyTheBrand/Gym-Landing-Page-HTML-CSS-SCSS--JS/main/img/expert-coaching.jpg" alt="Classes" />
                </div>
            </a>

            <a href="#" class="training__card">
                <h3 class="training__card-title text-white">Godisnji dolasci</h3>
                <p class="training__card-body">3243</p>
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