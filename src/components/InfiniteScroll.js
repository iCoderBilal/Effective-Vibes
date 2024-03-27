import React, { useState } from 'react';

import Scroller from './Scroller';
import twitter1 from '../assets/twitter-1.jpeg';
import twitter2 from '../assets/twitter-2.jpeg';
import twitter3 from '../assets/twitter-3.jpeg';
import twitter4 from '../assets/twitter-4.jpeg'


const images = [twitter1, twitter3, twitter2, twitter4

].map((image) => ({
    id: crypto.randomUUID(),
    image
}));

const InfiniteScrollCom = () => {


    return (
        <>
            <div className="App">

                <Scroller images={images} speed={40000} />
            </div>
        </>
    );
}

export default InfiniteScrollCom;
