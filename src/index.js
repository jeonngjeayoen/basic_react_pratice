import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import '../src/calculator.css'
import '../src/todolist.css'
import reportWebVitals from './reportWebVitals';
import Calculator from './compotent/Calcilator';
import New from './compotent/3D';
import New02 from './compotent/3D02';
import Todo from './compotent/Todo';
import {BrowserRouter,Routes,Route} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/cal" element={<Calculator />}></Route>
        <Route path="/new" element={<New />}></Route>
        <Route path="/new02" element={<New02 />}></Route>
        <Route path="/todo" element={<Todo />}></Route>
      </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
