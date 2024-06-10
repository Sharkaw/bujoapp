import { getTheme } from "../actions";
import Header from "../components/layout/Header";

export default async function HeaderWrapper() {
    const isDarkMode = await getTheme();
    return <Header initialIsDarkMode={isDarkMode} />;
}
