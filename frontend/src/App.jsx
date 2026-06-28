import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { fetchTasks, createTask, updateTask, deleteTask } from './api';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Controls from './components/Controls';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortOption, setSortOption] = useState('newest');

  const loadTasks = async () => {
    setLoading(true);
    try {
      const data = await fetchTasks(statusFilter, sortOption);
      if (data.success) {
        setTasks(data.data);
      }
    } catch (error) {
      console.error('Failed to load tasks', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, [statusFilter, sortOption]);

  const handleTaskAdded = async (taskData) => {
    const data = await createTask(taskData);
    if (data.success) {
      loadTasks(); // Refresh list to respect sort/filter
    }
  };

  const handleUpdateTask = async (id, updatedData) => {
    const data = await updateTask(id, updatedData);
    if (data.success) {
      // Optimistic update for better UX
      setTasks(tasks.map(t => t._id === id ? data.data : t));
    }
  };

  const handleDeleteTask = async (id) => {
    const data = await deleteTask(id);
    if (data.success) {
      setTasks(tasks.filter(t => t._id !== id));
    }
  };

  return (
    <div className="container">
      <Toaster position="top-right" />
      
      <header className="header">
        <h1>Task Tracker Pro</h1>
        <p>Manage your tasks efficiently and elegantly.</p>
      </header>

      <main>
        <TaskForm onTaskAdded={handleTaskAdded} />
        
        <Controls 
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          sortOption={sortOption}
          setSortOption={setSortOption}
        />

        <TaskList 
          tasks={tasks} 
          loading={loading}
          onUpdateTask={handleUpdateTask}
          onDeleteTask={handleDeleteTask}
        />
      </main>
    </div>
  );
}

export default App;
