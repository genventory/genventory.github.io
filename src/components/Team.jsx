// File Path: /src/components/Team.jsx
import React from 'react';

const teamMembers = [
    {
        name: 'Ahmed Al Hikmani',
        bio: 'Ahmed is a DS at the University of Utah graduating in May 2024...',
        image: '/path-to-ahmed-image.jpg',
        contact: 'ahmed@example.com',
        linkedin: 'https://linkedin.com/in/ahmed',
    },
    // Add other team members following the same structure
];

const Team = () => {
    return (
        <div className="team">
            <h1>Meet the Team</h1>
            {teamMembers.map((member, index) => (
                <div key={index} className={`team-member ${index % 2 === 0 ? 'left' : 'right'}`}>
                    <img src={member.image} alt={`Headshot of ${member.name}`} />
                    <div className="bio">
                        <h2>{member.name}</h2>
                        <p>{member.bio}</p>
                        <a href={`mailto:${member.contact}`}>Email</a>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Team;
