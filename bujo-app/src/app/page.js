import React from "react";
import { redirect } from "next/navigation";

const MainPage = () => {
    return <div>{redirect("/login")}</div>;
};

export default MainPage;
