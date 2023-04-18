import Places from '../assets/places.json';

function DestinationComponent(){
    return(
        <>
        <div className='DestinationsComponentHeader'>
            <h2 className='DestinationsComponentHeaderTitle'>Destinations</h2>
            <p className='DestinationsComponentHeaderContent'>Just for you. Because you and your bike are special to us!</p>
        </div>
        <div className='DestinationsContainer'>
            {
                Places.map(places => {
                    return(
                        <div className='Box' key={places.city}>
                            <img src={process.env.PUBLIC_URL + "./images/"+places.city+".png"} alt={places.city}/>
                            <h4 className='TitleDescription'>{places.place}</h4>
                            <h3>{places.city}</h3>
                            <p className='Description'>{places.shortDescription}</p>
                            <button className='ExploreButton'>
                                READ MORE
                            </button>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default DestinationComponent;