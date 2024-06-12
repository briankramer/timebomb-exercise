import "./styles.css";
import { useState } from 'react'
import { TimebombList } from "./components/TimebombList/TimebombList";
import { ExplodeButton } from "./components/ExplodeButton/ExplodeButton";

export default function App() {
  const [isCountingDownList, setIsCountingDownList] = useState<(boolean | null)[]>([null, null, null, null])

  return (
    <div className="app">
      <TimebombList
        isCountingDownList={isCountingDownList}
        setIsCountingDownList={setIsCountingDownList}
      />
      <ExplodeButton
        isCountingDownList={isCountingDownList}
        setIsCountingDownList={setIsCountingDownList}
      />
    </div>
  );
}
