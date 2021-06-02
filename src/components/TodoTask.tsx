import React from 'react'
import { ITask } from '../Interfaces'

interface Props {
  task: ITask,
  completeTask(taskNameToDelete: string): void
}
const TodoTask = ({ task, completeTask }: Props) => {
  // console.log(`TodoTask`, task)
  return (
    <div className="task">
      <div className="content">
        <span>{task.taskName}</span>
        <span>{task.deadLine}</span>
        <button onClick={() => completeTask(task.taskName)}>X</button>
      </div>
    </div>
  )
}

export default TodoTask
