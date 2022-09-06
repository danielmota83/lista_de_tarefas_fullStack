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

      if (!tasksList.ok){
        setHasError(true);
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


  function handleSubmit({ history, userName }) {
    setTasks([
      ...tasks,
      {
        id: Math.random(),
        content: history,
        userName,
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
          title="Seu Feed"
          subtitle="Acompanhe as suas tarefas em tempo real"
        />
      </main>
    </>
  );
}
