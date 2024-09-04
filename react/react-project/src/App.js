import logo from './logo.svg';
import './App.css';
import Post from './Post'
import { useRef, useState } from 'react';

function App() {
  const element = <h1 className='title'>안녕하세요 h1입니다.</h1>
  const data = [{
      title : '첫글은 내 거야',
      text : '반갑습니다'
    },{
      title : '가입인사 올립니다',
      text : '잘 부탁드립니다'
    },{
      title : '여기 뭐하는 덴가요?',
      text : '...?'
    }]
  
  const [number , setNumber] = useState(0)
  const handleIncressNumber = () =>{
    setNumber(number+1)
  }
  const [text, setText] = useState('')
  const handleChangeText = (e) =>{
    setText(e.target.value)
  }

  const [inputText, setInputText] = useState('')
  const inputFocus = useRef()
  const handleChangeTextToButton = () => {
    setInputText(inputFocus.current.value)
  }


  return (
    <div className="App">

      {element}
  
      <span>{number}</span>
      <button onClick={handleIncressNumber}>click!</button>

      <input type='text' onChange={handleChangeText}></input>
      <p>당신의 입력: {text}</p>

      <input type='text' ref={inputFocus}></input>
      <button onClick={handleChangeTextToButton}>click!!</button>
      <p>여기에요 여기: {inputText}</p>

      {/* <div className='post'>
        <h3>게시물 제목</h3>
        <p>lorem ipsum</p>
      </div> */}

      {/* <Post 제목='안녕하세요' 내용='반갑습니다'></Post>
      <Post 제목='안녕하세요' 내용='반갑습니다'></Post>
      <Post 제목='안녕하세요' 내용='반갑습니다'></Post>
      <Post 제목='안녕하세요' 내용='반갑습니다'></Post>
      <Post 제목='안녕하세요' 내용='반갑습니다'></Post>
      <Post 제목='안녕하세요' 내용='반갑습니다'></Post>
      <Post 제목='안녕하세요' 내용='반갑습니다'></Post> */}

      {/* {data.map((value,key)=>{
        return <p>{value.title}</p>
      })} */}

      {data.map((value,key)=>
        <p>{value.title}</p>
      )}

      {data.map((value,key)=>
        <Post 제목={value.title} 내용={value.text}></Post>
      )}

    </div>
  );
}

export default App;
