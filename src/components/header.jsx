import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const [isActive, setIsActive] = useState(false);

    const handleNavigation = (path) => {
        navigate(path);
    }
    return(
        <>
            <header className="sticky top-0 w-full flex flex-row bg-[#003366] text-white py-4 items-center shadow-xl/50 z-40">
                <div className="flex flex-row items-center space-x-4 ml-16 cursor-pointer" onClick={() => handleNavigation("/")}>
                    <img src="/images/logo.png" alt="" className="w-12 h-12 lg:w-15 lg:h-15"/>
                    <h1 className="text-md lg:text-lg font-bold ">
                        Pendidikan<br />Berkualitas
                    </h1>
                </div>
                {/* Nav links muncul jika ukuran lebih dari lg */}
                <nav className={`ml-auto flex flex-row hidden md:hidden lg:block lg:mr-10 lg:space-x-3 max-space-x-5 font-semibold mt-auto mb-auto`}>
                    <a className="h-12 lg:px-4 lg:py-4 text-md content-center rounded-lg cursor-pointer hover:bg-white hover:text-black hover:shadow-md hover:scale-110 transition duration-200" onClick={() => handleNavigation("/empathy-research")}>Empati & Penelitian</a>
                    <a className="h-12 lg:px-4 lg:py-4 text-md content-center rounded-lg cursor-pointer hover:bg-white hover:text-black hover:shadow-md hover:scale-110 transition duration-200" onClick={() => handleNavigation("/idea")}>Ide</a>
                    <a className="h-12 lg:px-4 lg:py-4 text-md content-center rounded-lg cursor-pointer hover:bg-white hover:text-black hover:shadow-md hover:scale-110 transition duration-200" onClick={() => handleNavigation("/prototype")}>Pembuatan Prototipe</a>
                    <a className="h-12 lg:px-4 lg:py-4 text-md content-center rounded-lg cursor-pointer hover:bg-white hover:text-black hover:shadow-md hover:scale-110 transition duration-200" onClick={() => handleNavigation("/testing")}>Pengujian dan Peninjauan</a>
                    <a className="h-12 lg:px-4 lg:py-4 text-md content-center rounded-lg cursor-pointer hover:bg-white hover:text-black hover:shadow-md hover:scale-110 transition duration-200" onClick={() => handleNavigation("/reflection")}>Refleksi</a>
                </nav>

                {/* button menu yang akan muncul ketika ukuran layar kecil */}
                <button className="ml-auto mr-10 lg:hidden" onClick={() =>{setIsActive(!isActive)}}>
                    {isActive ? <img src="/images/icons/close.png" alt="" /> :
                        <img src="images/icons/hamburger.png" alt="" />
                    }
                </button>
                {isActive && (
                    <nav className={`absolute top-20 right-0 ml-auto w-[200px] h-[400px] bg-[#003366] flex flex-col space-y-5 mr-5 font-semibold shadow-xl/30 z-10 p-5`}>
                        <a className="w-fit px-2 py-2 content-center rounded-lg cursor-pointer hover:bg-white hover:text-black hover:shadow-md hover:scale-110 transition duration-200" onClick={() => handleNavigation("/empathy-research")}>Empati & Penelitian</a>
                        <a className="w-full px-2 py-2 content-center rounded-lg cursor-pointer hover:bg-white hover:text-black hover:shadow-md hover:scale-110 transition duration-200" onClick={() => handleNavigation("/idea")}>Ide</a>
                        <a className="w-fit px-2 py-2 content-center rounded-lg cursor-pointer hover:bg-white hover:text-black hover:shadow-md hover:scale-110 transition duration-200" onClick={() => handleNavigation("/prototype")}>Pembuatan Prototipe</a>
                        <a className="w-fit px-2 py-2 content-center rounded-lg cursor-pointer hover:bg-white hover:text-black hover:shadow-md hover:scale-110 transition duration-200" onClick={() => handleNavigation("/testing")}>Pengujian dan Peninjauan</a>
                        <a className="w-full px-2 py-2 content-center rounded-lg cursor-pointer hover:bg-white hover:text-black hover:shadow-md hover:scale-110 transition duration-200" onClick={() => handleNavigation("/reflection")}>Refleksi</a>
                    </nav>
                )}
            </header>
        </>
    )
}

export default Header;