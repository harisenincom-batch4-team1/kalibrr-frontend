import React, {PureComponent} from "react";

class HomePartners extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    url: "https://www.kalibrr.com/c/btpn/jobs",
                    logo: "https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-e65898a896.webp"
                },
                {
                    url: "https://www.kalibrr.com/c/pt-federal-international-finance/jobs",
                    logo: "https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-e79c503a01.webp"
                },
                {
                    url: "https://www.kalibrr.com/c/great-giant-pineapple/jobs",
                    logo: "https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-de9de6a98e.webp"
                },
                {
                    url: "https://www.kalibrr.com/c/pt-pegadaian-persero/jobs",
                    logo: "https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-4fe2c1b606.webp"
                },
                {
                    url: "https://www.kalibrr.com/c/the-body-shop-indonesia/jobs",
                    logo: "https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-3fca72fbd2.webp"
                },
                {
                    url: "https://www.kalibrr.com/c/kompas-gramedia/jobs",
                    logo: "https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-0956537140.webp"
                },
                {
                    url: "https://www.kalibrr.com/c/tokopedia/jobs",
                    logo: "https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-7efdc54025.webp"
                },
                {
                    url: "https://www.kalibrr.com/c/bank-central-asia-1/jobs",
                    logo: "https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-10b2e58f93.webp"
                },
                {
                    url: "https://www.kalibrr.com/c/pt-bank-mandiri-persero-tbk/jobs",
                    logo: "https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-38e92d5b0e.webp"
                },
                {
                    url: "https://www.kalibrr.com/c/panin-bank/jobs",
                    logo: "https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-b1adf6c3fa.webp"
                },
                {
                    url: "https://www.kalibrr.com/c/alodokter/jobs",
                    logo: "https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-5959626cfb.webp"
                },
                {
                    url: "https://www.kalibrr.com/c/shopee/jobs",
                    logo: "https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-fd7814ae30.webp"
                }
            ]
        };
    }

    render() {
        return (
            <div className="comp">
                <div className="wrapper">
                    <div className="layer cvr-bg">
                        <h2>Work with the most innovative companies around the world</h2>
                        <div className="rowflex">
                            {this.state.data.map((value, index) => (
                                <figure key={index}>
                                    <a href={value.url} target="_blank">
                                        <img
                                            src=""
                                            data-src={value.logo}
                                            width="152"
                                            className="lazy"
                                        />
                                    </a>
                                </figure>
                            ))}
                        </div>
                        <div className="seeall">
                            <a href="https://www.kalibrr.com/job-board" className="cvr-bg-af">See all job opportunities</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePartners;