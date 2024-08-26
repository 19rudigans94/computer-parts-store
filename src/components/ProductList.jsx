import React, { useState, useEffect } from 'react';
import AddProductForm from './AddProductForm';

const ProductList = () => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : [
      { name: 'Процессор', description: 'Мощный процессор для игр', price: 15000, year: 2022, manufacturer: 'Intel' },
      { name: 'Видеокарта', description: 'Отличная видеокарта', price: 25000, year: 2023, manufacturer: 'NVIDIA' },
      { name: 'Материнская плата', description: 'Мощная материнская плата', price: 5000, year: 2021, manufacturer: 'ASRock' },
      { name: 'Жесткий диск', description: 'Отличный жесткий диск', price: 2000, year: 2022, manufacturer: 'Seagate' },
      { name: 'Оперативная память', description: 'Отличная оперативная память', price: 1000, year: 2021, manufacturer: 'Corsair' },
      { name: 'Корпус', description: 'Отличный корпус', price: 5000, year: 2022, manufacturer: 'Asus' },
    ];
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('price');
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const filteredProducts = products
    .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => (sortType === 'price' ? a.price - b.price : a.name.localeCompare(b.name)));

  return (
    <div>
      <button onClick={() => setIsModalOpen(true)} className="p-2 bg-green-500 text-white rounded mb-4">
        Добавить товар
      </button>
      {isModalOpen && <AddProductForm addProduct={addProduct} closeModal={() => setIsModalOpen(false)} />}
      <input
        type="text"
        placeholder="Поиск по имени..."
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded mb-4"
      />
      <select onChange={(e) => setSortType(e.target.value)} className="p-2 border rounded mb-4">
        <option value="price">Сортировать по цене</option>
        <option value="name">Сортировать по имени</option>
      </select>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product, index) => (
          <div key={index} className="p-4 border rounded shadow">
            <h2 className="font-bold text-xl">{product.name}</h2>
            <p>{product.description}</p>
            <p>Цена: {product.price} ₽</p>
            <p>Год: {product.year}</p>
            <p>Производитель: {product.manufacturer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;