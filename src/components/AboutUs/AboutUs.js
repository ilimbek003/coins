import React from 'react';

const AboutUs = () => {
    return (
        <div id="about_us">
            <div className="container">
                <h1 className="about_us-h1">Что о нас говорят</h1>
                <div className="flex">
                    <div className="good">
                        <h1>Soooo GOOD!</h1>
                        <p>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                            interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                            conubia nostra, per inceptos himenaeos.</p>
                    </div>
                    <div className="good">
                        <h1>Soooo GOOD!</h1>
                        <p>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit
                            interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per
                            conubia nostra, per inceptos himenaeos.</p>
                    </div>
                </div>
                <div className="amet">
                    <div className="ellipse">
                        <div className="ellipse-all"/>
                        <div>
                            <h6>Dorem</h6>
                            <p>Torem</p>
                        </div>
                    </div>
                    <div className="ellipse-one">
                        <div className="ellipse-all"/>
                        <div>
                            <h6>Sorem</h6>
                            <p>Korem</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;