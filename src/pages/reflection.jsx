import Header from "../components/header";
import Footer from "../components/footer";

function Reflection() {
    return(
        <>
            <Header/>
            <main>
                <section className="flex flex-col items-center justify-center w-full h-137.5 bg-[url('/images/reflection.jpeg')] bg-size-[100%_100%] bg-cover bg-center bg-no-repeat">
                    <div className="w-full h-full bg-black/50 text-white p-8 flex flex-col justify-center items-center">
                        <h2 className="text-6xl font-bold mb-4 text-center">Refleksi</h2>
                        <p className="text-lg mb-8">Menelaah kembali perjalanan dan pembelajaran dalam mewujudkan pendidikan berkualitas</p>
                        <button className="w-50 bg-blue-500 px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-600 transition duration-300">Lihat Selengkapnya</button>
                    </div>
                </section>
                <section className="mx-20 py-30">
                    <h1 className="font-bold text-3xl">Refleksi Pengalaman Proses Design Thinking dan Tujuan Global UN</h1>
                    <div className="mt-10">
                        {/* Question 1 */}
                        <div className="gap-2">
                            <h2 className="text-lg font-semibold">1. Mengapa SDGs PBB relevan dengan inovator, penemu, dan desainer abad ke-21?</h2>
                            <div className="flex flex-row gap-5 mt-3">
                                <img src="/images/icons/arrow-answer.png" alt="" className="w-5 h-5" />
                                <p className="text-justify">SDGs PBB sangat relevan bagi inovator, penemu, dan desainer abad ke-21 karena SDGs berperan sebagai sebuah kompas dalam menghadapi tantangan nyata yang sedang terjadi saat ini. Dalam abad ke-21, sebuah inovasi tidak dapat dinilai dari tingkat kecanggihan teknologi yang digunakan, melainkan dari dampak nyata yang dapat dirasakan oleh masyarakat. SDGs dapat memberikan arah kepada para inovator dalam merancang sebuah produk yang inklusif, berkelanjutan, dan bertanggung jawab. Dengan menyelaraskan ide dengan poin yang terdapat di SDGs, inovator dapat memastikan bahwa produk yang sedang dikembangkannya dapat menjadi jalan keluar bagi permasalahan yang sedang dialami oleh masyarakat.</p>
                            </div>
                        </div>
                        {/* Question 2 */}
                        <div className="gap-2 mt-10">
                            <h2 className="text-lg font-semibold">2. Strategi mana yang menurut Anda paling membantu dan mengapa?</h2>
                            <div className="flex flex-row gap-5 mt-3">
                                <img src="/images/icons/arrow-answer.png" alt="" className="w-5 h-5" />
                                <p className="text-justify">Strategi yang menurut saya paling membantu adalah Matriks Riset dengan Empati, Lean Canvas, dan Starburst. Hal ini dikarenakan ketiga strategi tersebut sangat membantu dalam mengidentifikasi dan memetakan permasalahan yang ada, target pengguna dari produk yang akan dikembangkan sehingga produk yang dikembangkan dapat menjadi solusi untuk mengatasi permasalahan tersebut.</p>
                            </div>
                        </div>
                        {/* Question 3 */}
                        <div className="gap-2 mt-10">
                            <h2 className="text-lg font-semibold">3. Anda diminta untuk membangun prototipe atau mengusulkan solusi dan kemudian mengujinya dengan pengguna/rekan kerja/orang penting. Mengapa menerima umpan balik (feedback) begitu penting dalam desain? Siapa yang akan Anda minta lebih banyak umpan balik? Mengapa Anda memilih orang-orang ini?</h2>
                            <div className="flex flex-row gap-5 mt-3">
                                <img src="/images/icons/arrow-answer.png" alt="" className="w-5 h-5" />
                                <p className="text-justify">Umpan balik merupakan salah satu aspek krusial dalam pengembangan suatu inovasi baru. Dengan adanya umpan balik, pengembang dapat mengevaluasi produk yang sedang dikembangkannya sehingga produknya sesuai untuk digunakan dalam mengatasi permasalahan yang terjadi. Untuk pengembangan platform EduBridge, saya akan meminta umpan balik kepada para guru dan juga siswa. Umpan balik yang diberikan oleh para guru dapat membantu meningkatkan kualitas materi yang diberikan oleh platform dan menjamin kesesuaiannya dengan kurikulum nasional. Semetara itu umpan balik yang diberikan oleh para siswa dapat membantu memberikan pengalaman mereka dalam menggunakan platform tersebut dan menilai tingkat kemudahan dalam memahami materi yang disajikan oleh platform.</p>
                            </div>
                        </div>
                        {/* Question 4 */}
                        <div className="gap-2 mt-10">
                            <h2 className="text-lg font-semibold">4. Tahap Design Thinking mana yang menurut Anda paling menantang? Mengapa? Tahap mana yang menurut Anda paling berkesan? Mengapa?</h2>
                            <div className="flex flex-row gap-5 mt-3">
                                <img src="/images/icons/arrow-answer.png" alt="" className="w-5 h-5" />
                                <p className="text-justify">Menurut saya, tahap design thinking yang paling menantang dan paling berkesan adalah tahap prototype. Tahap ini adalah tahapan yang paling menantang dalam design thinking karena kita akan mengimplementasikan ide berdasarkan hasil riset yang telah kita lakukan pada tahap sebelumnya. Tahap ini juga menjadi tahap yang paling berkesan karena hasil implementasi tersebut memiliki peluang untuk bermanfaat bagi masyarakat untuk mengatasi permasalahan yang sedang mereka hadapi saat ini.</p>
                            </div>
                        </div>
                        {/* Question 5 */}
                        <div className="gap-2 mt-10">
                            <h2 className="text-lg font-semibold">5. Apa keterampilan/ide/konsep paling signifikan yang Anda peroleh semester ini? Jelaskan mengapa!</h2>
                            <div className="flex flex-row gap-5 mt-3">
                                <img src="/images/icons/arrow-answer.png" alt="" className="w-5 h-5" />
                                <p className="text-justify">Pada semester ini, saya memperoleh beberapa konsep, seperti maker mindset dan design thinking. Konsep maker mindset mengajarkan kita untuk tidak hanya menjadi konsumen pasif, tetapi juga menjadi seorang inventor dengan berani bereksperimen dan trial error dari hasil eksperimen tersebut. Sementara konsep design thinking mengajarkan kita untuk mengembangkan sebuah produk melalui berbagai tahap-tahap yang terstruktur dengan mengutamakan pendekatan kepada masyarakat. Kedua konsep ini dapat diimplementasikan dalam kehidupan sehari-hari sehingga dapat membantu mempermudah dan mengatasi permasalahan yang ada.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Reflection;