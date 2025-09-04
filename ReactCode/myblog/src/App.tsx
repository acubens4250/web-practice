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

  const [like, setLike] = useState(0);
  const[detail, setDetail] = useState<boolean>(false)

  const handleLikeClick = () : void => {
    setLike(like + 1);
  }

    const handleDetailClick = () : void => {
    setDetail(!detail);
  }

  return (
    <div className = 'App'>
      <div className='title-nav'>
        <h1>{title}</h1>
      </div>
      <div className='container'>

        <div className='board'>
        
          {
            post.map(function(param : Post, idx){
              return(
                <div className='post' key = {idx}>
                  <h3 onClick = {handleDetailClick}>{post[idx].title}
                  <span onClick = {handleLikeClick}> ❤️</span>{like}</h3>
                  <p>{post[idx].date}</p>
                </div>
              )
            })
          }

        </div>
      </div>

      {
        detail === true ? <Detail></Detail> : null
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

const Detail : React.FC = () => {
  return(
    // html 내용
    <div className='detail'>
        <h3>제목</h3>
        <h4>내용</h4>
        <p>날짜</p>
      </div>
  )
}

export default App;
