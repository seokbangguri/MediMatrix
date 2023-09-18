import React from "react";
import { CardProps } from "./card.props";
import Button from "../Button/Button";

const Card = ({ name, source, children, explain, route }: CardProps): JSX.Element => {
  return (
    <div className="w-72 h-100 bg-white rounded-md p-6 shadow-2xl m-auto hover:scale-105 duration-200">
      <img src={source} className="w-60 h-28 rounded-sm" alt={name} />
      <p className="text-xl mt-3">{name}</p>
      <p className="text-sm mt-3">{children}</p>
      <ul className="mt-3">
        {explain.map((item, index) => (
          <li className="text-sm list-disc ml-3" key={index}>{item}</li>
        ))}
      </ul>
      <div className="w-36 h-9 m-auto mt-5 bg-white flex justify-center items-center">
          <Button apperance="ghost" styles=" py-[2px] text-[12px] rounded-xs">
            <a href={route}>Go to {name}!</a>
          </Button>
      </div>
    </div>
  );
};

export default Card;
