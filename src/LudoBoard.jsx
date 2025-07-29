import { useState } from "react"

export default function LudoBoard() {
    let [move, setMove] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
    let updateBlue = () => {
        move.blue += 1;
        setMove({ ...move });
    }
    let updateYellow = () => {
        move.yellow += 1;
        setMove({ ...move });
    }
    let updateGreen = () => {
        move.green += 1;
        setMove({ ...move });
    }
    let updateRed = () => {
        move.red += 1;
        setMove({ ...move });
    }
    return (
        <div>
            <h3>Ludo Board</h3>
            <div className="board">
                <p>Blue Moves ={move.blue}</p>
                <button onClick={updateBlue} style={{ backgroundColor: "blue" }}>+1</button>
                <p>yellow Moves ={move.yellow}</p>
                <button onClick={updateYellow} style={{ backgroundColor: "yellow",color: "black" }}>+1</button>
                <p>Green Moves ={move.green}</p>
                <button onClick={updateGreen} style={{ backgroundColor: "green" }}>+1</button>
                <p>red Moves ={move.red}</p>
                <button onClick={updateRed} style={{ backgroundColor: "red" }}>+1</button>

            </div>
        </div>
    )
}