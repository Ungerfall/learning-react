import React, { useState, useEffect } from 'react';

import ItemComponent from './ItemComponent';
import { API_URL } from './constants';
import useNews from './hooks/useNews';
import FiltersBar from './FiltersBar/FiltersBar';

const News = () => {
    const {isLoading, news} = useNews();

    return (
        <>
            <FiltersBar />
            {!isLoading ? news.map((item, index) => (
                <ItemComponent key={item.id} index={index} item={item} />
            )) : <div className="loader" />}
        </>
    );
};

export default News;
