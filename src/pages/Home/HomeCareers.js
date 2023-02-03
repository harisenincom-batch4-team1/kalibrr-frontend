import React, {PureComponent} from "react";

class HomeCareers extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    career_name: "Officer Development Program Wholesale Banking 2022",
                    career_url: "https://www.kalibrr.com/c/pt-bank-mandiri-persero-tbk/jobs/200728/officer-development-program-wholesale-banking-2022?utm_source=frontpage&utm_medium=featured&utm_campaign=KalibrrFP_Dec2022",
                    company_logo: "https://b2c.kalibrr.com/wp-content/uploads/2022/11/Bank-Mandiri_Logo1.png",
                    company_name: "PT Bank Mandiri (Persero) Tbk",
                    company_address: "Jakarta, Indonesia"
                },
                {
                    career_name: "Accounting Specialist",
                    career_url: "https://www.kalibrr.com/c/pt-riset-nusantara-genetika-nusantics/jobs/211714/accounting-specialist?utm_source=frontpage&utm_medium=featured&utm_campaign=KalibrrFP_Dec2022",
                    company_logo: "https://b2c.kalibrr.com/wp-content/uploads/2022/11/nusantic.png",
                    company_name: "Nusantics",
                    company_address: "Jakarta, Indonesia"
                },
                {
                    career_name: "Key Account Management - Fashion",
                    career_url: "https://www.kalibrr.com/c/lazada-2/jobs/214137/key-account-management-fashion-3?utm_source=frontpage&utm_medium=featured&utm_campaign=KalibrrFP_Dec2022",
                    company_logo: "https://b2c.kalibrr.com/wp-content/uploads/2022/11/Lazada_Logo1.jpeg",
                    company_name: "Lazada",
                    company_address: "Jakarta, Indonesia"
                },
                {
                    career_name: "Senior Back End Engineer",
                    career_url: "https://www.kalibrr.com/c/perqara/jobs/212294/senior-back-end-engineer?utm_source=frontpage&utm_medium=featured&utm_campaign=KalibrrFP_Dec2022",
                    company_logo: "https://b2c.kalibrr.com/wp-content/uploads/2022/11/perqara.png",
                    company_name: "Perqara",
                    company_address: "Jakarta, Indonesia"
                },
                {
                    career_name: "DevOps Engineer",
                    career_url: "https://www.kalibrr.com/c/accenture-7/jobs/210362/devops-engineer?utm_source=frontpage&utm_medium=featured&utm_campaign=KalibrrFP_Dec2022",
                    company_logo: "https://b2c.kalibrr.com/wp-content/uploads/2022/11/Accenture_Logo1.jpeg",
                    company_name: "Accenture",
                    company_address: "Jakarta, Indonesia"
                },
                {
                    career_name: "Human Capital Staff (Payroll and Compensation & Benefit)",
                    career_url: "https://www.kalibrr.com/c/astra-financial/jobs/170779/human-capital-staff-payroll-and-compensation-benefit?utm_source=frontpage&utm_medium=featured&utm_campaign=KalibrrFP_Dec2022",
                    company_logo: "https://b2c.kalibrr.com/wp-content/uploads/2022/11/astra.png",
                    company_name: "Astra Financial",
                    company_address: "Jakarta, Indonesia"
                },
                {
                    career_name: "MEP Associate Manager",
                    career_url: "https://www.kalibrr.com/c/bobobox-id/jobs/212645/mep-associate-manager?utm_source=frontpage&utm_medium=featured&utm_campaign=KalibrrFP_Dec2022",
                    company_logo: "https://b2c.kalibrr.com/wp-content/uploads/2022/11/bobobox.png",
                    company_name: "Bobobox",
                    company_address: "Bandung, Indonesia"
                },
                {
                    career_name: "Growth Specialist",
                    career_url: "https://www.kalibrr.com/c/sehatq/jobs/209098/growth-specialist?utm_source=frontpage&utm_medium=featured&utm_campaign=KalibrrFP_Dec2022",
                    company_logo: "https://b2c.kalibrr.com/wp-content/uploads/2022/11/SehatQ_Logo1.jpeg",
                    company_name: "SehatQ",
                    company_address: "Jakarta, Indonesia"
                },
                {
                    career_name: "Officer Development Program Wholesale Banking 2022",
                    career_url: "https://www.kalibrr.com/c/pt-bank-mandiri-persero-tbk/jobs/200728/officer-development-program-wholesale-banking-2022?utm_source=frontpage&utm_medium=featured&utm_campaign=KalibrrFP_Dec2022",
                    company_logo: "https://b2c.kalibrr.com/wp-content/uploads/2022/11/Bank-Mandiri_Logo1.png",
                    company_name: "PT Bank Mandiri (Persero) Tbk",
                    company_address: "Jakarta, Indonesia"
                },
                {
                    career_name: "Accounting Specialist",
                    career_url: "https://www.kalibrr.com/c/pt-riset-nusantara-genetika-nusantics/jobs/211714/accounting-specialist?utm_source=frontpage&utm_medium=featured&utm_campaign=KalibrrFP_Dec2022",
                    company_logo: "https://b2c.kalibrr.com/wp-content/uploads/2022/11/nusantic.png",
                    company_name: "Nusantics",
                    company_address: "Jakarta, Indonesia"
                },
                {
                    career_name: "Key Account Management - Fashion",
                    career_url: "https://www.kalibrr.com/c/lazada-2/jobs/214137/key-account-management-fashion-3?utm_source=frontpage&utm_medium=featured&utm_campaign=KalibrrFP_Dec2022",
                    company_logo: "https://b2c.kalibrr.com/wp-content/uploads/2022/11/Lazada_Logo1.jpeg",
                    company_name: "Lazada",
                    company_address: "Jakarta, Indonesia"
                },
                {
                    career_name: "Senior Back End Engineer",
                    career_url: "https://www.kalibrr.com/c/perqara/jobs/212294/senior-back-end-engineer?utm_source=frontpage&utm_medium=featured&utm_campaign=KalibrrFP_Dec2022",
                    company_logo: "https://b2c.kalibrr.com/wp-content/uploads/2022/11/perqara.png",
                    company_name: "Perqara",
                    company_address: "Jakarta, Indonesia"
                },
                {
                    career_name: "DevOps Engineer",
                    career_url: "https://www.kalibrr.com/c/accenture-7/jobs/210362/devops-engineer?utm_source=frontpage&utm_medium=featured&utm_campaign=KalibrrFP_Dec2022",
                    company_logo: "https://b2c.kalibrr.com/wp-content/uploads/2022/11/Accenture_Logo1.jpeg",
                    company_name: "Accenture",
                    company_address: "Jakarta, Indonesia"
                },
                {
                    career_name: "Human Capital Staff (Payroll and Compensation & Benefit)",
                    career_url: "https://www.kalibrr.com/c/astra-financial/jobs/170779/human-capital-staff-payroll-and-compensation-benefit?utm_source=frontpage&utm_medium=featured&utm_campaign=KalibrrFP_Dec2022",
                    company_logo: "https://b2c.kalibrr.com/wp-content/uploads/2022/11/astra.png",
                    company_name: "Astra Financial",
                    company_address: "Jakarta, Indonesia"
                },
                {
                    career_name: "MEP Associate Manager",
                    career_url: "https://www.kalibrr.com/c/bobobox-id/jobs/212645/mep-associate-manager?utm_source=frontpage&utm_medium=featured&utm_campaign=KalibrrFP_Dec2022",
                    company_logo: "https://b2c.kalibrr.com/wp-content/uploads/2022/11/bobobox.png",
                    company_name: "Bobobox",
                    company_address: "Bandung, Indonesia"
                },
                {
                    career_name: "Growth Specialist",
                    career_url: "https://www.kalibrr.com/c/sehatq/jobs/209098/growth-specialist?utm_source=frontpage&utm_medium=featured&utm_campaign=KalibrrFP_Dec2022",
                    company_logo: "https://b2c.kalibrr.com/wp-content/uploads/2022/11/SehatQ_Logo1.jpeg",
                    company_name: "SehatQ",
                    company_address: "Jakarta, Indonesia"
                }
            ]
        };
    }

    render() {
        return (
            <div className="career">
                <div className="wrapper">
                    <h2>Find a career that works for you</h2>
                    <div className="slider">
                        <div className="pusher">
                            <div className="slick-carousel">
                                {this.state.data.map((value, index) => (
                                    <div className="item" key={index}>
                                        <figure>
                                            <img
                                                src={value.company_logo}
                                                width="83"
                                                className="lazy"
                                                alt="Logo"
                                            />
                                        </figure>
                                        <h3>{value.career_name}</h3>
                                        <b>{value.company_name}</b> <span>{value.company_address}</span>
                                        <a href={value.career_url} className="button">Apply Now</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="slidenav">
                            <a href="#" className="prev cvr-bg"/>
                            <a href="#" className="next cvr-bg"/>
                        </div>
                    </div>
                    <div className="centered">
                        <a href="https://www.kalibrr.com/job-board/1" className="cvr-bg-af">Explore more careers </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeCareers;