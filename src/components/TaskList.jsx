import { useEffect, useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data.slice(0, 10)); // Mostra só as 10 primeiras tarefas
        setLoading(false);
      });
  }, []);

  return (
    <div className="max-w-xl mx-auto mt-8 p-6 rounded-lg border-4 border-black bg-yellow-300 shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
      <h2 className="text-3xl font-black text-blue-700 uppercase mb-6 tracking-widest text-center drop-shadow-[2px_2px_0_rgba(0,0,0,1)]">
        Lista de Tarefas
      </h2>
      {loading ? (
        <div className="text-center text-blue-900 font-bold">Carregando...</div>
      ) : (
        <ul className="space-y-4">
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex items-center justify-between px-4 py-3 border-2 border-black rounded-lg shadow-[4px_4px_0_0_rgba(0,0,0,1)] bg-white ${
                task.completed
                  ? "line-through bg-blue-200 text-blue-900"
                  : "bg-yellow-100 text-blue-900"
              }`}
            >
              <span className="font-bold">{task.title}</span>
              <span
                className={`ml-4 px-2 py-1 rounded text-xs font-black border-2 border-black ${
                  task.completed
                    ? "bg-blue-700 text-white"
                    : "bg-white text-blue-700"
                }`}
              >
                {task.completed ? "Feito" : "Pendente"}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;