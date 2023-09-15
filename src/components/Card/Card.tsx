import React from "react";
import { CardProps } from "./card.props";
import Button from "../Button/Button";

const Card = ({ name, source, children, explain }: CardProps): JSX.Element => {

  return (
    <div className="w-72 h-96 bg-[#00000020] rounded-md p-6">
      <img src={source} className="w-60 h-28 rounded-sm" alt={name} />
      <p className="text-xl mt-3">{name}</p>
      <p className="text-sm mt-3">{children}</p>
      <ul className=" mt-3">
        {explain.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="w-fit m-auto mt-3 bg-white p-2 pl-13 pr-13 rounded-xs">
        <Button title="touch"></Button>
      </div>
    </div>
  );
}

export default Card;
