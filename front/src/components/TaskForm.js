import { useState } from "react";
import "../styles/PostForm.css";
import loader from "../images/loader-white.svg";
import userIcon from "../images/user.svg";
import paperPlaneIcon from "../images/paper-plane.svg";


export default function TaskForm(props) {
  const [history, setHistory] = useState("");
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null)

  async function handleSubmit(event) {
    try {
      event.preventDefault();

    setIsLoading(true);
    setErrorMessage (null);

const response = await fetch("http://localhost:3001/tasks", {
  method: "POST",
  body: JSON.stringify({
    content: history,
    userName,
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

      props.onSubmit({ history, userName });
      setHistory("");
      setUserName("");
      
    }  catch {
      setErrorMessage('Ocorreu um erro ao cadastrar o tarefa!')
    }
    finally{
      setIsLoading(false);
    };
     

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      {errorMessage && (
        <div className="error-container">
          <strong>{errorMessage}</strong>
        </div>
      )}
      <input
        value={history}
        placeholder="Escreva uma nova história..."
        onChange={(event) => setHistory(event.target.value)}
      />

      <div>
        <img src={userIcon} alt="User" />

        <input
          value={userName}
          placeholder="Digite seu nome..."
          onChange={(event) => setUserName(event.target.value)}
        />

        <button type="submit" disabled={isLoading}>
          {!isLoading && <img src={paperPlaneIcon} alt="Paper plane" />}
          {isLoading && <img src={loader} alt="Loading" className="spin" />}
          Publicar
        </button>
      </div>
    </form>
  );
}; }