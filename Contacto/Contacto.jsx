import React from "react";
import styled from "styled-components";


const Generico = styled.body`  
 width: 100vw;
 height: 100vh;
 background-color: #8f8a8a;
 position: fixed;
  top: 0%;
  bottom: 0%;
  z-index: -1;
 `;

const Formulario = styled.form`
  margin: 0 auto;
  width: 600px;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 1em;
  margin-top: 1em;
`;

const Celda = styled.td`
width: 260px;
`;

const Rectangulo = styled.input`
  width: 250px;
  position: fixed;
`;

const Texto = styled.textarea`
  font: 1em sans-serif;
  width: 300px;
  box-sizing: border-box;
  border-color: white;
  height: 2em;
`;

const Boton = styled.button`
  margin-left: 11em;
`;

const Contenedorcontac = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  position: fixed;
  right: 10%;
  margin-top: 10%;
  justify-content: space-between;
`;

const Palabra = styled.p`
  font-family: Kunstler Script;
  color: #063a35;
  font-size: 36pt;
`;
const Contacto = () => {
  return (
    <>
    <Generico> 
      <Contenedorcontac>
        <form>
          <h1> CONTACTO </h1>
        <Formulario> 
          <form action="gonzaloav@protonmail.com" method="get">
            <Palabra>
              <tr>
                <th>
                  <label for="name"> Tu Nombre:* </label>
                </th>
                <th>
                  <label for="text"> Asunto: </label>
                </th>
              </tr>
              <tr>
                <Celda>
                 <Rectangulo type="text" id="name" name="user_name" /> 
                </Celda>
                <Celda>
                  <Rectangulo type="text" id="text" name="your-subject" />
                </Celda>
              </tr>
            </Palabra>
            <Palabra>
              <tr>
                <th>
                  <label for="mail"> Tu E-mail:* </label>
                </th>
                <th>
                  <label for="msg"> Tu Mensaje: </label>
                </th>
              </tr>
              <tr>
                <Celda>
                  <Rectangulo type="email" id="mail" name="user_mail" />
                </Celda>
                <Celda>
                <Texto id="msg" name="user_message"/>
                </Celda>
              </tr>
            </Palabra>
            <tr>
              <td>
                <h3> * Campos obligatorios </h3>
              </td>
              <td>
                <Boton type="submit">Envíe su mensaje</Boton>
              </td>
            </tr>
          </form>
        </Formulario>
        </form>
      </Contenedorcontac>
      </Generico>
      </>
  );
};

export default Contacto;

/** Enviar al backend. Api sendgrid. Correo con cierta seguridad. (Hotmail) 
 No protonmail.
 // using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'test@example.com',
  from: 'test@example.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg); */
 