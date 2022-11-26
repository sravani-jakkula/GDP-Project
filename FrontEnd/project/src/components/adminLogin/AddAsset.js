import React from 'react'
import { Link } from 'react-router-dom'

function AddAsset() {
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
                                                    {/* <i className="fa fa-angle-down ml-2 opacity-8" /> */}
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
                            <div className="card">
                                <div className="card-header">
                                    <p className='my-auto'>Add Assets</p>
                                </div>
                                <div className="card-body">
                                    <form>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Asset Name</label>
                                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                    <small id="emailHelp" className="form-text text-muted">Plase enter unique name for each assets.</small>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Type</label>
                                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Quantity</label>
                                                    <input type="password" className="form-control" id="exampleInputPassword1" />
                                                </div>
                                            </div>
                                        </div>

                                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                                    </form>

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
                        </div>  </div>
                </div>
            </div>
        </div>

    )
}

export default AddAsset