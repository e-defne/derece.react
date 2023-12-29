import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Başlangıç veri seti
const DATA = [
  { id: 'todo-0', name: 'Sabah', completed: true },
  { id: 'todo-1', name: 'Öğlen', completed: false },
  { id: 'todo-2', name: 'Akşam', completed: false },
];

// DOM'daki root elementine erişim
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element bulunamadı!');

// React uygulamasını root elementine bağlama
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);

