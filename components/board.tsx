import Square from "./square";
import SquareProps from "../lib/interfaces";
import { useState } from "react";
import styles from '../styles/Board.module.css';

export default function Board() {
    let [squares, setSquares] = useState(Array(9).fill(null));
    let [xIsNext, setXIsNext] = useState(true);
    let winner = calculateWinner(squares);
    let status = getStatus(winner, xIsNext);

    const handleClick = (index: number) => {
        if (squares[index] !== null)
            return;

        let squaresClone = squares.slice();
        squaresClone[index] = xIsNext ? 'X' : 'O';

        setSquares(squaresClone);
        setXIsNext(!xIsNext);
    }

    const renderSquare = (index: number) => {
        const squareProps: SquareProps = {
            value: squares[index],
            onClick: () => handleClick(index)
        };

        return <Square props={squareProps} />
    }

    // TODO: Cleanup
    return (
        <div>
            <h1 className={styles.title}>Tic-Tac-Toe</h1>
            <p className={styles.status}>{status}</p>
            <div className={styles.board}>
                <div className={styles.row}>
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className={styles.row}>
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className={styles.row}>
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
        </div>
    );
}

function calculateWinner(squares: string[]) {
    const winningLines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 5, 8],
        [2, 4, 6]
    ];

    for (let index = 0; index < winningLines.length; index++) {
        const [a, b, c] = winningLines[index];

        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
            return squares[a];
    }

    return null;
}

function getStatus(winner: any, xIsNext: boolean) {
    return winner ?
        'Winner: ' + winner :
        'Next player: ' + (xIsNext ? 'X' : 'O');
}