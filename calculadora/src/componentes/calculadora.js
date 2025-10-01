import {useState} from "react";

const Contador = () =>{
    const [contador, setContador] = useState(0);

    function Aumentar(){
        setContador(contador + 1);
    }
    function Disminuir(){
        setContador(contador - 1);
    }

    <button onClick={() => inputNumber(7)}>7</button>

    const inputNumber = (num) => setContador (num);
    return(
        <div>
            <label>Contador: {contador}</label>
            <br/>
            <button onClick={Aumentar} style={{ margin: '5px'}} >Aumentar</button>
            <button onClick={Disminuir} >Disminuir</button>
            <br/>
            <button onClick={() => inputNumber(1)} className="botoncete">1</button>
            <button onClick={() => inputNumber(2)} className="botoncete">2</button>
            <button onClick={() => inputNumber(3)} className="botoncete">3</button>
            <br/>
            <button onClick={() => inputNumber(4)} className="botoncete">4</button>
            <button onClick={() => inputNumber(5)} className="botoncete">5</button>
            <button onClick={() => inputNumber(6)} className="botoncete">6</button>
            <br/>
            <button onClick={() => inputNumber(7)} className="botoncete">7</button>
            <button onClick={() => inputNumber(8)} className="botoncete">8</button>
            <button onClick={() => inputNumber(9)} className="botoncete">9</button>
            <br/>
        </div>
    )
}

export default Contador;