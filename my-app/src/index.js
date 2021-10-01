import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import Calculator from './Calculator';
//<script src="./App.js"></script>
import reportWebVitals from './reportWebVitals';
// App,Header react Component 라고함.
// Component 는 element로 구성된 도구로 개발자가 정의함.
// ReactDOM.render() 컴퍼넌트를 랜더,출력하는 함수.
// ReactDOM 은 html 유사 element.


ReactDOM.render(
  <React.StrictMode>
    
    <Header title={"React Study"} 
    nav_li={[{text:"계산기", url:"/#calculator"},
    {text:"props",url:"/props.html"},
    {text:"state",url:"/state.html"}]}/>
    <App />
    <Calculator/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
