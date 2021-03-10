import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamDetail.css';
import fb from '../../images/Facebook.png';
import youtube from '../../images/YouTube.png';
import twitter from '../../images/Twitter.png';
import Male from '../../images/male.png';
import Female from '../../images/female.png';




const TeamDetails = (props) => {
    const [team, setTeam] = useState({});
    const { intFormedYear, strTeam, strCountry, strGender, strTeamBanner, strStadiumThumb, strDescriptionEN } = team;
    const { idTeam } = useParams();

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, idTeam)

    function ShowImage(strGender) {
        if (strGender === 'Female')
            return <div className="playerImage"><img src={Female} alt="" srcset="" /></div>;
        else
            return <div className="playerImage"><img src={Male} alt="" srcset="" /></div>;
    }

    return (
        <div>
            <div>
                <img src={strTeamBanner} alt="" srcset="" />
            </div>

            <div className="club-details">
                <div>
                    <p> {strTeam}</p>
                    <p>Country : {strCountry}</p>
                    <p>Founded : {intFormedYear}</p>
                    <p>Gender : {strGender}</p>
                    
                </div>
                <div >
                    {
                        ShowImage(strGender)
                    }

                </div>

            </div>
            <p>{strDescriptionEN}</p>
            <div className="social-container">
                <img src={fb} />
                <img src={youtube} />
                <img src={twitter} />

            </div>
        </div>





    );
};

export default TeamDetails;