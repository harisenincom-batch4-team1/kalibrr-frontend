import React, {PureComponent} from "react";

class Navbar extends PureComponent {
    render() {
        return (
            <>
                <header id="top">
                    <div className="wrapper">
                        <div className="layer clearfix">
                            <div className="logo">
                                <a href="https://www.kalibrr.com/">
                                    <img src="https://b2c.kalibrr.com/wp-content/uploads/2022/05/logo.svg" alt="Logo"/>
                                </a>
                            </div>
                            <div className="mobile-trigger">
                                <a href="#" className="menu-mobile">
                                    <span className="menu-bar"><b/></span>
                                </a>
                            </div>
                            <div className="util">
                                <div className="nav">
                                    <ul>
                                        <li
                                            id="menu-item-333"
                                            className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5 current_page_item menu-item-333"
                                        >
                                            <a href="https://b2c.kalibrr.com/" aria-current="page">Jobseeker</a>
                                        </li>
                                        <li
                                            id="menu-item-11"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11"
                                        >
                                            <a href="https://www.kalibrr.com/employers/">Employer</a>
                                        </li>
                                        <li
                                            id="menu-item-20"
                                            className="btn btn-hollow menu-item menu-item-type-custom menu-item-object-custom menu-item-20"
                                        >
                                            <a href="https://www.kalibrr.com/signup">Sign Up</a>
                                        </li>
                                        <li
                                            id="menu-item-21"
                                            className="btn menu-item menu-item-type-custom menu-item-object-custom menu-item-21"
                                        >
                                            <a href="https://www.kalibrr.com/login">Sign In</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="country">
                                    <b
                                        className="cvr-bg cvr-bg-af"
                                        style={{
                                            backgroundImage: `url('https://b2c.kalibrr.com/wp-content/uploads/2022/06/id.png')`
                                        }}
                                    />
                                    <div className="holder">
                                        <strong>I'm viewing from:</strong>
                                        <ul>
                                            <li>
                                                <a href="/" data-country="id">
                                                    <small
                                                        className="cvr-bg"
                                                        style={{
                                                            backgroundImage: `url('https://b2c.kalibrr.com/wp-content/uploads/2022/06/id.png')`
                                                        }}
                                                    />
                                                    Indonesia
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/" data-country="ph">
                                                    <small
                                                        className="cvr-bg"
                                                        style={{
                                                            backgroundImage: `url('https://b2c.kalibrr.com/wp-content/uploads/2022/06/ph.png')`
                                                        }}
                                                    />
                                                    Philippines
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/" data-country="gl">
                                                    <small
                                                        className="cvr-bg"
                                                        style={{
                                                            backgroundImage: `url('https://b2c.kalibrr.com/wp-content/uploads/2022/06/gl.png')`
                                                        }}
                                                    />
                                                    Global
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="lang">
                        <span>
                            <b className="cvr-bg-af">EN</b>
                            <div className="holder">
                                <ul>
                                    <li>
                                        <strong>EN</strong>
                                    </li>
                                    <li>
                                        <a href="/id/">ID</a>
                                    </li>
                                </ul>
                            </div>
                        </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="mnav">
                    <span className="bg"/>
                    <div className="layer">
                        <a href="#" className="cls cvr-bg"/>
                        <p>I want to visit the page for</p>
                        <div className="menu">
                            <ul id="menu-mainmenu-en-1" className="menu">
                                <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5 current_page_item menu-item-333">
                                    <a href="https://b2c.kalibrr.com/" aria-current="page">Jobseeker</a>
                                </li>
                                <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-11">
                                    <a href="https://www.kalibrr.com/employers/">Employer</a>
                                </li>
                            </ul>
                        </div>
                        <p>I am viewing from</p>
                        <div className="country">
                            <b className="cvr-bg-af">
                                <small
                                    className="cvr-bg"
                                    style={{
                                        backgroundImage: `url('https://b2c.kalibrr.com/wp-content/uploads/2022/06/id.png')`
                                    }}
                                />
                                Indonesia </b>
                            <div className="holder">
                                <ul>
                                    <li>
                                        <strong>Indonesia</strong>
                                    </li>
                                    <li>
                                        <a href="/" data-country="ph">Philippines </a>
                                    </li>
                                    <li>
                                        <a href="/" data-country="gl">Global </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="lang">
                            <b className="cvr-bg-af">English</b>
                            <div className="holder">
                                <ul>
                                    <li>
                                        <strong>English</strong>
                                    </li>
                                    <li>
                                        <a href="/id/">Indonesia</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="action">
                            <ul id="menu-button-menu-en-1" className="">
                                <li className="btn btn-hollow menu-item menu-item-type-custom menu-item-object-custom menu-item-20">
                                    <a href="https://www.kalibrr.com/signup">Sign Up</a>
                                </li>
                                <li className="btn menu-item menu-item-type-custom menu-item-object-custom menu-item-21">
                                    <a href="https://www.kalibrr.com/login">Sign In</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Navbar;