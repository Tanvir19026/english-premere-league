import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';


const Team = (props) => {
    const {strTeam,strTeamBadge,idTeam}=props.team;
    const history=useHistory();
    const handlebutton=(idTeam)=>{
     const url = `/team/${idTeam}`;
     history.push(url);

    }

    return (
        <div>
            <img src={strTeamBadge} alt="" srcset=""/>
            <h1>{strTeam}</h1> 
            <p>{idTeam}</p>
            <button onClick={() => handlebutton(idTeam)} >Explore <FontAwesomeIcon icon={faArrowRight} /></button> 
        </div>
    );
};

export default Team;