import Footer from "../components/footer";
import Header from "../components/header";
import { Link, Element, animateScroll as scroll } from "react-scroll";

function Idea() {
    return(
        <>
            <Header/>
            <main>
                <section className="flex flex-col items-center justify-center w-full h-[550px] bg-[url('/images/idea.jpeg')] bg-[length:100%_100%] bg-cover bg-center bg-no-repeat">
                    <div className="w-full h-full bg-black/50 text-white p-8 flex flex-col justify-center items-center">
                        <h2 className="text-6xl font-bold mb-4 text-center">Ide Inovatif <br/> untuk Pendidikan Indonesia</h2>
                        <p className="text-lg mb-8">Mengembangkan ide-ide kreatif dan inovatif untuk meningkatkan kualitas pendidikan di Indonesia.</p>
                        <Link to="mindmap" smooth={true} duration={1000}>
                            <button className="w-[200px] bg-blue-500 px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-600 transition duration-300">Lihat Selengkapnya</button>
                        </Link>
                    </div>
                </section>
                <section id="mindmap" className="flex flex-col items-center py-30">
                    <h1 className="text-2xl font-semibold mt-10 mb-10">Mindmap Solusi untuk Permasalahan Tersebut</h1>
                    <img src="/images/mindmap.png" alt="" className="w-[1100px] mx-10"/>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Idea;