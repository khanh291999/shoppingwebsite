import React from 'react'
import { List, Icon, Avatar } from 'antd';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import classNames from 'classnames';
import '../../../../assets/Message.scss'

function Message(props) {
    
    var today = new Date();

    var time = today.getHours() + ':' + today.getMinutes();

    // const AvatarSrc = props.who ==='bot' ? <EmojiEmotionsIcon/> : <AccountCircleIcon/>  

    return (
        props.who === 'bot' ?
        <>
        {/* bot */}
        <div className="message-row other-message">
            <div className="message-content">
                <EmojiEmotionsIcon style={{width:'2em', height:'2em'}}/>
                <div className="message-text">
                    {props.text}
                </div>
                <div className="message-time" style={{marginLeft:'125%'}}>{time}</div>
            </div>
        </div>
        </>
        :
        <>
        {/* user */}
        {/* <List.Item style={{ padding: '1rem', color: 'green'}}>
            <List.Item.Meta
                avatar={<Avatar icon={AvatarSrc} />}
                title={props.who}
                description={props.text}
            />
        </List.Item> */}
        <div className="message-row you-message">
            <div className="message-content"> 
                <div className="message-text">
                    {props.text}
                </div>
                <div className="message-time" style={{marginRight:'18px'}}>{time}</div>
            </div>
        </div>
        </>
    )
}

export default Message
