import React from 'react'
import { Link } from 'react-router-dom'

function AproveAssets() {
    return (
        <div>
            <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
                <div className="app-header header-shadow">
                    <div className="app-header__logo">
                        <div className="logo-src" style={{ background: 'none' }} />
                        <div className="header__pane ml-auto">
                            <div>
                                <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="app-header__mobile-menu">
                        <div>
                            <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner" />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="app-header__menu">
                        <span>
                            <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                                <span className="btn-icon-wrapper">
                                    <i className="fa fa-ellipsis-v fa-w-6" />
                                </span>
                            </button>
                        </span>
                    </div>
                    <div className="app-header__content">
                        <div className="app-header-right">
                            <div className="header-btn-lg pr-0">
                                <div className="widget-content p-0">
                                    <div className="widget-content-wrapper">
                                        <div className="widget-content-left">
                                            <div className="btn-group">
                                                <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="p-0 btn">
                                                    <img width={42} className="rounded-circle" src="/Images/auth/user.png" alt="" />
                                                </a>
                                                <div tabIndex={-1} role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                                    <Link to="/profile" type="button" tabIndex={0} className="dropdown-item">Profile</Link>
                                                    <div tabIndex={-1} className="dropdown-divider" />
                                                    <button type="button" tabIndex={0} className="dropdown-item">logout</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-content-left  ml-3 header-user-info">
                                            <div className="widget-heading">
                                                Admin Dash
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="app-main">
                    <div className="app-sidebar sidebar-shadow">
                        <div className="app-header__logo">
                            <div className="logo-src" />
                            <div className="header__pane ml-auto">
                                <div>
                                    <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                                        <span className="hamburger-box">
                                            <span className="hamburger-inner" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="app-header__mobile-menu">
                            <div>
                                <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner" />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="app-header__menu">
                            <span>
                                <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                                    <span className="btn-icon-wrapper">
                                        <i className="fa fa-ellipsis-v fa-w-6" />
                                    </span>
                                </button>
                            </span>
                        </div>    <div className="scrollbar-sidebar">
                            <div className="app-sidebar__inner">
                            <ul className="vertical-nav-menu">
                                    <li className="app-sidebar__heading">Dashboards</li>
                                    <li>
                                        <Link to="/" className="mm-active">
                                            <i className="metismenu-icon pe-7s-rocket" />
                                            Admin Dashboard
                                        </Link>
                                    </li>
                                    <li className="app-sidebar__heading">Assets Management</li>
                                    <li>
                                        <Link to="/assets/add">
                                            <i className="metismenu-icon pe-7s-diamond" />
                                            Add Asset
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                                        </Link>
                                        <Link to="/assets/requests">
                                            <i className="metismenu-icon pe-7s-diamond" />
                                            Assets Requests
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                                        </Link>
                                    </li>
                                    <li>
                                        <a href="#" className="">
                                            <i className="metismenu-icon pe-7s-rocket" />
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>    <div className="app-main__outer">
                        <div className="app-main__inner">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="main-card mb-3 card">
                                        <div className="card-header">Assets Requests
                                            {/* <div className="btn-actions-pane-right">
                                                <div role="group" className="btn-group-sm btn-group">
                                                    <button className="active btn btn-focus">Last Week</button>
                                                    <button className="btn btn-focus">All Month</button>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div className="table-responsive">
                                            <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                                <thead>
                                                    <tr>
                                                        <th className="text-center">#</th>
                                                        <th>Name</th>
                                                        <th className="text-center">Type</th>
                                                        <th className="text-center">Department</th>
                                                        <th className="text-center">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="text-center text-muted">1</td>
                                                        <td>
                                                            <div className="widget-content p-0">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left mr-3">
                                                                        <div className="widget-content-left">
                                                                            <img width={40} className="rounded-circle" src="assets/images/avatars/4.jpg" alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-content-left flex2">
                                                                        <div className="widget-heading">Laptop</div>
                                                                        <div className="widget-subheading opacity-7">Acer</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">Gaming</td>
                                                        <td className="text-center">
                                                            <div className="badge badge-warning">
                                                                ACS
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <button className="btn btn-success">Aprove</button>
                                                        </td>
                                                        
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center text-muted">#347</td>
                                                        <td>
                                                            <div className="widget-content p-0">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left mr-3">
                                                                        <div className="widget-content-left">
                                                                            <img width={40} className="rounded-circle" src="assets/images/avatars/3.jpg" alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-content-left flex2">
                                                                        <div className="widget-heading">Ipad</div>
                                                                        <div className="widget-subheading opacity-7">Apple</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">electronics</td>
                                                        <td className="text-center">
                                                            <div className="badge badge-info">
                                                                IS
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <button className="btn btn-success">Aprove</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center text-muted">#321</td>
                                                        <td>
                                                            <div className="widget-content p-0">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left mr-3">
                                                                        <div className="widget-content-left">
                                                                            <img width={40} className="rounded-circle" src="assets/images/avatars/2.jpg" alt="" />
                                                                        </div>
                                                                    </div>
                                                                    <div className="widget-content-left flex2">
                                                                        <div className="widget-heading">Duster</div>
                                                                        {/* <div className="widget-subheading opacity-7">Boult</div> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">Cleaning</td>
                                                        <td className="text-center">
                                                            <div className="badge badge-warning">
                                                                ACS
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <button className="btn btn-success">Aprove</button>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center text-muted">#55</td>
                                                        <td>
                                                            <div className="widget-content p-0">
                                                                <div className="widget-content-wrapper">
                                                                    <div className="widget-content-left mr-3">
                                                                        <div className="widget-content-left">
                                                                            <img width={40} className="rounded-circle" src="assets/images/avatars/1.jpg" alt="" /></div>
                                                                    </div>
                                                                    <div className="widget-content-left flex2">
                                                                        <div className="widget-heading">Mobile</div>
                                                                        <div className="widget-subheading opacity-7">Apple</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="text-center">electronics</td>
                                                        <td className="text-center">
                                                            <div className="badge badge-warning">
                                                                ACS
                                                            </div>
                                                        </td>
                                                        <td className="text-center">
                                                            <button className="btn btn-success">Aprove</button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="d-block text-center card-footer">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="app-wrapper-footer">
                            <div className="app-footer">
                                <div className="app-footer__inner">

                                    <div className="app-footer-right">
                                        <ul className="nav">
                                            <li className="nav-item">
                                                <a href="javascript:void(0);" className="nav-link">
                                                    Copyright
                                                    <div className="badge badge-success mr-1 ml-0">
                                                        <small>2022</small>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AproveAssets