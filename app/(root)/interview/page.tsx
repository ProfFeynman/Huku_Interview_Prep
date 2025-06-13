import AgentDummy from '@/components/agent-dummy'
import React from 'react'

const InterviewPage = () => {
  return (
    <div>
        <h3>Interview Generation</h3>
        <AgentDummy userName="you" userId="user1" type="generate" />
    </div>
  )
}

export default InterviewPage