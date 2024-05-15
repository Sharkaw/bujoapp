import React from "react";
import "./globals.css";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";

const LayoutGrid = ({ children }) => {
    return (
        <html lang="en">
            <body className="flex flex-col bg-white text-black">
                <Header />
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
                <Footer />
            </body>
        </html>
    );
};

export default LayoutGrid;
