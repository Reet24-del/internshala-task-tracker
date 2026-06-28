import React from 'react';

const Controls = ({ statusFilter, setStatusFilter, sortOption, setSortOption }) => {
  return (
    <div className="controls-container">
      <div className="control-group">
        <label htmlFor="statusFilter">Filter:</label>
        <select 
          id="statusFilter" 
          className="select-control"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="all">All Tasks</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="control-group">
        <label htmlFor="sortOption">Sort By:</label>
        <select 
          id="sortOption" 
          className="select-control"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="dueDate">Due Date</option>
        </select>
      </div>
    </div>
  );
};

export default Controls;
