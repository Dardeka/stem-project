import Footer from "../components/footer";
import Header from "../components/header";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

function Prototype() {
    return(
        <>
            <Header/>
            <main>
                {/* Header */}
                <section className="flex flex-col items-center justify-center w-full h-[550px] bg-[url('/images/proto.jpeg')] bg-[length:100%_100%] bg-cover bg-center bg-no-repeat">
                    <div className="w-full h-full bg-black/50 text-white p-8 flex flex-col justify-center items-center">
                        <h2 className="text-6xl font-bold mb-4 text-center">Prototipe <br/> untuk Perkembangan SDG 4</h2>
                        <p className="text-lg mb-8">Mendukung perkembangan SDG 4 melalui inovasi teknologi.</p>
                        <button className="w-[200px] bg-blue-500 px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-600 transition duration-300">Lihat Selengkapnya</button>
                    </div>
                </section>
                {/* Starburst */}
                <section className="mx-20 py-30">
                    <h1 className="font-bold text-3xl">Starburst</h1>
                    <br/>
                    <img src="/images/Starburst.jpeg" alt="" />
                </section>
                {/* Lean Canvas */}
                <section className="mx-20 py-5 mb-15">
                    <h1 className="font-bold text-3xl">Lean Canvas</h1>
                    <br/>
                    <p>Lean Canvas adalah sebuah model manajemen strategis yang digunakan untuk menuangkan ide, baik bisnis maupun produk, secara cepat, fokus, dan ringkas. Model ini digunakan dalam perancangan pengembangan aplikasi EduBridge untuk mengidentifikasi proyek yang saat ini sedang berada pada tahap pengembangan. Tabel Lean Canvas dapat dilihat di bawah ini.</p>
                    <Dialog>
                        <DialogTrigger className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-300 hover:scale-110 hover:shadow-lg/30 w-[150px] text-center cursor-pointer mt-5">
                            Lihat disini
                        </DialogTrigger>
                        
                        <DialogContent className="bg-white max-w-[700px] p-6 w-full">
                            <DialogHeader>
                            <DialogTitle>Lean Canvas EduBridge</DialogTitle>
                            <DialogDescription>
                                Berikut adalah detail dari Lean Canvas yang telah dibuat
                            </DialogDescription>
                            </DialogHeader>

                            <div className="mt-4 p-2">
                            <embed 
                                src="/docs/Lean-Canvas.pdf" 
                                type="application/pdf" 
                                className="w-full h-[450px] rounded-md" 
                            />
                            </div>
                        </DialogContent>
                    </Dialog>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Prototype;