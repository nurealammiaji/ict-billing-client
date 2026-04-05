import React from 'react';
import './App.css'
import Home from './pages/Home/Home';
import { Outlet } from 'react-router-dom';
import { TbLayoutSidebarLeftExpand } from 'react-icons/tb';
import { LuMenu } from "react-icons/lu";
import Menu from './components/Menu/Menu';

const App = () => {

  return (
    <div>
      <div className="drawer lg:drawer-open">
        {/* <input id="layout-drawer" type="checkbox" className="drawer-toggle" /> */}
        <input
          id="layout-drawer"
          type="checkbox"
          className="drawer-toggle"
          defaultChecked
        />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar w-full bg-[#7C884C] h-20">
            <label htmlFor="layout-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost tooltip tooltip-bottom" data-tip="Menu">
              {/* Sidebar toggle icon */}
              {/* <TbLayoutSidebarLeftExpand className='text-warning text-2xl' /> */}
              <LuMenu className='text-2xl' />
            </label>
            <div className="px-4 text-2xl font-semibold">ICT Billing</div>
          </nav>
          {/* Page content here */}
          <div className="p-4">
            <Outlet />
          </div>
        </div>

        <div className="drawer-side is-drawer-close:overflow-visible">
          <label htmlFor="layout-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
          <div className="grid min-h-full flex-col items-start bg-[#454B2C] is-drawer-close:w-23 is-drawer-open:w-72">
            {/* Sidebar content here */}
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;