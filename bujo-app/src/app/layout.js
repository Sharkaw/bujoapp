import React from "react";
import "./globals.css";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";
import { ThemeProvider } from "./lib/ThemeContext";
import { JournalProvider } from "./lib/JournalContext";

const LayoutGrid = ({ children }) => {
    return (
        <html lang="en">
            <body className="flex flex-col bg-white text-gray-800">
                <ThemeProvider>
                    <JournalProvider>
                        <div id="headerDiv" className="">
                            <Header />
                        </div>
                        <div className="flex flex-col md:flex-row flex-1">
                            <div className="min-w-64 flex">
                                <Sidebar />
                            </div>
                            <main className="flex-auto flex justify-center">
                                {children}
                            </main>
                        </div>
                        <Footer />
                    </JournalProvider>
                </ThemeProvider>
            </body>
        </html>
    );
};

export default LayoutGrid;