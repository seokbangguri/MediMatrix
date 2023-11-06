import { Link } from 'react-router-dom';
import { CardProps } from "./card.props";

const Card = ({ name, source, children, route }: CardProps): JSX.Element => {
  return (
    <Link to={route} className="text-[14px]">
      <div className="w-72 h-[450px] bg-white rounded-md shadow-2xl m-auto hover:scale-105 duration-200 flex flex-col justify-between overflow-hidden">
        <img src={source} className="w-full h-[580px] rounded-t-md block object-contain bg-transparent" alt={name} />
        <div className="mx-6 mb-6">
          <p className="text-xl font-semibold mt-3">{name}</p>
          <p className="text-sm mt-2 text-[#353535] min-h-[80px]">{children}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
