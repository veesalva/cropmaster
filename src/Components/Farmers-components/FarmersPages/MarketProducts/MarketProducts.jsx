import React, { useState } from 'react';
import './MarketProducts.css'; // Import your existing CSS file

const productCategories = [
  'All',
  'Crops',
  'Fruits',
  'Vegetables',
];

const products = [
  // Crops
  {
    id: 'prod1',
    category: 'Crops',
    name: 'Wheat',
    image: 'https://via.placeholder.com/150x150?text=Wheat',
    price: 25.5,
    quantity: 1000,
    available: true,
    description: 'High-quality wheat grains for various food products.',
  },
  {
    id: 'prod2',
    category: 'Crops',
    name: 'Corn',
    image: 'https://via.placeholder.com/150x150?text=Corn',
    price: 18.75,
    quantity: 800,
    available: true,
    description: 'Versatile crop used for food, animal feed, and industrial products.',
  },
  {
    id: 'prod3',
    category: 'Crops',
    name: 'Soybean',
    image: 'https://via.placeholder.com/150x150?text=Soybean',
    price: 22.99,
    quantity: 1200,
    available: true,
    description: 'Major source of vegetable protein and oil, used in various food products.',
  },
  {
    id: 'prod4',
    category: 'Crops',
    name: 'Rice',
    image: 'https://via.placeholder.com/150x150?text=Rice',
    price: 19.5,
    quantity: 1500,
    available: true,
    description: 'Essential staple food for a large part of the world\'s population.',
  },

  // Fruits
  {
    id: 'prod9',
    category: 'Fruits',
    name: 'Apple',
    image: 'https://via.placeholder.com/150x150?text=Apple',
    price: 2.25,
    quantity: 400,
    available: true,
    description: 'Sweet and crunchy fruit with various varieties.',
  },
  {
    id: 'prod10',
    category: 'Fruits',
    name: 'Orange',
    image: 'https://via.placeholder.com/150x150?text=Orange',
    price: 1.75,
    quantity: 350,
    available: true,
    description: 'Citrus fruit rich in Vitamin C.',
  },
  {
    id: 'prod11',
    category: 'Fruits',
    name: 'Banana',
    image: 'https://via.placeholder.com/150x150?text=Banana',
    price: 1.25,
    quantity: 500,
    available: true,
    description: 'Potassium-rich fruit popular for its convenience and taste.',
  },
  {
    id: 'prod12',
    category: 'Fruits',
    name: 'Grape',
    image: 'https://via.placeholder.com/150x150?text=Grape',
    price: 3.75,
    quantity: 250,
    available: true,
    description: 'Sweet and juicy fruit eaten fresh or used for wine production.',
  },
   // Vegetables
  {
    id: 'prod13',
    category: 'Vegetables',
    name: 'Tomato',
    image: 'https://via.placeholder.com/150x150?text=Tomato',
    price: 1.25,
    quantity: 1500,
    available: true,
    description: 'Fresh tomatoes for salads, sauces, and various dishes.',
  },
  {
    id: 'prod14',
    category: 'Vegetables',
    name: 'Potato',
    image: 'https://via.placeholder.com/150x150?text=Potato',
    price: 0.75,
    quantity: 2000,
    available: true,
    description: 'Starchy tuber vegetable used in various dishes.',
  },
  {
    id: 'prod15',
    category: 'Vegetables',
    name: 'Onion',
    image: 'https://via.placeholder.com/150x150?text=Onion',
    price: 0.5,
    quantity: 3000,
    available: true,
    description: 'Essential ingredient for cooking, adding flavor to various dishes.',
  },
  {
    id: 'prod16',
    category: 'Vegetables',
    name: 'Lettuce',
    image: 'https://via.placeholder.com/150x150?text=Lettuce',
    price: 1.75,
    quantity: 1000,
    available: true,
    description: 'Leafy green vegetable commonly used in salads and wraps.',
  },
];

const MarketProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(products); // Pre-calculate filtered products

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    const filtered = products.filter((product) => product.category === event.target.value || event.target.value === 'All');
    setFilteredProducts(filtered); // Update filteredProducts state
  };

  return (
    <div className='market-container'>
      <h1>Products Available in the Marketplace</h1>
      <div className='category-filter'>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          {productCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className='product-cards'>
        {filteredProducts.map((product) => (
          <div key={product.id} className='product-card'>
            <img className="product-image" src={product.image} alt={product.name} />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price" style={{ color: '#32CD32' }}>${product.price.toFixed(2)}</p>
              <p className="product-description">{product.description}</p>
              <p className={`availability ${product.available ? 'available' : ''}`}>
                {product.available ? 'Available' : 'Out of Stock'}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};



export default MarketProducts;
