import { FaCode, FaCogs, FaChessKnight } from "react-icons/fa";
import CustomBorder from "./CustomBorder";
import { site } from "@/data/site";

export default function About() {
  return (
    <div className="md:w-3/4 px-2 py-4 mt-12 md:mt-32 m-auto">
      <div className="select-none mb-6 w-full">
        <div className="px-4 relative">
          <div className="bg-kjColorLight dark:bg-kjColorBlack rounded-lg shadow-2xl border-2 border-kjColorLight">
            <div className="p-4 grid md:gap-5 grid-cols-1 md:grid-cols-2">
              <img src={site.aboutImage} alt="" className="w-80 rounded-lg" />
              <div className="space-y-5 pt-8">
                <div className="flex items-start gap-3">
                  <FaCode className="mt-1 shrink-0 text-lg text-kjColorPrime" />
                  <div>
                    <p className="font-bold">From APIs to interface</p>
                    <p className="mt-1 text-sm text-kjColorGray dark:text-kjColorLight/70">
                      I move between backend architecture and frontend experiences, keeping the whole product in view.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaCogs className="mt-1 shrink-0 text-lg text-kjColorPrime" />
                  <div>
                    <p className="font-bold">I like the complicated middle</p>
                    <p className="mt-1 text-sm text-kjColorGray dark:text-kjColorLight/70">
                      Integrations, data flows, and business rules are where I enjoy making systems feel simple.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaChessKnight className="mt-1 shrink-0 text-lg text-kjColorPrime" />
                  <div>
                    <p className="font-bold">Away from the keyboard</p>
                    <p className="mt-1 text-sm text-kjColorGray dark:text-kjColorLight/70">
                      Chess for the strategy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="mt-10">
                <div className="text-lg mb-5">
                  <span className="font-medium uppercase">README</span>
                  <CustomBorder />
                </div>
                <p>
                  I'm a software engineer who builds what matters and never stops leveling up.
                  Technology moves fast; I move faster, driven by the discipline to learn, improve and evolve every single day.
                </p>
                <p className="mt-2">
                 Excellence isn't a goal for me; it's the standard. 
                 I build software that's fast, scalable and loved by its users,
                  and I'm always chasing the next hard problem worth solving.
                </p>
                <p className="mt-2">
                Chess taught me to think three moves ahead, and I bring that mindset to every system I design. When I'm not coding, I'm at the board, reading the latest in tech or upskilling.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
