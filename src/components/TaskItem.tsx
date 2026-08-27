import { motion } from 'motion/react'

import type { Task } from '../types/types'

interface TaskItemProps {
  task: Task
  onDelete: (id: number) => void
  onTextChange: (id: number, text: string) => void
  onToggle: (id: number) => void
}

const containerClassName =
  'flex w-full items-center gap-3 rounded-2xl bg-gray-100 p-3 text-lg font-medium text-gray-700 shadow-sm transition hover:scale-[1.01] sm:text-2xl'

const checkboxClassName =
  'h-6 w-6 shrink-0 cursor-pointer appearance-none rounded-full border-2 border-blue-500 transition checked:border-blue-400 checked:bg-blue-500 hover:scale-110'

const TaskItem = ({
  task,
  onDelete,
  onTextChange,
  onToggle,
}: TaskItemProps) => {
  const textClassName = task.checked
    ? 'text-gray-500 line-through'
    : 'text-gray-700'

  return (
    <li className={`${containerClassName} ${task.checked ? 'opacity-70' : ''}`}>
      <input
        type="checkbox"
        checked={task.checked}
        onChange={() => onToggle(task.id)}
        className={checkboxClassName}
      />
      <input
        type="text"
        value={task.text}
        onChange={(event) => onTextChange(task.id, event.target.value)}
        placeholder="Digite sua tarefa..."
        className={`min-w-0 flex-1 bg-transparent outline-none ${textClassName}`}
      />
      <motion.button
        type="button"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        onClick={() => onDelete(task.id)}
        className="cursor-pointer text-3xl font-bold text-red-500 transition-colors hover:text-red-700"
        aria-label="Excluir tarefa"
      >
        ×
      </motion.button>
    </li>
  )
}

export default TaskItem
