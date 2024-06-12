import { Timebomb } from "../Timebomb/Timebomb";
import { getRandomIntBetween10And20 } from "../utils/utils"

interface TimebombListProps {
    isCountingDown: (boolean | null)[]
    setIsCountingDown: (isCountingDown: (boolean | null)[]) => void;
}

export const TimebombList = (props: TimebombListProps) => {
    const bombNames = ['A', 'B', 'C', 'D']

    return (
        <ul className="timebomb-list">
            {bombNames.map((name, key) => {
                return <li>
                    <Timebomb
                        name={`Bomb ${name}`}
                        secondsToCountdown={getRandomIntBetween10And20()}
                        isCountingDown={props.isCountingDown}
                        setIsCountingDown={props.setIsCountingDown}
                        index={key}
                    />
                </li>
            })}
        </ul>
    )
}
