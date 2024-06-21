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
        const enrollment = document.querySelector('.enrollment');
        if (enrollment) {
            enrollment.classList.toggle('menu-open');
            enrollment.classList.toggle('menu-is-opening');
        }
    }
    // handle event option
    const handleEventOption = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const event = document.querySelector('.event');
        if (event) {
            event.classList.toggle('menu-open');
            event.classList.toggle('menu-is-opening');
        }
    }
    // handle progress option
    const handleProgressOption = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const progress = document.querySelector('.progress_tracking');
        if (progress) {
            progress.classList.toggle('menu-open');
            progress.classList.toggle('menu-is-opening');
        }
    }
    // distribution
    const handleDistribution = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const distribution = document.querySelector('.distribution');
        if (distribution) {
            distribution.classList.toggle('menu-open');
            distribution.classList.toggle('menu-is-opening');
        }
    }
    function handleSkills(event: React.MouseEvent<HTMLAnchorElement>): void {
        event.preventDefault();
        const skills = document.querySelector('.skill');
        if (skills) {
            skills.classList.toggle('menu-open');
            skills.classList.toggle('menu-is-opening');
        }
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

                    <li className="nav-item enrollment">
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
                            <li className="nav-item">
                                <Link href="/cdc/enrollments/viewAll" className="nav-link">
                                    <i className="far fa-eye nav-icon" />
                                    <p>View members</p>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    {/* events section */}
                    <li className="nav-item event">
                        <a href="#" onClick={handleEventOption} className="nav-link">
                            <i className="nav-icon fas fa-copy" />
                            <p>
                                Event Scheduling
                                <i className="fas fa-angle-left right" />
                            </p>
                        </a>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <Link href="/cdc/events/create" className="nav-link">
                                    <i className="fa fa-plus nav-icon" />
                                    <p>Add new member</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/cdc/events/all" className="nav-link">
                                    <i className="far fa-eye nav-icon" />
                                    <p>View all events</p>
                                </Link>
                            </li>
                        </ul>
                    </li>

                    {/* progress section */}
                    <li className="nav-item progress_tracking">
                        <a href="#" onClick={handleProgressOption} className="nav-link">
                            <i className="fa-sharp fa-people-arrows" />&nbsp;
                            <p>
                                Progress Tracking
                                <i className="fas fa-angle-left right" />
                            </p>
                        </a>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <Link href="/cdc/progress-tracking/create-record" className="nav-link">
                                    <i className="fa fa-plus nav-icon" />
                                    <p>Add new track record</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/cdc/progress-tracking/view-records" className="nav-link">
                                    <i className="far fa-eye nav-icon" />
                                    <p>View Records</p>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    {/* material supply */}
                    <li className="nav-item distribution">
                        <a href="#" onClick={handleDistribution} className="nav-link">
                            <i className="nav-icon fas fa-school" />
                            <p>
                                Educational Materials
                                <i className="fas fa-angle-left right" />
                            </p>
                        </a>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <Link href="/cdc/distribution/add-member" className="nav-link">
                                    <i className="fa fa-plus nav-icon" />
                                    <p>Add new distribution</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/cdc/distribution/viewAll" className="nav-link">
                                    <i className="far fa-eye nav-icon" />
                                    <p>View Distributions</p>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    {/* skills */}
                    <li className="nav-item skill">
                        <a href="#" onClick={handleSkills} className="nav-link">
                            <i className="nav-icon fas fa-school" />
                            <p>
                                Skills Training
                                <i className="fas fa-angle-left right" />
                            </p>
                        </a>
                        <ul className="nav nav-treeview">
                            <li className="nav-item">
                                <Link href="/cdc/skills-training/create-skill" className="nav-link">
                                    <i className="fa fa-plus nav-icon" />
                                    <p>Add new skill</p>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/cdc/skills-training/view-skills" className="nav-link">
                                    <i className="far fa-eye nav-icon" />
                                    <p>View Skills</p>
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