import logo from "../assets/logo.jpg";
import blueCheck from "../assets/icons/blueCheck.png";
import { Link } from "react-router-dom";
type propsType = {
  prompt: {
    id: number;
    title: string;
    content: string;
    image: string;
  };
};
const Card = ({ prompt }: propsType) => {
  return (
    <div
      key={prompt.id}
      className="bg-white border border-gray-200  shadow-sm px-4 py-3 rounded-[2.5rem]"
    >
      <a href="#">
        <img className="rounded-t-lg" src={prompt.image} alt="" />
      </a>
      <div className="py-5 flex flex-row justify-between items-center ">
        <div className="flex flex-row items-center gap-2 ">
          <div className="relative ">
            <img className="w-12 rounded-full" src={logo} />
            <div className="w-12  relative">
              <img
                className="w-4 absolute right-0 bottom-0 rounded-full"
                src={blueCheck}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <p className=" text-base text-primary !font-pingarbold">
              @hlaartworks
            </p>
            <p className="text-xs text-[#8f8e89]">Hla Nadeem</p>
          </div>
        </div>
        {prompt.title != "comming soon" && (
          <Link
            to={`/prompt/${prompt.id}`}
            className=" items-center px-3 py-2 text-sm font-medium text-center text-white bg-black rounded-lg  "
          >
            Get prompt
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
