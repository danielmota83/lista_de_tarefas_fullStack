import { useState } from "react";
import "../styles/PostForm.css";
import loader from "../images/loader-white.svg";
import userIcon from "../images/user.svg";
import paperPlaneIcon from "../images/paper-plane.svg";
import {GiArchiveRegister, GiAlarmClock, GiCardPick }from 'react-icons/gi'
import {MdTitle }from 'react-icons/md'


export default function TaskForm(props) {
  const [tarefa, setTarefa] = useState("");
  const [oQueFazer, setOQueFazer] = useState("");
  const [tipo, setTipo] = useState("");
  const [quando, setQuando] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null)

  async function handleSubmit(event) {
    try {
      event.preventDefault();

    setIsLoading(true);
    setErrorMessage (null);

const response = await fetch("http://localhost:3001/create-task", {
  method: "POST",
  body: JSON.stringify({
    content: tarefa,
    oQueFazer,
    tipo,
    quando
  }),
  Headers: {
    "Content-Type": "application/json",
  },
})

if (!response.ok) {
  const body = await response.json();

  setErrorMessage(
     body.message || 'Ocorreu um erro ao cadastrar o tarefa!'
  )
  return;
}

      props.onSubmit({ tarefa, oQueFazer, tipo, quando });
      setTarefa("");
      setOQueFazer("");
      setTipo("");
      setQuando("");
      
    }  catch {
      setErrorMessage('Ocorreu um erro ao cadastrar o tarefa!')
    }
    finally{
      setIsLoading(false);
    };
     
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      {errorMessage && (
        <div className="error-container">
          <strong>{errorMessage}</strong>
        </div>
      )}
      
      <div >
      <MdTitle/>
      
      <input
        value={tarefa}
        placeholder="Digite um título para a nova tarefa..."
        onChange={(event) => setTarefa(event.target.value)}
      />
    </div>
<div className="border">
<GiArchiveRegister size={25}/>
<input
        value={oQueFazer}
        placeholder="Descreva a tarefa a ser realizada..."
        onChange={(event) => setOQueFazer(event.target.value)}
      />
      </div>

      <div className="border">
        <GiAlarmClock size={25}/>
        <input
          value={quando}
          placeholder="Digite a data limite de realização..."
          onChange={(event) => setQuando(event.target.value)}
        />
        </div>
        
        <div className="border">
          <GiCardPick/>
        <input
          value={tipo}
          placeholder="tipo de tarefa está cadastrando..."
          onChange={(event) => setTipo(event.target.value)}
        />

        <button type="submit" disabled={isLoading}>
          {!isLoading && <img src={paperPlaneIcon} alt="Paper plane" />}
          {isLoading && <img src={loader} alt="Loading" className="spin" />}
          Cadastrar
        </button>
      </div>
    </form>
  );
 }
