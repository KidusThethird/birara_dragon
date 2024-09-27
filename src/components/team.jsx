import React from "react";
import HumanImage from "../assets/images/human.png";

export default function Team() {
  return (
    <div>
      <div className="w-full flex py-6">
        <h1 className="w-fit underline mx-auto text-3xl font-semibold text-sky-900">
          Our Team
        </h1>
      </div>
      <div className="w-full space-y-4 sm:space-y-0 sm:grid grid-cols-3 gap-4 px-6 rounded">
        <div className="p-8 border-2 border-sky-900 rounded-lg">
          <div>
            <img src={HumanImage} alt="" />
          </div>
          <div className="w-full flex flex-col">
            <h1 className="text-center text-lg font-playwrite">Emily Carter</h1>{" "}
            <h1 className="text-center font-semibold ">CEO</h1>
          </div>
        </div>

        <div className="p-8 border-2 border-sky-900 rounded-lg">
          <div>
            <img src={HumanImage} alt="" />
          </div>
          <div className="w-full flex flex-col">
            <h1 className="text-center text-lg font-playwrite">Michael Chen</h1>{" "}
            <h1 className="text-center font-semibold ">
              Director of Operations
            </h1>
          </div>
        </div>

        <div className="p-8 border-2 border-sky-900 rounded-lg">
          <div>
            <img src={HumanImage} alt="" />
          </div>
          <div className="w-full flex flex-col">
            <h1 className="text-center text-lg font-playwrite">Sophia Patel</h1>{" "}
            <h1 className="text-center font-semibold ">
              Head of Marketing and Sales
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
