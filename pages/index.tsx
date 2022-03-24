import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Layout from '../components/Layout'
import Card from '../components/Card';
import { Brand, Category, Product } from '../types';

export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [brands, setBrands] = useState<Brand[]>([]);

    const fetchProducts = async () => {
        const products = await (await axios.get('/data/productos.json')).data;
        setProducts(products);
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
        const brands = categories.filter(cat => seen.hasOwnProperty(cat.name) ? false : (seen[cat.name] = true));
        setBrands(brands);
    }, [categories]);

    return (
        <Layout title="Castelar - Pisos de madera">
            <main className="main" id="landing">
                <h1 className="title">Productos</h1>
                <div className="products-container">
                    {products.map((product) => <Card product={product} />)}
                </div>
            </main>
        </Layout>
    )
};