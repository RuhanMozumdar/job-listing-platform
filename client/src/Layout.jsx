// import { Link } from "react-router-dom";
import Header from "./Header";
import { Outlet } from "react-router-dom";

//  import oulet from react to make it a layout
export default function Layout() {
    return (
        <div className=" flex flex-col min-h-screen min-w-screen">
            <Header />
            <Outlet />
        </div>
    );
}