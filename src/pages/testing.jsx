import Header from "../components/header";
import Footer from "../components/footer";

function Testing() {
    return(
        <>
            <Header/>
            <main>
                <section className="flex flex-col items-center justify-center w-full h-137.5 bg-[url('/images/test.jpeg')] bg-size-[100%_100%] bg-cover bg-center bg-no-repeat">
                    <div className="w-full h-full bg-black/50 text-white p-8 flex flex-col justify-center items-center">
                        <h2 className="text-6xl font-bold mb-4 text-center">Transformasi Pendidikan Indonesia Melalui Data dan Aksi Nyata.</h2>
                        <p className="text-lg mb-8">Memantau perkembangan SDG 4 secara transparan untuk memastikan standar kualitas pendidikan yang berkelanjutan.</p>
                        <button className="w-50 bg-blue-500 px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-600 transition duration-300">Lihat Selengkapnya</button>
                    </div>
                </section>
                <section className="flex flex-col gap-y-10 mt-10 mx-20 py-30">
                    <h1 className="text-2xl font-bold mb-4">Preview Platform EduBridge</h1>
                    <span>Berikut ini adalah tampilan awal dari platform EduBridge:</span>
                    <img className="border border-black shadow-lg/30" src="/public/images/ss-landingPage.png" alt="" />
                    <span>Berikut ini adalah tampilan dashboard akun setelah pengguna login:</span>
                    <img className="border border-black shadow-lg/30" src="/public/images/ss-DashboardAkun.png" alt="" />
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Testing;