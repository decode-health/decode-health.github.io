import './AboutUs.css';

function AboutUs() {
    return (
        <>
            <div className="about-us-panel-1">
                <div className="about-us-section-container">
                    <div className="about-us-text-container">
                        <h1 className="about-us-section-header">About Us</h1>
                        <p className="about-us-section-description">
                            Learn more about us
                        </p>
                        <button className="about-us-section-button">Try decodeHealth</button>
                    </div>
                </div>
            </div>

            <div className="about-us-panel-2">
                <h2 className="about-us-panel-2-header">About Our Journey</h2>
                <div className="about-us-panel-2-container">
                    <div className="about-us-panel-2-left">
                        <h2 className="about-us-panel-2-row" style={{textAlign: "left"}}>Mission:</h2>
                        <p className="about-us-panel-2-row" style={{textAlign: "left", paddingBottom: "50px"}}>
                            At DecodeHealth, we aim to empower individuals through accessible and comprehensive health
                            information.
                        </p>
                        <h2 className="about-us-panel-2-row" style={{textAlign: "left"}}>Who we are:</h2>
                        <p className="about-us-panel-2-row" style={{textAlign: "left"}}>
                            A passionate team of innovators dedicated to simplifying health literacy for everyone.
                        </p>
                    </div>
                    <div className="about-us-panel-2-middle">
                        <img
                            src="/about-image.png"
                            alt="Central representation of our journey"
                            className="about-us-panel-2-image"
                        />
                    </div>
                    <div className="about-us-panel-2-right">
                        <h2 className="about-us-panel-2-row" style={{textAlign: "left"}}>How we do it:</h2>
                        <p className="about-us-panel-2-row" style={{textAlign: "left", paddingBottom: "50px"}}>
                            We use AI and thoughtful design to turn complex medical information into clear, actionable
                            insights.
                        </p>
                        <h2 className="about-us-panel-2-row" style={{textAlign: "left"}}>What we do:</h2>
                        <p className="about-us-panel-2-row" style={{textAlign: "left"}}>
                            We create digital tools that help users understand their health, communicate better with
                            doctors, and take control of their well-being.
                        </p>
                    </div>
                </div>
            </div>

            <div className="about-us-panel-3">
                <h2 className="about-us-panel-3-header">Our Values and Goals</h2>
                <div className="about-us-panel-3-container">
                    <div className="about-us-panel-3-column">
                        <p className="about-us-panel-3-row">
                            Empathy: Understanding the unique needs of every individual.
                        </p>
                        <p className="about-us-panel-3-row">
                            Accessibility: Making health tools available and easy to use for all.
                        </p>
                        <p className="about-us-panel-3-row">
                            Innovation: Harnessing technology to create meaningful change.
                        </p>
                        <p className="about-us-panel-3-row">
                            Clarity: Simplifying the complex for better understanding.
                        </p>
                        <p className="about-us-panel-3-row">
                            Empowerment: Enabling users to take control of their health.
                        </p>
                        <p className="about-us-panel-3-row">
                            Collaboration: Building bridges between users, healthcare providers, and technology.
                        </p>
                    </div>
                    <div className="about-us-panel-3-column">
                        <p className="about-us-panel-3-row">
                            Enhance Health Literacy: Equip users with the knowledge to make informed decisions.
                        </p>
                        <p className="about-us-panel-3-row">
                            Foster Better Communication: Improve patient-doctor interactions through effective tools.
                        </p>
                        <p className="about-us-panel-3-row">
                            Promote Accessibility: Ensure our solutions are inclusive and user-friendly.
                        </p>
                        <p className="about-us-panel-3-row">
                            Drive Engagement: Encourage proactive health management through interactive features.
                        </p>
                        <p className="about-us-panel-3-row">
                            Support Community Growth: Build a network of informed and empowered users.
                        </p>
                        <p className="about-us-panel-3-row">
                            Advance Technology: Continuously improve our platform with cutting-edge AI.
                        </p>
                    </div>
                </div>
            </div>

            <div className="about-us-panel-4">
                <h2 className="about-us-panel-4-header">Meet Our Team</h2>
                <div className="about-us-panel-4-container">
                    <div className="about-us-panel-4-column">
                        <div className="about-us-panel-4-row">
                            <img src="/image1.png" alt="Rajan Patel" className="about-us-panel-4-image" />
                            <p className="about-us-panel-4-text">Founder: Rajan Patel</p>
                        </div>
                        <div className="about-us-panel-4-row">
                            <img src="/image2.png" alt="Sakin Kirti" className="about-us-panel-4-image" />
                            <p className="about-us-panel-4-text">Co-founder: Sakin Kirti</p>
                        </div>
                        <div className="about-us-panel-4-row">
                            <img src="/image3.png" alt="Kent Nishizawa" className="about-us-panel-4-image"/>
                            <p className="about-us-panel-4-text">Developer: Kent Nishizawa</p>
                        </div>
                        <div className="about-us-panel-4-row">
                            <img src="/image4.png" alt="Ramkarthic Ramanathan" className="about-us-panel-4-image"/>
                            <p className="about-us-panel-4-text">Developer: Ramkarthic Ramanathan</p>
                        </div>
                    </div>
                    <div className="about-us-panel-4-column">
                        <div className="about-us-panel-4-row">
                            <img src="/image5.png" alt="Cole Kwas" className="about-us-panel-4-image" />
                            <p className="about-us-panel-4-text">Consultant: Cole Kwas</p>
                        </div>
                        <div className="about-us-panel-4-row">
                            <img src="/image6.png" alt="Joselyn Chavez" className="about-us-panel-4-image" />
                            <p className="about-us-panel-4-text">Developer: Joselyn Chavez</p>
                        </div>
                        <div className="about-us-panel-4-row">
                            <img src="/image7.png" alt="Evan Patel" className="about-us-panel-4-image" />
                            <p className="about-us-panel-4-text">Consultant: Evan Patel</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="divider"></div>

            <div className="panel-5">
                <div className="panel-5-container">
                    <div className="panel-5-column">
                        <div className="panel-5-row">
                            <h3>decodeHealth App</h3>
                        </div>
                        <div className="panel-5-row">
                            <a href="#">Purpose</a>
                        </div>
                        <div className="panel-5-row">
                            <a href="#">How to use tutorial</a>
                        </div>
                        <div className="panel-5-row">
                            <a href="#">Key Features</a>
                        </div>
                    </div>

                    <div className="panel-5-column">
                        <div className="panel-5-row">
                            <h3>About Us</h3>
                        </div>
                        <div className="panel-5-row">
                            <a href="#">About decodeHealth</a>
                        </div>
                        <div className="panel-5-row">
                            <a href="#">Mission and Values</a>
                        </div>
                        <div className="panel-5-row">
                            <a href="#">Leadership</a>
                        </div>
                    </div>

                    <div className="panel-5-column">
                        <div className="panel-5-row">
                            <h3>Support</h3>
                        </div>
                        <div className="panel-5-row">
                            <a href="#">Help</a>
                        </div>
                        <div className="panel-5-row">
                            <a href="#">Contact Us</a>
                        </div>
                        <div className="panel-5-row">
                            <a href="#">FAQ</a>
                        </div>
                    </div>

                    <div className="panel-5-column">
                        <div className="panel-5-row">
                            <h3>Get the App</h3>
                        </div>
                        <div className="panel-5-row">
                            <button className="panel-5-button">Download on the App Store</button>
                        </div>
                        <div className="panel-5-row">
                            <button className="panel-5-button">Get it on Google Play</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="footer-links">
                    <a href="#">© 2024 decodeHealth</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div className="footer-social">
                    <a href="#">Facebook</a>
                    <a href="#">Twitter</a>
                    <a href="#">LinkedIn</a>
                </div>
            </div>
        </>
    );
}

export default AboutUs;
