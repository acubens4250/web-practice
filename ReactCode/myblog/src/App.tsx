/*
  터미널에서 react 프로젝트 생성
  npx create-react-app 프로젝트명 --template typescript

  프로젝트 폴더로 이동
  cd 프로젝트명

  프로젝트 실행
  npm start
*/

import { useState } from 'react';
import './App.css';

interface Post{
  id : number;
  title : string;
  content : string;
  date : string;
}

const App : React.FC = () =>{
  // 자바 스크립트 코드
  // 자주 변하는 데이터는 state로 관리

  let title : string = '나의 블로그';
  let apple : string = '사과';
  let [post, setPost] = useState<Post[]>([
    {id : 1, title : '미움받을 용기', content : '모든 고민은 삶에서 비롯된다.', date : '2024-01-01'},
    {id : 2, title : '고기 먹을 용기', content : '모든 고민은 삶에서 비롯된다.', date : '2025-01-01'}, 
    {id : 3, title : '커피 마실 용기', content : '모든 고민은 삶에서 비롯된다.', date : '2026-01-01'}
  ]);

  let [like, setLike] = useState<number[]>([0, 0, 0]);

  const[detail, setDetail] = useState<boolean>(false);

  let [index, setIndex] = useState<number>(0);

  let [input, setInput] = useState<string>('');



  const handleLikeClick = (postIndex : number) : void => {
    let cplike = [...like];
    cplike[postIndex] = cplike[postIndex] + 1;
    setLike(cplike);
  }

  const handleDetailClick = (idx : number) : void => {
    setDetail(!detail);
    setIndex(idx);
  }

  const handleAddClick = () : void => {
    const newPost : Post = {
      id : post.length + 1,
      title : input,
      content : '새로운 글이 등록되었습니다.',
      date : new Date().toISOString().split('T')[0] // 현재 날짜를 YYYY-MM-DD 형식으로
    };

    setPost((prevPosts)=>[...prevPosts, newPost]);
  }

    const handleDeleteClick = (idx : number) : void => {
      let cppost = [...post];
      cppost.splice(idx, 1);
      setPost(cppost);
  }

  return (
    <div className = 'App'>
      <div className='title-nav'>
        <h1>{title}</h1>
      </div>

      <div className='container'>
        <div className='board'>       
          <input type = 'text' onChange={
            (e)=>{
              console.log(e.target.value);
              setInput(e.target.value);
            }
          }></input>
          <button onClick={()=>{handleAddClick()}}>추가</button>
        </div>
      </div>

      <div className='container'>
        <div className='board'>        
          {
            post.map(function(param : Post, idx){
              return(
                <div className='post' key = {idx}>
                  <h3 onClick = {()=>{handleDetailClick(idx)}}>{post[idx].title}
                  <span onClick = {(e)=>{
                    handleLikeClick(idx)
                    e.stopPropagation(); // 이벤트 버블링 방지
                    }}> ❤️</span>{like[idx]}</h3>
                  <p>{post[idx].date}</p>
                  <button className = 'delbutton' onClick={()=>handleDeleteClick(idx)}>삭제</button>
                </div>
              )
            })
          }

        </div>
      </div>

      {
        detail === true ? <Detail post = {post} index = {index}></Detail> : null
      }


      {/* <button onClick = {() => {
        let postCopy = [...post];
        postCopy[0].title = '들이받을 용기';
        setPost(postCopy);
      }}>제목 변경</button> */}
    
      {/* {<Timer></Timer>} */}
    </div>
  );
}

interface DetailProps{
  post : Post[];
  index : number;
}

const Timer : React.FC = () => {

  const [seconds, setSeconds] = useState<number>(0);

  return(
    <div> 
      <h1>타이머 : 0초</h1>
      <button onClick = {
        function(){
          setInterval(()=>{
            setSeconds((seconds) => seconds + 1); // 콜백 지옥
          }, 1000);
        }
      }>시작</button>
    </div>
  )
}

const Detail : React.FC <DetailProps>= ({post, index}) => {
  return(
    // html 내용
    <div className='detail'>
        <h3>{post[index].title}</h3>
        <h4>{post[index].content}</h4>
        <p>{post[index].date}</p>
      </div>
  )
}

export default App;
