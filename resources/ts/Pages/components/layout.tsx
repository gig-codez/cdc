
import { Link } from '@inertiajs/inertia-react'
import React, { ReactNode } from 'react'
import SideBar from './SideBar'

export default function Layout({ children }: { children: ReactNode }) {
    const handleSideBar = () => {
        // alert('clicked')
        const body = document.querySelector('.sidebar-mini')
        if (body) {
            body.classList.toggle('sidebar-open')
            body.classList.toggle('sidebar-collapse')
        }
    }
    return (
        <section className='sidebar-mini sidebar-closed'>
            <div className="wrapper" >
                {/* Navbar */}
                <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                    {/* Left navbar links */}
                    <ul className="navbar-nav" onClick={handleSideBar}>
                        <li className="nav-item">
                            <a className="nav-link" data-widget="pushmenu" href="#" role="button">
                                <i className="fas fa-bars" />
                            </a>
                        </li>
                    </ul>
                </nav>
                {/* /.navbar */}
                {/* Main Sidebar Container */}
                <aside className="main-sidebar sidebar-dark-primary  elevation-2">
                    {/* Brand Logo */}
                    <a href="#" className="brand-link">
                        <span className="brand-text font-weight-light">CDC System</span>
                    </a>
                    {/* Sidebar */}
                    <SideBar />
                    {/* /.sidebar */}
                </aside>
                {/* Content Wrapper. Contains page content */}
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <div className="content-header">
                        <div className="container-fluid">
                            <div className="row mb-2">
                                <div className="col-sm-6">
                                    <h1 className="m-0">Dashboard</h1>
                                </div>
                                {/* /.col */}
                                <div className="col-sm-6">
                                    <ol className="breadcrumb float-sm-right">
                                        <li className="breadcrumb-item">
                                            <a href="#">Home</a>
                                        </li>
                                        <li className="breadcrumb-item active">Dashboard</li>
                                    </ol>
                                </div>
                                {/* /.col */}
                            </div>
                            {/* /.row */}
                        </div>
                        {/* /.container-fluid */}
                    </div>
                    {/* /.content-header */}
                    <div className="content">
                        <div className="container">
                            {children}
                        </div>
                    </div>
                </div>
                {/* /.content-wrapper */}
                {/* Control Sidebar */}
                <aside className="control-sidebar control-sidebar-dark">
                    {/* Control sidebar content goes here */}
                </aside>
                {/* /.control-sidebar */}
                {/* Main Footer */}
                <footer className="main-footer">
                    <strong>
                        Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.
                    </strong>
                    All rights reserved.
                    <div className="float-right d-none d-sm-inline-block">
                        <b>Version</b> 3.2.0
                    </div>
                </footer>
            </div>
        </section>
    )
}