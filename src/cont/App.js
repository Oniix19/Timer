import { useEffect, useState } from "react";
import { StyledComp } from "../styles/StyledComp";

function App() {
     
    const [dataTime, setDataTime] = useState([])

    const getRemainingTime = deadline => {
        let now = new Date(),
            remainTime = (new Date(deadline) - now + 1000) / 1000,
            remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
            remainMinutes = ("0" + Math.floor(remainTime / 60 % 60)).slice(-2),
            remainHours = ("0" + Math.floor(remainTime / 3600 % 24)).slice(-2),
            remainDays = Math.floor(remainTime / (3600 * 24))

            return {remainTime, remainDays, remainHours, remainMinutes, remainSeconds}
            
    };

    const countdown = (deadline, finalMessage) => {
        const timerUpdate = setInterval(() => {
            const elemento = document.getElementById("modal");
            let t = getRemainingTime(deadline);
            setDataTime(t)

            if(t.remainTime < 0) {
                clearInterval(timerUpdate);
                elemento.innerHTML = `
                <div className="modal">
                    ${finalMessage}
                </div>
                `
            }
        }, 1000)
    };

   countdown("Apr 27 2022 22:40:00 GMT-0500", "Here We Go!!!!");

    return (
        <StyledComp>
            <div className="main">

                <div className="title">
                    <h4>
                        WE'RE LAUCHING SOON
                    </h4>
                </div>
                <div className="contTimer">
                    <div className="timer">
                        <h1>{dataTime.remainDays}</h1>
                        <h6>DAYS</h6>
                    </div>
                    <div className="timer">
                        <h1>{dataTime.remainHours}</h1>
                        <h6>HOURS</h6>
                    </div>
                    <div className="timer">
                        <h1>{dataTime.remainMinutes}</h1>
                        <h6>MINUTES</h6>
                    </div>
                    <div className="timer">
                        <h1>{dataTime.remainSeconds}</h1>
                        <h6>SECONDS</h6>
                    </div>
                </div>
            </div>
            <footer>
                <div className="divF">
                    
                        <img className="imgF" src="https://res.cloudinary.com/dsu0m4sa2/image/upload/v1648268860/Timer/icon-facebook_iebuht.svg" />
                        <img className="imgF" src="https://res.cloudinary.com/dsu0m4sa2/image/upload/v1648268867/Timer/icon-pinterest_hzlkic.svg" />
                        <img className="imgF" src="https://res.cloudinary.com/dsu0m4sa2/image/upload/v1648268862/Timer/icon-instagram_q2n1ew.svg" />
                </div>
            </footer>
        </StyledComp>
    );
}

export default App;