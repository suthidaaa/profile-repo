import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App(){
  return(
    <>
      <div className='card'>
        <Avatar />
        <div className='data'>
          <Intro />
          <SkillList />
        </div>
      </div>
    </>
  );
}

function SkillList(){
  return(
    <div className='skill-list'>
      <Skill skill='tea' emoji='🍹🍰' color='green' />
      <Skill skill='photograph' emoji='📸' color='orange' />
      <Skill skill='python' emoji='🐧' color='blue' />
      <Skill skill='javascript' emoji='🐼' color='gray' /> 
    </div>
  );
}

function Skill(props){
  return(
    <div className='skill' style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function Intro(){
  return(
    <div>
      <h1>นางสาวสุธิดา เลียงคำ</h1>
      <p>
        นักศึกษาสาขาเทคโนโลยีสารสนเทศและการสื่อสาร คณะวิทยาศาสตร์
        มหาวิทยาลัยอุบลราชธานี หน้าหยิ่งแต่เฟรนลี่ ชอบเที่ยวคาเฟ่ ชอบการถ่ายรูป
      </p>
    </div>
  );
}

function Avatar(){
  return <img className='avatar' src='PHOTO.jpg' alt="My Avatar" ></img>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
