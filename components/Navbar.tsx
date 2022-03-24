import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
    const [active, setActive] = useState('inicio');
    useEffect(() => {
        setActive('inicio');
    }, [])

    return (
        <nav className="nav">
            <ul>
                <li className={active === 'inicio' ? 'active' : ''} onClick={() => setActive('inicio')}>
                    <Link href="/#">Inicio</Link>
                </li>
                <li className={active === 'contacto' ? 'active' : ''} onClick={() => setActive('contacto')}>
                    <Link href="/#">Contacto</Link>
                </li>
                <li className={active === 'pisos' ? 'active' : ''} onClick={() => setActive('pisos')}>
                    <Link href="/#">Instalación de pisos</Link>
                </li>
            </ul>
        </nav>
    )
}
