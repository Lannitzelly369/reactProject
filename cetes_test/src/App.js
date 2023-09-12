import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Inicio from './Components/Inicio';

function App() {
    const [response, setResponse] = useState('');

    /*useEffect(() => {
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
            });
    }, []);*/

    return (
      <div className="App">
        <Inicio />
      </div>
    );
}

export default App;