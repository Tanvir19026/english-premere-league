import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router';
import { Button, Card } from 'react-bootstrap';
import './Team.css';


const Team = (props) => {
    const { strTeam, strTeamBadge, idTeam, strSport } = props.team;
    const history = useHistory();
    const handlebutton = (idTeam) => {
        const url = `/team/${idTeam}`;
        history.push(url);

    }

    return (
   
        <div className="col-md-4 ">
    <Card className="card-design" style={{ width: '18rem' }}>
    
                <Card.Body className="card-design">
                <Card.Img src={strTeamBadge} />
                    <Card.Title className="clubName">{strTeam}</Card.Title>
                     <p className="type">Sports Type : {strSport}</p>
                    <Button onClick={() => handlebutton(idTeam)} variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                </Card.Body>
            </Card>

        
        </div>
    );
};

export default Team;