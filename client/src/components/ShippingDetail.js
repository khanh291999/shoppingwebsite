import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        },
    });

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Brazil', '€ 25,00', 'FREE'),
    createData('Costa Rica', '€ 25,00', 'FREE'),
    createData('India', '€ 25,00', 'FREE'),
    createData('Japan', '€ 25,00', 'FREE'),
    createData('Korea (Republic of)', '€ 25,00', 'FREE'),
    createData('Madagascar', '€ 25,00', 'FREE'),
    createData('Malaysia', '€ 25,00', 'FREE'),
    createData('Mexico', '€ 25,00', 'FREE'),
    createData('Turkey', '€ 25,00', 'FREE'),
    createData('USA', '€ 25,00', 'FREE'),
    createData('France', '€ 25,00', 'FREE'),
  ];

export default function ShippingDetail() {
    const classes = useStyles();
    return(
        <div style={{backgroundColor:'#faf8f5',width:'100%', height:'100%'}}>
            <div style={{width:'100%', backgroundColor:'#fffefa', padding:'2px 40px'}}>
                <div>
                    <div style={{
                        fontFamily: 'Roxborough,Times New Roman,times,serif',
                        marginTop: '1px',
                        fontSize: '1.1275rem',
                        marginBottom: '0px',
                    }}>We offer standard FREE shipping, except for the countries below. For all orders above € 150 shipping is FREE.</div>
                    <div style={{
                        color: '#000',
                        fontFamily: 'Aktiv Grotesk,Arial,Helvetica,sans-serif',
                        marginTop: '20px'
                    }}>
                        <TableContainer>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                <TableRow>
                                    <TableCell>Country</TableCell>
                                    <TableCell align="right">{"Order amount < €150"}</TableCell>
                                    <TableCell align="right">{"Order amount > €150"}</TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.calories}</TableCell>
                                    <TableCell align="right">{row.fat}</TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
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
    );
}