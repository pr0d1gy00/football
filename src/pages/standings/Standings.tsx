import React, { useEffect } from 'react'

const Standings = () => {

    useEffect(function(){
        fetch("https://v3.football.api-sports.io/fixtures/headtohead?h2h=529-532", {
            method: 'GET',
            headers: {
                'x-rapidapi-host':'v3.football.api-sports.io',
                'x-rapidapi-key': '78ee851332310ce7a53693a37d768a90'
            }}).then(response => response.json())
            .then(data => console.log(data))
    },[])

    return (
        <div>
            <h1>Standings</h1>
        </div>
    )
}

export default Standings
