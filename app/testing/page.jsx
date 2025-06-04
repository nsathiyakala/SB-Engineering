import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const timelineData = [
    {
        title: "Web Designer",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem.",
        icon: "🌍",
        color: "bg-danger",
    },
    {
        title: "Web Developer",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem.",
        icon: "🚀",
        color: "bg-info",
    },
    {
        title: "Web Designer",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem.",
        icon: "🌍",
        color: "bg-warning",
    },
    {
        title: "Web Developer",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada tellus lorem.",
        icon: "🚀",
        color: "bg-primary",
    },
];

const Timeline = () => {
    return (
        <div class="container">
            <h4>Timeline Style : Demo-5</h4>
            <div class="row">
                <div class="col-md-12">
                    <div class="main-timeline5">
                        <div class="timeline">
                            <div class="timeline-icon"><span class="year">2018</span></div>
                            <div class="timeline-content">
                                <h3 class="title">Enrollment at zingstudio Academy</h3>
                                <p class="description">
                                    Welcome Package: Upon enrollment, students receive a personalized welcome kit, including course materials, a zingstudio Academy tote bag, and exclusive access to the student portal.
                                </p>
                                <p class="description mt-2">
                                    Orientation Session: A structured, interactive orientation introduces students to faculty, mentors, and peers, establishing a strong foundation for their educational journey.
                                </p>
                            </div>
                        </div>
                        <div class="timeline">
                            <div class="timeline-icon"><span class="year">2017</span></div>
                            <div class="timeline-content">
                                <h3 class="title">Preparation: Foundation and Discovery</h3>
                                <p class="description">
                                    Comprehensive Onboarding: Students undergo an engaging onboarding process, including assessments and quizzes designed to identify their learning styles and strengths.
                                </p>
                                <p class="description mt-2">Learning Platform Introduction: A guided walkthrough of the Academy’s learning platform and personalized dashboard provides students with a clear roadmap for their academic journey.</p>
                                <p class="description mt-2">
                                    Mentorship Program: Each student is paired with a dedicated mentor who offers guidance, support, and accountability throughout their course.

                                </p>
                            </div>
                        </div>
                        <div class="timeline">
                            <div class="timeline-icon"><span class="year">2016</span></div>
                            <div class="timeline-content">
                                <h3 class="title">Web Desginer</h3>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.
                                </p>
                            </div>
                        </div>
                        <div class="timeline">
                            <div class="timeline-icon"><span class="year">2015</span></div>
                            <div class="timeline-content">
                                <h3 class="title">Web Developer</h3>
                                <p class="description">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lacinia mi ultrices, luctus nunc ut, commodo enim. Vivamus sem erat.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function App() {
    return <Timeline />;
}
