import HeroDesktop from "../images/image-hero-desktop.png";
import HeroMobile from "../images/image-hero-mobile.png";

import Databiz from "../images/client-databiz.svg";
import AudioPhile from "../images/client-audiophile.svg";
import Meet from "../images/client-meet.svg";
import Maker from "../images/client-maker.svg";

export const Hero = () => {
    return (
        <div className="flex flex-col-reverse md:mx-auto md:w-[82%] md:flex-row md:gap-x-16">
            <div className="w-full md:my-auto md:h-screen">
                <div className="mt-10 space-y-8 text-center md:mt-0 md:w-[68%] md:space-y-14 md:text-left ">
                    <h1 className="text-4xl font-bold md:text-6xl md:tracking-widest">
                        Make remote work
                    </h1>
                    <p className="text-lg text-[#696969]">
                        Get your team in sync,no matter your location.
                        Streamline processes,create team rituals,and watch
                        productivity soar.
                    </p>
                    <button className="h-max w-max rounded-2xl border-2 border-black bg-black px-6 py-3 font-bold text-white shadow-md hover:border-[#696969] hover:bg-transparent hover:text-[#696969]">
                        Learn More
                    </button>
                    <div className="mx-auto flex w-[90%] flex-row justify-between md:mt-10 md:w-full md:space-x-4">
                        <img
                            className="h-5 w-min md:h-min"
                            src={Databiz}
                            alt=""
                        />
                        <img
                            className="h-5 w-min md:h-min"
                            src={AudioPhile}
                            alt=""
                        />
                        <img className="h-5 w-min md:h-min" src={Meet} alt="" />
                        <img
                            className="h-5 w-min md:h-min"
                            src={Maker}
                            alt=""
                        />
                    </div>
                </div>
            </div>
            <div className="md:my-auto md:h-screen">
                <img
                    src={HeroDesktop}
                    className="hidden md:block md:object-contain"
                    alt=""
                />
                <img
                    src={HeroMobile}
                    className="block object-contain md:hidden "
                    alt=""
                />
            </div>
        </div>
    );
};