import TextBox from "./TextBox";
import {SetStateAction, useState} from "react";
import axios from "axios";
// @ts-ignore
import {AwesomeButton} from "react-awesome-button";
// @ts-ignore
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";


function Horoscope() {
    const [sun, setSun] = useState("");
    const [moon, setMoon] = useState("");
    const [rising, setStar] = useState("");
    const [horoscope, setHoroscope] = useState([]);

    //TODO: Fill in the ? with appropriate names/values for a horoscope.
    const requestHoroscope = () => {
        const toSend = {
            sun: sun,
            moon: moon,
            rising: rising
        };

        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        //Install and import axios!
        //TODO: Fill in 1) location for request 2) your data 3) configuration
        axios.post('http://localhost:4567/horoscope', toSend, config)
            .then((response: { data: { [x: string]: SetStateAction<never[]>; }; }) => {
                console.log(response.data);
                //TODO: Go to the Main.java in the server from the stencil, and find what field name you should put here.
                //Note: It is very important that you understand how this is set up and why it works!
                setHoroscope(response.data["horoscope"]);
            });
    }

    return (
        <div className="Horoscope">
            <TextBox label={"Enter Sun Sign: "} change={setSun}/>
            <TextBox label={"Enter Moon Sign: "} change={setMoon}/>
            <TextBox label={"Enter Star Sign: "} change={setStar}/>

            <AwesomeButton cssModule={AwesomeButtonStyles} type={'primary'} onPress={() => {requestHoroscope()}}> Submit </AwesomeButton>
            {horoscope == null ? "" : horoscope.map((field: string) => <p>{field}</p>)}
        </div>
    );
}

export default Horoscope;