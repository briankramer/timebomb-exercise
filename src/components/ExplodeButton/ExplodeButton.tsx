interface ExplodeButtonProps {
    isCountingDownList: (boolean | null)[];
    setIsCountingDownList: (isCountingDown: (boolean | null)[]) => void;
}

const getExplodeButtonText = (isCountingDown: (boolean | null)[]): string => {
    if (isCountingDown.some(timer => timer === null)) {
        return 'Explode'
    } else if (isCountingDown.some(timer => timer === true)) {
        return 'Waiting to explode...'
    } else {
        return 'All bombs exploded'
    }
}

export const ExplodeButton = (props: ExplodeButtonProps) => {
    return <div className="explode-button-container">
        <button
            className="explode-button"
            onClick={() => props.setIsCountingDownList([true, true, true, true])}
            disabled={props.isCountingDownList.every(timer => timer === false)}
        >
            {getExplodeButtonText(props.isCountingDownList)}
        </button>
    </div>
}
