import React, {PureComponent} from "react";
import Template from "../template/Template";
import HomeHeader from "./Home/HomeHeader";
import HomePartners from "./Home/HomePartners";
import HomeCareers from "./Home/HomeCareers";
import HomeExplore from "./Home/HomeExplore";
import HomeTestimony from "./Home/HomeTestimony";
import HomeAdvice from "./Home/HomeAdvice";
import "../css/App.css";
import "../css/Fonts.css";
import "../css/Footer.css";
import "../css/Navbar.css";
import "../css/Responsive.css";

class Home extends PureComponent {
    render() {
        return (
            <Template>
                <div id="body">
                    <div className="inner-home">
                        <HomeHeader/>

                        <HomePartners/>

                        <HomeCareers/>

                        <div className="hire cvr-bg"
                             style={{
                                 backgroundImage: `url('https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-60231057df.webp')`,
                                 "--mobile": `url('https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-e2e93c629b.webp')`
                             }}>
                            <div className="wrapper">
                                <h2>Looking to hire? </h2>
                                <div className="txt">
                                    <p>Hire better, faster, easier</p>
                                </div>
                                <a href="https://www.kalibrr.com/employers/hiring/" className="button">Request Demo
                                    Call</a>
                            </div>
                        </div>

                        <HomeExplore/>

                        <HomeTestimony/>

                        <div className="app">
                            <div className="wrapper">
                                <div className="layer rowflex">
                                    <span
                                        className="bg cvr-bg"
                                        style={{
                                            backgroundImage: `url('https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-7710994fa4.webp')`
                                        }}
                                    />
                                    <div className="caption">
                                        <h2>Your on-the-go job seeking partner</h2>
                                        <div className="txt">
                                            <p>Get job matches wherever, whenever!</p>
                                        </div>
                                        <div className="action">
                                            <a
                                                href="https://apps.apple.com/ph/app/kalibrr-job-search/id1271990503"
                                                className="cvr-bg ios" target="_blank"
                                            />
                                            <a
                                                href="https://play.google.com/store/apps/details?id=com.kalibrr"
                                                className="cvr-bg ps" target="_blank"
                                            />
                                            <a
                                                href="https://appgallery.huawei.com/#/app/C102650235"
                                                className="cvr-bg hw" target="_blank"
                                            />
                                        </div>
                                    </div>
                                    <figure>
                                        <img
                                            src=""
                                            data-src="https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-ba0984e262.webp"
                                            alt="Kalibrr is available on Google Playstore, Appstore, and Huawei AppGallery"
                                            className="lazy"
                                        />
                                    </figure>
                                </div>
                            </div>
                        </div>
                        <div className="cta">
                            <div className="slider nodot">
                                <div className="slick-carousel">
                                    <div className="item">
                                        <span
                                            className="bg cvr-bg"
                                            style={{
                                                backgroundImage: `url('https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-a45f9ea4c3.webp')`,
                                                "--mobile": `url('https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-70401ca152.webp')`
                                            }}
                                        />
                                        <div className="wrapper">
                                            <div className="caption">
                                                <h2>More than 5 million professionals have found jobs through Kalibrr</h2>
                                                <div className="txt">
                                                    <p>Are you ready to find yours?</p>
                                                </div>
                                                <div className="action">
                                                    <a
                                                        href="https://www.kalibrr.com/signup"
                                                        className="button btn-white"
                                                    >Get Hired Now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <HomeAdvice />
                    </div>
                </div>
            </Template>
        )
    }
}

export default Home;