import React from 'react';
import ProductList from './components/ProductList.jsx';

const App = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Магазин Компьютерных Запчастей</h1>
            <ProductList />
        </div>
    );
};

export default App;