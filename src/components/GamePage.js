import React from 'react';
import {useParams} from 'react-router-dom';

function GamePage({cardInfo = {}}){
    let { gameSlug } = useParams();

    console.log('gameSlug: ', gameSlug)
    return(
        <>
            Game Page
        </>
    )
}

export default GamePage;