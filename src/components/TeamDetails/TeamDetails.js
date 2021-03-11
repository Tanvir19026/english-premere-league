import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetail.css';
import fb from '../../images/Facebook.png';
import sportsType from '../../images/football (1) 1.png';
import country from '../../images/flag (1) 1.png';
import FoundedFlag from '../../images/found 1.png';
import genderIcon from '../../images/male-gender-sign 1.png';

import youtube from '../../images/YouTube.png';
import twitter from '../../images/Twitter.png';
import Male from '../../images/male.png';
import Female from '../../images/female.png';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';





const TeamDetails = (props) => {
    const [team, setTeam] = useState({});
    const { intFormedYear, strTeam, strCountry, strGender, strTeamBanner, strSport, strDescriptionEN } = team;
    const { idTeam } = useParams();

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [idTeam])

    function ShowImage(strGender) {
        if (strGender === 'Female')
            return <div className="playerImage"><img src={Female} alt="" srcset="" /></div>;
        else
            return <div className="playerImage"><img src={Male} alt="" srcset="" /></div>;
    }

    return (


        <div>
            <Container>
                <Row>
                    <Col><img className="banner-design " src={strTeamBanner} alt="" srcset="" /></Col>
                </Row>
            </Container> 

            <div style={{ backgroundColor: 'black' }}>
                <Container style={{ marginRight: '1px' }} >
                    <Row style={{ backgroundColor: 'grey', borderRadius: '15px', color: 'white' }} className="justify-content-md-center m-3">
                        <Col md="auto" className="icon-design" >
                            <h1> {strTeam}</h1>
                            <p><img src={country} />  Country:{strCountry}</p>
                            <p> <img src={FoundedFlag} /> Founded : {intFormedYear}</p>
                            <p><img src={sportsType} />   sport type : {strSport}</p>
                            <img src={genderIcon} />     Gender : {strGender}

                        </Col>
                        <Col className="col-md-6 playerImg">
                            {
                                ShowImage(strGender)
                            }
                        </Col>

                    </Row>

                </Container> 



 
             




                <Container fluid="md">
                    <Row>
                        <Col md={12} style={{ textAlign: 'justify', color: 'white' }}><p>{strDescriptionEN}</p></Col>

                    </Row>
                </Container>





                <div className="social-container">
                    <a target="_blank" href="https://www.facebook.com" > <img src={fb} /></a>


                    <a href="https://www.youtube.com"target="_blank" ><img src={youtube} /></a>
                    <a href="https://twitter.com" target="_blank"> <img src={twitter} /></a>

                </div>
            </div>
</div>
        
    



    );
};

export default TeamDetails;










