import React from 'react'
import Layout from '../components/Layout'
import Whatsapp from '../assets/whatsapp.png';

export default function contacto() {
    return (
        <Layout title="Castelar - Pisos de madera">
            <main className="main" id="contacto">
                <h1 className="title">Contacto</h1>
                <p>Podes encontrar nuestro local en <b>&nbsp; Arias 2842 - Castelar</b></p>
                <p><img src={Whatsapp.src}/> Nuestro whatsapp: <b>&nbsp;11-3661-3324</b></p>
            </main>
        </Layout>
    )
}
