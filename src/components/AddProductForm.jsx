import React, { useState } from 'react';

const AddProductForm = ({ addProduct, closeModal }) => {
    const [product, setProduct] = useState({
        name: '',
        description: '',
        price: '',
        year: '',
        manufacturer: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({
            ...product,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(product);
        setProduct({
            name: '',
            description: '',
            price: '',
            year: '',
            manufacturer: '',
        });
        closeModal();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-4 rounded shadow-lg w-full max-w-md">
                <h2 className="font-bold text-xl mb-4">Добавить новый товар</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Имя"
                        value={product.name}
                        onChange={handleChange}
                        className="p-2 border rounded mb-4 w-full"
                        required
                    />
                    <textarea
                        name="description"
                        placeholder="Описание"
                        value={product.description}
                        onChange={handleChange}
                        className="p-2 border rounded mb-4 w-full"
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        placeholder="Цена"
                        value={product.price}
                        onChange={handleChange}
                        className="p-2 border rounded mb-4 w-full"
                        required
                    />
                    <input
                        type="number"
                        name="year"
                        placeholder="Год"
                        value={product.year}
                        onChange={handleChange}
                        className="p-2 border rounded mb-4 w-full"
                        required
                    />
                    <input
                        type="text"
                        name="manufacturer"
                        placeholder="Производитель"
                        value={product.manufacturer}
                        onChange={handleChange}
                        className="p-2 border rounded mb-4 w-full"
                        required
                    />
                    <div className="flex justify-end">
                        <button type="button" onClick={closeModal} className="p-2 mr-2 bg-gray-500 text-white rounded">Отмена</button>
                        <button type="submit" className="p-2 bg-blue-500 text-white rounded">Добавить</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProductForm;