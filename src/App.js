import React,{useState} from 'react';
import Header from './components/Header';
import Saldo from './components/Saldo';
import SaldoTotal from './components/SaldoTotal';

const App = () => {
    
    const [total, agregarTotal]=useState('');

    return ( 
        <div className="container">
            <Header titulo="Control de Gastos" 
                subtitulo="este es el subtitulo"/>
            <div className="row">
           
           <Saldo agregarTotal={agregarTotal} />
           
           
           <SaldoTotal total={total} />






            
            </div>

        </div>

    );
}
 
export default App;