import React from 'react'
import Image from "next/image";

const AgentDummy = () => {
    const isSpeaking = true;
  return (
    <div className="call-view">
        <div className="card-interviewer">
            <div className="avatar">
                <Image src="/ai-avatar.png" alt="vapi-avatar" width={64} height={64} className="object-cover" />
                {isSpeaking && <span className="animate-speak" />}
            </div>
            <h3>AI Interviewer</h3>
        </div>
    </div>
  )
}

export default AgentDummy