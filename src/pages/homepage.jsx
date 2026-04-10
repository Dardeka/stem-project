function Homepage() {
    return(
        <>
            <header className="flex flex-row bg-blue-500 text-white py-4 px-16">
                <h1 className="text-2xl font-bold ">
                    Pendidikan<br />Berkualitas
                </h1>
                <div className="ml-auto flex flex-row space-x-16">
                    <button className="p-2 rounded-lg cursor-pointer hover:bg-blue-700 hover:shadow-md hover:scale-110 transition duration-200">Empati dan<br/>Penelitian</button>
                    <button className="py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-700 hover:shadow-md hover:scale-110 transition duration-200">Ide</button>    
                    <button className="p-2 rounded-lg cursor-pointer hover:bg-blue-700 hover:shadow-md hover:scale-110 transition duration-200">Pembuatan Prototipe</button>
                    <button className="p-2 rounded-lg cursor-pointer hover:bg-blue-700 hover:shadow-md hover:scale-110 transition duration-200">Pengujian dan<br/>Peninjauan</button>
                    <button className="p-2 rounded-lg cursor-pointer hover:bg-blue-700 hover:shadow-md hover:scale-110 transition duration-200">Refleksi</button>
                </div>
            </header>
            <main>
                <section className="flex flex-col items-center justify-center h-screen bg-[url('/images/hero.jpg')] bg-[length:100%_100%] bg-center bg-no-repeat">
                    <div className="w-screen h-screen bg-gray-200/50 bg-opacity-75 p-8 flex flex-col justify-center items-center">
                        <h2 className="text-6xl font-bold mb-4 text-center">Indonesia Emas <br/> Perlu Dibangun Sejak Dini</h2>
                        <p className="text-lg mb-8">Melihat capaian Indonesia dalam menggapai potensi terbesarnya melalui pendidikan.</p>
                        <button className="w-[200px] bg-blue-500 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-600 transition duration-300">Lihat Selengkapnya</button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Homepage;