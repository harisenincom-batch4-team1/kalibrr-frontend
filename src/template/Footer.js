import React, {PureComponent} from "react";

class Footer extends PureComponent {
    render() {
        return (
            <footer id="bottom">
                <div className="wrapper">
                    <div className="logo">
                        <img
                            src="https://b2c.kalibrr.com/wp-content/uploads/2022/05/logo-footer.svg"
                            sizes="(min-width: 769px) 100vw, 30vw"
                            width="150"
                        />
                    </div>
                    <div className="footer-widget">
                        <div className="rowflex">
                            <div className="info">
                                <div className="txt">
                                    <p>We transform the way candidates find jobs and companies hire talent.</p>
                                </div>
                                <div className="app">
                                    <a
                                        href="https://apps.apple.com/ph/app/kalibrr-job-search/id1271990503"
                                        className="cvr-bg ios"
                                        target="_blank"
                                    />
                                    <a
                                        href="https://play.google.com/store/apps/details?id=com.kalibrr&referrer=utm_sourcekalibrr-websiteutm_mediumbannerutm_campaignhomepage-jan12"
                                        className="cvr-bg ps"
                                        target="_blank"
                                    />
                                    <a
                                        href="https://appgallery.huawei.com/#/app/C102650235"
                                        className="cvr-bg hw"
                                        target="_blank"
                                    />
                                </div>
                            </div>
                            <div className="holder">
                                <div className="widget">
                                    <h3>Candidates <b className="cvr-bg"/></h3>
                                    <ul id="menu-candidates-en" className="menu">
                                        <li
                                            id="menu-item-24"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-24"
                                        >
                                            <a href="https://www.kalibrr.com/signup">Sign up</a>
                                        </li>
                                        <li
                                            id="menu-item-25"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-25"
                                        >
                                            <a href="https://www.kalibrr.com/job-board/1">Job Board</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget">
                                    <h3>Employers <b className="cvr-bg"/></h3>
                                    <ul id="menu-employers-en" className="menu">
                                        <li
                                            id="menu-item-30"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-30"
                                        >
                                            <a href="https://www.kalibrr.com/employers/hiring/">Start Hiring</a>
                                        </li>
                                        <li
                                            id="menu-item-31"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-31"
                                        >
                                            <a href="https://employerbranding.kalibrr.com/">Employer Branding</a>
                                        </li>
                                        <li
                                            id="menu-item-32"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-32"
                                        >
                                            <a href="https://www.kalibrr.com/blog/">Blog</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="widget">
                                    <h3>About <b className="cvr-bg"/></h3>
                                    <ul id="menu-about-en" className="menu">
                                        <li
                                            id="menu-item-36"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-36"
                                        >
                                            <a href="https://www.kalibrr.com/about">About</a>
                                        </li>
                                        <li
                                            id="menu-item-37"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-37"
                                        >
                                            <a href="https://www.kalibrr.com/job-board/c/kalibrr-ph/1">Careers</a>
                                        </li>
                                        <li
                                            id="menu-item-38"
                                            className="menu-item menu-item-type-custom menu-item-object-custom menu-item-38"
                                        >
                                            <a href="https://www.kalibrr.com/contactus?user_ref=www.kalibrr.com_organic_job-board__c__kalibrr-ph__1">Contact
                                                Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tribute rowflex">
                        <p>© 2022 Kalibrr, Inc.</p>
                        <ul id="menu-footer-menu-en" className="menu">
                            <li
                                id="menu-item-42"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-42"
                            >
                                <a href="https://www.kalibrr.com/privacy">Privacy Policy</a>
                            </li>
                            <li
                                id="menu-item-43"
                                className="menu-item menu-item-type-custom menu-item-object-custom menu-item-43"
                            >
                                <a href="https://www.kalibrr.com/terms">Terms of Use</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;