import React from "react";
import Draggable from "react-draggable";
import './style.css'

const Animation = () => {
    return (
        <Draggable
            handle="#imhandle"
            cancel=".buttons"
        >
            <div className="animation">
                <div className="animation__header" id="imhandle">
                    <div className="buttons" >
                        <div className="top__buttons">
                            <div className="button"></div>
                            <div className="button"></div>
                        </div>
                        <div className="button"></div>
                    </div>
                </div>
                <div className="animation__bg">
                </div>
            </div>
        </Draggable>
    )
}

export default Animation