import React from "react";
import "./globals.css";
import Sidebar from "./components/layout/sidebar/page";
// import Header from './components/layout/Header';
// import Footer from './components/layout/Footer'

const LayoutGrid = ({ children }) => {
    return (
        <html lang="en">
            <body className="flex flex-col">
                <header className="bg-gray-800 text-white p-4">Header</header>
                <div className="flex flex-col md:flex-row flex-1">
                    <div className="hidden min-w-60 md:flex md:flex-none">
                        <Sidebar />
                    </div>
                    <main className="flex-auto flex justify-center">
                        {children}
                    </main>
                    <div className="flex-auto flex justify-center">
                        {/* Content 3 */}
                    </div>
                </div>
                <footer className="bg-gray-800 text-white p-4">Footer</footer>
            </body>
        </html>
    );
};

export default LayoutGrid;
