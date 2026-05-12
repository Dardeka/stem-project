import Header from "../components/header"
import { Link, Element, animateScroll as scroll } from "react-scroll";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Footer from "../components/footer";

function EmpathyResearch() {
    return(
        <>
            <Header/>
            <main>
                {/* Hero */}
                <section className="flex flex-col items-center justify-center w-full h-[540px] bg-[url('/images/empathy.jpeg')] bg-[length:100%_100%] bg-cover bg-center bg-no-repeat">
                    <div className="w-full h-full bg-black/50 text-white p-8 flex flex-col justify-center items-center">
                        <h2 className="text-6xl font-bold mb-4 text-center">Penelitian dengan Empati</h2>
                        <p className="text-lg mb-8">Menggunakan pendekatan empati untuk memahami kebutuhan dan pengalaman pengguna dalam proses penelitian.</p>
                        <Link to="empathy-research" smooth={true} duration={1000}>
                            <button className="w-[200px] bg-blue-500 px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-600 transition duration-300">Lihat Selengkapnya</button>
                        </Link>
                    </div>
                </section>
                {/* Main Content */}
                <section id="empathy-research" className="py-30 mx-20">
                    <div className="flex flex-row gap-20">
                        <div className="flex flex-col">
                            <h2 className="text-3xl font-semibold mb-4">Tujuan dan <br/> Target Perserikatan Bangsa-Bangsa</h2>
                            <p className="text-lg w-[600px] text-justify">Pada poin ke-4, tepatnya <b>sub poin 4.5</b>, UN memiliki target pada tahun 2030 dimana disparitas gender dalam pendidikan dapat dihilangkan dan menjamin akses yang sama untuk semua tingkat pendidikan dan pelatihan kejuruan, bagi masyarakat rentan termasuk penyandang cacat, masyarakat penduduk asli, dan anak-anak dalam kondisi rentan.</p>
                            
                            <h2 className="text-3xl font-semibold mt-10 mb-4">Aspek dan Tujuan yang Diteliti</h2>
                            <p className="text-lg w-[600px] text-justify">Ketimpangan akses pendidikan berkualitas dimana kualitas pembelajaran seringkali terkonsentrasi di kota-kota besar.</p>
                        </div>
                        <div className="flex flex-col justify-between items-center">
                            <img src="/images/sdgs/04.png" alt="" className="w-[250px] h-[250px]" />
                            <img src="/images/poin_4-5.png" alt="" className="w-auto h-[75px] border border-black rounded-xl shadow-xl/50"/>
                        </div>
                    </div>
                </section>
                {/* Empathy Research Results */}
                <section className="mx-20 mb-20">
                    <h2 className="text-2xl font-semibold">Hasil Penelitian dengan Empati</h2>
                    <p className="mt-4 text-justify text-lg mb-4">Penelitian ini dilakukan dengan metode survei untuk mengumpulkan data tentang ketersediaan akses terhadap pendidikan yang berkualitas di Indonesia. Pengumpulan dilakukan dengan bantuan platform Google Form. Berikut ini merupakan hasil dari penelitian tersebut:</p>
                    <p className="mb-4">Hasil Survei :</p>
                    <Dialog>
                        <DialogTrigger className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 hover:scale-110 hover:shadow-lg/30 w-[150px] text-center cursor-pointer">
                            Lihat disini
                        </DialogTrigger>
                        
                        <DialogContent className="bg-white max-w-[700px] p-6 w-full">
                            <DialogHeader>
                            <DialogTitle>Hasil survei dari Google Form</DialogTitle>
                            <DialogDescription>
                                Berikut adalah lampiran file PDF hasil survei lapangan.
                            </DialogDescription>
                            </DialogHeader>

                            <div className="mt-4 p-2">
                            <embed 
                                src="/docs/hasil-survei.pdf" 
                                type="application/pdf" 
                                className="w-full h-[450px] rounded-md" 
                            />
                            </div>
                        </DialogContent>
                    </Dialog>

                    <p className="mt-5 mb-4">Matrix penelitian dan empati :</p>
                    <Dialog>
                        <DialogTrigger className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 hover:scale-110 hover:shadow-lg/30 w-[150px] text-center cursor-pointer">
                            Lihat disini
                        </DialogTrigger>
                        
                        <DialogContent className="bg-white p-6">
                            <DialogHeader>
                                <DialogTitle>Matriks Penelitian dengan Empati</DialogTitle>
                                <DialogDescription>
                                    Berikut adalah matriks penelitian dan empati.
                                </DialogDescription>
                            </DialogHeader>

                            <div className="mt-4 p-2">
                                <embed src="/docs/matriks.pdf" type="application/pdf" className="w-full h-[450px] rounded-md" />
                            </div>
                        </DialogContent>
                    </Dialog>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default EmpathyResearch