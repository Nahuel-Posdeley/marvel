import { CardMedia } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './styles.css';

const Details = () => {
    const [data ,setData] = useState([]);
    const { id } = useParams();

    const fechingDetails = async () => {
        const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?&ts=1&apikey=3af8edb5ec12127873c96405b1c34897&hash=4a00fe3b3c6e16482f4e9cdda4b4072f`);
        setData(res.data.data.results);        
    };
    
    useEffect(()=> {
        fechingDetails();
    },[]);
    return (
        <div className='container__details'>
            {
                data && data.map(item => {
                    return (
                        <div key={item.id}>
                            <CardMedia
                                component="img"
                                image={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                                className='image'
                            />
                            <div className='container__info'>
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
                                <span>{item.modified}</span>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Details;