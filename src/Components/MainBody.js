import React from 'react'

export default function MainBody(props) {
  return (
    <div className='travel-body'>
       <img 
         src={`../images/${props.place.imageUrl}`}  
         className="place-image"
         alt=""
        />

       <h1 className='title'> 
            {props.place.title}
        </h1> 

        <h2 className='location'>
            <img src="./images/locate.png" 
                className='locate'
                alt=""
            />
            {props.place.location}
        </h2>

        <a className='googleMapsUrl'
            href={props.place.googleMapsUrl}>
             View on Google maps
        </a>

        <h3 className='date'>
            {props.place.startDate} - {props.place.endDate}
        </h3>

        <p className='description'>
            {props.place.description}
        </p>
    </div>
  )
}
