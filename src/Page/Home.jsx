
import { useState } from 'react';
import Header from '../Components/Header';
import NEWSAPI from '../Components/NEWSAPI';

const Home = () => {
    const [category, setCategory] = useState("general");
    return (
        <>
            <Header setCategory={setCategory} />
            <NEWSAPI category={category} />
        </>
    );
};

export default Home;