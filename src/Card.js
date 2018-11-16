import React from 'react';
import 'tachyons';

const Card = (props) => {
    return (
        <div className='bg-light-green dib br3 ma3 pa3 grow bw2 shadow-5 '>
            <img src={`https://www.robohash.org/${props.id}?200X200`}  alt='robots'/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card