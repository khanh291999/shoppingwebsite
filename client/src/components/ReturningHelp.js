import React from "react";

export default function ReturningHelp() {
    return(
        <div>
            <div style={{backgroundColor:'#faf8f6',width:'100%', height:'100%'}}>
                <div style={{width:'100%', backgroundColor:'#fff', padding:'2px 40px'}}>
                    <div>
                        <h2 style={{
                            fontFamily: 'Roxborough,Times New Roman,times,serif',
                            fontWeight: '500',
                            fontSize: '3rem',
                            marginTop: '1px',
                            marginBottom: '0px',
                        }}>Returns</h2>
                        <div style={{
                            color: '#000',
                            fontFamily: 'Aktiv Grotesk,Arial,Helvetica,sans-serif',
                            fontWeight: '400',
                            lineHeight: '1.5',
                            fontSize: '1rem',
                        }}>
                            <p>If for any reason you are not satisfied with your online purchase, you may return unused articles within 60 days of receipt (own expense). The articles must be returned undamaged and with their labels attached. Online orders can’t be returned to other stores. Please note that our fragrances and detergent can’t be returned.</p>
                            <p>To return your order, please fill in the complete return form you have received and attach it to your package. Please send the package to the following address:</p>
                            <p>
                            SCOTCH & SODA <br/>
                            Returns Webstore <br/>
                            Jacobus Spijkerdreef 20 – 24 <br/>
                            2132PZ Hoofddorp <br/>
                            The Netherlands <br/>
                            </p>
                            <br/>
                            <p>Once we receive your return, all goods will be inspected. Articles must be returned undamaged and with their labels attached. Any item in unsuitable condition will be sent back to you. A refund of the returned goods will be made within 14 days to the card you used for the original purchase. Shipping costs are on your expense. Since we are not responsible for any items that are sent to us in error, we recommend using a postal service that insures the value of your returned products or gives you a proof of posting.</p>
                            <br/>
                            <p>Unless you have expressly agreed otherwise, we will refund you by using the same payment method you used to purchase the item. In any case, there will be no charge for this refund.</p>
                            <br/>
                            <p>Unfortunately, it's not possible to exchange items.</p>
                        </div>
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
        </div>
    );
}