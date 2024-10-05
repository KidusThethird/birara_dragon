import React from "react";
import HumanImage from "../assets/images/human.png";
import Img1 from "../assets/images/team/img01.jpg";
import Img2 from "../assets/images/team/img02.jpg";
import Img3 from "../assets/images/team/img03.jpg";

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
            <img src={Img1} alt="" />
          </div>
          <div className="w-full flex flex-col">
            <h1 className="text-center text-lg font-playwrite">Feven Birara</h1>{" "}
            <h1 className="text-center font-semibold ">General Manager</h1>
          </div>
        </div>

        <div className="p-8 border-2 border-sky-900 rounded-lg">
          <div>
            <img src={Img3} alt="" />
          </div>
          <div className="w-full flex flex-col">
            <h1 className="text-center text-lg font-playwrite">
              Daniele Pinti
            </h1>{" "}
            <h1 className="text-center font-semibold ">
              Chief Operating Officer
            </h1>
          </div>
        </div>

        <div className="p-8 border-2 border-sky-900 rounded-lg">
          <div>
            <img src={Img2} alt="" />
          </div>
          <div className="w-full flex flex-col">
            <h1 className="text-center text-lg font-playwrite">
              Tiziana Huang
            </h1>{" "}
            <h1 className="text-center font-semibold ">
              Logistics and Supply chain coordinator
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
