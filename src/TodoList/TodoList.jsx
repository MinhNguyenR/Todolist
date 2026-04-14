import React, { useState } from 'react';
import { Button, Checkbox, Tabs, Tooltip, Input, List } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Do coding challenges', completed: false },
    { id: 2, text: 'Do coding challenges', completed: false },
    { id: 3, text: 'Do coding challenges', completed: true },
  ]);
  const [activeTab, setActiveTab] = useState('all');
  const [inputValue, setInputValue] = useState(''); 

  const handleAdd = () => {
    if (inputValue.trim()) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now(), text: inputValue, completed: false },
      ]);
      setInputValue('');
    }
  };

  const handleToggle = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDelete = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleDeleteCompleted = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  const filteredTasks = tasks.filter((task) => {
    if (activeTab === 'active') return !task.completed;
    if (activeTab === 'completed') return task.completed;
    return true;
  });

  const TodoItem = ({ task }) => {
    return (
      <div className="flex items-center space-x-2">
        <Checkbox checked={task.completed} onChange={() => handleToggle(task.id)} />
        <span className={task.completed ? 'line-through' : ''}>{task.text}</span>
        {activeTab === 'completed' && (
          <Tooltip title="Delete">
            <Button
              type="text"
              icon={<DeleteOutlined />}
              danger
              size="small"
              onClick={() => handleDelete(task.id)}
            />
          </Tooltip>
        )}
      </div>
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">#todo</h1>
      <div className="flex justify-center">
        <div className="flex space-x-[12rem]">
          <Tabs
            activeKey={activeTab}
            onChange={(key) => setActiveTab(key)}
            items={[
              { label: 'All', key: 'all' },
              { label: 'Active', key: 'active' },
              { label: 'Completed', key: 'completed' },
            ]}
          />
        </div>
      </div>
      {(activeTab === 'all' || activeTab === 'active') && (
        <div className="flex space-x-2 mb-4">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Nhập nhiệm vụ"
          />
          <Button type="primary" onClick={handleAdd}>
            Add
          </Button>
        </div>
      )}
      <List
        bordered
        dataSource={filteredTasks}
        renderItem={(item) => <List.Item><TodoItem task={item} /></List.Item>}
      />
      {activeTab === 'completed' && filteredTasks.length > 0 && (
        <div className="mt-4 flex justify-end">
          <Button type="danger" onClick={handleDeleteCompleted}>
            delete all
          </Button>
        </div>
      )}
    </div>
  );
};

export default TodoList;