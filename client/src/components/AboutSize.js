import { Button, Typography } from "@material-ui/core";
import React, {useState} from "react";
import '../assets/AboutSize.css'
import {
    List,
    ListItem,
    ListItemText,
    Collapse
} from "@material-ui/core";

import woman from '../assets/woman.png';
import man from '../assets/man.png';

function Man() {
    const [unit, setUnit] = useState(true);
    const [openManTop, setopenManTop] = React.useState(true);
    const [openManBottom, setopenManBottom] = React.useState(false);

    const handleClickManTop = () => {
        if (openManBottom === true) {
            setopenManBottom(false);
        }
        setopenManTop(true);
    };
    
    const handleClickManBottom = () => {
        if (openManTop === true) {
            setopenManTop(false);
        }
        setopenManBottom(true);
    };

    return(
        <div>
            {/* Men */}
            <div style={{display:'flex', cursor:'pointer', fontWeight: '600'}}>
                {/* Top */}
                <span
                onClick={handleClickManTop}
                style={{margin:'10px'}}
                >
                {openManTop ? (
                <>
                    <p style={{ color: "#bd7f32" }}>
                        Tops
                    </p>
                </>
                ) : (
                    <p style={{ color: "#000" }}>
                        Tops
                    </p>
                )}
                </span>

                {/* Bottom */}
                <span
                onClick={handleClickManBottom}
                style={{margin:'10px'}}
                >
                {openManBottom ? (
                <>
                    <p style={{ color: "#bd7f32" }}>
                        Bottoms
                    </p>
                </>
                ) : (
                    <p style={{ color: "#000" }}>
                        Bottoms
                    </p>
                )}
                </span>
            </div>

            <div style={{display:'flex'}}>
            {/* Top */}
            <div style={{width:'100%', display: openManTop ? 'block':'none'}}>
                <div className="size-container">
                    <div className="clothes-type-title">Tops</div>
                    <div className="data-switch">
                        <div className="data-switch-container">
                            <span 
                                className="data-switch-value" 
                                style={{backgroundColor: unit? '#000':'#faf8f6', color: unit? '#fff':'#000'}}
                                onClick={() => setUnit(true)}>
                                cm
                            </span>
                            <span 
                                className="data-switch-value" 
                                style={{backgroundColor: unit? '#faf8f6':'#000', color: unit? '#000':'#fff'}}
                                onClick={() => setUnit(false)}>
                                inch
                            </span>
                        </div>
                    </div>
                    <table className="table-about-size">
                        <tr className="table-row-about-size">
                            <th>Size</th>
                            <th>EU</th>
                            <th>UK</th>
                            <th>US</th>
                            <th>1.<br/>Chest</th>
                            <th>2.<br/>Waist</th>
                            <th>3.<br/>Hip</th>
                        </tr>
                        <tr className="table-row-about-size">
                            <td>S</td>
                            <td>46</td>
                            <td>S</td>
                            <td>S</td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>92 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>36"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>78 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>30.5"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>92 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>36"</span>
                            </td>
                        </tr>
                        <tr className="table-row-about-size">
                            <td>M</td>
                            <td>48</td>
                            <td>M</td>
                            <td>M</td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>98 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>38.5"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>84 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>33"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>98 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>38.5"</span>
                            </td>
                        </tr>
                        <tr className="table-row-about-size">
                            <td>L</td>
                            <td>50</td>
                            <td>L</td>
                            <td>L</td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>104 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>41"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>90 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>35.5"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>104 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>41"</span>
                            </td>
                        </tr>
                        <tr className="table-row-about-size">
                            <td>XL</td>
                            <td>52</td>
                            <td>XL</td>
                            <td>XL</td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>110 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>43"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>96 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>38"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>110 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>43"</span>
                            </td>
                        </tr>
                        <tr className="table-row-about-size">
                            <td>XXL</td>
                            <td>54</td>
                            <td>XXL</td>
                            <td>XXL</td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>116 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>45.5"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>102 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>40"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>116 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>45.5"</span>
                            </td>
                        </tr>
                    </table>
                    <div className="size-instruction">
                        <h4>How to measure?</h4>
                        <p>
                            1. Chest<br/>
                            Measure around chest at the fullest part. Keep your arms down.
                        </p>
                        <p>
                            2. Waist<br/>
                            Measure around natural waistline, the narrowest part above the belly button.
                        </p>
                        <p>
                            3. Hip<br/>
                            Measure around the hip at the widest part.
                        </p>
                        <p>
                            4. Inseam<br/>
                            Measure from top of inside leg at crotch to ankle bone
                        </p>
                    </div>
                    </div>
                </div>
            
            {/* Bottom */}
            <div style={{width:'100%', display: openManBottom ? 'block':'none'}}>
                <div className="size-container">
                    <div className="clothes-type-title">Bottoms</div>
                    <div className="data-switch">
                        <div className="data-switch-container">
                            <span 
                                className="data-switch-value" 
                                style={{backgroundColor: unit? '#000':'#faf8f6', color: unit? '#fff':'#000'}}
                                onClick={() => setUnit(true)}>
                                cm
                            </span>
                            <span 
                                className="data-switch-value" 
                                style={{backgroundColor: unit? '#faf8f6':'#000', color: unit? '#000':'#fff'}}
                                onClick={() => setUnit(false)}>
                                inch
                            </span>
                        </div>
                    </div>
                    <table className="table-about-size">
                        <tr className="table-row-about-size">
                            <th>Size</th>
                            <th>EU</th>
                            <th>UK</th>
                            <th>US</th>
                            <th>2.<br/>Waist</th>
                            <th>3.<br/>Hip</th>
                            <th>4.<br/>Inseam</th>
                        </tr>
                        <tr className="table-row-about-size">
                            <td>28/S</td>
                            <td>46</td>
                            <td>36</td>
                            <td>36</td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>77.5 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>30.5"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>91.5 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>36"</span>
                            </td>
                            <td className="diagonalRising"></td>
                        </tr>
                        <tr className="table-row-about-size">
                            <td>29/S</td>
                            <td>46</td>
                            <td>36</td>
                            <td>36</td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>80 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>31.5"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>94 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>37"</span>
                            </td>
                            <td className="diagonalRising"></td>
                        </tr>
                        <tr className="table-row-about-size">
                            <td>30/M</td>
                            <td>48</td>
                            <td>38</td>
                            <td>38</td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>82.5 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>32.5"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>96.5 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>38"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>77 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>30"</span>
                            </td>
                        </tr>
                        <tr className="table-row-about-size">
                            <td>31/M</td>
                            <td>48</td>
                            <td>38</td>
                            <td>38</td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>85 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>33.5"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>99 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>39"</span>
                            </td>
                            <td className="diagonalRising"></td>
                        </tr>
                        <tr className="table-row-about-size">
                            <td>32/L</td>
                            <td>50</td>
                            <td>40</td>
                            <td>40</td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>87.5 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>34.5"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>101.5 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>40"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>82 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>32"</span>
                            </td>
                        </tr>
                        <tr className="table-row-about-size">
                            <td>33/L</td>
                            <td>50</td>
                            <td>40</td>
                            <td>40</td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>90 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>35.5"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>104 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>41"</span>
                            </td>
                            <td className="diagonalRising"></td>
                        </tr>
                        <tr className="table-row-about-size">
                            <td>34/XL</td>
                            <td>52</td>
                            <td>42</td>
                            <td>42</td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>92.5 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>36.5"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>106.5 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>42"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>87 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>34"</span>
                            </td>
                        </tr>
                        <tr className="table-row-about-size">
                            <td>36/XL</td>
                            <td>52</td>
                            <td>42</td>
                            <td>42</td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>97.5 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>38.5"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>111.5 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>44"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>92 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>36"</span>
                            </td>
                        </tr>
                        <tr className="table-row-about-size">
                            <td>38/XXL</td>
                            <td>54</td>
                            <td>44</td>
                            <td>44</td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>102.5 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>34.5"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: unit === true? "block":"none"
                                }}>40.5 cm</span>
                                <span style={{
                                    display: unit === false? "block":"none"
                                }}>46"</span>
                            </td>
                            <td className="diagonalRising"></td>
                        </tr>
                    </table>
                    <div className="size-instruction">
                        <h4>How to measure?</h4>
                        <p>
                            1. Chest<br/>
                            Measure around chest at the fullest part. Keep your arms down.
                        </p>
                        <p>
                            2. Waist<br/>
                            Measure around natural waistline, the narrowest part above the belly button.
                        </p>
                        <p>
                            3. Hip<br/>
                            Measure around the hip at the widest part.
                        </p>
                        <p>
                            4. Inseam<br/>
                            Measure from top of inside leg at crotch to ankle bone
                        </p>
                    </div>
                    </div>
            </div>
            <div>
                <img src={man} alt="image" />
            </div>
            </div>
        </div>
    );
}

function Woman(){
    const [womanUnit, setWomanUnit] = useState(true);
    const [openWomanTop, setopenWomanTop] = React.useState(true);
    const [openWomanBottom, setopenWomanBottom] = React.useState(false);

    const handleClickWomanTop = () => {
        if (openWomanBottom === true) {
            setopenWomanBottom(false);
        }
        setopenWomanTop(true);
    };
    
    const handleClickWomanBottom = () => {
        if (openWomanTop === true) {
            setopenWomanTop(false);
        }
        setopenWomanBottom(true);
    };

    return(
        <div>
            {/* Women */}
            <div style={{display:'flex', cursor:'pointer', fontWeight: '600'}}>
                {/* Top */}
                <span
                onClick={handleClickWomanTop}
                style={{margin:'10px'}}
                >
                {openWomanTop ? (
                    <p style={{ color: "#bd7f32" }}>
                        Tops
                    </p>
                ) : (
                    <p style={{ color: "#000" }}>
                        Tops
                    </p>
                )}
                </span>

                {/* Bottom */}
                <span
                onClick={handleClickWomanBottom}
                style={{margin:'10px'}}
                >
                {openWomanBottom ? (
                <>
                    <p style={{ color: "#bd7f32" }}>
                        Bottoms
                    </p>
                </>
                ) : (
                    <p style={{ color: "#000" }}>
                        Bottoms
                    </p>
                )}
                </span>
            </div>

            <div style={{display:'flex'}}>
            {/* Top */}
            <div style={{width:'100%', display: openWomanTop ? 'block':'none'}}>
                <div className="size-container">
                    <div className="clothes-type-title">Tops</div>
                    <div className="data-switch">
                        <div className="data-switch-container">
                            <span 
                                className="data-switch-value" 
                                style={{backgroundColor: womanUnit? '#000':'#faf8f6', color: womanUnit? '#fff':'#000'}}
                                onClick={() => setWomanUnit(true)}>
                                cm
                            </span>
                            <span 
                                className="data-switch-value" 
                                style={{backgroundColor: womanUnit? '#faf8f6':'#000', color: womanUnit? '#000':'#fff'}}
                                onClick={() => setWomanUnit(false)}>
                                inch
                            </span>
                        </div>
                    </div>
                    <table className="table-about-size">
                        <tr className="table-row-about-size">
                            <th>Size</th>
                            <th>EU</th>
                            <th>UK</th>
                            <th>US</th>
                            <th>1.<br/>Chest</th>
                            <th>2.<br/>Waist</th>
                            <th>3.<br/>Hip</th>
                        </tr>
                        <tr className="table-row-about-size">
                            <td>XS</td>
                            <td>34</td>
                            <td>6</td>
                            <td>4</td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>80 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>31"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>64 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>25"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>88 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>35"</span>
                            </td>
                        </tr>
                        <tr className="table-row-about-size">
                            <td>S</td>
                            <td>36</td>
                            <td>8</td>
                            <td>6</td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>85 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>33"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>69 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>27"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>93 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>37"</span>
                            </td>
                        </tr>
                        <tr className="table-row-about-size">
                            <td>M</td>
                            <td>38</td>
                            <td>10</td>
                            <td>8</td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>90 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>35"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>74 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>29"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>98 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>39"</span>
                            </td>
                        </tr>
                        <tr className="table-row-about-size">
                            <td>L</td>
                            <td>40</td>
                            <td>12</td>
                            <td>10</td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>95 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>37"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>79 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>31"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>103 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>41"</span>
                            </td>
                        </tr>
                        <tr className="table-row-about-size">
                            <td>XL</td>
                            <td>42</td>
                            <td>14</td>
                            <td>12</td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>100 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>39"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>84 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>33"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>108 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>43"</span>
                            </td>
                        </tr>
                    </table>
                    <div className="size-instruction">
                        <h4>How to measure?</h4>
                        <p>
                            1. Chest<br/>
                            Measure around chest at the fullest part. Keep your arms down.
                        </p>
                        <p>
                            2. Waist<br/>
                            Measure around natural waistline, the narrowest part above the belly button.
                        </p>
                        <p>
                            3. Hip<br/>
                            Measure around the hip at the widest part.
                        </p>
                        <p>
                            4. Inseam<br/>
                            Measure from top of inside leg at crotch to ankle bone
                        </p>
                    </div>
                    </div>
                </div>
            
            {/* Bottom */}
            <div style={{width:'100%', display: openWomanBottom ? 'block':'none'}}>
                <div className="size-container">
                    <div className="clothes-type-title">Bottoms</div>
                    <div className="data-switch">
                        <div className="data-switch-container">
                            <span 
                                className="data-switch-value" 
                                style={{backgroundColor: womanUnit? '#000':'#faf8f6', color: womanUnit? '#fff':'#000'}}
                                onClick={() => setWomanUnit(true)}>
                                cm
                            </span>
                            <span 
                                className="data-switch-value" 
                                style={{backgroundColor: womanUnit? '#faf8f6':'#000', color: womanUnit? '#000':'#fff'}}
                                onClick={() => setWomanUnit(false)}>
                                inch
                            </span>
                        </div>
                    </div>
                    <table className="table-about-size">
                        <tr className="table-row-about-size">
                            <th>Size</th>
                            <th>EU</th>
                            <th>UK</th>
                            <th>US</th>
                            <th>2.<br/>Waist</th>
                            <th>3.<br/>Hip</th>
                            <th>4.<br/>Inseam</th>
                        </tr>
                        <tr className="table-row-about-size">
                            <td>24 / XS</td>
                            <td>34</td>
                            <td>6</td>
                            <td>4</td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>61.5 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>24"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>85.5 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>34"</span>
                            </td>
                            <td className="diagonalRising"></td>
                        </tr>
                        <tr className="table-row-about-size">
                            <td>25 / XS</td>
                            <td>34</td>
                            <td>6</td>
                            <td>4</td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>80 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>25"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>94 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>34"</span>
                            </td>
                            <td className="diagonalRising"></td>
                        </tr>
                        <tr className="table-row-about-size">
                            <td>26 / S</td>
                            <td>36</td>
                            <td>8</td>
                            <td>6</td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>66.5 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>26"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>90.5 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>35"</span>
                            </td>
                            <td className="diagonalRising"></td>
                        </tr>
                        <tr className="table-row-about-size">
                            <td>27 / S</td>
                            <td>36</td>
                            <td>8</td>
                            <td>6</td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>69 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>27"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>93 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>36"</span>
                            </td>
                            <td className="diagonalRising"></td>
                        </tr>
                        <tr className="table-row-about-size">
                            <td>28 / M</td>
                            <td>38</td>
                            <td>10</td>
                            <td>8</td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>71.5 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>28"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>95.5 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>37"</span>
                            </td>
                            <td className="diagonalRising"></td>
                        </tr>
                        <tr className="table-row-about-size">
                            <td>29 / M</td>
                            <td>38</td>
                            <td>10</td>
                            <td>8</td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>74 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>29"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>98 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>39"</span>
                            </td>
                            <td className="diagonalRising"></td>
                        </tr>
                        <tr className="table-row-about-size">
                            <td>30 / L</td>
                            <td>40</td>
                            <td>12</td>
                            <td>10</td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>76.5 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>30"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>100.5 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>39"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>76 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>30"</span>
                            </td>
                        </tr>
                        <tr className="table-row-about-size">
                            <td>31 / L</td>
                            <td>40</td>
                            <td>12</td>
                            <td>10</td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>79 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>31"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>103 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>40"</span>
                            </td>
                            <td className="diagonalRising"></td>
                        </tr>
                        <tr className="table-row-about-size">
                            <td>32 / XL</td>
                            <td>42</td>
                            <td>14</td>
                            <td>12</td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>81.5 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>32"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>105.5 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>41"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>81 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>32"</span>
                            </td>
                        </tr>
                        <tr className="table-row-about-size">
                            <td>XL</td>
                            <td>42</td>
                            <td>14</td>
                            <td>12</td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>84 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>32"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>108 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>41"</span>
                            </td>
                            <td>
                                <span style={{
                                    display: womanUnit === true? "block":"none"
                                }}>86 cm</span>
                                <span style={{
                                    display: womanUnit === false? "block":"none"
                                }}>34"</span>
                            </td>
                        </tr>
                    </table>
                    <div className="size-instruction">
                        <h4>How to measure?</h4>
                        <p>
                            1. Chest<br/>
                            Measure around chest at the fullest part. Keep your arms down.
                        </p>
                        <p>
                            2. Waist<br/>
                            Measure around natural waistline, the narrowest part above the belly button.
                        </p>
                        <p>
                            3. Hip<br/>
                            Measure around the hip at the widest part.
                        </p>
                        <p>
                            4. Inseam<br/>
                            Measure from top of inside leg at crotch to ankle bone
                        </p>
                    </div>
                    </div>
            </div>
        
            <div>
                <img src={woman} alt="image" />
            </div>
            </div>
        </div>
    );
}

export default function AboutSize(){
    return(
        <Man/>
    )
}

export function WomanSize(){
    return(
        <Woman/>
    )
}
