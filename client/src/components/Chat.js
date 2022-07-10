import React, { useState } from 'react'

function Chat({socket, username, room}) {
    const [] = useState("");
  return (
    <div>
        <div className="chat-header">
            <p>Live Chat</p>
        </div>
        <div className="chat-body"></div>
        <div className="chat-footer">
            <input type="text" placeholder='Type Here...'/>
            <button>&#9658;</button>
        </div>
    </div>
  )
}

export default Chat