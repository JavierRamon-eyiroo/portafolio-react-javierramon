import React from "react"
import "./Home.css"
import hero from "../pic/hero.png"
import skill1 from "../pic/skill1.png"
import skill2 from "../pic/skill2.png"
import skill3 from "../pic/skill3.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>Bienvenido a mi mundo.</h3>
            <h1>
              Soy <span>Javier Ramón.</span>
            </h1>
            <h2>
              un
              <span>
                <Typewriter words={[" Frontend Developer.", " Ing Electromecánico."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>¿Buscas una plataforma web que eleve tu negocio al siguiente nivel? Estoy aquí para ayudarte a convertir tus ideas en realidad. Desde el diseño hasta el desarrollo y más allá, me comprometo a ofrecer un servicio personalizado y resultados sobresalientes</p>

            <p>¡Espero tener la oportunidad de colaborar contigo y llevar tu presencia en línea a nuevas alturas! Juntos, podemos construir un futuro digital brillante y exitoso."</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>REDES SOCIALES.</h4>
                <div className='button'>
                  <button className='btn_shadow'>
                    <i class='fab fa-facebook-f'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button>
                </div>
              </div>
              <div className='col_1'>
                <h4>DESCARGAR CV.</h4>
                <button className='btn_shadow'>
                  <img src={skill1} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
