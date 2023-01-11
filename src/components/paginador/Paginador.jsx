import React from 'react';
import { DataContext } from '../../context/SliceCharacters';
import './styles.css';

const Paginador = () => {
    const {goToPage,totalCount,countPage} = DataContext();
    return (
        <div className='container__pagination'>
            <p>Total: {totalCount}</p>
            <div>
                <button style={{cursor: 'pointer',height: 20}}  data-type='prev' onClick={goToPage}>{'<'}</button>
                <p style={{ background: 'white',padding: 10,borderRadius: 20, color:'black'}}>{countPage}</p>
                <button style={{cursor: 'pointer',height: 20}}  data-type='next' onClick={goToPage} >{'>'}</button>
            </div>
        </div>
    );
};

export default Paginador;
