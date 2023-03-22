import Image from "next/image";
import styles from '../styles/AdminPanel.module.css';
import { useState } from 'react';

const CandyAdminPanel = ({product, candyCategory}) => {
    const [name, setName] = useState(product.name);
    const [quantity, setQuantity] = useState(product.quantity);
    const [price, setPrice] = useState(product.price);
    const [category, setCategory] = useState(product.category.name);
    const [editing, setEditing] = useState(false);

    const handleEditClick = () => {
        setEditing(!editing);
        };
        
    const handleNameChange = (event) => {
        setName(event.target.value);
        };
        
    const handleQuantityChange = (event) => {
        setQuantity(event.target.value);
        };
    
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
        };
    
    const handlePriceChange = (event) => {
        setPrice(event.target.value);
        };
    
    const handleSaveClick = async (event) => {
        event.preventDefault();
        try {
        const response = await fetch('/api/editCandy', {
            method: 'PUT',
            body: JSON.stringify({ id: product.id, name, quantity, price, category }),
            headers: { 'Content-Type': 'application/json' }
        });
        if (response.ok) {
            setEditing(false);
        }
        } catch (error) {
        console.error(error);
        }
    };

    const handleDeleteClick = async (event) => {
        event.preventDefault();
        const deleteConfirmed = confirm("Are you sure you want to delete this product?");

        if (deleteConfirmed) {
            try {
            const response = await fetch('/api/deleteCandy', {
                method: 'DELETE',
                body: JSON.stringify({ id: product.id}),
                headers: { 'Content-Type': 'application/json' }
            });
            if (response.ok) {
                setEditing(false);
            }
            } catch (error) {
            console.error(error);
            }
    }
    };

    const categoryOptions = candyCategory.map(cat => (
        <option key={cat.name} value={cat.name}>{cat.name}</option>
    ));

    return (
        <>
        <div className={styles.productContainer}>
            <Image
                    width={196}
                    height={220}
                    src={`/productPics/${product.picture_paths[0]}`}
                    alt="Product Image"
                />
            <p className={styles.infoLabels}>NAME</p>
                {editing ? (
                <input type="text" value={name} onChange={handleNameChange} />
                ) : (
                <p>{name}</p>
                )}
            <p className={styles.infoLabels}>PRICE</p>
                {editing ? (
                <input type="text" value={price} onChange={handlePriceChange} />
                ) : (
                <p>{price}</p>
                )}
            <p className={styles.infoLabels}>QUANTITY</p>
                {editing ? (
                <input type="text" value={quantity} onChange={handleQuantityChange} />
                ) : (
                <p>{quantity}</p>
                )}
            <p className={styles.infoLabels}>CATEGORY</p>
                {editing ? (
                        <select value={category} onChange={handleCategoryChange}>
                            {categoryOptions}
                        </select>
                ) : (
                        <p>{category}</p>
                )}
                {editing ? (
                <>
                <button onClick={handleSaveClick}>SAVE</button>
                <button onClick={handleEditClick}>CANCEL</button>
                </>
                ) : (
                <>
                <button onClick={handleEditClick}>EDIT</button>
                <button onClick={handleDeleteClick}>DELETE</button>
                </>
                )}
        </div>
        </>
    );
}
export default CandyAdminPanel;
