
function PromoExploreFunction(){
    return(
        <div className='PromoComponent'>  
            <div className='PromoComponentLeftPane'>
                <h2>WELCOME TO EXPLORER</h2>
                <h3>Your Adventure Travel Expert in the <span>SOUTH</span></h3>
                <select>
                    <option value="" disabled selected>Choose</option>
                </select>
                <button>EXPLORE</button>
            </div>
            <div className='BannerImage'>
                <img src={process.env.PUBLIC_URL + "./images/banner.png"} alt='Banner'/> 
            </div>
        </div>
    )
}

export default PromoExploreFunction;