import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
    const [active, setActive] = useState('');

    useEffect(() => {
        setActive(typeof window !== 'undefined' ? window.location.pathname.split('/')[1] : '');
    }, [])

    return (
        <nav className="nav">
            <ul>
                <li className={active === '' ? 'active' : ''} onClick={() => setActive('')}>
                    <Link href="/#">Inicio</Link>
                </li>
                <li className={active === 'contacto' ? 'active' : ''} onClick={() => setActive('contacto')}>
                    <Link href="/contacto">Contacto</Link>
                </li>
                <li className={active === 'pisos' ? 'active' : ''} onClick={() => setActive('pisos')}>
                    <Link href="/pisos">Instalación de pisos</Link>
                </li>
            </ul>
        </nav>
    )
}
