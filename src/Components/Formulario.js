import React from 'react'

const Formulario = () => {

  let nombre, numero, correo, descripcion

  const enviar = (e) => {
    e.preventDefault()
    const prueba = document.querySelector("#enviar")
    const whatsapp = `https://api.whatsapp.com/send?phone=573158419824&text=Hola%20${nombre.value}%20mi%20numero%20de%20contacto%20es%20${numero.value}`
    prueba.setAttribute("href", whatsapp)
    prueba.click()
  }
  return (
    <div className="row justify-content-md-center">
      <div className="col-md-9 col-lg-7">

        <form className="rd-form rd-mailform">

          <div className="form-wrap">
            <label for="contact-name">Nombre</label>
            <input className="form-input" ref={node => nombre = node} id="contact-name" />
          </div>
          <div className="form-wrap">
            <label for="numero">Telefono</label>

            <input className="form-input" ref={node => numero = node} id="numero"/>
          </div>
          <div className="form-wrap">
            <label for="correo">Correo</label>

            <input className="form-input" ref={node => correo = node} id="correo"/>
          </div>
          <div className="form-wrap">
            <label for="descripcion">Descripción</label>

            <textarea className='form-input' ref={node => descripcion = node} id="descripcion"/>
            <button className="button button-block button-lg button-primary" onClick={enviar}>enviar</button>
          </div>
        </form>
      </div>
      <a id="enviar"></a>
    </div>
  )
}

export default Formulario