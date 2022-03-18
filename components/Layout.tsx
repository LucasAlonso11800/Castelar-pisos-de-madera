import React from 'react'
import CustomHead from './CustomHead'
import Header from './Header'
import Navbar from './Navbar'

type Props = {
    children: React.ReactNode | React.ReactNode[]
    title: string
}

export default function Layout({ children, title }: Props) {
    return (
        <div className="layout">
            <CustomHead title={title} />
            <Navbar />
            <Header />
            <div className="filler"></div>
            {children}
            <div className="second-filler"></div>
        </div>
    )
};