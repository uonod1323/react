import './App.css';
import {useState} from 'react'

function App() {

  let post = '강남 우동 맛집'; //자료 잠깐 저장할 땐 변수
  let [글제목, 제목변경] = useState(['남자 코트 추천', '디자이어 그랑프리 랭킹', '까짓거 함 해보죠']);
  let [따봉, 따봉변경] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>{글제목[0]}<span onClick={()=>{따봉변경(따봉+1)}}>👍</span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <button onClick={()=>{   
        let copy = [...글제목];
        copy.sort();
        console.log(copy);
        제목변경(copy);     
        }}>가나다순정렬</button>
      <button onClick={()=>{   
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        제목변경(copy);
        }}>바꿔줘</button>
    </div>
  );
}

export default App;
