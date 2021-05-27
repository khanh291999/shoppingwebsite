import React from "react";

export default function DeliveryHelp() {
    return(
        <div style={{backgroundColor:'#faf8f6',width:'100%', height:'100%'}}>
            <div style={{width:'100%', backgroundColor:'#fff', padding:'2px 40px'}}>
                <div>
                    <h2 style={{
                        fontFamily: 'Roxborough,Times New Roman,times,serif',
                        fontWeight: '500',
                        fontSize: '3rem',
                        marginTop: '1px',
                        marginBottom: '0px',
                    }}>Delivery</h2>
                    <p style={{
                        color: '#000',
                        fontFamily: 'Aktiv Grotesk,Arial,Helvetica,sans-serif',
                        fontWeight: '400',
                        lineHeight: '1.5',
                        fontSize: '1rem',
                    }}>
                    Your package will be delivered within 2-7 working days after you place an order. We ship our packages with UPS and a signature may be required on receipt. If you are not around to take the delivery of your parcel, the carrier will leave a calling card telling you how to collect your package. Alternatively the carrier will try 2 more times to deliver the package. Please note that we are unable to change a delivery address once the order has been dispatched and we will not ship your package again if you weren’t able to collect your package.
                    </p>
                </div>
            </div>
            <div className='body-four-container'>
                <div className='body-four'>
                    <div style={{
                        fontFamily: "Alegreya",
                        fontSize: "30px",
                        fontWeight: "600",
                        margin: "16px 0 50px 0"}}>
                    Suggesstion box
                    </div>
                    <div
                    style={{fontFamily: "Alegreya",
                    fontSize: "18px",
                    maxWidth: "560px",
                    textAlignLast: "center"}}>
                    Due to our new born child, there will be some mistask. So do tell us what server you'd like to improve in the future 
                    </div>
                    <div className="suggest-box">
                    <input
                        id="login-email"
                        type="email"
                        placeholder="Your Email Address"
                    />
                    <button className="button-send">
                        <a href="/">
                        Send
                        </a>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}