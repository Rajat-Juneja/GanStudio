import React from 'react';
import { Link } from 'react-router-dom';

const HeaderTab = ({imageURL, heading, description, position, redirectUrl}) => {
    const classNameForStyling = position === 'left'
        ? 'leftStyled'
        : position === 'right'
            ? 'rightStyled'
            : '';
    return(
        <Link to={redirectUrl} style={{textDecoration: 'none'}}>
        <div className={"card"+" "+classNameForStyling} style={{"maxWidth": "540px", borderColor: 'transparent', cursor: 'pointer'}}>
            <div className="row g-0">
                <div className="col-md-4">
                <img src={imageURL} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                <div className="card-body" style={{textAlign: 'left'}}>
                    <h5 className="card-title" style={{color: 'brown'}}>{heading}</h5>
                    <p className="card-text">{description}</p>
                </div>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default HeaderTab;