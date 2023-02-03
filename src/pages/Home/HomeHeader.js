import React, {PureComponent} from "react";

class HomeHeader extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        };
    }

    render() {
        return (
            <div
                className="hero cvr-bg"
                style={{
                    backgroundImage: `url('https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-518ee16197-1.webp')`,
                    "--mobile": `url('https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-6278f6e60f.webp')`
                }}>
                <div className="wrapper">
                    <div className="pusher">
                        <div className="caption">
                            <h2>Your dream job is <br/>just a click away</h2>
                            <div className="txt">
                                <p>The simplest way to career opportunities starts here</p>
                            </div>
                        </div>
                        <div className="search">
                            <form className="clearfix" id="form-hero">
                                <input type="hidden" name="url" value="https://www.kalibrr.com/job-board/"/>
                                <input type="hidden" name="path" value="te"/>
                                <div className="emul">
                                    <div className="drop cvr-bg-af">
                                        <input type="text" value="Job Title" name="type" readOnly={true}/>
                                        <div className="holder">
                                            <ul>
                                                <li data-path="te" data-place="Search for a job title">Job Title</li>
                                                <li data-path="l" data-place="Search for a location">Location</li>
                                                <li data-path="te" data-place="Search for a company">Company</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <input
                                        type="text"
                                        value={this.state.search}
                                        onChange={event => this.setState({search: event.target.value})}
                                        placeholder="Search for a job title"
                                        name="query"
                                        required={true}
                                    />
                                </div>
                                <button type="submit">
                                    <i className="cvr-bg"/>
                                    <span>Search</span>
                                </button>
                            </form>
                            <div className="sugg">
                                <span>Popular Searches:</span>
                                <a href="https://www.kalibrr.com/job-board/co/Indonesia/i/it-and-software/1">IT and Software</a>
                                <a href="https://www.kalibrr.com/job-board/w/100-internship-%2F-ojt/co/Indonesia/1">Internship</a>
                                <a href="https://www.kalibrr.com/job-board/te/Digital-Marketing/1">Digital Marketing</a>
                                <a href="https://www.kalibrr.com/job-board/work_from_home/y/1">Remote</a>
                                <a href="https://www.kalibrr.com/job-board/i/accounting-and-finance/1">Accounting</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="fnav">
                    <span className="bg"/>
                    <div className="layer">
                        <a href="#" className="cls cvr-bg-bf">Filter Settings</a>
                        <p>I want to search for a...</p>
                        <div className="menu">
                            <ul>
                                <li data-path="te" data-place="Search for a job title">
                                    <a href="#">Job Title</a>
                                </li>
                                <li data-path="l" data-place="Search for a location">
                                    <a href="#">Location</a>
                                </li>
                                <li data-path="te" data-place="Search for a company">
                                    <a href="#">Company</a>
                                </li>
                            </ul>
                        </div>
                        <div className="pops">
                            <h3>Popular Searches:</h3>
                            <a href="https://www.kalibrr.com/job-board/co/Indonesia/i/it-and-software/1">IT and Software</a>
                            <a href="https://www.kalibrr.com/job-board/w/100-internship-%2F-ojt/co/Indonesia/1">Internship</a>
                            <a href="https://www.kalibrr.com/job-board/te/Digital-Marketing/1">Digital Marketing</a>
                            <a href="https://www.kalibrr.com/job-board/work_from_home/y/1">Remote</a>
                            <a href="https://www.kalibrr.com/job-board/i/accounting-and-finance/1">Accounting</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeHeader;