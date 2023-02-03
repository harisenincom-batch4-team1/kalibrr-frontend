import React, {PureComponent} from "react";

class HomeExplore extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    type: "Remote Jobs",
                    banner: "https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-3c772d1cd0.webp",
                    url: "https://www.kalibrr.com/job-board/work_from_home/y/1"
                },
                {
                    type: "Startup Jobs",
                    banner: "https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-e479bd37a4.webp",
                    url: "https://www.kalibrr.com/job-board/te/Startup/1"
                },
                {
                    type: "Part Time Jobs",
                    banner: "https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-de52c58bfa.webp",
                    url: "https://www.kalibrr.com/job-board/t/part-time/1"
                },
                {
                    type: "Manager Jobs",
                    banner: "https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-28ff7ed5a1.webp",
                    url: "https://www.kalibrr.com/job-board/w/400-mid-senior-level-manager/1"
                },
                {
                    type: "Fresh Graduate Jobs",
                    banner: "https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-6278f6e60f-1.webp",
                    url: "https://www.kalibrr.com/id-ID/job-board/w/200-entry-level-junior-apprentice/1"
                }
            ]
        };
    }

    render() {
        return (
            <div className="explore">
                <div className="wrapper">
                    <div className="hentry">
                        <div className="rowflex">
                            <h2>Finding a job has never been easier</h2>
                            <div className="caption">
                                <div className="txt">
                                    <p>Thousands of opportunities from global to local companies are waiting for you</p>
                                </div>
                                <a href="https://www.kalibrr.com/job-category" className="cvr-bg-af">Explore more
                                    available job by category</a>
                            </div>
                        </div>
                    </div>
                    <div className="slider">
                        <div className="pusher">
                            <div className="slick-carousel">
                                {this.state.data.map((value, index) => (
                                    <div className="item" key={index}>
                                        <img src={value.banner} alt="Banner"/>
                                        <div className="caption">
                                            <span>Explore</span>
                                            <h3>{value.type}</h3>
                                            <a href={value.url} className="button btn-white">Lets Go!</a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="slidenav">
                            <a href="#" className="prev cvr-bg"/>
                            <a href="#" className="next cvr-bg"/>
                        </div>
                    </div>
                    <div className="mslider">
                        <div className="pusher">
                            <div className="slick-carousel">
                                <div className="list">
                                    <a
                                        href="https://www.kalibrr.com/job-board/work_from_home/y/1"
                                        className="cvr-bg"
                                        style={{backgroundImage: `url('https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-438738260a.webp')`}}
                                    >
                                        <span>Explore</span>
                                        <h3>Remote Jobs</h3>
                                        <i className="cvr-bg"/>
                                    </a>
                                    <a
                                        href="https://www.kalibrr.com/job-board/te/Startup/1"
                                        className="cvr-bg"
                                        style={{backgroundImage: `url('https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-d57cc552fe.webp')`}}
                                    >
                                        <span>Explore</span>
                                        <h3>Startup Jobs</h3>
                                        <i className="cvr-bg"/>
                                    </a>
                                    <a
                                        href="https://www.kalibrr.com/job-board/t/part-time/1"
                                        className="cvr-bg"
                                        style={{backgroundImage: `url('https://b2c.kalibrr.com/wp-content/uploads/2022/05/3.jpg')`}}
                                    >
                                        <span>Explore</span>
                                        <h3>Part Time Jobs</h3>
                                        <i className="cvr-bg"/>
                                    </a>
                                </div>
                                <div className="list">
                                    <a
                                        href="https://www.kalibrr.com/job-board/w/400-mid-senior-level-manager/1"
                                        className="cvr-bg"
                                        style={{backgroundImage: `url('https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-506ee0e29c.webp')`}}
                                    >
                                        <span>Explore</span>
                                        <h3>Manager Jobs</h3>
                                        <i className="cvr-bg"/>
                                    </a>
                                    <a
                                        href="https://www.kalibrr.com/id-ID/job-board/w/200-entry-level-junior-apprentice/1"
                                        className="cvr-bg"
                                        style={{backgroundImage: `url('https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-518ee16197-1.webp')`}}
                                    >
                                        <span>Explore</span>
                                        <h3>Fresh Graduate Jobs</h3>
                                        <i className="cvr-bg"/>
                                    </a>
                                </div>
                                <div className="list">
                                    <a
                                        href="https://www.kalibrr.com/job-board/work_from_home/y/1"
                                        className="cvr-bg"
                                        style={{backgroundImage: `url('https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-438738260a.webp')`}}
                                    >
                                        <span>Explore</span>
                                        <h3>Remote Jobs</h3>
                                        <i className="cvr-bg"/>
                                    </a>
                                    <a
                                        href="https://www.kalibrr.com/job-board/te/Startup/1"
                                        className="cvr-bg"
                                        style={{backgroundImage: `url('https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-d57cc552fe.webp')`}}
                                    >
                                        <span>Explore</span>
                                        <h3>Startup Jobs</h3>
                                        <i className="cvr-bg"/>
                                    </a>
                                    <a
                                        href="https://www.kalibrr.com/job-board/t/part-time/1"
                                        className="cvr-bg"
                                        style={{backgroundImage: `url('https://b2c.kalibrr.com/wp-content/uploads/2022/05/3.jpg')`}}
                                    >
                                        <span>Explore</span>
                                        <h3>Part Time Jobs</h3>
                                        <i className="cvr-bg"/>
                                    </a>
                                </div>
                                <div className="list">
                                    <a
                                        href="https://www.kalibrr.com/job-board/w/400-mid-senior-level-manager/1"
                                        className="cvr-bg"
                                        style={{backgroundImage: `url('https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-506ee0e29c.webp')`}}
                                    >
                                        <span>Explore</span>
                                        <h3>Manager Jobs</h3>
                                        <i className="cvr-bg"/>
                                    </a>
                                    <a
                                        href="https://www.kalibrr.com/id-ID/job-board/w/200-entry-level-junior-apprentice/1"
                                        className="cvr-bg"
                                        style={{backgroundImage: `url('https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-518ee16197-1.webp')`}}
                                    >
                                        <span>Explore</span>
                                        <h3>Fresh Graduate Jobs</h3>
                                        <i className="cvr-bg"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeExplore;