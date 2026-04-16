import Header from "../components/header"

function EmpathyResearch() {
    return(
        <>
            <Header/>
            <main>
                <section className="flex flex-col items-center justify-center w-full h-[540px] bg-[url('/images/empathy.jpeg')] bg-[length:100%_100%] bg-cover bg-center bg-no-repeat">
                    <div className="w-full h-full bg-black/50 text-white p-8 flex flex-col justify-center items-center">
                        <h2 className="text-6xl font-bold mb-4 text-center">Penelitian dengan Empati</h2>
                        <p className="text-lg mb-8">Menggunakan pendekatan empati untuk memahami kebutuhan dan pengalaman pengguna dalam proses penelitian.</p>
                        <button className="w-[200px] bg-blue-500 px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-600 transition duration-300">Lihat Selengkapnya</button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default EmpathyResearch