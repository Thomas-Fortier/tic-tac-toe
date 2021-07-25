import SquareProps from "../lib/interfaces";
import styles from '../styles/Square.module.css'

export default function Square({ props: props }: { props: SquareProps }) {
    let styling = getStyling(props.value);

    return (
        <button className={styling} onClick={ props.onClick }>
            {props.value}
        </button>
    );
}

function getStyling(value: string) {
    let styling;

    switch(value) {
        case 'X':
            styling = styles.xSquare;
            break;
        case 'O':
            styling = styles.oSquare;
            break;
        default:
            styling = styles.openSquare;
            break;
    }

    return styling;
}