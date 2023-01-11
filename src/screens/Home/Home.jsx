import React from 'react';
import CardItem from '../../components/card/Card';
import Paginador from '../../components/paginador/Paginador';
import { DataContext } from '../../context/SliceCharacters';
const Home = () => {
    const {data} = DataContext();

    return (
        <>
            <Paginador />
            <div className="container__card">
                {data && data.map((item) => {
                    return (
                        <CardItem
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            image={item.thumbnail}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default Home;
