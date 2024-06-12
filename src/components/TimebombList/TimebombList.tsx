import { Timebomb } from "../Timebomb/Timebomb";
import { getRandomIntBetween10And20 } from "../utils/utils"

interface TimebombListProps {
    isCountingDownList: (boolean | null)[]
    setIsCountingDownList: (isCountingDown: (boolean | null)[]) => void;
}

export const TimebombList = (props: TimebombListProps) => {
    const bombNames = ['A', 'B', 'C', 'D']

    return (
        <ul className="timebomb-list">
            {bombNames.map((name, key) => {
                return <li key={key}>
                    <Timebomb
                        name={`Bomb ${name}`}
                        secondsToCountdown={getRandomIntBetween10And20()}
                        isCountingDownList={props.isCountingDownList}
                        setIsCountingDown={props.setIsCountingDownList}
                        index={key}
                    />
                </li>
            })}
        </ul>
    )
}
