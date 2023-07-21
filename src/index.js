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
      <Skill skill='sing' emoji='🎤🤏' color='orange' />
      <Skill skill='photograph' emoji='📸' color='skyblue' />
      <Skill skill='python' emoji='👍' color='yellow' />
      <Skill skill='javascript' emoji='👊' color='lime' /> 
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
      <h1>นางสาวสุวลักษณ์ นามแสง</h1>
      <p>
        นักศึกษาสาวict สาวสวยสายฮา น่ารัก อารมณ์ดี เฟรนลี่ จากสาขาเทคโนโลยีสารสนเทศและการสื่อสาร คณะวิทยาศาสตร์
        มหาวิทยาลัยอุบลราชธานี ชื่นชอบการถ่ายรูปร้องเพลง และอยากเป็นนักพัฒนาเว็บที่เก่งๆในอนาคต
      </p>
    </div>
  );
}

function Avatar(){
  return <img className='avatar' src='IMG_3810.jpg' alt="My Avatar" ></img>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
