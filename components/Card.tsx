import React, { useState } from 'react'
import { Product } from '../types'

type Props = {
    product: Product
}

export default function Card({ product }: Props) {
    const { title, subtitle, options, marca, categories, image } = product;
    const [selectedOption, setSelectedOption] = useState(options[0]);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selected = options.find(op => op.name === e.target.value) || selectedOption;
        setSelectedOption(selected)
    };

    return (
        <div className="product">
            <img src={image} alt={title} className="image" />
            <h4 className="title">{marca} - {title}</h4>
            {options.length > 1 &&
                <select value={selectedOption.name} onChange={handleChange} className="options">
                    {options.map(option => (
                        <option key={option.name} value={option.name}>{option.name}</option>
                    ))}
                </select>
            }
            <div className="liters">
                <b>Tamaños:</b>
                <p>
                    {selectedOption.liters.map((option, index) => {
                        return <span key={index}>{option}L{index < selectedOption.liters.length - 1 ? ', ' : ''}</span>
                    })}
                </p>
            </div>
            {selectedOption.colors.length > 0 &&
                <div className="colors">
                    <b>Colores:</b>
                    <p>
                    {selectedOption.colors.map((option, index) => {
                        return <span key={index}>{option}{index < selectedOption.colors.length - 1 ? ', ' : ''}</span>
                    })}
                    </p>
                </div>
            }
        </div>
    )
};