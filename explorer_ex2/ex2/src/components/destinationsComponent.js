import React, {useEffect, useState} from 'react';

const API = "https://nijin-server.vercel.app/api/explorer";
function DestinationComponent(){
    
        const [users, setUsers] = useState([]);
        const fetchUsers = async (url) => {
            try{
                const res = await fetch(url);
                const data = await res.json();
                if(data.length > 0){
                setUsers(data);
                }
            }
            catch(e){
                console.error(e);
            }
        }
    
        useEffect( () => {
            fetchUsers(API);
        }, [])
      
    return(
        <>
        <div className='DestinationsComponentHeader'>
            <h2 className='DestinationsComponentHeaderTitle'>Destinations</h2>
            <p className='DestinationsComponentHeaderContent'>Just for you. Because you and your bike are special to us!</p>
        </div>

        <div className='DestinationsContainer'>
            {
            users.map(places => {
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