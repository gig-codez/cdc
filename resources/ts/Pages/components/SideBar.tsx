import { Link } from '@inertiajs/inertia-react';
import React from 'react';

const SideBar = () => {
    const [active, setActive] = React.useState(false);
    const [sideLinks, setSideLinks] = React.useState([
        {
            id: 1,
            name: 'Dashboard',
            icon: 'fas fa-tachometer-alt',
            link: '/cdc/dashboard',
            subLinks: []
        },
        {
            id: 2,
            name: 'Enrollment Process',
            link: '#',
            subLinks: [
                {
                    name: 'Add new member',
                    link: '/cdc/enrollments/add-member'
                },
                {
                    name: 'Edit member',
                    link: '/cdc/enrollments/edit-member'
                },
                {
                    name: 'View members',
                    link: '/cdc/enrollments/view-members'
                }
            ]
        }
    ]);
    // method to handle option
    const handleOption = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        setActive(!active);
    }

    return (
        <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                <div className="image">
                    <img
                        src="/assets/dist/img/user1-128x128.jpg"
                        className="img-circle elevation-2"
                        alt="User Image"
                    />
                </div>
                <div className="info">
                    <a href="#" className="d-block">
                        Admin
                    </a>
                </div>
            </div>
            {/* SidebarSearch Form */}

            {/* Sidebar Menu */}
            <nav className="mt-2">
                <ul
                    className="nav nav-pills nav-sidebar flex-column"
                    data-widget="treeview"
                    role="menu"
                    data-accordion="true"
                >
                    {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                    <li className="nav-item">
                        <Link href="/cdc/dashboard" className="nav-link">
                            <i className="nav-icon fas fa-tachometer-alt" />
                            <p>
                                Dashboard
                                {/* <i className="right fas fa-angle-left" /> */}

                            </p>
                        </Link>

                    </li>

                    <li className={active ? "nav-item menu-is-opening menu-open" : "nav-item"}>
                        <a href="#" onClick={handleOption} className="nav-link">
                            <i className="nav-icon fas fa-copy" />
                            <p>
                                Enrollment Process
                                <i className="fas fa-angle-left right" />

                            </p>
                        </a>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <Link href="/cdc/enrollments/add-member" className="nav-link">
                                    <i className="fa fa-plus nav-icon" />
                                    <p>Add new member</p>
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link
                                    href="/cdc/enrollments/edit-mem"
                                    className="nav-link"
                                >
                                    <i className="far fa-edit nav-icon" />
                                    <p>Edit member</p>
                                </Link>
                            </li> */}
                            <li className="nav-item">
                                <Link href="/cdc/enrollments/viewAll" className="nav-link">
                                    <i className="far fa-eye nav-icon" />
                                    <p>View members</p>
                                </Link>
                            </li>

                        </ul>
                    </li>
                </ul>
            </nav>
            {/* /.sidebar-menu */}
        </div>
    );
};

export default SideBar;