import React, {PureComponent} from "react";

class HomeAdvice extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    border_color: "#02F6D7",
                    advice_url: "https://www.kalibrr.com/advice/2022/05/how-to-use-kalibrrs-referral-program-to-enhance-your-jobseeking-experience",
                    banner: "https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-c2bc51ce2c.webp",
                    tag_url: "https://www.kalibrr.com/advice/search?tag=advice",
                    tag_name: "For Professionals",
                    title: "How to Use Kalibrr's Referral Program to Enhance your Jobseeking Experience",
                    subtitle: "Have you tried Kalibrr's Referral Program yet? If not, read this article to learn more about it, how you can use it, and why it can enhance your overall experience as a job seeker!"
                },
                {
                    border_color: "#FF6485",
                    advice_url: "https://www.kalibrr.com/advice/2022/05/kali-dulthood-101-how-to-make-your-kalibrr-profile-work-for-you",
                    banner: "https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-fc1e3719c8.webp",
                    tag_url: "https://www.kalibrr.com/advice/search?tag=advice",
                    tag_name: "For Professionals",
                    title: "Kali-dulthood 101: How to make your Kalibrr profile work for you",
                    subtitle: "In job-seeking as a fresh graduate, your professional profile is essential. This is the online equivalent of your resume, so what tool should you use? We recommend Kalibrr, and here's why!"
                },
                {
                    border_color: "#FFC033",
                    advice_url: "https://www.kalibrr.com/advice/2022/05/how-to-get-a-job-in-digital-marketing-and-advertising",
                    banner: "https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-7784bfda89.webp",
                    tag_url: "https://www.kalibrr.com/advice/search?tag=advice",
                    tag_name: "For Professionals",
                    title: "How to Get a Job in Digital Marketing and Advertising",
                    subtitle: "If you're interested in starting a career in the highly sought-after industry of digital marketing and advertising, read this article to find out now!"
                },
                {
                    border_color: "#02F6D7",
                    advice_url: "https://www.kalibrr.com/advice/2022/01/top-growing-careers-for-2022",
                    banner: "https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-1c7e6d0823.webp",
                    tag_url: "https://www.kalibrr.com/advice/search?tag=advice",
                    tag_name: "For Professionals",
                    title: "Top Growing Careers for 2022",
                    subtitle: "Along with the transformation of careers and industries, Kalibrr has curated a list of the TOP jobs on demand for 2022!"
                },
                {
                    border_color: "#FF6485",
                    advice_url: "https://www.kalibrr.com/advice/2021/10/making-your-mark-how-to-cultivate-your-personal-branding",
                    banner: "https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-5b35a8d5eb.webp",
                    tag_url: "https://www.kalibrr.com/advice/search?tag=advice",
                    tag_name: "For Professionals",
                    title: "Making your mark: How to cultivate your personal branding",
                    subtitle: "Curious on how to make your personal branding more memorable and engaging? Read more for tips on establishing your branding as a professional!"
                },
                {
                    border_color: "#FFC033",
                    advice_url: "https://www.kalibrr.com/blog/2022/08/how-to-write-job-description",
                    banner: "https://b2c.kalibrr.com/wp-content/uploads/2022/05/27.jpg",
                    tag_url: "https://www.kalibrr.com/advice/search?tag=advice",
                    tag_name: "For Professionals",
                    title: "How to Write a Great Job Description",
                    subtitle: "Creating a compelling job description is crucial in helping you attract candidates for your job opening and make your jobs stand out from the rest."
                },
                {
                    border_color: "#02F6D7",
                    advice_url: "https://www.kalibrr.com/advice/2022/05/how-to-use-kalibrrs-referral-program-to-enhance-your-jobseeking-experience",
                    banner: "https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-c2bc51ce2c.webp",
                    tag_url: "https://www.kalibrr.com/advice/search?tag=advice",
                    tag_name: "For Professionals",
                    title: "How to Use Kalibrr's Referral Program to Enhance your Jobseeking Experience",
                    subtitle: "Have you tried Kalibrr's Referral Program yet? If not, read this article to learn more about it, how you can use it, and why it can enhance your overall experience as a job seeker!"
                },
                {
                    border_color: "#FF6485",
                    advice_url: "https://www.kalibrr.com/advice/2022/05/kali-dulthood-101-how-to-make-your-kalibrr-profile-work-for-you",
                    banner: "https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-fc1e3719c8.webp",
                    tag_url: "https://www.kalibrr.com/advice/search?tag=advice",
                    tag_name: "For Professionals",
                    title: "Kali-dulthood 101: How to make your Kalibrr profile work for you",
                    subtitle: "In job-seeking as a fresh graduate, your professional profile is essential. This is the online equivalent of your resume, so what tool should you use? We recommend Kalibrr, and here's why!"
                },
                {
                    border_color: "#FFC033",
                    advice_url: "https://www.kalibrr.com/advice/2022/05/how-to-get-a-job-in-digital-marketing-and-advertising",
                    banner: "https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-7784bfda89.webp",
                    tag_url: "https://www.kalibrr.com/advice/search?tag=advice",
                    tag_name: "For Professionals",
                    title: "How to Get a Job in Digital Marketing and Advertising",
                    subtitle: "If you're interested in starting a career in the highly sought-after industry of digital marketing and advertising, read this article to find out now!"
                },
                {
                    border_color: "#02F6D7",
                    advice_url: "https://www.kalibrr.com/advice/2022/01/top-growing-careers-for-2022",
                    banner: "https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-1c7e6d0823.webp",
                    tag_url: "https://www.kalibrr.com/advice/search?tag=advice",
                    tag_name: "For Professionals",
                    title: "Top Growing Careers for 2022",
                    subtitle: "Along with the transformation of careers and industries, Kalibrr has curated a list of the TOP jobs on demand for 2022!"
                },
                {
                    border_color: "#FF6485",
                    advice_url: "https://www.kalibrr.com/advice/2021/10/making-your-mark-how-to-cultivate-your-personal-branding",
                    banner: "https://b2c.kalibrr.com/wp-content/uploads/2022/07/ezgif-3-5b35a8d5eb.webp",
                    tag_url: "https://www.kalibrr.com/advice/search?tag=advice",
                    tag_name: "For Professionals",
                    title: "Making your mark: How to cultivate your personal branding",
                    subtitle: "Curious on how to make your personal branding more memorable and engaging? Read more for tips on establishing your branding as a professional!"
                },
                {
                    border_color: "#FFC033",
                    advice_url: "https://www.kalibrr.com/blog/2022/08/how-to-write-job-description",
                    banner: "https://b2c.kalibrr.com/wp-content/uploads/2022/05/27.jpg",
                    tag_url: "https://www.kalibrr.com/advice/search?tag=advice",
                    tag_name: "For Professionals",
                    title: "How to Write a Great Job Description",
                    subtitle: "Creating a compelling job description is crucial in helping you attract candidates for your job opening and make your jobs stand out from the rest."
                }
            ]
        };
    }

    render() {
        return (
            <div className="advice">
                <div className="wrapper">
                    <h2>Kalibrr Advice</h2>
                    <div className="slider">
                        <div className="slick-carousel">
                            {this.state.data.map((value, index) => (
                                <div className="item" style={{borderColor: value.border_color}} key={index}>
                                    <figure>
                                        <a
                                            href={value.advice_url}>
                                            <img
                                                src={value.banner}
                                                alt="Banner"
                                            />
                                        </a>
                                    </figure>
                                    <div className="caption">
                                        <a
                                            href={value.tag_url}
                                            className="cat"
                                        >{value.tag_name}</a>
                                        <h3>
                                            <a
                                                href={value.advice_url}
                                            >{value.title}</a>
                                        </h3>
                                        <div className="txt">
                                            <p>{value.subtitle}</p>
                                        </div>
                                        <a
                                            href={value.advice_url}
                                            className="more"
                                        >Read More</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="slidenav">
                            <a href="#" className="prev cvr-bg"/>
                            <a href="#" className="next cvr-bg-af"/>
                        </div>
                    </div>
                    <div className="centered">
                        <a href="https://www.kalibrr.com/advice/" className="button">View All</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeAdvice;