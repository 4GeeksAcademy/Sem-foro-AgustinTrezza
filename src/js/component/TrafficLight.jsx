import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../../styles/index.css';

const TrafficLight = () => {
    const [color, setColor] = useState("red");
    const [showPurple, setShowPurple] = useState(false);

    const handleLight = (newColor) => {
        setColor(newColor);
    };

    const handleToggleColor = () => {
        if (color === "green") {
            if (showPurple) {
                setColor("purple");
            } else {
                setColor("red");
            }
        } else {
            switch (color) {
                case "red":
                    setColor("yellow");
                    break;
                case "yellow":
                    setColor("green");
                    break;
                case "purple":
                    setColor("red");
                    break;
                default:
                    break;
            }
        }
    };

    const handleAddPurpleColor = () => {
        setShowPurple(true);
        setColor("purple");
    };

    const handleRemovePurpleColor = () => {
        setShowPurple(false);
        setColor("red");
    };

    return (
        <div>
            <h1 className="py-1 px-2 fs-3">TrafficLight - 4Geeks - Agustin Trezza</h1>
            <div className="container parent-tubo">
                <div className="tubo">
                </div>
                <div className="container-custom">
                    <div
                        className={`light ${color === "red" ? "red" : ""}`}
                        onClick={() => handleLight("red")}
                    ></div>
                    <div
                        className={`light ${color === "yellow" ? "yellow" : ""}`}
                        onClick={() => handleLight("yellow")}
                    ></div>
                    <div
                        className={`light ${color === "green" ? "green" : ""}`}
                        onClick={() => handleLight("green")}
                    ></div>
                    {showPurple && (
                        <div
                            className={`light ${color === "purple" ? "purple" : ""}`}
                            onClick={() => handleLight("purple")}
                        ></div>
                    )}
                </div>

                <div className="buttons-container">
                    <button className="btn btn-primary mt-3 button" onClick={handleToggleColor}>
                        Cambiar Color
                    </button>
                    <button className="btn btn-warning mt-3 button" onClick={handleAddPurpleColor}>
                        Agregar Púrpura
                    </button>
                    <button className="btn btn-danger mt-3 button" onClick={handleRemovePurpleColor}>
                        Remover Púrpura
                    </button>
                </div>

            </div>
        </div>
    );
};

export default TrafficLight;
