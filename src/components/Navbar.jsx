import SnapL from "../images/logo.svg";
import Menu from "../images/icon-menu.svg";
import menuClose from "../images/icon-close-menu.svg";
import ArrowUp from "../images/icon-arrow-up.svg";
import ArrowDown from "../images/icon-arrow-down.svg";
import TodoIcon from "../images/icon-todo.svg";
import CalendarIcon from "../images/icon-calendar.svg";
import ReminderIcon from "../images/icon-reminders.svg";
import Planicon from "../images/icon-planning.svg";

const Navbar = () => {
    const change = () => {
        const navTog = document.getElementsByClassName("toggle");

        for (let i = 0; i < navTog.length; i++) {
            navTog[i].classList.toggle("hidden");
        }
    };

    const showDrop1 = () => {
        const d1 = document.getElementsByClassName("drop1");
        const up = document.getElementsByClassName("up");
        const down = document.getElementsByClassName("down");

        if (d1[0].classList.contains("hidden")) {
            d1[0].classList.remove("hidden");
        } else {
            d1[0].classList.add("hidden");
        }

        if (up[0].classList.contains("hidden")) {
            up[0].classList.remove("hidden");
            down[0].classList.add("hidden");
        } else {
            up[0].classList.add("hidden");
            down[0].classList.remove("hidden");
        }
    };

    const showDrop2 = () => {
        const d2 = document.getElementsByClassName("drop2");
        const up = document.getElementsByClassName("up2");
        const down = document.getElementsByClassName("down2");

        if (d2[0].classList.contains("hidden")) {
            d2[0].classList.remove("hidden");
        } else {
            d2[0].classList.add("hidden");
        }

        if (up[0].classList.contains("hidden")) {
            up[0].classList.remove("hidden");
            down[0].classList.add("hidden");
        } else {
            up[0].classList.add("hidden");
            down[0].classList.remove("hidden");
        }
    };

    return (
        <nav className="relative flex flex-wrap items-center justify-between space-x-8 px-4 py-4 md:flex-row md:flex-nowrap md:px-8 md:py-8">
            <img src={SnapL} alt="Snap Logo" />
            <div>
                <button onClick={change} className="flex md:hidden">
                    <img className="toggle block" src={Menu} alt="" />
                    <img
                        className="toggle z-1 hidden h-8 w-8"
                        src={menuClose}
                        alt=""
                    />
                </button>
            </div>
            <div className="toggle absolute top-0 right-0 hidden h-screen w-[60%] flex-col bg-white md:relative md:flex md:h-0 md:w-full md:flex-row md:items-center md:justify-between md:space-x-4 md:bg-transparent">
                <ul className="flex flex-col md:flex-row md:items-center md:space-x-8">
                    <div className="flex flex-col">
                        <li
                            onMouseOver={showDrop1}
                            onMouseOut={showDrop1}
                            className="relative flex cursor-pointer flex-row items-center text-base text-[#696969] hover:text-[#141414] "
                        >
                            <span className="mr-4 text-lg md:mr-2">
                                Features
                            </span>
                            <img
                                className="down h-min w-min fill-[#141414]"
                                src={ArrowDown}
                                alt=""
                            />
                            <img
                                className="up hidden h-min w-min"
                                src={ArrowUp}
                                alt=""
                            />
                        </li>
                        <ul
                            onMouseOver={showDrop1}
                            onMouseOut={showDrop1}
                            className="drop1 md:shadowCustom hidden h-max w-max  space-y-3 rounded-lg bg-white py-4 px-8 text-center md:absolute md:-left-16 md:mt-8"
                        >
                            <li className="flex cursor-pointer items-center space-x-3 text-[#696969]">
                                <img src={TodoIcon} alt="" />
                                <span>Todo List</span>
                            </li>
                            <li className="flex cursor-pointer items-center space-x-3 text-[#696969]">
                                <img src={CalendarIcon} alt="" />
                                <span>Calendar</span>
                            </li>
                            <li className="flex cursor-pointer items-center space-x-3 text-[#696969]">
                                <img src={ReminderIcon} alt="" />
                                <span>Reminder</span>
                            </li>
                            <li className="flex cursor-pointer items-center space-x-3 text-[#696969]">
                                <img src={Planicon} alt="" />
                                <span>Planning</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col">
                        <li
                            onMouseOver={showDrop2}
                            onMouseOut={showDrop2}
                            className="relative flex cursor-pointer flex-row items-center text-base text-[#696969] hover:text-[#141414] "
                        >
                            <span className="mr-4 text-lg md:mr-2">
                                Company
                            </span>
                            <img
                                className="down2 h-min w-min fill-[#141414]"
                                src={ArrowDown}
                                alt=""
                            />
                            <img
                                className="up2 hidden h-min w-min"
                                src={ArrowUp}
                                alt=""
                            />
                        </li>
                        <ul
                            onMouseOver={showDrop2}
                            onMouseOut={showDrop2}
                            className="drop2 md:shadowCustom hidden h-max w-max space-y-3 rounded-lg bg-white py-4 px-8 md:absolute md:left-28 md:top-4"
                        >
                            <li className="cursor-pointer text-[#696969]">
                                <span>History</span>
                            </li>
                            <li className="cursor-pointer text-[#696969]">
                                <span>Our Team</span>
                            </li>
                            <li className="cursor-pointer text-[#696969]">
                                <span>Blog</span>
                            </li>
                        </ul>
                    </div>
                    <li className="cursor-pointer text-base text-[#696969] hover:text-[#141414]">
                        Careers
                    </li>
                    <li className="cursor-pointer text-base text-[#696969] hover:text-[#141414]">
                        About
                    </li>
                </ul>
                <div className="mx-auto flex w-[90%] flex-col items-center space-y-5 md:w-auto md:flex-row md:space-y-0">
                    <p className="cursor-pointer text-[#696969] hover:text-[#141414] md:mr-8">
                        Login
                    </p>
                    <p className="mx-auto w-[90%] cursor-pointer rounded-2xl border-2 border-[#696969] py-2 px-4 text-center text-[#696969] hover:border-[#141414] hover:text-[#141414]">
                        Register
                    </p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;