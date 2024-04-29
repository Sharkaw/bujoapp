import { BaseButton } from "./components/common/BaseButton";
import { LongButton } from "./components/common/LongButton";
import { IconButton } from "./components/common/IconButton";
import Sidebar from "./components/layout/sidebar/page";
import React from "react";
import { redirect } from "next/navigation";
// import Form from "./pages/login/page";

const MainPage = () => {
    return <div>{redirect("/login")}</div>;
};

export default MainPage;
