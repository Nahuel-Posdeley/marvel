import React from 'react';
import CardMedia from '@mui/material/CardMedia';

import './styles.css';
import { Link } from 'react-router-dom';
const CardItem = ({ id ,image, name }) => {
    return (
        <Link to={`character/${id}`} className="card__item">
            <CardMedia
                component="img"
                height="120"
                image={`${image.path}.${image.extension}`}
                style={{
                    objectFit: 'cover',
                }}
            />
            <p>
                {name}
            </p>
        </Link>
    );
};

export default CardItem;
