const express = require('express');
const routes = express.Router()
const axios = require('axios');


routes.post('/token', (req, res)=>{
    const url = 'https://uat.fourz.net:8443/Identity/IdentityManagementService.svc?singleWSDL';
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
        res.json("OK")
      })
      .catch(error => {
        // Manejar el error de la solicitud
        console.error(error);
        res.json("NOOOO")
      });
})