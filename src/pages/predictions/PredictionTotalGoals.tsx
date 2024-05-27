import PredictionsTotalGoal from '../../../public/dataPredictionsTotalGoals.json'

const PredictionTotalGoals = () => {
    return (
        <div className='predictions'>
            <h2 className='prediction-tittle'>Predicciones Total de goles</h2>
            <div className='prediction-container'>
                {PredictionsTotalGoal.map((prediction, index) => {
                    return (
                        <div key={index} className='prediction-game prediction-game__shadow' >
                            <h3 className='prediction-game__time'>Hora: {prediction.time}</h3>
                            <div className='prediction-game__teams'>
                                <div>
                                    <h4 className='prediction-game__teams--home'> {prediction.home} </h4>
                                </div>
                                <p>VS</p>
                                <div>
                                    <h4 className='prediction-game__teams--away'> {prediction.away} </h4>
                                </div>
                            </div>
                            <p className='prediction-game__prediction'>{prediction.prediction}</p>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default PredictionTotalGoals
