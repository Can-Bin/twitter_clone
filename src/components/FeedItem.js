import React from 'react'

const FeedItem = ({displayName, userName, content, timestamp, image }) => {
  return (
    <div>
        <div>
            <div>{image}</div>
            <div>
                <div>
                    <p>{displayName}</p>
                    <p>{userName}</p>
                </div>
                <div>{content}</div>
            </div>
        </div>
    </div>
  )
}

export default FeedItem