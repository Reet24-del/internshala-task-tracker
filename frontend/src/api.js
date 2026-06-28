import axios from 'axios';

const API_URL = 'https://internshala-task-tracker.onrender.com/api/tasks';

export const fetchTasks = async (status, sortBy) => {
  let url = API_URL;
  const params = new URLSearchParams();
  if (status && status !== 'all') params.append('status', status);
  if (sortBy) params.append('sortBy', sortBy);
  
  const queryString = params.toString();
  if (queryString) url += `?${queryString}`;

  const response = await axios.get(url);
  return response.data;
};

export const createTask = async (taskData) => {
  const response = await axios.post(API_URL, taskData);
  return response.data;
};

export const updateTask = async (id, taskData) => {
  const response = await axios.put(`${API_URL}/${id}`, taskData);
  return response.data;
};

export const deleteTask = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
