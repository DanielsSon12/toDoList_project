import { motion } from 'motion/react'
import { useState } from 'react'

import type { Task } from '../types/types'
import TaskItem from './TaskItem'

const createTask = (): Task => ({
  id: Date.now(),
  text: '',
  checked: false,
})

const ToDoList = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  const handleAddTask = () => {
    setTasks((currentTasks) => [...currentTasks, createTask()])
  }

  const handleDeleteTask = (id: number) => {
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id))
  }

  const handleTaskTextChange = (id: number, text: string) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) => (task.id === id ? { ...task, text } : task))
    )
  }

  const handleToggleTask = (id: number) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    )
  }

  return (
    <main className="font-nunito min-h-screen bg-gray-900 px-4 py-10 text-center sm:px-8">
      <header>
        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="cursor-default text-4xl text-gray-100 sm:text-5xl"
        >
          TODO LIST
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          className="mx-auto max-w-2xl py-6 text-xl text-gray-400 sm:text-3xl"
        >
          Organize seus deveres e compromissos com a ToDo List
        </motion.p>
      </header>

      <section className="mx-auto max-w-3xl pt-20">
        <div className="mb-8">
          <button
            type="button"
            onClick={handleAddTask}
            className="cursor-pointer rounded-full bg-green-600 px-6 py-2 text-xl text-white ring-2 ring-green-600 ring-offset-3 ring-offset-gray-900 transition-all duration-200 hover:scale-105 hover:bg-green-500 hover:ring-offset-5"
          >
            + Adicionar tarefa
          </button>
        </div>

        {tasks.length === 0 ? (
          <p className="text-lg text-gray-400">Nenhuma tarefa adicionada.</p>
        ) : (
          <ul className="space-y-3">
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onDelete={handleDeleteTask}
                onTextChange={handleTaskTextChange}
                onToggle={handleToggleTask}
              />
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}

export default ToDoList
