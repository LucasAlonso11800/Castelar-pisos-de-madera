import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Layout from '../components/Layout'
import Card from '../components/Card';
import { Brand, Category, Product } from '../types';
import Modal from '../components/Modal';

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [brands, setBrands] = useState<Brand[]>([]);
    const [modalOpen, setModalOpen] = useState(false);

    const fetchProducts = async () => {
        const products = await (await axios.get('/data/productos.json')).data;
        setProducts(products);
        setFilteredProducts(products);
    };

    const fetchCategories = async () => {
        const categories = await (await axios.get('/data/categorias.json')).data;
        setCategories(categories);
    };

    useEffect(() => {
        fetchCategories()
        fetchProducts();
    }, []);

    useEffect(() => {
        const seen: any = {};
        const brands = products.filter(product => seen.hasOwnProperty(product.marca) ? false : (seen[product.marca] = true)).map(product => ({ name: product.marca }));
        setBrands(brands);
    }, [products]);

    const handleModal = () => {
        setModalOpen(true);
        document.body.style.overflow = "hidden"
    }

    return (
        <Layout title="Castelar - Pisos de madera">
            <main className="main" id="landing">
                <div className="title-container">
                    <h1 className="title">Productos</h1>
                    <button className="filter" onClick={handleModal}>Filtrar</button>
                </div>
                <Modal
                    open={modalOpen}
                    setOpen={setModalOpen}
                    categories={categories}
                    brands={brands}
                    products={products}
                    setFilteredProducts={setFilteredProducts}
                />
                <div className="products-container">
                    {filteredProducts.map((product) => <Card product={product} />)}
                </div>
            </main>
        </Layout>
    )
};