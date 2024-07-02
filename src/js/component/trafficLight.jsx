import React, {useState, useEffect} from "react";

// create the component
const Trafficlight = () => {
    let [classNameRed, setclassNameRed]= useState('rounded-5');
    let [classNameYellow, setclassNameYellow]= useState('rounded-5');
    let [classNameGreen, setclassNameGreen]= useState('rounded-5');

    const [color, setcolor] = useState("");
    console.log(color);

    const prueba = () => {
        if("red") {
           //classNameRed +="active";
           setclassNameRed(classNameRed ='bg-danger rounded-circle') ;
           setclassNameYellow(classNameYellow ='rounded-circle') ;
           setclassNameGreen(classNameGreen ='rounded-circle') ;
           alert("Stop!!! the TrafficLight is "+classNameRed);
        }
          
        };
    const prueba2 = () => {
        
        if("yellow") {
            //classNameYellow +="active";
            setclassNameRed(classNameRed ='rounded-circle') ;
            setclassNameYellow(classNameYellow ='bg-warning rounded-circle') ;
            setclassNameGreen(classNameGreen ='rounded-circle') ;
            alert("You are in a hurry, the TrafficLight is "+classNameYellow);
        }
        };
    const prueba3 = () => {
        if("green"){
            //classNameGreen +="active";
            setclassNameRed(classNameRed ='rounded-circle') ;
            setclassNameGreen(classNameGreen ='bg-success rounded-circle') ;
            setclassNameYellow(classNameYellow ='rounded-circle') ;
            alert("You can walk, the TrafficLight is "+classNameGreen);
          
        }

    };

    return (
        <div className="text-center">
            <h1>Traffic Light</h1>
            <div className="semafor">
                <span id="redLight" onClick={() => prueba()} className={classNameRed}></span>
                <br />
                <span id="yellowLight" onClick={() => prueba2()} className={classNameYellow}></span>
                <br />
                <span id="greenLight" onClick={() => prueba3()} className={classNameGreen}></span>
            </div>
        </div>
    );

    
   
};

export default Trafficlight;