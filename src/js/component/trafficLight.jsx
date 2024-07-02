import React, {useState, useEffect} from "react";

const Trafficlight = () => {
    const [classNameRed, setClassNameRed] = useState('rounded-5');
    const [classNameYellow, setClassNameYellow] = useState('rounded-5');
    const [classNameGreen, setClassNameGreen] = useState('rounded-5');
    const [color, setColor] = useState("");

    useEffect(() => {
        switch(color) {
            case "red":
                setClassNameRed('bg-danger rounded-circle');
                setClassNameYellow('rounded-circle');
                setClassNameGreen('rounded-circle');
                alert("Stop!!! the TrafficLight is red");
                break;
            case "yellow":
                setClassNameRed('rounded-circle');
                setClassNameYellow('bg-warning rounded-circle');
                setClassNameGreen('rounded-circle');
                alert("You are in a hurry, the TrafficLight is yellow");
                break;
            case "green":
                setClassNameRed('rounded-circle');
                setClassNameYellow('rounded-circle');
                setClassNameGreen('bg-success rounded-circle');
                alert("You can walk, the TrafficLight is green");
                break;
            default:
                break;
        }
    }, [color]);

    const capturarColorRed = () => setColor("red");
    const capturarColorYellow = () => setColor("yellow");
    const capturarColorGreen = () => setColor("green");

    return (
        <div className="text-center">
            <h1>Traffic Light</h1>
            <div className="semafor">
                <span id="redLight" onClick={capturarColorRed} className={classNameRed}></span>
                <br />
                <span id="yellowLight" onClick={capturarColorYellow} className={classNameYellow}></span>
                <br />
                <span id="greenLight" onClick={capturarColorGreen} className={classNameGreen}></span>
            </div>
        </div>
    );
};

export default Trafficlight;
