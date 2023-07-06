import React, { useState, useEffect } from 'react';

export default function StopwatchWidget() {
    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
    
    useEffect(() => {
        let intervalId;
    
        if (isRunning) {
        intervalId = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);
        }
    
        return () => {
        clearInterval(intervalId);
        };
    }, [isRunning]);
    
    const handleStartStop = () => {
        setIsRunning(prevIsRunning => !prevIsRunning);
    };
    
    const handleReset = () => {
        setTime(0);
        setIsRunning(false);
    };
    
    return (
        <div style={{ minWidth: 300 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "row" }}>
                <h2>Stopwatch</h2>
            </div>
            <p>Time: {time} seconds</p>
            <div className='timer-controls' style={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
                <button
                style={{
                    background: "none",
                    border: "none",
                    color: "white",
                    fontSize: "15px",
                    cursor: "pointer",
                }}
                onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
                <button 
                style={{
                    background: "none",
                    border: "none",
                    color: "white",
                    fontSize: "15px",
                    cursor: "pointer",
                }}
                onClick={handleReset}
                >Reset</button>
            </div>
        </div>
    )
}