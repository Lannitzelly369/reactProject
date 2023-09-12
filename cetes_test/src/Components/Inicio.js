import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/fonts.css'
import '../css/style.css'
import '../css/bootstrap@5.3.0.min.css'
import bg from '../assets/Walpapers/Wallpaper.png';
import logo from '../assets/Logotipo/Logo_cetesninos_color.png';
import logoKZ from '../assets/Logotipo/Logo_KZ.png';
import imagenUrbano from '../assets/Imagenes/Imagen_Urbano.png';

function Inicio() {
  return (
    <div className="cetes-background" style={{ backgroundImage: `url(${bg})` }}>

      <div className="cetes_inner_bkg_content">
        <div className="logos_CETES_junior">
          <div className="logo left-logo">
            <img src={logo} alt="Logo CETES niños" />
          </div>
          <div className="logo right-logo">
            <img src={logoKZ} alt="Logo organización KidZania" />
          </div>
        </div>
        <div className="welcome-blocks">
          <div className="welcome-blocks-inner">
            <div className="welcome-info">
              <div className="info-txt-cetesJunior">
                <div className="title-intro">
                  <h2>Bienvenidos</h2>
                </div>
                <div className="text-descriptivo">
                  <h4>Tablero Financiero</h4>
                </div>
              </div>
              <div className="welcome-img-movil">
                <img src={imagenUrbano} alt="" />
              </div>

              <div className="info-inicio-sesion">
                <div className="text-descriptivo">
                  <p>Para comenzar con la inversión, PleeZ acerque su brazalete al lector</p>
                </div>

                <div className="input-txt-cetesJunior">
                  <input type="text" name="" id="" required />
                  <button onClick={consumirAPI} className="btn btn-success btn-enviar">Enviar</button>
                </div>

              </div>
            </div>
            <div className="welcome-img-desktop">
              <img src={imagenUrbano} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//Funciones varias
function consumirAPI() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:9000/api/token');
        console.log(response.data);
        // Aquí puedes hacer algo con los datos recibidos del servicio
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []);
  /* const url = 'https://uat.fourz.net:8443/Identity/IdentityManagementService.svc?singleWSDL';
  const headers = {
    'SOAPAction': 'http://tempuri.org/IIdentityManagementService/ValidateUserCredentials',
    'Content-Type': 'text/xml; charset="utf-8"',
    'Access-Control-Allow-Headers': 'X-Requested-With, privatekey'
  };
  const body = `
  <Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
    <Body>
        <ValidateUserCredentials xmlns="http://tempuri.org/">
            <userName>integracion.sfe</userName>
            <password>8a7ddf6fc7</password>
        </ValidateUserCredentials>
    </Body>
  </Envelope>
  `;

  axios.post(url, body, { headers })
    .then(response => {
      // Manejar la respuesta de la API SOAP
      console.log(response.data);
    })
    .catch(error => {
      // Manejar el error de la solicitud
      console.error(error);
    });
     // URL del servicio SOAP
    const soapURL = 'https://uat.fourz.net:8443/Identity/IdentityManagementService.svc?singleWSDL';
     console.log(soapURL)
     // XML de la solicitud SOAP
     const soapRequest = `
   <Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
     <Body>
         <ValidateUserCredentials xmlns="http://tempuri.org/">
             <userName>integracion.sfe</userName>
             <password>8a7ddf6fc7</password>
         </ValidateUserCredentials>
     </Body>
 </Envelope>
 `;
     console.log(soapRequest)

     // Configuración de la solicitud Axios
     const config = {
         headers: {
             'SOAPAction': 'http://tempuri.org/IIdentityManagementService/ValidateUserCredentials',
             'Content-Type': 'text/xml; charset="utf-8"',
             'Access-Control-Allow-Headers': 'X-Requested-With, privatekey'
         },
     };
     console.log(config)
     // Realizar la solicitud SOAP
     axios.post(soapURL, soapRequest, config)
         .then((response) => {
             setResponse(response.data);
         })
         .then((response) => console.log(response))
         .catch((error) => {
             console.error('Error:', error);
         });*/
}

export default Inicio;