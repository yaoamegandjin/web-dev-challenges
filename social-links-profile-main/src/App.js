import React, { useState } from 'react';
import './App.css';
const person = {
  name: 'Jessica Randall',
  residence: 'London, United Kingdom',
  about: 'Front-end developer and avid reader.',
  socials: [
    {id: 0, social: 'GitHub'}, 
    {id: 1, social:'Frontend Mentor'}, 
    {id: 2, social: 'Linkedin'}, 
    {id: 3, social: 'Twitter'}, 
    {id: 4, social: 'Instagram'}
  ]
};

function Bio({person}) {
  return (
    <section className="bio">
      <img src="/assets/images/avatar-jessica.jpeg" alt="Owner"/>
      <h1>{person.name}</h1>
      <h2>{person.residence}</h2>
      <q>{person.about}</q>
    </section>
  );
}
function SocialLinks({ socials }) {
  const [isHovered, setIsHovered] = useState(null);
  
  const listOfSocials = socials.map(s => <li key={s.id} onMouseEnter={() => setIsHovered(s.id)} onMouseLeave={() => setIsHovered(null)} style={{ backgroundColor: isHovered === s.id ? '#c5f82a' : '#333333', color: isHovered === s.id ? 'black' : 'white'}}>{s.social}</li>);
  return (
    <section className="socials">
      <ul>{listOfSocials}</ul>
    </section>
  );

}
function SocialProfile({ children }) {
  return (
    <section className="profile">
      {children}
    </section>
  );
}

function App() {
  return (
    <SocialProfile>
      <Bio person={person}/>
      <SocialLinks socials={person.socials}/>
    </SocialProfile>
  );
}

export default App;
