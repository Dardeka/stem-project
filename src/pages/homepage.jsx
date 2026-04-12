function Homepage() {
    return(
        <>
            <header className="sticky top-0 flex flex-row bg-[#003366] text-white py-4 items-center shadow-xl/50 z-10">
                <div className="flex flex-row items-center space-x-4 ml-16">
                    <img src="/images/logo.png" alt="" className="w-20 h-20"/>
                    <h1 className="text-xl font-bold ">
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
            <main>
                <section className="flex flex-col items-center justify-center h-[500px] bg-[url('/images/hero.jpg')] bg-[length:100%_100%] bg-cover bg-center bg-no-repeat">
                    <div className="w-screen h-screen bg-black/50 text-white p-8 flex flex-col justify-center items-center">
                        <h2 className="text-6xl font-bold mb-4 text-center">Transformasi Pendidikan Indonesia Melalui Data dan Aksi Nyata.</h2>
                        <p className="text-lg mb-8">Memantau perkembangan SDG 4 secara transparan untuk memastikan standar kualitas pendidikan yang berkelanjutan.</p>
                        <button className="w-[200px] bg-blue-500 px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-600 transition duration-300">Lihat Selengkapnya</button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Homepage;