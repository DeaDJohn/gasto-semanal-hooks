import React , { Fragment, useState }from 'react';
import Error from './Error';

function Pregunta(props){

    const {guardarPresupuesto, guardarPreguntaPresupuesto, guardarRestante} = props
    // definir el state
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);

    // Validar presupuesto
    const agregarPresupuesto = e => {
        e.preventDefault();

        // validar
        if(cantidad < 1 || isNaN(cantidad) ){
            guardarError(true);
            return;
        }

        // si se pasa la validación
        guardarError(false)
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        guardarPreguntaPresupuesto(false);
    }

    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>

            {error ? <Error  mensaje="El presupuesto es invalido" /> : null}
            <form onSubmit={agregarPresupuesto}>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Agrega tu Presupuesto"
                    onChange={e => guardarCantidad( parseInt(e.target.value))}
                />
                <input type="submit" className="button-primary u-full-width" value="Enviar"/>
            </form>
        </Fragment>
    );
}

export default Pregunta;