import Sidebar from "./Sidebar";

const Layout = ({children}) => {
    return (
        <>
            <div className="max-w-[1920px]  mx-auto">
            <Sidebar/>
           <div className=" ml-[290px]">
           {children}   
           </div>
            </div>
        </>
    );
}

export default Layout;
