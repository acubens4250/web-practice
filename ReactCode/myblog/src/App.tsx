import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App : React.FC = () =>{
  // 자바 스크립트 코드

  let title : string = '나의 블로그';
  let apple : string = '사과';
  let [post, setPost] = useState('미움받을용기');
  let [post2, setPost2] = useState('고기 사줄 용기');
  let [post3, setPost3] = useState('커피 마실 용기');


  return (
    <div className = 'App'>
      <div className='title-nav'>
        <h1>{title}</h1>
      </div>
      <div className='list'>
        <h3>{post}</h3>
        <p>발행날짜</p>
      </div>
      <div className='list'>
        <h3>{post2}</h3>
        <p>발행날짜</p>
      </div>
      <div className='list'>
        <h3>{post3}</h3>
        <p>발행날짜</p>
      </div>
    </div>
  );
}

export default App;
