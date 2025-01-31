import 'font-awesome/css/font-awesome.min.css';
import './Home.css';
import {SetStateAction, useState} from 'react';
import ContactForm from "./ContactForm.tsx";

function Home() {
    const [carouselIndex, setCarouselIndex] = useState(0);

    const handlePrev = () => {
        setCarouselIndex((prevIndex) => (prevIndex - 1 + 4) % 4); // 4 panels total
    };

    const handleNext = () => {
        setCarouselIndex((prevIndex) => (prevIndex + 1) % 4);
    };

    const handleButtonClick = (index: SetStateAction<number>) => {
        setCarouselIndex(index); // Navigate to the specific panel
    };

    const carouselPanels = [
        {
            title: "scanr",
            description: "This is the first feature of our application. User types a disease/disorder of interest. App produces a simple summary of the disease/disorder.",
            imageSrc: "/scanr.png",
        },
        {
            title: "compass",
            description: "This feature allows users to get recommendations for where to go for treatment based on the severity of their situation. User presents with some symptoms. Compass asks questions to understand severity of situation. Compass provides a recommendation for where to go.",
            imageSrc: "/compass.png",
        },
        {
            title: "medX",
            description: "A great tool for users to look up a medication. User types a medication of interest. App produces a simple summary of the medication and its side effects.",
            imageSrc: "/medX.png",
        },
        {
            title: "simplemed",
            description: "Users enters some hyper-complex text. App produces a simplified version of the same text with retained meaning.",
            imageSrc: "/simplemed.png",
        },
    ];

    return (
        <>
            <div className="panel-1">
                <div className="section-container">
                    <div className="text-container">
                        <h1 className="section-header">decodeHealth</h1>
                        <p className="section-description">
                            Intelligent health
                        </p>
                        <button className="section-button">Try decodeHealth</button>
                    </div>
                </div>
            </div>

            <div className="panel-2">
                <div className="panel-2-container">
                    <div className="panel-2-left">
                        <h2>Importance of health literacy</h2>
                        <p>90% of adults struggle with health literacy</p>
                    </div>

                    <div className="panel-2-right">
                        <div className="row">
                            <div className="row-image">
                                <img src="/american-adults.png" alt="Image 1 description"/>
                            </div>
                            <div className="row-text">
                                <p>45% without college degrees</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="row-image">
                                <img src="/chronic-conditions.png" alt="Image 2 description"/>
                            </div>
                            <div className="row-text">
                                <p>40% with chronic conditions</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="row-image">
                                <img src="/elderly-care.png" alt="Image 3 description"/>
                            </div>
                            <div className="row-text">
                                <p>58M are 65+ years old</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="panel-3">
                <div className="panel-3-container">
                    <div className="panel-3-left">
                        <h2>Explore Features</h2>
                        <p>
                            Discover our features by interacting with the button or exploring
                            the carousel!
                        </p>

                        <div className="button-row">
                            <button
                                className="feature-button"
                                onClick={() => handleButtonClick(0)}
                            >
                                Disorder Lookup
                            </button>
                        </div>
                        <div className="button-row">
                            <button
                                className="feature-button"
                                onClick={() => handleButtonClick(1)}
                            >
                                Treatment Guidance
                            </button>
                        </div>
                        <div className="button-row">
                            <button
                                className="feature-button"
                                onClick={() => handleButtonClick(2)}
                            >
                                Prescription Guidance
                            </button>
                        </div>
                        <div className="button-row">
                            <button
                                className="feature-button"
                                onClick={() => handleButtonClick(3)}
                            >
                                Simplify Text
                            </button>
                        </div>
                    </div>

                    <div className="panel-3-carousel">
                        <div className="carousel-content">
                            {carouselPanels.map((panel, index) => (
                                <div
                                    key={index}
                                    className={`carousel-panel ${
                                        carouselIndex === index ? 'active' : ''
                                    }`}
                                >
                                    <h3>{panel.title}</h3>
                                    <p>{panel.description}</p>
                                    <img src={panel.imageSrc} alt={panel.title}/>
                                </div>
                            ))}
                        </div>
                        <div className="carousel-buttons">
                            <button onClick={handlePrev} className="carousel-button">
                                <i className="fas fa-arrow-left"></i>
                            </button>
                            <button onClick={handleNext} className="carousel-button">
                                <i className="fas fa-arrow-right"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="panel-4">
                <section id="contact-form">
                    <ContactForm/> {/* Contact form component */}
                </section>
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

export default Home;
