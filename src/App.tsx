import "./styles.css";
import { ContextProviderComponent } from "./Context";
import { UsersList } from "./components/UsersList/UsersList";
import { Timebomb } from "components/Timebomb/Timebomb";
export default function App() {
  return (
    <ContextProviderComponent>
      <Timebomb name="Bomb A" />
    </ContextProviderComponent>
  );
}
