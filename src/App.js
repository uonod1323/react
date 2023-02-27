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
          글제목.map(function(a,i){
            return (
              <div className='list'>
                <h4 onClick={function(){setModal(true)}}>{글제목[i]} <span onClick={function(){
                  let 따봉복사 = [...따봉];
                  따봉복사[i] = 따봉복사[i] + 1;
                  따봉변경(따봉복사);
                }}>👍</span> {따봉[i]}</h4>          
                <p>2월 17일 발행</p>
              </div>
            )
          })
        }

        {
          modal == true ? <Modal 추천={'여자 코트 추천'} 글제목={글제목} 제목변경={제목변경}/> : null
        }
      </div>
  );
}

function Modal(props){
  return(
      <div className="modal">
        <h4>{props.글제목[0]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button onClick={function(){
          let 제목복사 = [...props.글제목];
          제목복사[0] = props.추천;
          props.제목변경(제목복사);
        }}>글수정</button>
      </div>
  )
}

export default App;
