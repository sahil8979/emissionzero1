import React from "react";
import "./Teamexpert.css";

import yash from "../../../public/assets/yash.jpg";
import prakhar from "../../../public/assets/prakhar.jpg";
import yashvant from '../../../public/assets/yashvant.jpg'
import nandini from '../../../public/assets/nandini.jpg'

const TeamExperts = () => {
  const teamData = [
    {
      img: yashvant,
      name: "Yashvant Singh",
      title: "Co-Founder",
    },
    {
      img: yash,
      name: "Yash Sisodia",
      title: "Co-Founder",
    },
    {
      img: prakhar,
      name: "Prakhar Pandey",
      title: "Tech Head",
    },
    {
       img: nandini,
       name:"Nandini Gussain",
       title:"Reasearcher"
    },
    
  ];

  return (
    <section className="team-section" id="team">
      <div className="team-header">
        <h2>Meet our Team</h2>
        <p>
          Our team boasts top green energy experts, driving innovation in
          sustainability.
        </p>
      </div>
      <div className="team-container">
        {teamData.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.img} alt={member.name} className="team-image" />
            <div className="team-details">
              <h3>{member.name}</h3>
              <p>{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamExperts;
