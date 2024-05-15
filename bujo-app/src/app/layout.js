import React from "react";
import "./globals.css";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";

const LayoutGrid = ({ children }) => {

    // function handleMobileMenuClick() {
    //     console.log("clicked");
    // }

    return (
        <html lang="en">
            <body className="flex flex-col bg-white text-gray-800">
                <Header />
                <div className="flex flex-col lg:flex-row flex-1">
                    <div className="min-w-60 flex">
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