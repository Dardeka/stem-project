function Header() {
    return(
        <>
            <header className="sticky top-0 w-full flex flex-row bg-[#003366] text-white py-4 items-center shadow-xl/50 z-40">
                <div className="flex flex-row items-center space-x-4 ml-16">
                    <img src="/images/logo.png" alt="" className="w-15 h-15"/>
                    <h1 className="text-lg font-bold ">
                        Pendidikan<br />Berkualitas
                    </h1>
                </div>
                <div className="ml-auto flex flex-row space-x-5 mr-10 font-semibold">
                    <button className="h-12 px-4 rounded-lg cursor-pointer hover:bg-[#002244] hover:shadow-md hover:scale-110 transition duration-200">Empati & Penelitian</button>
                    <button className="h-12 px-4 rounded-lg cursor-pointer hover:bg-[#002244] hover:shadow-md hover:scale-110 transition duration-200">Ide</button>    
                    <button className="h-12 px-4 rounded-lg cursor-pointer hover:bg-[#002244] hover:shadow-md hover:scale-110 transition duration-200">Pembuatan Prototipe</button>
                    <button className="h-12 px-4 rounded-lg cursor-pointer hover:bg-[#002244] hover:shadow-md hover:scale-110 transition duration-200">Pengujian dan Peninjauan</button>
                    <button className="h-12 px-4 rounded-lg cursor-pointer hover:bg-[#002244] hover:shadow-md hover:scale-110 transition duration-200">Refleksi</button>
                </div>
            </header>
        </>
    )
}

export default Header;