import React, { useState } from 'react';

const FaqTab = (props) => {
    const { question, answer } = props;

    const [faqToggleState, setFaqToggleState] = useState("Off");

    const faqToggle = () => {
        setFaqToggleState((state) => (state === "On" ? "Off" : "On"));

    };
    return (
        <div className="my-4 bg-white rounded-md p-4">

            <h2 onClick={faqToggle} className="toggle-question cursor-pointer font-bold">{question}</h2>

            <div className={faqToggleState === 'Off' ? 'faq-toggle-none' : 'services-tab-active-content'}>
                <hr className="my-2" />
                <p className="text-gray-500 text-basel">{answer}</p>
            </div>

        </div>
    );
};

export default FaqTab;