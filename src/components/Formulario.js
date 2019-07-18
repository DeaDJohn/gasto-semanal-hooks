import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

function Formulario(props){

    const { guardarGasto, guardarCrearGasto } = props;

    // state
    const [ nombreGasto, guardarNombreGasto ] = useState('');
    const [ cantidadGasto, guardarCantidadGasto ] = useState(0);
    const [ error, guardarError ] = useState(false);

    // Cuando se agrega el gasto
    const agregarGasto = e => {
        e.preventDefault();

        // validar
        if(cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto === ''){
            guardarError(true);
            return;
        }
        

        // construir el objeto de gasto
        const gasto = {
            nombreGasto,
            cantidadGasto,
            id: shortid.generate()
        }

        //pasar el gasto al componente principal
        guardarGasto(gasto);
        guardarCrearGasto(true);

        // eliminar alerta
        guardarError(false);

        // Resetear formulario
        guardarNombreGasto('');
        guardarCantidadGasto('');


    }

    return(
        <form
            onSubmit={agregarGasto}
        >
            {error ? <Error  mensaje="Ambos campos son obligatorios o Presupuesto incorrecto" /> : null}
            <h2>Agrega tus Gastos</h2>

            <div className="campo">
                <label>Nombre Gasto</label>
                <input 
                    type="text" 
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    onChange={e => guardarNombreGasto(e.target.value)}
                    value={nombreGasto}
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="text" 
                    className="u-full-width"
                    placeholder="Ej. 300"
                    onChange={e => guardarCantidadGasto(parseInt(e.target.value, 10))}
                    value={cantidadGasto}
                />
            </div>

            <input type="submit" className="button-primary u-full-width" value="Agregar gasto"/>
        </form>
    )
}

export default Formulario;