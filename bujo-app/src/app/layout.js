import React from "react";
import "./globals.css";
import Sidebar from "./pages/api/journals";
// import Header from './components/layout/Header';
// import Footer from './components/layout/Footer'

const LayoutGrid = ({ children }) => {
    return (
        <html lang="en">
            <body className="flex flex-col">
                <header className="bg-gray-800 text-white p-4">Header</header>
                <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-3 flex">
                        <Sidebar />
                    </div>
                    <div className="col-span-6">
                        <main className="flex justify-center">{children}</main>
                    </div>
                    <div className="col-span-3 flex justify-center">
                        {/* Content 3 */}
                    </div>
                </div>
                <footer className="bg-gray-800 text-white p-4">Footer</footer>
            </body>
        </html>
    );
};

export default LayoutGrid;
