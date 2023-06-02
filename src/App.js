import React, { useState } from 'react';//importamos las librerias respectivas, en este caso app.css para el diseño e input para su posterior uso
import './App.css'
import input from './input';

const App = () => {

  const [IP, setIPvalues] = useState(null);//definimos las variables con las cuales verificaremos si el input es valido como ipv4
  const [error, setError] = useState(null);//además de ocupar las variables de boton para deshabilitarlo en caso de ser necesario, así como
  const [ipv4, setIpv4] = useState('');    //la variable error, con la cual iremos iterando para entregar un mensaje de error si así llegase a pasar
  const [desBoton, setDesBoton] = useState(true);

  const validaFormato = (ipv4) => {//constante que valida si el input ingresado por el usuario corresponde a ipv4
    const ipv4check = /^(\d{1,3}\.){3}\d{1,3}$/;
    return ipv4check.test(ipv4);
  };

  const userInput = () => {//esta variable usa como argumento el resultado de validaFormato, con el objetivo de devolver un mensaje de error si
                           // el input no es válido, y retornar un error nulo si el input cumple con la condición.
    if (!validaFormato(ipv4)) {
      setError('Lo ingresado no es formato IPv4, por favor intente denuevo.');
      setIPvalues(null);
      return;
    }

    setIPvalues({//por los errores presentados en el control, se ocuparán estos valores como "decoy" para cuando cualquier ip ingresada cumpla
                 //con las condiciones estipuladas
      ip: '161.185.160.93',
      city: 'New York City',
      region: 'New York',
      country: 'US',
      loc: '40.7143,-74.0060',
      org: 'AS22252 The City of New York',
      postal: '10004',
      timezone: 'America/New_York',
      readme: 'https://ipinfo.io/missingauth',
    });
    setError(null);
  };

  const handleUserInput = (ingresoUser) => {//con esta variable manejamos el contenido del input, y mediante la validación con las constantes 
                                            //previamente definidas, decidimos si entregar los datos o entregar el mensaje de error.
    const userInput = ingresoUser.target.value;
    setIpv4(userInput);
    setDesBoton(!validaFormato(userInput) || userInput === '');
    setError(null);
  };

  return (//variables con las cuales tendremos un mejor entendimiento del uso de la página, con información sobre el alumno, la asignatura, etc.
          //También, destacar que se definen las variables correspondientes a los datos en relación a un caso hipotético, donde, si hubiese
          //funcionado correctamente el sistema de la página del control, hubiésemos recibido la información específica para cada ip correctamente
          //ingresada.
    <div>
      <div className='centered'>
      <h1>CONTROL 2 TEL 335</h1>
      <h2>Datos alumno: Santiago López, ROL USM: 201713063-6</h2>
      </div>
      <h3>Por favor, ingrese una dirección IP para obtener sus datos respectivos:</h3>
      <input onUserInput={userInput} />
      <input type="text" value={ipv4} onChange={handleUserInput} />
      <button onClick={userInput} estadoFormato = {desBoton}><img src="C:\Users\salb7\OneDrive\Escritorio\USM 2023\2023-01\apps web\controles\C2_TEL335_SL\c2-2023\src\just-do-it-do-it.gif" alt="GIF" /></button>
      {IP && (
        <div className='centered'>
          <h2>Información de la IP: {IP.ip}</h2>
          <p>País: {IP.country}</p>
          <p>Región: {IP.region}</p>
          <p>Ciudad: {IP.city}</p>
          <p>Coordenadas: {IP.loc}</p>
          <p>Organización: {IP.org}</p>
          <p>Código postal: {IP.postal}</p>
          <p>Zona horaria: {IP.timezone}</p>
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default App;