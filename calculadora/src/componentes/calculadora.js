import { useState } from "react";
import Button from "./boton";

const Contador = () => {
  const [pantalla, setPantalla] = useState("0");
  const [primerNumero, setPrimerNumero] = useState(null);
  const [operador, setOperador] = useState(null);


  const inputNumber = (num) => {
    if (pantalla === "0") {
      setPantalla(String(num));
    } else {
      setPantalla(pantalla + String(num));
    }
  };

  
const Suma = () => {
  setPrimerNumero(Number(pantalla));
  setOperador("+");
  setPantalla("0");
};


const Resta = () => {
  setPrimerNumero(Number(pantalla));
  setOperador("-");
  setPantalla("0");
};


const Multiplicacion = () => {
  setPrimerNumero(Number(pantalla));
  setOperador("*");
  setPantalla("0");
};


const Division = () => {
  setPrimerNumero(Number(pantalla));
  setOperador("/");
  setPantalla("0");
};


  
  const Resultado = () => {
  if(operador==null)
    {
        alert("No hay numeros,primero escriba alguno");
        return;
    }
  if (operador && primerNumero !== null) {
    const segundoNumero = Number(pantalla);
    let resultado = 0;

    if (operador === "+") {
      resultado = primerNumero + segundoNumero;
    } else if (operador === "-") {
      resultado = primerNumero - segundoNumero;
    } else if (operador === "*") {
      resultado = primerNumero * segundoNumero;
    } else if (operador === "/") {
      if (segundoNumero === 0) {
        setPantalla("0");
        resultado = "Error";
        setPantalla("0");
      } else {
        resultado = primerNumero / segundoNumero;
      }
    }

    setPantalla(String(resultado));
    setPrimerNumero(null);
    setOperador(null);
  
    
  }
};


return (
    <div>
      <label>Resultado: {pantalla}</label>
      <br />

      
      <Button onClick={() => inputNumber(1)} className="botoncete">1</Button>
      <Button onClick={() => inputNumber(2)} className="botoncete">2</Button>
      <Button onClick={() => inputNumber(3)} className="botoncete">3</Button>
      <br />

      
      <Button onClick={() => inputNumber(4)} className="botoncete">4</Button>
      <Button onClick={() => inputNumber(5)} className="botoncete">5</Button>
      <Button onClick={() => inputNumber(6)} className="botoncete">6</Button>
      <br />

      
      <Button onClick={() => inputNumber(7)} className="botoncete">7</Button>
      <Button onClick={() => inputNumber(8)} className="botoncete">8</Button>
      <Button onClick={() => inputNumber(9)} className="botoncete">9</Button>
      <br />

      
      <Button onClick={() => inputNumber(0)} className="botoncete">0</Button>
      <br />

      
      <Button onClick={Suma} className="botonesop" >+</Button>
      <Button onClick={Resta} className="botonesop" >-</Button>
      <Button onClick={Multiplicacion} className="botonesop" >*</Button>
      <Button onClick={Division} className="botonesop" >/</Button>
      <Button onClick={Resultado} className="botonesop" >=</Button>

    </div>
  );
 
};

export default Contador;
