import './App.css';
import {useState} from 'react'

function App() {

  let post = '강남 우동 맛집'; //자료 잠깐 저장할 땐 변수
  let [글제목, 제목변경] = useState(['남자 코트 추천', '디자이어 그랑프리 랭킹', '까짓거 함 해보죠']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, 모달제목변경] = useState(0);
  let [입력값, 입력값변경] = useState('');
  

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
        {
          글제목.map(function(a,i){
            return (
              <div className='list'>
                <h4 onClick={function(){    
                    setModal(!modal);
                    모달제목변경(i);
                  }}>{글제목[i]} <span onClick={function(e){
                    e.stopPropagation();
                  let 따봉복사 = [...따봉];
                  따봉복사[i] = 따봉복사[i] + 1;
                  따봉변경(따봉복사);
                }}>👍</span> {따봉[i]}</h4>          
                <p>2월 17일 발행</p>
              </div>
            )
          })
        }

        <input onChange={(e)=>{입력값변경(e.target.value); console.log(입력값);}}/>
        <button onClick={()=>{
          let 제목복사 = [...글제목];
          제목복사.unshift(입력값);
          제목변경(제목복사);
          let 따봉복사 = [...따봉];
          따봉복사.unshift(0);
          따봉변경(따봉복사);
        }}>글추가</button>

        {
          modal == true ? <Modal 글제목={글제목} title={title}/> : null
        }
      </div>
  );
}

function Modal(props){
  return(
      <div className="modal">
        <h4>{props.글제목[props.title]}</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
