import { useState } from 'react'

interface TaskProps {
  id: number
  texto: string
  checked: boolean
}

const ToDoHome = () => {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  const handleClickAddTask = () => {
    setTasks((previousTasks) => [
      ...previousTasks,
      { id: Date.now(), texto: '', checked: false },
    ])
  }

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    )
  }

  const handleClickDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <main className="min-h-screen bg-gray-900">
      <div className="text-center">
        <h1 className="cursor-default pt-10 text-5xl text-gray-300">
          TODO LIST
        </h1>
        <p className="py-8 text-center text-3xl text-gray-300">
          Organize seus deveres e compromissos com a ToDo List
        </p>
      </div>
      <div className="py-4 text-center">
        <h1 className="cursor-default pb-4 text-4xl text-gray-300">LISTA</h1>
        <button
          onClick={handleClickAddTask}
          className="w-1/4 transform cursor-pointer rounded-full bg-green-600 text-2xl ring-2 ring-green-600 ring-offset-3 ring-offset-black transition-all duration-200 hover:scale-103 hover:bg-green-500 hover:ring-offset-5"
        >
          ➕ Adicionar Tarefa
        </button>
      </div>
      <div className="flex flex-col items-center py-4 pt-10 text-center">
        {tasks.map((task) => (
          <label
            key={task.id}
            className={`m-2 flex w-2/5 gap-2 rounded-full bg-gray-200 p-1.5 px-5 pl-2 text-center text-2xl font-medium text-gray-700 transition-all duration-200 hover:scale-103 ${task.checked ? 'opacity-70' : 'opacity-100'} `}
          >
            <input
              type="checkbox"
              checked={task.checked}
              onChange={() => toggleTask(task.id)}
              className={`m-1 h-6 w-6 cursor-pointer appearance-none rounded-full border-2 border-blue-500 transition checked:border-blue-400 checked:bg-blue-500 hover:scale-110`}
            />
            <input
              type="text"
              placeholder="Digite sua tarefa..."
              className={`h-8 w-160 transition-all ${task.checked ? 'text-gray-500 line-through' : 'text-gray-700'} `}
            />
            <button
              onClick={() => handleClickDeleteTask(task.id)}
              className={`ml-auto cursor-pointer font-bold text-red-500 transition-all hover:text-red-700 ${task.checked ? 'text-gray-500 hover:text-red-500' : ''} `}
            >
              {' '}
              ✕{' '}
            </button>
          </label>
        ))}
      </div>
    </main>
  )
}

export default ToDoHome
