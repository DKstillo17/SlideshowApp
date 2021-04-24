import React from 'react';
//Creamos la constante diapositivias que va almacenar los valores de los titulos y textos
const Diapositivas = ({ diapositivas }) => {
    const [diapo, setDiapo] = React.useState(0);
//Aca creamos los botones y su programacion para que al momento de dar usarlos estos cambien su aspecto
    return (
      <div>
        <div id="navegacion" className="text-center">
          <button 
            data-testid="button-restart"
            disabled={diapo === 0}
            onClick={() => setDiapo(0)}
            className="btn btn-outline-success">Reiniciar</button>
          <button
            data-testid="button-prev"
            disabled={diapo === 0}
            onClick={() => setDiapo(diapo - 1)}
            className="btn btn-outline-success">Anterior</button>
          <button
            data-testid="button-next"
            onClick={() => setDiapo(diapo + 1)}
            disabled={diapo === diapositivas.length - 1}
            className="btn btn-success">Siguiente</button>
        </div>
        <div id="diapositiva" className="card text-center">
          <h1 data-testid="title">{diapositivas[diapo]["title"]}</h1>
          <p data-testid="text">{diapositivas[diapo]["text"]}</p>
        </div>
      </div>
    );
  };

export default Diapositivas;