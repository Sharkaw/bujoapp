import React from "react";
import "./globals.css";
import Sidebar from "./pages/sidebar/page";
// import Header from './components/Header';
// import Footer from './components/Footer'

const LayoutGrid = ({ children }) => {
    return (
        <html lang="en">
            <body className="flex flex-col min-h-screen">
                <header className="bg-gray-800 text-white p-4">Header</header>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-3 min-w-1 max-w-5">
                        <Sidebar />
                    </div>
                    <div className="col-span-6 ">
                        <main class="flex-grow">{children}</main>
                    </div>
                    <div className="col-span-3 ">Content 3</div>
                </div>
                <footer className="bg-gray-800 text-white p-4">Footer</footer>
            </body>
        </html>
    );
};

export default LayoutGrid;
