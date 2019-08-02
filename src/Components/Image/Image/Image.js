import React from "react"
import Video from '../Video/Video'
import Photo from '../Photo/Photo'


const Image = (props) => {

  return (
    <div className="astro-image">
      {props.isVideo ? (
        <Video
          clicked={props.videoClick}
          image={props.image}
          title={props.title}
          date={props.date} />
      ) : (
          <Photo
            clicked={props.photoClick}
            image={props.image}
            title={props.title}
            date={props.date}
          />
        )}
    </div>
  )
}

export default Image