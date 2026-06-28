import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, loading, onUpdateTask, onDeleteTask }) => {
  if (loading) {
    return <div className="empty-state">Loading tasks...</div>;
  }

  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <h3>No tasks found</h3>
        <p>You don't have any tasks matching this criteria.</p>
      </div>
    );
  }

  return (
    <div className="task-grid">
      {tasks.map(task => (
        <TaskItem 
          key={task._id} 
          task={task} 
          onUpdate={onUpdateTask} 
          onDelete={onDeleteTask} 
        />
      ))}
    </div>
  );
};

export default TaskList;
