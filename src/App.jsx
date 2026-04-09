import React from 'react';
import './App.css'
import Home from './pages/Home/Home';
import { Outlet } from 'react-router-dom';
import { TbLayoutSidebarLeftExpand } from 'react-icons/tb';
import { LuMenu } from "react-icons/lu";
import Menu from './components/Menu/Menu';
import bg from '/bg.png';

const App = () => {

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input
          id="layout-drawer"
          type="checkbox"
          className="drawer-toggle"
          defaultChecked
        />
        <div className="drawer-content">
          {/* Navbar */}
          <nav className="navbar z-100 w-full bg-[#7C884C] h-20 sticky top-0">
            <label htmlFor="layout-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost tooltip tooltip-bottom" data-tip="Menu">
              {/* Sidebar toggle icon */}
              {/* <TbLayoutSidebarLeftExpand className='text-warning text-2xl' /> */}
              <LuMenu className='text-2xl' />
            </label>
            <div className="px-4 text-2xl font-semibold">ICT Billing</div>
          </nav>
          {/* Page content here */}
          <div className="bg-fixed bg-center bg-cover min-h-screen" style={{ backgroundImage: `url(${bg})` }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className='relative z-10 h-full'>
              <Outlet />
            </div>
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