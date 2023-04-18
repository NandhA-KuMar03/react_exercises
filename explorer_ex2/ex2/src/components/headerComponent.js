
function HeaderFunction(){
    return(
        <>
            <header>
                <a href="">
                    <div className='ImgContainer'>
                        <img src={process.env.PUBLIC_URL + "./images/logo.png"} alt='Page logo'/>
                    </div>
                </a>
                <div className='MenuContainer'>
                    <p>Hotels</p>
                    <p>Bike Rentals</p>
                    <p>Restaurants</p>
                </div>
            </header>
        </>
    )
}

export default HeaderFunction;