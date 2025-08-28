import Header from "../components/Header";
import { Link, useParams } from "react-router-dom";
import promptsData from "../data/prompts.json";
import { ArrowLeft } from "lucide-react";
const Prompt = () => {
  const { id } = useParams();
  //@ts-expect-error ignore
  const prompt = promptsData.prompts.find((blog) => blog.id === parseInt(id));
  return (
    <div className="flex flex-col gap-3 ">
      <Header />
      <div className="flex flex-col gap-2 ">
        <p className="xl:text-5xl lg:text-3xl sm:text-3xl text-3xl  text-primary !font-pingarbold">
          {prompt?.title}
        </p>
        <p className="xl:text-3xl lg:text-2xl text-lg">Chatgpt Prompt</p>
        <p className="xl:text-3xl lg:text-2xl text-base text-secondary">
          {prompt?.content}
        </p>
        <p className="xl:text-3xl lg:text-2xl text-lg text-[#3a78bb] text-right !font-pingarbold">
          Select , copy and paste in chatgpt
        </p>
        <div className="flex justify-center">
          <Link
            to={`/`}
            className=" items-center px-3 py-2 pt-3 sm:text-2xl text-xl font-medium text-center text-white bg-primary   w-fit rounded-full  "
          >
            <div className="flex flex-row justify-center items-center  gap-2 ">
              <div className="bg-white rounded-full p-1 mb-1">
                <ArrowLeft className="text-primary font-bold" />
              </div>

              <p>Back</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Prompt;
