import React from 'react';

const Chat = () => {

    return (
        <div id="live-chat">
            <div className="chat-open">
                <div className="chat-title">
                    <h5>Hi there</h5>
                    <p>It's Lateef here, do you have any question?</p>
                </div>
                <div className="text-area">
                    <div className="text-messages"></div>
                    <form id="chat-message">
                        <input type="name" name="message" required placeholder="Type a message..."/>
                        <button type="submit"><i className="fa fa-arrow-right"></i></button>
                    </form>
                </div>
            </div>
            <div className="chat-btn">. . .</div>
            <div className="btn-arrow"></div>
        </div>
    )
}
export default Chat;
