import { useState, useEffect } from "react";
import Feed from '../components/Feed';
import TaskForm from '../components/TaskForm';
import { getTasksList } from "../services/tasksService";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

useEffect(() =>{
  async function loadTasks(){
    try {
      const tasksList =  await getTasksList();
      console.log(tasksList)

      if (tasksList.ok){
        console.log('algum problema com os dados')
        setHasError(false);
        return;
      }

      setTasks(tasksList);
    } catch {
      setHasError(true);
    } finally{
      setIsLoading(false);
    }
  }
  loadTasks();
}, []);


  function handleSubmit({ tarefa, oQueFazer, tipo, quando }) {
    setTasks([
      ...tasks,
      {
        tarefa: tarefa,
        oQueFazer:oQueFazer,
        tipo:tipo,
        quando:quando,
        publishedAt: new Date(),
      },
    ]);
  }

  return (
    <>
      <TaskForm onSubmit={handleSubmit} />
      
      <main>
        <Feed
          isLoading={isLoading}
          tasks={tasks}
          hasError = {hasError}
          title="Suas Tarefas"
          subtitle="Acompanhe todas as suas tarefas de maneira organizada!"
        />
      </main>
    </>
  );
}
