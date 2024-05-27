import { useState, useEffect, useRef } from 'react'


const Lives = () => {
    const [idGame, setIdGame] = useState<any>([])
    const [livesGames, setLiveGames] = useState<any>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState()
    const abortController = useRef<AbortController | null>(null);
    const [xd, setXd] = useState(0)


    const callApi = async () => {
        abortController.current?.abort();
        abortController.current = new AbortController();
        setIsLoading(true)
        try {
            const response = await fetch("https://v3.football.api-sports.io/fixtures?live=all", {
                signal: abortController.current.signal,
                method: "GET",
                headers: {
                    'x-rapidapi-host': 'v3.football.api-sports.io',
                    'x-rapidapi-key': '78ee851332310ce7a53693a37d768a90'
                }
            })
            const data = await response.json();
            setLiveGames(data)
        } catch (error: any) {
            if (error.name === 'AbortError') {
                console.log('fetch aborted');
                return;
            }
            setError(error)
        } finally {
            setIsLoading(false)
        }
        setIsLoading(false)
    }

    useEffect(() => {
        callApi();
    }, [xd])

    if (isLoading) return (<h1>Loading...</h1>)
    if (error) return (<h1>Error, please try again</h1>)

    return (
        <>
            <div>
                <div className='lives-container'>
                    {
                        !isLoading && (
                        livesGames.response?.map((game: any) => {
                            return (
                                <div key={game.fixture.id} onClick={() => { setIdGame(game.fixture.id) }} className='lives-container__games'>
                                    <div className='lives-league'>
                                        <h2>{game.league.name} - </h2>
                                        <h2>{game.league.country}</h2>
                                    </div>
                                    <div className='lives-image'>
                                        <img src={game.teams.home.logo} alt="image-home" />
                                        <img src={game.teams.away.logo} alt="image-home" />
                                    </div>
                                    <div className='lives-info'>
                                        <p>{game.teams.home.name}</p>
                                        <p>{game.goals.home} - </p>
                                        <p>{game.goals.away}</p>
                                        <p>{game.teams.away.name}</p>
                                    </div>
                                </div>
                            )
                        }))
                    }
                </div>
            </div>
        </>
    )
}

export default Lives
