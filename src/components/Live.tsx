import { useEffect, useState } from 'react'

const Live = () => {
    const [tv, setTv] = useState('dsports')
    console.log(tv)
    return (
        <div className='match-container'>
            <h2 className='text-h2'>Canales deportivos</h2>
            <h3 className='text-h3'>¡elige entro varios canales para ver tu partido favorito!</h3>
            <div className='select-tv__option'>
                <h4 className='text-h4'>Selecciona un canal deportivo:</h4>
                <select onChange={e=>{setTv(e.target.value)}} name="tv" id="" className='select-option'>
                    <option value="dsports" className='option-tv'>DirecTV Sports</option>
                    <option value="espnpremium" className='option-tv'>ESPN</option>
                    <option value="mlspass" className='option-tv'>MLS</option>
                    <option value="winsportsplus" className='option-tv'>WIN SPORT</option>
                </select>
            </div>
            <div className='match-live'>

                <iframe allowFullScreen={true} scrolling="no" src={`https://www.capofut.net/play/${tv}.php`} allow="encrypted-media" width="100%" height="100%" frameBorder="0"></iframe>

            </div>
        </div>

    )
}

export default Live
