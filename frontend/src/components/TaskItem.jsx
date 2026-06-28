import React, { useState } from 'react';
import { format } from 'date-fns';
import { FaTrash, FaEdit, FaCheck, FaSpinner } from 'react-icons/fa';
import toast from 'react-hot-toast';

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description);
  
  const handleStatusChange = async (e) => {
    try {
      await onUpdate(task._id, { status: e.target.value });
      toast.success('Status updated');
    } catch (error) {
      toast.error('Failed to update status');
    }
  };

  const handleSaveEdit = async () => {
    if (!editTitle.trim()) {
      toast.error('Title cannot be empty');
      return;
    }
    try {
      await onUpdate(task._id, { title: editTitle, description: editDescription });
      setIsEditing(false);
      toast.success('Task updated');
    } catch (error) {
      toast.error('Failed to update task');
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await onDelete(task._id);
        toast.success('Task deleted');
      } catch (error) {
        toast.error('Failed to delete task');
      }
    }
  };

  if (isEditing) {
    return (
      <div className="task-card">
        <div className="form-group">
          <input 
            type="text" 
            className="form-control" 
            value={editTitle} 
            onChange={(e) => setEditTitle(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <textarea 
            className="form-control" 
            value={editDescription} 
            onChange={(e) => setEditDescription(e.target.value)} 
            rows="2"
          />
        </div>
        <div className="task-actions">
          <button className="btn btn-primary" onClick={handleSaveEdit}><FaCheck /> Save</button>
          <button className="btn btn-danger" onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`task-card ${task.status === 'completed' ? 'opacity-75' : ''}`}>
      <div className="task-header">
        <h3 className="task-title">{task.title}</h3>
        <select 
          className={`task-status status-${task.status}`}
          value={task.status}
          onChange={handleStatusChange}
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      
      {task.description && <p className="task-desc">{task.description}</p>}
      
      <div className="task-footer">
        <div className="task-date">
          {task.dueDate ? `Due: ${format(new Date(task.dueDate), 'MMM dd, yyyy')}` : 'No due date'}
        </div>
        <div className="task-actions">
          <button className="btn-edit" onClick={() => setIsEditing(true)} title="Edit"><FaEdit /></button>
          <button className="btn-danger" onClick={handleDelete} title="Delete"><FaTrash /></button>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
