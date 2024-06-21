import React from 'react';

const Intro = () => {
    return (
        <section className='lockscreen'>
            <div className="lockscreen-wrapper">
                <div className="lockscreen-logo">
                    CDC
                </div>
                {/* User name */}
                <div className="lockscreen-name"></div>
                {/* START LOCK SCREEN ITEM */}
                <div className="lockscreen-item">
                    {/* lockscreen image */}
                    <div className="lockscreen-image">
                        <img src="assets/dist/img/user1-128x128.jpg" alt="User Image" />
                    </div>
                    {/* /.lockscreen-image */}
                    {/* lockscreen credentials (contains the form) */}
                    <form className="lockscreen-credentials">
                        <div className="input-group">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="password"
                            />
                            <div className="input-group-append">
                                <button type="submit" className="btn">
                                    <i className="fas fa-arrow-right text-muted" />
                                </button>
                            </div>
                        </div>
                    </form>
                    {/* /.lockscreen credentials */}
                </div>
                {/* /.lockscreen-item */}
                <div className="help-block text-center">
                    Enter your password to retrieve your session
                </div>
                <div className="text-center">
                    <a href="login.html">Or sign in as a different user</a>
                </div>

            </div>

        </section>
    );
};

export default Intro;