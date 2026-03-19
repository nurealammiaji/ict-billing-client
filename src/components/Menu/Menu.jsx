import React from 'react';
import { NavLink } from 'react-router-dom';
import { PiGear, PiHouse, PiMagnifyingGlass, PiPackage, PiSticker } from "react-icons/pi";
import { LuClipboardList, LuFileSearch, LuPhoneCall, LuSatelliteDish, LuSearch, LuSettings, LuWifi } from "react-icons/lu";

const Menu = () => {
    return (
        <div>
            <div className='flex justify-center items-center mt-3'>
                <div className='h-16 w-16'>
                    <img src="./dscsc.png" className='w-full h-full' alt="" />
                </div>
            </div>
            <ul className="menu w-full grow *:m-2">
                <br />
                {/* List item First */}
                <li>
                    <NavLink to={"/"} className={({ isActive }) => isActive ? 'bg-secondary text-white' : `is-drawer-close:tooltip is-drawer-close:tooltip-right`} data-tip="Home">
                        <PiHouse className='text-4xl' />
                        <span className="ml-2 is-drawer-close:hidden text-xl font-semibold">Home</span>
                    </NavLink>
                </li>

                {/* List item 2 */}
                <li>
                    <NavLink to={"/dish"} className={({ isActive }) => isActive ? 'bg-secondary text-white' : `is-drawer-close:tooltip is-drawer-close:tooltip-right`} data-tip="Dish">
                        <LuSatelliteDish className='text-4xl' />
                        <span className="ml-2 is-drawer-close:hidden text-xl font-semibold">Dish</span>
                    </NavLink>
                </li>

                {/* List item 3 */}
                <li>
                    <NavLink to={"/internet"} className={({ isActive }) => isActive ? 'bg-secondary text-white' : `is-drawer-close:tooltip is-drawer-close:tooltip-right`} data-tip="Internet">
                        <LuWifi className='text-4xl' />
                        <span className="ml-2 is-drawer-close:hidden text-xl font-semibold">Internet</span>
                    </NavLink>
                </li>

                {/* List item 4 */}
                <li>
                    <NavLink to={"/bills"} className={({ isActive }) => isActive ? 'bg-secondary text-white' : `is-drawer-close:tooltip is-drawer-close:tooltip-right`} data-tip="My Bills">
                        <LuClipboardList className='text-4xl' />
                        <span className="ml-2 is-drawer-close:hidden text-xl font-semibold">My Bills</span>
                    </NavLink>
                </li>

                {/* List item 5 */}
                <li>
                    <NavLink to={"/search"} className={({ isActive }) => isActive ? 'bg-secondary text-white' : `is-drawer-close:tooltip is-drawer-close:tooltip-right`} data-tip="Search Bills">
                        <LuFileSearch className='text-4xl' />
                        <span className="ml-2 is-drawer-close:hidden text-xl font-semibold">Search Bills</span>
                    </NavLink>
                </li>


                {/* List item 6 */}
                <li>
                    <NavLink to={"/helpline"} className={({ isActive }) => isActive ? 'bg-secondary text-white' : `is-drawer-close:tooltip is-drawer-close:tooltip-right`} data-tip="Helpline">
                        <LuPhoneCall className='text-4xl' />
                        <span className="ml-2 is-drawer-close:hidden text-xl font-semibold">Helpline</span>
                    </NavLink>
                </li>

                {/* List item Last */}
                <li>
                    <NavLink to={"/settings"} className={({ isActive }) => isActive ? 'bg-secondary text-white' : `is-drawer-close:tooltip is-drawer-close:tooltip-right`} data-tip="Settings">
                        <LuSettings className='text-4xl' />
                        <span className="ml-2 is-drawer-close:hidden text-xl font-semibold">Settings</span>
                    </NavLink>
                </li>

                {/* <div className="collapse collapse-arrow bg-base-100 border border-base-300">
                <input type="checkbox" name="menu-accordion" />
                <div className="collapse-title font-semibold flex gap-4 items-center"><span className='text-2xl text-success'>11</span> Student Management</div>
                <div className="collapse-content text-sm">
                    <ul className="menu bg-base-200 rounded-box w-full border border-success">
                        <li>
                            <NavLink to={"/students/add"} className={({ isActive }) => isActive ? "text-success bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    --
                                </span>
                                Add
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/students/search"} className={({ isActive }) => isActive ? "text-success bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    ==
                                </span>
                                Search
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/students/all"} className={({ isActive }) => isActive ? "text-success bg-base-300 font-semibold" : ""}>
                                <span className='text-xl'>
                                    ++
                                </span>
                                View All
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div> */}
            </ul>
        </div>
    );
};

export default Menu;