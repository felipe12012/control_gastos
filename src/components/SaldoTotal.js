import React,{useState} from 'react';

const SaldoTotal = ({total}) => {

    const [gasto, guardarGastos]= useState({
        'nombre':'',
        'valor': ''
    })

    const guardar = e=>{

        guardarGastos({
            ...gasto,
            [e.target.name]: e.target.value
        })
    }



    return (<div className="container" >
        <div className="col-6">
            <h3>Saldo Ingresado</h3>
            <p className="h4">${total}</p>

        </div>
        <div className="col-6">
        <h3>Gastos</h3>
            <form >
            <input 
                type="text" 
                name="nombre" 
                className="form-control mb-2" placeholder="Nombre de Gasto"
                onChange={guardar}
                />        
            <input 
                type="number" 
                name="valor" 
                className="form-control" 
                placeholder="valor del Gasto"
                onChange={guardar}
                />
            <button className="btn btn-success mt-2">Agregar Gasto</button>
            </form>

        </div>
    </div> );
}
 
export default SaldoTotal;