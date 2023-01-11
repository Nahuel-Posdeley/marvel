import React from 'react';
import { TextField } from '@mui/material';
import { DataContext } from '../../context/SliceCharacters';
import { CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';
import Image from '../../assets/icon.png';


const Form = () => {
    const {handleSumbit,search} = DataContext();
    return (
        <div className="container__input">
            <Link to={'/'}>
                <CardMedia
                    component="img"
                    image={Image}
                    className='image'
                />
            </Link>
            <TextField
                margin="normal"
                type="search"
                placeholder="Search character"
                value={search}
                className='input'
                onChange={handleSumbit}
                sx={{
                    paddingTop: 0,
                    width: '60%',
                    maxWidth: 500,
                    background: '#fff',
                    color: 'red',
                    borderRadius: '5px',
                }}
            />
        </div>
    );
};

export default Form;
