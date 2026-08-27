import { motion } from 'motion/react'
import { useState } from 'react'

import ShinyText from '@/component/ShinyText'

import DotField from '../component/DotField'
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
    <main className="font-nunito relative flex min-h-screen items-center justify-center bg-gray-900 p-4 text-center sm:p-8">
      <div className="fixed top-10 right-5 z-50 opacity-70">
        <a href="https://github.com/DanielsSon12/toDoList_project">
          <motion.img
            src="https://skillicons.dev/icons?i=github"
            alt="github"
            className="w-10 max-md:w-8"
            whileHover={{ scale: 1.2, rotate: 5 }}
          />
        </a>
      </div>
      <DotField
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        dotRadius={1.5}
        dotSpacing={15}
        bulgeStrength={70}
        glowRadius={160}
        sparkle={false}
        waveAmplitude={1}
        cursorRadius={500}
        cursorForce={0.1}
        bulgeOnly
        gradientFrom="#A855F7"
        gradientTo="#B497CF"
        glowColor="#120F17"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-4xl rounded-3xl bg-amber-50 p-6 shadow-xl shadow-black/30 sm:p-10"
      >
        <div>
          <ShinyText
            className="cursor-default text-4xl font-extrabold text-gray-900 sm:text-5xl"
            text="ToDo List"
            speed={3}
            delay={1}
            color="#101828"
            shineColor="#476bb3"
            spread={120}
            direction="left"
            yoyo={true}
            pauseOnHover={false}
            disabled={false}
          />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="mx-auto max-w-2xl py-6 text-xl text-gray-500 sm:text-3xl"
          >
            Organize seus deveres e compromissos com a ToDo List
          </motion.p>
        </div>

        <section className="mx-auto max-w-3xl pt-12">
          <div className="mb-8">
            <button
              type="button"
              onClick={handleAddTask}
              className="cursor-pointer rounded-full bg-green-600 px-6 py-2 text-xl text-white ring-2 ring-green-600 ring-offset-3 ring-offset-amber-50 transition-all duration-200 hover:scale-105 hover:bg-green-500 hover:ring-offset-5"
            >
              + Adicionar tarefa
            </button>
          </div>

          {tasks.length === 0 ? (
            <p className="text-lg text-gray-500">Nenhuma tarefa adicionada.</p>
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
      </motion.div>
    </main>
  )
}

export default ToDoList
