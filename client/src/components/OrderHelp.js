import React from "react";
import '../assets/OrderHelp.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Accordion from '@material-ui/core/Accordion';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    heading: {
        fontSize: '1.125rem',
        fontWeight: '700',
        color: '#000'
    },
}));

const AccordionSummary = withStyles({
    root: {
        borderBottom: "2px solid #000",
        backgroundColor: '#faf8f6'
    },
    expanded: {}
  })(MuiAccordionSummary);

const AccordionDetails = withStyles({
    root: {
        backgroundColor: '#faf8f6',
        textAlign: 'left',
    },
    expanded: {}
})(MuiAccordionDetails);

export default function OrderHelp() {
    const classes = useStyles();
    //tab
    const [openTab1, setopenTab1] = React.useState(false);
    const [openTab2, setopenTab2] = React.useState(false);
    //tab1 - handler
    const [openTab11, setopenTab11] = React.useState(false);
    const [openTab12, setopenTab12] = React.useState(false);
    const [openTab13, setopenTab13] = React.useState(false);
    const [openTab14, setopenTab14] = React.useState(true);
    //tab2 - handler
    const [openTab21, setopenTab21] = React.useState(true);
    const [openTab22, setopenTab22] = React.useState(false);
    const [openTab23, setopenTab23] = React.useState(false);
    const [openTab24, setopenTab24] = React.useState(false);
    const [openTab25, setopenTab25] = React.useState(false);
    const [openTab26, setopenTab26] = React.useState(false);

    const handleClickTab1 = () => {
        if(openTab2 == true){
            setopenTab2(false)
        }
        setopenTab1(!openTab1);
    };

    const handleClickTab2 = () => {
        if(openTab1 == true){
            setopenTab1(false)
        }
        setopenTab2(!openTab2);
    };

    //show or hide component
    const showComponent = (componentName) =>{
        console.log(componentName);
            switch (componentName) {
            case "openTab11":
                setopenTab11(true)
                setopenTab12(false)
                setopenTab13(false)
                setopenTab14(false)
                break;
            case "openTab12":
                setopenTab11(false)
                setopenTab12(true)
                setopenTab13(false)
                setopenTab14(false)
                break;
            case "openTab13":
                setopenTab11(false)
                setopenTab12(false)
                setopenTab13(true)
                setopenTab14(false)
                break;
            case "openTab14":
                setopenTab11(false)
                setopenTab12(false)
                setopenTab13(false)
                setopenTab14(true)
                break;
            case "openTab21":
                setopenTab21(true)
                setopenTab22(false)
                setopenTab23(false)
                setopenTab24(false)
                setopenTab25(false)
                setopenTab26(false)
                break;
            case "openTab22":
                setopenTab21(false)
                setopenTab22(true)
                setopenTab23(false)
                setopenTab24(false)
                setopenTab25(false)
                setopenTab26(false)
                break;
            case "openTab23":
                setopenTab21(false)
                setopenTab22(false)
                setopenTab23(true)
                setopenTab24(false)
                setopenTab25(false)
                setopenTab26(false)
                break;
            case "openTab24":
                setopenTab21(false)
                setopenTab22(false)
                setopenTab23(false)
                setopenTab24(true)
                setopenTab25(false)
                setopenTab26(false)
                break;
            case "openTab25":
                setopenTab21(false)
                setopenTab22(false)
                setopenTab23(false)
                setopenTab24(false)
                setopenTab25(true)
                setopenTab26(false)
                break;
            case "openTab26":
                setopenTab21(false)
                setopenTab22(false)
                setopenTab23(false)
                setopenTab24(false)
                setopenTab25(false)
                setopenTab26(true)
                break;
        }
    }
    //tab11 content
    const Tab11 = () => (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>How do I pay for my order?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="help-detail-information">
                    Once you have completed the check out page you have to agree with the terms and conditions to get redirected to the payment page. We accept numerous payment methods.
                    We accept:
                    Mastercard || Visa || Paypal
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Is it safe to order online?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="help-detail-information">
                    We take your online security very seriously. Personal and payment information is safe and no data is sent over without encryption. 
                    Protecting your information is our highest priority. All orders are transmitted over secure internet connections using SSL (Secure Sockets Layer) encryption technology and other measures.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>When will I be charged?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="help-detail-information">
                    If your card is authorised, the payment will be taken immediately and you will receive an e-mail confirming your order has been successful. 
                    Only paid orders will be handled. We will not charge you (afterwards) for any failed payment transactions.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
    //tab12 content
    const Tab12 = () => (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>What’s my order status?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="help-detail-information">
                    You will be notified by e-mail at various stages during the dispatching process of your order. 
                    If you have an account, you can login and check "My Orders" for the current status of your order. 
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>When will my order be shipped?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="help-detail-information">
                    We try to send packages within 24 hours with the exception of weekends and during bank holidays. After your order is shipped you will receive a tracking number by e-mail to follow your package along its trip.

                    When choosing for Same Day Delivery (ordered before 11:30 in the morning) you will receive your order with Trunkrs. Shipments with Same Day Delivery will take place from Monday to Friday from 17:00 till 22:00, holidays excepted. The option Same Day Delivery can be chosen at the step “Choose shipment method” in the order process. The costs for the Same Day Delivery are € 9.95.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Can I change my address?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="help-detail-information">
                    Unfortunately we are unable to change a delivery address once the order has been dispatched. Please note that we won’t ship your package again if you weren’t able to collect your package.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>How can I track my order?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="help-detail-information">
                    Once your order is sent, you will receive a tracking number by e-mail to follow your package along its trip to your doorstep. Feel free to contact Customer Service if you have any further questions or concerns regarding the shipment of your order.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>What is the delivery time of my order?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="help-detail-information">
                    Your order will be delivered within 5-7 working days. Our packages are shipped with UPS, a signature may be required on receipt. If you are not around to take the delivery of your parcel, the carrier will leave a calling card telling you how to collect your package. Alternatively, UPS will try two more times to deliver the package.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>What are the shipping costs?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="help-detail-information">
                    Please check your shipping costs here*. Please note that returning costs are on your expense.
                    *Subject to change
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>What can I do if something is wrong with my order?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="help-detail-information">
                    If you receive a wrong item or something is missing, feel free to contact Customer Service. Please send as many details as possible including specific order numbers.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
    //tab13 content
    const Tab13 = () => (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>How do I return an item?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="help-detail-information">
                    If for any reason you are not satisfied with your online purchase, you may return unused articles within 60 days of receipt (own expense). The articles must be returned undamaged and with their labels attached. Online orders can’t be returned to other stores. Please note that our fragrances and detergent can’t be returned.
                    <hr/>
                    If you decide to return an item, please use our Online Return Portal, as this is the most sustainable option. If you prefer paper, you can also download our return form here.
                    <hr/>
                    To return your order, please fill in the complete return form you have received and attach it to your package. Please send the package to the following address:
                    <hr/>
                    K & Q <hr/>
                    Returns Webstore <hr/>
                    1 Võ Văn Ngân <hr/>
                    Linh Tây, Thủ Đức <hr/>
                    TPHCM, VietNam <hr/>
                    <hr/>
                    <hr/>
                    Once we receive your return, all goods will be inspected. Articles must be returned undamaged and with their labels attached. Any item in unsuitable condition will be sent back to you. A refund of the returned goods will be made within 14 days to the card you used for the original purchase. Shipping costs are on your expense. Since we are not responsible for any items that are sent to us in error, we recommend using a postal service that insures the value of your returned products or gives you a proof of posting.
                    <hr/>
                    <hr/>
                    Unless you have expressly agreed otherwise, we will refund you by using the same payment method you used to purchase the item. In any case, there will be no charge for this refund.
                    <hr/>
                    Unfortunately, it's not possible to exchange items.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>When do I receive my refund?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="help-detail-information">
                    When you have used your right of withdrawal, we will refund the amount paid for the item concerned (including shipping costs) without delay and no later than 14 days after receipt of the message that you wish to terminate the agreement. Note that we must have received the item or that you can show you have returned the item. If you have chosen a different shipping method than the cheapest standard delivery method used by Scotch & Soda, we won't repay any extra costs resulting from this.
                    <hr/>
                    Unless you have expressly agreed otherwise, we will refund you by using the same payment method you used to purchase the item. In any case, there will be no charge for this refund.
                    <hr/>
                    Unfortunately, it's not possible to exchange items.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>May I fit any items?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="help-detail-information">
                    During the 30 day grace period, you can use the product to the extent necessary to establish the nature, characteristics and functioning of the article in the same way that you would do in a shop. For example, you may fit the article, but do not wear it outside.
                    <hr/>
                    When you return an item that you have damaged, has been washed, the labels have been removed, the item is incomplete or contains other signs of wear showing that you have used the item more extensively than described above, you are liable for any depreciation in the value of the item. Scotch & Soda will deduct this from the total amount to be refunded to you.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Have you received my returned items already?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="help-detail-information">
                    We will notify you by email once we have received the items. It may take a while to process your return. You will receive immediately and within 14 business days a refund after you have let us know you want to return the items. We hold the right to wait with the actual refund until the moment we have received the returned item or that you can prove the item has been returned to us.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
    //tab14 content
    const Tab14 = () => (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Do I need an account to order online?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="help-detail-information">
                    You don’t need an account to order in our webstore. However, setting up an account will allow you to view past orders and the status of your current order. Creating an account is easy and can be done at the checkout.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>I forgot my password or it doesn't work</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="help-detail-information">
                    If you forget your password you can easily request a new one by using the "Forgot Password" button on the log in page. When you enter your e-mail address a new password will be sent automatically. If you are (still) having login problems, please feel free to contact Customer Service.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Can I change my order?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="help-detail-information">
                    Unfortunately, we can't change your order after you've placed it. This includes changing the size and colour of an item, removing an item or changing the delivery address. You do have the right to cancel the entire order within the 30-day grace period. You can find more information here about your right to cancel the agreement.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Can I cancel my order?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="help-detail-information">
                    You have the right to cancel your order. Please keep in mind we go out of our way to deliver the order as fast as possible. So it may be shipped already. If it's already shipped, you can refuse to accept the package when the courier arrives with it. You can find more information here about your right to cancel the agreement within the 30-day grace period.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
    //tab21 content
    const Tab21 = () => (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Where can I find more product information?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="help-detail-information">
                    You will find more information about the composition of the fabric on the product detail page. If you have any additional questions, please feel free to contact Customer Service.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Is a product still in stock?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="help-detail-information">
                    Since we have a limited seasonal collection, products may run out of stock during the season. If the colour or size isn’t shown on the product detail page, it is no longer in stock. You can also contact a store near your home and check if they still have the item in stock. Our stores are listed in our Store Finder.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Do the prices include vat?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="help-detail-information">
                    The prices in our webstore include VAT.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
    //tab22 content
    const Tab22 = () => (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>I’m having payment problems</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="help-detail-information">
                    If you can’t pay for your order, there can be several reasons. Feel free to contact Customer Service if you have any further questions or concerns regarding your payment.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>There is an error on the webstore</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="help-detail-information">
                    Our webstore should be working all the time. However, if you do find an error in our webstore, we would be really happy if you would let us know by contacting Customer Service.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
    //tab23 content
    const Tab23 = () => (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>I have received a faulty item from your webstore</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="help-detail-information">
                    You should inspect Scotch & Soda goods for faults as soon as you receive them. If you think there is a defect, please let us know straight away by contacting Customer Service explaining what’s wrong and attaching photo’s to your message. Please note that we must be notified within 14 days if any items received are defective or damaged.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>I have a complaint about an article I bought in a Scotch & Soda store</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="help-detail-information">
                    If you have any issue or complaint about an article bought in a Scotch & Soda store, we recommend to contact one of our Scotch & Soda stores about this matter. All our stores are listed in the Store Finder.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
    //tab24 content
    const Tab24 = () => (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Privacy policy</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="help-detail-information">
                    For more information you can check our privacy policy 
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
    //tab25 content
    const Tab25 = () => (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>How do I contact customer service?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="help-detail-information">
                    Feel free to contact us if you have any questions or concerns. We are always happy to help.
                    Please send us a message with your question and order number by email
                    You may also call us at +84 96 3339696.
                    Our operating hours are from Monday to Friday, between 9:00 am to 18:00 pm (VN) with the exception of bank holidays.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
    //tab26 content
    const Tab26 = () => (
        <div className={classes.root}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Commands for cart</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="help-detail-information">
                        To open cart say: <i>Open cart</i><br/>
                        To close cart say: <i>Close cart</i>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Commands for buying product</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="help-detail-information">
                        To add item to cart say: <i>Add {"<quantity> <product name>"} to cart</i><br/>
                        To chose which size of the product say: <i>S or M or L or XL or XXL</i><br/>
                        To remove item from cart say: <i>Remove or delete {"<name product>"} from cart</i><br/>
                        To complete the transactions say: <i>Buy Product</i> - and then choose what shipping fee you would like<br/><br/>
                        
                        Caution: In order to buy the product you must login first.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography className={classes.heading}>Other commands</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="help-detail-information">
                        <i>What are you selling</i> -- To ask the product that website are selling <br/>
                        <i>Show product</i> -- The website will redirect to shopping page <br/>
                        <i>What are you selling</i> -- To ask the product that website are selling <br/>
                        <i>What are the categies or Type of clothes</i> -- To ask the product type that website are selling <br/>
                        <i>Show order status or order history</i> -- To open user order history <br/>
                        <i>Show profile</i> -- To open user profile<br/>
                        <i>What is the opening hour</i> -- To ask the store working time<br/>
                        <i>How to conact the store</i> -- To open contact page<br/>
                        <i>Show assistant or help me</i> -- To open FAQ page<br/>
                        <i>How long is the delivery</i> -- To ask how long will delivery package arrives to you<br/>
                        <i>How can I return sth</i> -- To ask for a refund or something simlar to that<br/>
                        <i>Show privacy policy</i> -- To open Privacy policy page<br/>
                        <i>What are the shipping fee</i> -- To open shipping charge page<br/>

                        You can also ask about: 
                        <li><i>The time</i></li>
                        <li><i>Weather</i></li>
                        <li><i>News</i></li>
                        <li><i>Calculate</i></li>
                        <li><i>etc.</i></li>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )

    return(
        <div style={{backgroundColor:'#faf8f6', padding:'5%'}}>
            <section id="order-help-header">
                <div id="help-header-container">
                    <h1>
                        Problem?
                        <br/>
                        No Problem.
                    </h1>
                    <p>We're here to help</p>
                </div>
            </section>
            <section>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    className={classes.root}
                >
                    <ListItem button onClick={handleClickTab1} style={{background:'none'}}>                        
                        {openTab1 ? 
                            <>
                                <div style={{width:'100%'}}>
                                <ListItemText>
                                    <div className="tab">
                                        <h3 style={{color:"#bd7f32"}}>Your order</h3>
                                        <p style={{color:"#bd7f32"}}>Is our business. Find it here.</p>
                                        <Divider style={{backgroundColor:'#000', height:'1.5px'}}/>
                                    </div>    
                                </ListItemText>
                                <ExpandLess id="expand-icon"/> 
                                </div>
                            </>
                            : 
                            <div style={{width:'100%'}}>
                                <ListItemText>
                                    <div className="tab">
                                        <h3 style={{color:"#000"}}>Your order</h3>
                                        <p style={{color:"#000"}}>Is our business. Find it here.</p>
                                        <Divider style={{backgroundColor:'#000', height:'1.5px'}}/>
                                    </div>    
                                </ListItemText>
                                <ExpandMore id="expand-icon" />
                            </div>
                        }
                    </ListItem>
                        <Collapse in={openTab1} timeout="auto" unmountOnExit>
                            <Grid container spacing={3}>
                                <Grid item xs={3}>
                                    <div className={classes.paper}>
                                        <div className="main-list">
                                            <li onClick={() => showComponent("openTab11")}>
                                                {openTab11?
                                                    <a style={{color:"#bd7f32"}}>Payment</a>
                                                    :
                                                    <a style={{color:"#000"}}>Payment</a>
                                                }
                                            </li>
                                            <li onClick={() => showComponent("openTab12")}>
                                                {openTab12?
                                                    <a style={{color:"#bd7f32"}}>Delivery</a>
                                                    :
                                                    <a style={{color:"#000"}}>Delivery</a>
                                                }
                                            </li>
                                            <li onClick={() => showComponent("openTab13")}>
                                                {openTab13?
                                                    <a style={{color:"#bd7f32"}}>Returning</a>
                                                    :
                                                    <a style={{color:"#000"}}>Returning</a>
                                                }
                                            </li>
                                            <li onClick={() => showComponent("openTab14")}>
                                                {openTab14?
                                                    <a style={{color:"#bd7f32"}}>Ordering</a>
                                                    :
                                                    <a style={{color:"#000"}}>Ordering</a>
                                                }
                                            </li>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={9} style={{marginLeft:'-2%'}}>
                                    <div className={classes.paper}>
                                        {openTab11 && <Tab11/>}
                                        {openTab12 && <Tab12/>}
                                        {openTab13 && <Tab13/>}
                                        {openTab14 && <Tab14/>}
                                    </div>
                                </Grid>
                            </Grid>
                        </Collapse>

                    <ListItem button onClick={handleClickTab2} style={{background:'none'}}>
                        {openTab2 ? 
                            <>
                                <div style={{width:'100%'}}>
                                <ListItemText>
                                    <div className="tab">
                                        <h3 style={{color:"#bd7f32"}}>FAQ</h3>
                                        <p style={{color:"#bd7f32"}}>Some things we can answer right away.</p>
                                        <Divider style={{backgroundColor:'#000', height:'1.5px'}}/>
                                    </div>    
                                </ListItemText>
                                <ExpandLess id="expand-icon"/> 
                                </div>
                            </>
                            : 
                            <div style={{width:'100%'}}>
                                <ListItemText>
                                    <div className="tab">
                                        <h3 style={{color:"#000"}}>FAQ</h3>
                                        <p style={{color:"#000"}}>Some things we can answer right away.</p>
                                        <Divider style={{backgroundColor:'#000', height:'1.5px'}}/>
                                    </div>    
                                </ListItemText>
                                <ExpandMore id="expand-icon" />
                            </div>
                        }
                    </ListItem>
                        <Collapse in={openTab2} timeout="auto" unmountOnExit>
                            <Grid container spacing={3}>
                                <Grid item xs={3}>
                                    <div className={classes.paper}>
                                        <div className="main-list">
                                            <li onClick={() => showComponent("openTab21")}>
                                                {openTab21?
                                                    <a style={{color:"#bd7f32"}}>Product</a>
                                                    :
                                                    <a style={{color:"#000"}}>Product</a>
                                                }
                                            </li>
                                            <li onClick={() => showComponent("openTab22")}>
                                                {openTab22?
                                                    <a style={{color:"#bd7f32"}}>Technical issues</a>
                                                    :
                                                    <a style={{color:"#000"}}>Technical issues</a>
                                                }
                                            </li>
                                            <li onClick={() => showComponent("openTab23")}>
                                                {openTab23?
                                                    <a style={{color:"#bd7f32"}}>Faulty article</a>
                                                    :
                                                    <a style={{color:"#000"}}>Faulty article</a>
                                                }
                                            </li>
                                            <li onClick={() => showComponent("openTab24")}>
                                                {openTab24?
                                                    <a style={{color:"#bd7f32"}}>Privacy</a>
                                                    :
                                                    <a style={{color:"#000"}}>Privacy</a>
                                                }
                                            </li>
                                            <li onClick={() => showComponent("openTab25")}>
                                                {openTab25?
                                                    <a style={{color:"#bd7f32"}}>Contact</a>
                                                    :
                                                    <a style={{color:"#000"}}>Contact</a>
                                                }
                                            </li>
                                            <li onClick={() => showComponent("openTab26")}>
                                                {openTab26?
                                                    <a style={{color:"#bd7f32"}}>Alan Command</a>
                                                    :
                                                    <a style={{color:"#000"}}>Alan Command</a>
                                                }
                                            </li>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={9} style={{marginLeft:'-2%'}}>
                                    <div className={classes.paper}>
                                        {openTab21 && <Tab21/>}
                                        {openTab22 && <Tab22/>}
                                        {openTab23 && <Tab23/>}
                                        {openTab24 && <Tab24/>}
                                        {openTab25 && <Tab25/>}
                                        {openTab26 && <Tab26/>}
                                    </div>
                                </Grid>
                            </Grid>
                        </Collapse>
                </List>
            </section>
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