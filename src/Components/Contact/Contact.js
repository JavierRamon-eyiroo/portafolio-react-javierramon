import React, { useState } from "react"
import contact1 from "./contact1.png"
import "./Contact.css"

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",})

  const InputEvent = (event) => {
    const { name, value } = event.target

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      }
    })
  }

  const formSubmit = (event) => {
    event.preventDefault()
    alert(
      `My name is ${data.fullname}. 
	My phone number is ${data.phone}. 
	My email address is ${data.email}. 
	My Subject on  ${data.subject}. 
	Here is my message I want to say : ${data.message}. 
	`
    )
  }
  return (
    <>
      <section className='Contact' id='contact'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>CONTACTO.</h4>
            <h1>Sera un gusto conversar.</h1>
          </div>

          <div className='content d_flex'>
            <div className='left'>
              <div className='box box_shodow'>
                <div className='img'>
                  <img src={contact1} alt='' />
                </div>
                <div className='details'>
                  <h1>Ecuador - Cuenca</h1>
                  <p>Director de Operaciones.</p>
                  <p>Estoy disponible para el trabajo independiente. Conéctate conmigo a través de mi cuenta.</p> <br />
                  <p>Celular: (+593)0988189017</p>
                  <p>Correo: javier.ramon@eyiroo.com</p> <br />
                  <span>Mis redes sociales.</span>
                  <div className='button f_flex'>
                    <button className='btn_shadow'>
                      <i className='fab fa-facebook-f'></i>
                    </button>
                    <button className='btn_shadow'>
                      <i className='fab fa-instagram'></i>
                    </button>
                    <button className='btn_shadow'>
                      <i className='fab fa-twitter'></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='right box_shodow'>
              <form onSubmit={formSubmit}>
                <div className='f_flex'>
                  <div className='input row'>
                    <span>Nombres.</span>
                    <input type='text' name='fullname' value={data.fullname} onChange={InputEvent} />
                  </div>
                  <div className='input row'>
                    <span>Telefono. </span>
                    <input type='number' name='phone' value={data.phone} onChange={InputEvent} />
                  </div>
                </div>
                <div className='input'>
                  <span>Correo electronico. </span>
                  <input type='email' name='email' value={data.email} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>Asunto. </span>
                  <input type='text' name='subject' value={data.subject} onChange={InputEvent} />
                </div>
                <div className='input'>
                  <span>Tu mensaje. </span>
                  <textarea cols='30' rows='10' name='message' value={data.message} onChange={InputEvent}></textarea>
                </div>
                <button className='btn_shadow'>
                  ENVIAR MENSAJE. <i className='fa fa-long-arrow-right'></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
