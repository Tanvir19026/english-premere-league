import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import banner from '../../images/joumf8y3pzk2sx4owem2.jpg';
import './Home.css';

const Home = () => {
    const [teams,setTeams]=useState([])
   
    useEffect(()=> {
       
    const url =`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`
    fetch(url)
    .then(res => res.json())
    .then(data => setTeams(data.teams))
    
     

    },[])
    
    return (
        <div>
        

        <div className="col-md-12 headline ">
        <h1>English Premier League</h1>
       </div>
            
            <div style={{backgroundColor:'black'}} className="row">
               
           
            {
               teams.map(team => <Team team={team}></Team>)
            }

            </div>
           
            </div>
       
    );
};

export default Home;