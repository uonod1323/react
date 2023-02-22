import './App.css';
import {useState} from 'react'

function App() {

  let post = '강남 우동 맛집'; //자료 잠깐 저장할 땐 변수
  let [글제목, 제목변경] = useState(['남자 코트 추천', '디자이어 그랑프리 랭킹', '까짓거 함 해보죠']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
        {
          글제목.map(function(a, i){
            return (
              <div className="list" key={i}>
                <h4>{글제목[i]} <span onClick={()=>{
                  따봉.map(function(b,j){
                    따봉[j] = b + 1;
                  })
                }}
                >👍</span> {따봉}</h4>
                <p>2월 17일 발행</p>
              </div>
            )
          })
        }
    </div>
  );
}

function Modal(){
  return(
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
