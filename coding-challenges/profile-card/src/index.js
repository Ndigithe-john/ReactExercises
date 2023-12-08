import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
  {
    skill: "Docker",
    level: "intermediate",
    color: "#1D63ED",
  },
];


function App(){
  return (<div className='card'>
  <Avatar/>
  <div className='data'>
<Intro/>
<SkillsList/>
  </div>

  </div>
  )
}

function Avatar(){
  return (
    <img className="avatar"src="assets/profileImg.jpg" alt='devProfile'/>
  )
}
function Intro(){
  return <main>
    <h1>My Miss</h1>
    <p>
      Full-Stack Web developer and a Designer. when not coding i watch a movie, cook or take a walk. My best movie is Lord of the Rings and best series is Game of Thrones. The best lesson i have learnt in life is we all need Mentors. They are useful for when things get heavy/challenging. Not to carry them for us but to carry us in the process.
    </p>
  </main>
}
function SkillsList(){
  
  return <ul className='skill-list'>
{skills.map(skill=> <Skill skillObject={skill} key={skill.skill}/>)}
  </ul>
}

function Skill({skillObject}){
  return (
    <li className="skill" style={{ backgroundColor: skillObject.color }}>
      <span>{skillObject.skill}</span>
      <span>
        {skillObject.level === "beginner" && "😩"}
        {skillObject.level === "intermediate" && "🥳"}
        {skillObject.level === "advanced" && "💪"}
      </span>
    </li>
  );
    
  
}

