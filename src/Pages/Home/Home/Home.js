import React from 'react';
import useProducts from '../../../Context/UseProducts/UseProducts';

const Home = () => {
    const [products, setProducts]=useProducts();
    return (
        <div>
            <h1>This is home page</h1>
            
        </div>
    );
};

export default Home;