import React from 'react'
import {Avatar, Button, Title} from '../ui'
const Photo = ({photos}) => {
  return photos.map(item => {
    const {title, thumbnailUrl} = item
    return (
      <>
        <Avatar
          src={thumbnailUrl}
          style={{width: '100px', height: '100px'}}
          alt="alternative"
        />
        <Title text={title} />
        <Button
          text="Read comments"
          style={{fontSize: '16px'}}
          onClick={() => alert('h')}
        />
      </>
    )
  })
}
export default Photo
