

export   async function getTasksList() {
  const response = await fetch ('http://localhost:3001/all-tasks')

if (!response.ok){
  console.log("deu algum erro" )
    return false;
}

const body = await response.json();

return body.map((task)=>({
    ...task, 
    id: task.id,
    tarefa: task.tarefa,
    oQueFazer: task.oQueFazer,
    tipo: task.tipo,
    quando: task.quando,
    publishedAt: new Date (task.publishedAt),
  }));

}


export   async function getImportantesTasksList() {
  const response = await fetch ('http://localhost:3001/tasks/importantes')

if (!response.ok){
    return false;
}

const body = await response.json();

return body.map((task)=>({
    ...task, 
    publishedAt: new Date (task.publishedAt),
  }));
}

export async function create(){
  const body = await response.json();

  return body.map((task)=>({
      ...task, 
      id: task.id,
      tarefa: task.tarefa,
      oQueFazer: task.oQueFazer,
      tipo: task.tipo,
      quando: task.quando,
      publishedAt: new Date (task.publishedAt),
    }));
  
  }
  

const response = await fetch("http://localhost:3001/tasks", {
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
  errors[body.code] || 'Ocorreu um erro ao cadastrar o tarefa!'
)

}

    props.onSubmit({ tarefa, oQueFazer,tipo,quando });
    tarefa("");
    oQueFazer("");
    tipo("");
    quando("");
    
}
 
