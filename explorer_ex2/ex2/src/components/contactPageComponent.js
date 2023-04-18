import { useRef, useState } from "react";

function ContactPage(){

    const [isValid , setValid] = useState(false);
    const NameRef = useRef("");
    const HomeTown = useRef("");
    const Location = useRef("");

    const ResponseText = () => {
        if(NameRef.current.value.trim() != "" && HomeTown.current.value.trim() != "" && Location.current.value.trim() != ""){
            setValid(!isValid);
        }
    }

    return(
        <>
            <div className="ContactPageContainer">

                <div>
                    <h2>Contact Us</h2>
                    <p>Our sales will react out to you ASAP!</p>
                </div>

                <div className="NameContainer" >
                    <label>Name</label>
                    <input type="text" ref={NameRef}/>
                </div>

                <div className="HomeTownContainer" >
                <label>Your Home town</label>
                    <select ref={HomeTown} name="hometown">
                        <option disabled>Choose</option>
                        <option value="Chennai">Chennai</option>
                        <option value="CBE">CBE</option>
                        <option value="Bangalore">Bangalore</option>
                    </select>
                </div>

                <div className="LocationContainer" >
                    <label>Where would you like to go?</label>
                    <select ref={Location} name="location">
                        <option disabled>Choose</option>
                        <option value="Tirunelveli">Tirunelveli</option>
                        <option value="Kumbakonam">Kumbakonam</option>
                        <option value="Karaikudi">Karaikudi</option>
                        <option value="Madurai">Madurai</option>
                    </select>
                </div>

                <div className="NumberContainer">
                    <label>Contact Number</label>
                    <input type="text"></input>
                </div>

                <button onClick={ResponseText}>SUBMIT INTEREST</button>

                {isValid && <div>Thank you {NameRef.current.value} for expressing your intrest in travelling with us. Our Sales team will get back with the best packages from {HomeTown.current.value} to {Location.current.value}</div>}<div className="ResponseContainer">

                </div>
            </div>
        </>
    )
}

export default ContactPage;