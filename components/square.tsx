import SquareProps from "../lib/squareProps.interface";
import styles from '../styles/Square.module.css'

export default function Square({ props: props }: { props: SquareProps }) {
    let styling = getStyling(props.value);

    return (
        <button className={ `${styling} ${styles.square} ${'btn'}` } onClick={ props.onClick }>
            <p>{props.value}</p>
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