import React,{useState} from "react";

const Saldo = ({agregarTotal}) => {

    const [saldoInicial, agregarSaldoInicial] = useState();
    

    const obtenerSaldo = (e)=>{
        e.preventDefault();
        agregarTotal(saldoInicial)
    }

  return (
    <div className="col-12">
      <form>
        <label className="text-center h3 d-block mt-5">Saldo </label>
        <input 
            type="number" 
            className="form-control col-8 m-auto" 
            onChange={(e)=>(agregarSaldoInicial(e.target.value))}
        />

        <button 
            type="submit" 
            className="btn btn-success  mt-3 col-4 offset-4"
            onClick={obtenerSaldo}
        >
          Guardar Saldo
        </button>
      </form>
    </div>
  );
};

export default Saldo;
