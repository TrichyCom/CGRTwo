import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import NavLogo from '../../../../../public/assets/img/Logo/CGR-removebg-signup.png';
import '../../../../../public/assets/css/Common/LeftNav.css';  // Make sure to add the CSS file for custom styles
import 'bootstrap-icons/font/bootstrap-icons.css';

function LeftNav() {
  // State to keep track of which menu is open
  const [activeMenu, setActiveMenu] = useState('workers');
  const [activeSubMenu, setActiveSubMenu] = useState('');
  
const location = useLocation();
  // Toggle menu function to open/close submenus
  const toggleMenu = (menu) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? '' : menu));
  };

  return (
    <>
      {/* Begin page */}
      <div id="layout-wrapper">

        {/* ========== App Menu ========== */}
        <div className="app-menu navbar-menu navbg">
          {/* LOGO */}
          <div className="navbar-brand-box">
            <a href="#" className="logo logo-light">
              <span className="logo-sm">
                <img src={NavLogo} alt="CGR" height={45} className="p-0" />
              </span>
              <span className="logo-lg py-3 bg-white rounded rounded-5">
                <img src={NavLogo} alt="CGR" height={45} className="p-0" />
              </span>
            </a>
          </div>

          <div id="scrollbar" className="leftnavmenu simplebar-content-wrapper p-0 m-0" aria-label="scrollable content">
            <div className="container-fluid p-0">
              <div id="two-column-menu"></div>
              <ul className="navbar-nav" id="navbar-nav">
                <li className="menu-title">
                  <span data-key="t-menu">Menu</span>
                </li>

                {/* Workers Management Menu */}
                <li className="nav-item">
                  <Link to=''
                    className={`nav-link menu-link ${activeMenu === 'workers' ? 'active' : ''}`}
                    // href="#sidebarMultilevel"
                    onClick={() => toggleMenu('workers')}
                    aria-expanded={activeMenu === 'workers'}
                  >
                    <div className="menu-content">
                      <div className="icon-text">
                        {/* <i className="ri-share-line" /> */}
                        <i className="bi bi-person-gear"></i>
                        <span data-key="t-multi-level">Workers Mng</span>
                      </div>
                      <i className="ri-arrow-right-s-line arrow-icon" />
                    </div>
                  </Link>



                  <div className={`menu-dropdown ${activeMenu === 'workers' ? 'show' : ''}`} >
                    <ul className="nav nav-sm flex-column">
                    <li className="nav-item">
                    <Link
  to='/addworkerone'
  className={`nav-link ${location.pathname === '/addworkerone' ? 'active-sub' : ''}`}
>
  Add Worker
</Link>

<Link
  to='/workertable'
  className={`nav-link ${location.pathname === '/workertable' ? 'active-sub' : ''}`}
>
  Worker Table
</Link>

<Link
  to='/DynamicValue'
  className={`nav-link ${location.pathname === '/DynamicValue' ? 'active-sub' : ''}`}
>
  Dynamic Value
</Link>

</li>

                    </ul>
                  </div>
                </li>

                {/* Project Management Menu */}
                <li className="nav-item">

                  <Link to=''
                    className={`nav-link menu-link ${activeMenu === 'project' ? 'active' : ''}`}
                    href="#projectmng"
                    onClick={() => toggleMenu('project')}
                    aria-expanded={activeMenu === 'project'}
                  >
                    <div className="menu-content">
                      <div className="icon-text">
                        <i className="bi bi-clipboard-check"></i>
                        <span data-key="t-multi-level">Project Mng</span>
                      </div>
                      <i className="ri-arrow-right-s-line arrow-icon" />
                    </div>
                  </Link>

                  <div className={`menu-dropdown ${activeMenu === 'project' ? 'show' : ''}`} id="projectmng">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <Link to='' className="nav-link" data-key="t-level-1.1"> Level 1.1 </Link>
                      </li>
                    </ul>
                  </div>
                </li>



                {/* materials management Menu */}
                <li className="nav-item">

                  <Link to=''
                    className={`nav-link menu-link ${activeMenu === 'materials' ? 'active' : ''}`}
                    href="#materialsmng"
                    onClick={() => toggleMenu('materials')}
                    aria-expanded={activeMenu === 'materials'}
                  >
                    <div className="menu-content">
                      <div className="icon-text">
                      <i className="bi bi-stack"></i>
                        <span data-key="t-multi-level">Materials Mng</span>
                      </div>
                      <i className="ri-arrow-right-s-line arrow-icon" />
                    </div>
                  </Link>

                  <div className={`menu-dropdown ${activeMenu === 'materials' ? 'show' : ''}`} id="materialsmng">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <a href="#" className="nav-link" data-key="t-level-1.1"> Level 1.1 </a>
                      </li>
                    </ul>
                  </div>
                </li>




                 {/* tools management Menu */}
                 <li className="nav-item">

<Link to=''
  className={`nav-link menu-link ${activeMenu === 'tools' ? 'active' : ''}`}
  href="#toolsmng"
  onClick={() => toggleMenu('tools')}
  aria-expanded={activeMenu === 'tools'}
>
  <div className="menu-content">
    <div className="icon-text">
    <i className="bi bi-wrench"></i>
      <span data-key="t-multi-level">Tools Mng</span>
    </div>
    <i className="ri-arrow-right-s-line arrow-icon" />
  </div>
</Link>

<div className={`menu-dropdown ${activeMenu === 'tools' ? 'show' : ''}`} id="toolsmng">
  <ul className="nav nav-sm flex-column">
    <li className="nav-item">
      <a href="#" className="nav-link" data-key="t-level-1.1"> Level 1.1 </a>
    </li>
  </ul>
</div>
</li>
                 {/* quotation management Menu */}
                 <li className="nav-item">

<Link to=''
  className={`nav-link menu-link ${activeMenu === 'quotation' ? 'active' : ''}`}
  href="#quotationmng"
  onClick={() => toggleMenu('quotation')}
  aria-expanded={activeMenu === 'quotation'}
>
  <div className="menu-content">
    <div className="icon-text">
    <i className="bi bi-file-text"></i>
      <span data-key="t-multi-level">Quotation Mng</span>
    </div>
    <i className="ri-arrow-right-s-line arrow-icon" />
  </div>
</Link>

<div className={`menu-dropdown ${activeMenu === 'quotation' ? 'show' : ''}`} id="quotationmng">
  <ul className="nav nav-sm flex-column">
    <li className="nav-item">
      <a href="#" className="nav-link" data-key="t-level-1.1"> Level 1.1 </a>
    </li>
  </ul>
</div>
</li>



                 {/* user management Menu */}
                 <li className="nav-item">

<Link to=''
  className={`nav-link menu-link ${activeMenu === 'user' ? 'active' : ''}`}
  href="#usermng"
  onClick={() => toggleMenu('user')}
  aria-expanded={activeMenu === 'user'}
>
  <div className="menu-content">
    <div className="icon-text">
    <i className="bi bi-person"></i>
      <span data-key="t-multi-level">User Mng</span>
    </div>
    <i className="ri-arrow-right-s-line arrow-icon" />
  </div>
</Link>

<div className={`menu-dropdown ${activeMenu === 'user' ? 'show' : ''}`} id="usermng">
  <ul className="nav nav-sm flex-column">
    <li className="nav-item">
      <a href="#" className="nav-link" data-key="t-level-1.1"> Level 1.1 </a>
    </li>
  </ul>
</div>
</li>















{/* check */}

                {/* materials management Menu */}
                <li className="nav-item">

                  <Link to=''
                    className={`nav-link menu-link ${activeMenu === 'materials' ? 'active' : ''}`}
                    href="#materialsmng"
                    onClick={() => toggleMenu('materials')}
                    aria-expanded={activeMenu === 'materials'}
                  >
                    <div className="menu-content">
                      <div className="icon-text">
                      <i className="bi bi-stack"></i>
                        <span data-key="t-multi-level">Materials Mng</span>
                      </div>
                      <i className="ri-arrow-right-s-line arrow-icon" />
                    </div>
                  </Link>

                  <div className={`menu-dropdown ${activeMenu === 'materials' ? 'show' : ''}`} id="materialsmng">
                    <ul className="nav nav-sm flex-column">
                      <li className="nav-item">
                        <a href="#" className="nav-link" data-key="t-level-1.1"> Level 1.1 </a>
                      </li>
                    </ul>
                  </div>
                </li>




                 {/* tools management Menu */}
                 <li className="nav-item">

<Link to=''
  className={`nav-link menu-link ${activeMenu === 'tools' ? 'active' : ''}`}
  href="#toolsmng"
  onClick={() => toggleMenu('tools')}
  aria-expanded={activeMenu === 'tools'}
>
  <div className="menu-content">
    <div className="icon-text">
    <i className="bi bi-wrench"></i>
      <span data-key="t-multi-level">Tools Mng</span>
    </div>
    <i className="ri-arrow-right-s-line arrow-icon" />
  </div>
</Link>

<div className={`menu-dropdown ${activeMenu === 'tools' ? 'show' : ''}`} id="toolsmng">
  <ul className="nav nav-sm flex-column">
    <li className="nav-item">
      <a href="#" className="nav-link" data-key="t-level-1.1"> Level 1.1 </a>
    </li>
  </ul>
</div>
</li>
                 {/* quotation management Menu */}
                 <li className="nav-item">

<Link to=''
  className={`nav-link menu-link ${activeMenu === 'quotation' ? 'active' : ''}`}
  href="#quotationmng"
  onClick={() => toggleMenu('quotation')}
  aria-expanded={activeMenu === 'quotation'}
>
  <div className="menu-content">
    <div className="icon-text">
    <i className="bi bi-file-text"></i>
      <span data-key="t-multi-level">Quotation Mng</span>
    </div>
    <i className="ri-arrow-right-s-line arrow-icon" />
  </div>
</Link>

<div className={`menu-dropdown ${activeMenu === 'quotation' ? 'show' : ''}`} id="quotationmng">
  <ul className="nav nav-sm flex-column">
    <li className="nav-item">
      <a href="#" className="nav-link" data-key="t-level-1.1"> Level 1.1 </a>
    </li>
  </ul>
</div>
</li>



                 {/* user management Menu */}
                 <li className="nav-item">

<Link to=''
  className={`nav-link menu-link ${activeMenu === 'user' ? 'active' : ''}`}
  href="#usermng"
  onClick={() => toggleMenu('user')}
  aria-expanded={activeMenu === 'user'}
>
  <div className="menu-content">
    <div className="icon-text">
    <i className="bi bi-person"></i>
      <span data-key="t-multi-level">User Mng</span>
    </div>
    <i className="ri-arrow-right-s-line arrow-icon" />
  </div>
</Link>

<div className={`menu-dropdown ${activeMenu === 'user' ? 'show' : ''}`} id="usermng">
  <ul className="nav nav-sm flex-column">
    <li className="nav-item">
      <a href="#" className="nav-link" data-key="t-level-1.1"> Level 1.1 </a>
    </li>
  </ul>
</div>
</li>










              </ul>
            </div>
          </div>

          <div className="sidebar-background"></div>
        </div>
        {/* Vertical Overlay*/}
        <div className="vertical-overlay"></div>
      </div>
    </>
  );
}

export default LeftNav;
