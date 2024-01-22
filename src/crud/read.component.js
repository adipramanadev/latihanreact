import React, { useState, useEffect } from "react";

const ReadApiComponent = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/get-crud');
        const data = await response.json();
        setApiData(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (productId) => {
    // Implement your logic for edit here
    console.log(`Editing product with ID: ${productId}`);
  };

  const handleDelete = async (productId) => {
    try {
      const response = await fetch(`http://localhost:8000/api/destroy-crud/${productId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        console.log(`Deleted product with ID: ${productId}`);
        setApiData(apiData.filter(product => product.id !== productId));
      } else {
        console.error('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div>
      <h1>Data Produk</h1>
      {apiData.map((product) => (
        <div key={product.id}>
          <h2>{product.nameproduct}</h2>
          <p>Price: Rp. {product.price}</p>
          <button onClick={() => handleEdit(product.id)}>Edit</button>
          <button onClick={() => handleDelete(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ReadApiComponent;
