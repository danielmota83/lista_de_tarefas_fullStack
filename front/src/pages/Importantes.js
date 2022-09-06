import Feed from '../components/Feed';
import { useState, useEffect } from "react";
import { getImportantesTasksList } from '../services/tasksService';

export default function MostViewed() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() =>{
    async function loadTasks(){
      try {
        const tasksList =  await getImportantesTasksList();
  
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

  return (
    <main className="most-viewed">
      <Feed
        isLoading={isLoading}
        hasError={hasError}
        posts={tasks}
        title="Mais importantes"
        subtitle="Aqui você tem acesso rápido às tarefas mais importantes"
      />
    </main>
  );
}
