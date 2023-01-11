import React, { useEffect } from 'react';
import axios from 'axios';
import { createContext, useContext, useState } from 'react';


// url  https://gateway.marvel.com:443/v1/public/characters?apikey=3af8edb5ec12127873c96405b1c34897

//api public key 3af8edb5ec12127873c96405b1c34897
// api private key ebbe9eaba737755ed1da503472c1c80a4902dfb5

// ts 1

// juntamos todo 13af8edb5ec12127873c96405b1c34897ebbe9eaba737755ed1da503472c1c80a4902dfb5

//results hash 4a00fe3b3c6e16482f4e9cdda4b4072f

const Context = createContext();

export const SliceProvider = ({ children }) => {
    const [totalCount, setTotalCount] = useState(0);
    const [countPage,setCountPage] = useState(1);
    const [search,setSearch] = useState('');
    const [offset , setOffset] = useState(0);
    const [data, setData] = useState([]);

    const goToPage = (e) => {
        const type = e.target.dataset.type;
        if(type === 'prev' && offset > 1){
            setCountPage(countPage -1);
            setOffset(offset - 11);
        }else if(type === 'next' && offset < totalCount){
            setCountPage(countPage + 1);
            setOffset(offset + 11);

        }
    };

    const handleSumbit = async (e) => {

        e.preventDefault();
        setSearch(e.target.value);

        if(search){
            const res = await axios.get(
                `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&limit=${11}&offset=${offset}&ts=1&apikey=3af8edb5ec12127873c96405b1c34897&hash=4a00fe3b3c6e16482f4e9cdda4b4072f`
            );
            setData(res.data.data.results);
        }
    };
    

    const getData = async ( page = 0 , limit = 12) => {
        const res = await axios.get(
            `https://gateway.marvel.com:443/v1/public/characters?limit=${limit}&offset=${page}&ts=1&apikey=3af8edb5ec12127873c96405b1c34897&hash=4a00fe3b3c6e16482f4e9cdda4b4072f`
        );
        setData(res.data.data.results);
        setTotalCount(res.data.data.total);
    };

    useEffect(()=> {
        getData(offset);
    },[offset]);
 
    return (
        <Context.Provider
            value={{
                countPage,
                totalCount,
                goToPage,
                data,
                handleSumbit,
                search,
            }}
        >
            {children}
        </Context.Provider>
    );
};

export const DataContext = () => {
    const dataContext = useContext(Context);
    return dataContext;
};
