import React, { useState } from 'react';
import { Brand, Category, Product } from '../types';

type Props = {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    categories: Category[]
    brands: Brand[]
    products: Product[]
    setFilteredProducts: React.Dispatch<React.SetStateAction<Product[]>>
}

export default function Modal({ open, setOpen, categories, brands, products, setFilteredProducts }: Props) {
    const [category, setCategory] = useState<string>('todas');
    const [brand, setBrand] = useState<string>('todas');
    const [name, setName] = useState('');

    const handleClose = () => {
        setFilteredProducts(products.filter(product => {
            return (brand === 'todas' ? true : product.marca === brand) &&
                (category === 'todas' ? true : product.categories.find(cat => cat === category)) &&
                (product.title.toLowerCase().includes(name.toLowerCase()))
        }));
        setOpen(false);
        document.body.style.overflow = "auto";
    };

    const handleChange = (options: Brand[] | Category[], setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = options.find(op => op.name === e.target.value);
        setter(selected ? selected.name : options[0].name)
    };

    return (
        <div className={`modal ${open ? 'open' : ''}`}>
            <div className="modal-content">
                <h4>Filtrar productos</h4>
                <select className='select' value={category} onChange={handleChange([...categories, { name: 'todas' }], setCategory)}>
                    <option value="todas">Todas</option>
                    {categories.map((category) => <option key={category.name} value={category.name}>{category.name}</option>)}
                </select>
                <select className='select' value={brand} onChange={handleChange([...brands, { name: 'todas' }], setBrand)}>
                    <option value="todas">Todas</option>
                    {brands.map((brand) => <option key={brand.name} value={brand.name}>{brand.name}</option>)}
                </select>
                <input className='input' type='text' placeholder='Buscar por nombre' value={name} onChange={(e) => setName(e.target.value)}/>
                <button onClick={handleClose}>Filtrar</button>
            </div>
        </div>
    )
};