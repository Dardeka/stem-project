import Header from "../components/header";

function Idea() {
    return(
        <>
            <Header/>
            <main>
                <section className="flex flex-col items-center justify-center w-full h-[550px] bg-[url('/images/idea.jpeg')] bg-[length:100%_100%] bg-cover bg-center bg-no-repeat">
                    <div className="w-full h-full bg-black/50 text-white p-8 flex flex-col justify-center items-center">
                        <h2 className="text-6xl font-bold mb-4 text-center">Ide Inovatif <br/> untuk Pendidikan Indonesia</h2>
                        <p className="text-lg mb-8">Mengembangkan ide-ide kreatif dan inovatif untuk meningkatkan kualitas pendidikan di Indonesia.</p>
                        <button className="w-[200px] bg-blue-500 px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-600 transition duration-300">Lihat Selengkapnya</button>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Idea;