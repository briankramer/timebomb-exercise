import { useContext } from "react";
import { Context } from "../../Context";

interface TimebombProps {
  name: string;
}

export const Timebomb = (props: TimebombProps) => {
  return <span>{props.name}</span>;
};
