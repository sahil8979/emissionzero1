import React from "react";
import "./Teamexpert.css";
import img2 from "../../../public/assets/john wiley.png";
import img1 from "../../../public/assets/cameron wiliamson.png"; // Replace with your actual image path
import img3 from "../../../public/assets/courtsey enry.png";
import img4 from "../../../public/assets/daniel rusell.png";

const TeamExperts = () => {
  const teamData = [
    {
      img: img1,
      name: "Jenny Wilson",
      title: "Senior Sustainability Consultant",
    },
    {
      img: img2,
      name: "Cameron Williamson",
      title: "Senior Sustainability Consultant",
    },
    {
      img: img3,
      name: "Courtney Henry",
      title: "Energy Analyst",
    },
    {
      img: img4,
      name: "Dianne Russell",
      title: "Senior Renewable Energy Engineer",
    },
  ];

  return (
    <section className="team-section">
      <div className="team-header">
        <h2>Meet our experts</h2>
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
