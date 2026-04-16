import Footer from "../components/footer";
import Header from "../components/header";
import { Link, Element, animateScroll as scroll } from "react-scroll";

function Homepage() {
    return(
        <>
            <Header/>
            <main>
                <section className="flex flex-col items-center justify-center w-full h-[550px] bg-[url('/images/hero.jpg')] bg-[length:100%_100%] bg-cover bg-center bg-no-repeat">
                    <div className="w-full h-full bg-black/50 text-white p-8 flex flex-col justify-center items-center">
                        <h2 className="text-6xl font-bold mb-4 text-center">Transformasi Pendidikan Indonesia Melalui Data dan Aksi Nyata.</h2>
                        <p className="text-lg mb-8">Memantau perkembangan SDG 4 secara transparan untuk memastikan standar kualitas pendidikan yang berkelanjutan.</p>
                        <Link to="tentang-sdgs" smooth={true} duration={500}>
                            <button className="w-[200px] bg-blue-500 px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-600 transition duration-300">Lihat Selengkapnya</button>
                        </Link>
                    </div>
                </section>
                {/* Section Pengantar Singkat */}
                <section id="tentang-sdgs" className="pt-35 mx-30 mb-15 items-center justify-center">
                    <div className="flex flex-row">
                        <img src="/images/SDGs.png" alt="" className="w-65 h-auto"/>
                        <div className="flex flex-col justify-center ml-10 space-y-6">
                            <h1 className="text-4xl font-semibold">Apa itu SDGs?</h1>
                            <p className="w-[750px] max-w-[850px] text-justify">Sustainable Development Goals (SDGs) merupakan agenda global yang digagas oleh PBB pada tahun 2015 dan diikuti oleh 193 negara. SDG merupakan program lanjutan dari Millenium Development Goals (MDG) yang telah dilaksanakan pada tahun 2000 hingga tahun 2015. Agenda ini memiliki 17 tujuan utama yang ditargetkan akan dicapai pada tahun 2030. Seluruh tujuan utama tersebut mencakup berbagai bidang, seperti bidang sosial, ekonomi, dan lingkungan. Ini merupakan komitmen dunia dalam mengatasi berbagai permasalahan yang terdapat dalam berbagai bidang, seperti mengentaskan kemiskinan dan meningkatkan kesejahteraan semua orang.</p>
                        </div>
                    </div>
                    <div className="flex flex-col mt-20 items-center justify-center">
                        <h2 className="text-2xl font-semibold underline">17 Tujuan SDGs</h2>
                        <div className="grid grid-cols-6 gap-4 mt-6">
                            {/* poin 1 */}
                            <div className="relative group flex flex-row w-30 h-30 cursor-pointer">
                                <img src="/images/sdgs/01.png" className="relative z-20 cursor-pointer hover:scale-110 transition duration-700 ease-in-out"/>

                                <div className="absolute top-0 left-0 w-[200px] h-full scale-110 bg-[#E5243B] py-4 px-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-[65%] transition-all duration-500 ease-in-out z-0 group-hover:z-30 pointer-events-none">
                                    <p className="text-white font-bold text-sm">
                                        Tanpa Kemiskinan <br/>
                                        <span className="text-xs font-normal">Mengakhiri kemiskinan dalam segala bentuk dan di mana pun di seluruh dunia.</span>
                                    </p>
                                </div>
                            </div>

                            {/* poin 2 */}
                            <div className="relative group flex flex-row w-30 h-30 cursor-pointer">
                                <img src="/images/sdgs/02.png" className="relative z-20 cursor-pointer hover:scale-110 transition duration-700 ease-in-out"/>

                                <div className="absolute top-0 left-0 w-[200px] h-full scale-110 bg-[#DDA63A] py-4 px-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-[65%] transition-all duration-500 ease-in-out z-10 group-hover:z-30 pointer-events-none">
                                    <p className="text-white font-bold text-sm">
                                        Tanpa Kelaparan <br/>
                                        <span className="text-xs font-normal">Mengakhiri kelaparan, mencapai ketahanan pangan, dan meningkatkan nutrisi.</span>
                                    </p>
                                </div>
                            </div>
                            {/* poin 3 */}
                            <div className="relative group flex flex-row w-30 h-30 cursor-pointer">
                                <img src="/images/sdgs/03.png" className="relative z-20 cursor-pointer hover:scale-110 transition duration-700 ease-in-out"/>

                                <div className="absolute top-0 left-0 w-[225px] h-full scale-110 bg-[#4C9F38] py-2 px-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-[60%] transition-all duration-500 ease-in-out z-10 group-hover:z-30 pointer-events-none">
                                    <p className="text-white font-bold text-sm">
                                        Kehidupan Sehat & Sejahtera <br/>
                                        <span className="text-xs font-normal">Menjamin kehidupan yang sehat dan meningkatkan kesejahteraan bagi semua usia.</span>
                                    </p>
                                </div>
                            </div>
                            {/* poin 4 */}
                            <div className="relative group flex flex-row w-30 h-30 cursor-pointer">
                                <img src="/images/sdgs/04.png" className="relative z-20 cursor-pointer hover:scale-110 transition duration-700 ease-in-out"/>

                                <div className="absolute top-0 left-0 w-[250px] h-full scale-110 bg-[#C5192D] py-4 px-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-[55%] transition-all duration-500 ease-in-out z-10 group-hover:z-30 pointer-events-none">
                                    <p className="text-white font-bold text-sm">
                                        Pendidikan Berkualitas <br/>
                                        <span className="text-xs font-normal">Menjamin pendidikan inklusif, merata, dan meningkatkan kesempatan belajar sepanjang hayat</span>
                                    </p>
                                </div>
                            </div>
                            {/* poin 5 */}
                            <div className="relative group flex flex-row w-30 h-30 cursor-pointer">
                                <img src="/images/sdgs/05.png" className="relative z-20 cursor-pointer hover:scale-110 transition duration-700 ease-in-out"/>

                                <div className="absolute top-0 left-0 w-[200px] h-full scale-110 bg-[#FF3A21] py-2 px-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-[65%] transition-all duration-500 ease-in-out z-10 group-hover:z-30 pointer-events-none">
                                    <p className="text-white font-bold text-sm">
                                        Kesetaraan Gender <br/>
                                        <span className="text-xs font-normal">Mencapai kesetaraan gender serta memberdayakan kaum perempuan dan anak perempuan.</span>
                                    </p>
                                </div>
                            </div>
                            {/* poin 6 */}
                            <div className="relative group flex flex-row w-30 h-30 cursor-pointer">
                                <img src="/images/sdgs/06.png" className="relative z-20 cursor-pointer hover:scale-110 transition duration-700 ease-in-out"/>

                                <div className="absolute top-0 left-3 w-[200px] h-full scale-110 bg-[#26BDE2] py-4 px-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-[60%] transition-all duration-500 ease-in-out z-10 group-hover:z-30 pointer-events-none">
                                    <p className="text-white font-bold text-sm">
                                        Air Bersih & Sanitasi <br/>
                                        <span className="text-xs font-normal">Menjamin ketersediaan dan pengelolaan air bersih serta sanitasi yang berkelanjutan.</span>
                                    </p>
                                </div>
                            </div>
                            {/* poin 7 */}
                            <div className="relative group flex flex-row w-30 h-30 cursor-pointer">
                                <img src="/images/sdgs/07.png" className="relative z-20 cursor-pointer hover:scale-110 transition duration-700 ease-in-out"/>

                                <div className="absolute top-0 left-0 w-[225px] h-full scale-110 bg-[#FCC30B] py-4 px-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-[60%] transition-all duration-500 ease-in-out z-10 group-hover:z-30 pointer-events-none">
                                    <p className="text-white font-bold text-sm">
                                        Energi Bersih & Terjangkau <br/>
                                        <span className="text-xs font-normal">Menjamin akses energi yang terjangkau, andal, berkelanjutan, dan modern.</span>
                                    </p>
                                </div>
                            </div>

                            {/* poin 8 */}
                            <div className="relative group flex flex-row w-30 h-30 cursor-pointer">
                                <img src="/images/sdgs/08.png" className="relative z-20 cursor-pointer hover:scale-110 transition duration-700 ease-in-out"/>

                                <div className="absolute top-0 left-0 w-[250px] h-full scale-110 bg-[#A21942] py-4 px-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-[55%] transition-all duration-500 ease-in-out z-10 group-hover:z-30 pointer-events-none">
                                    <p className="text-white font-bold text-sm">
                                        Pekerjaan Layak & Ekonomi<br/>
                                        <span className="text-xs font-normal">Mendorong pertumbuhan ekonomi inklusif dan pekerjaan layak bagi semua orang.</span>
                                    </p>
                                </div>
                            </div>
                            {/* poin 9 */}
                            <div className="relative group flex flex-row w-30 h-30 cursor-pointer">
                                <img src="/images/sdgs/09.png" className="relative z-20 cursor-pointer hover:scale-110 transition duration-700 ease-in-out"/>

                                <div className="absolute top-0 left-0 w-[250px] h-full scale-110 bg-[#FD6925] py-4 px-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-[55%] transition-all duration-500 ease-in-out z-10 group-hover:z-30 pointer-events-none">
                                    <p className="text-white font-bold text-sm">
                                        Industri, Inovasi & Infrastruktur<br/>
                                        <span className="text-xs font-normal">Membangun infrastruktur tangguh, mendukung industri inklusif, dan mendorong inovasi.</span>
                                    </p>
                                </div>
                            </div>
                            {/* poin 10 */}
                            <div className="relative group flex flex-row w-30 h-30 cursor-pointer">
                                <img src="/images/sdgs/10.png" className="relative z-20 cursor-pointer hover:scale-110 transition duration-700 ease-in-out"/>

                                <div className="absolute top-0 left-0 w-[250px] h-full scale-110 bg-[#DD1367] py-4 px-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-[55%] transition-all duration-500 ease-in-out z-10 group-hover:z-30 pointer-events-none">
                                    <p className="text-white font-bold text-sm">
                                        Berkurangnya Kesenjangan <br/>
                                        <span className="text-xs font-normal">Mengurangi kesenjangan pendapatan dan peluang di dalam dan antar negara.</span>
                                    </p>
                                </div>
                            </div>
                            {/* poin 11 */}
                            <div className="relative group flex flex-row w-30 h-30 cursor-pointer">
                                <img src="/images/sdgs/11.png" className="relative z-20 cursor-pointer hover:scale-110 transition duration-700 ease-in-out"/>

                                <div className="absolute top-0 left-0 w-[250px] h-full scale-110 bg-[#FD9D24] py-2 px-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-[55%] transition-all duration-500 ease-in-out z-10 group-hover:z-30 pointer-events-none">
                                    <p className="text-white font-bold text-sm">
                                        Kota & Pemukiman Berkelanjutan <br/>
                                        <span className="text-xs font-normal">Menjadikan kota dan pemukiman manusia inklusif, aman, tangguh, dan berkelanjutan.</span>
                                    </p>
                                </div>
                            </div>
                            {/* poin 12 */}
                            <div className="relative group flex flex-row w-30 h-30 cursor-pointer">
                                <img src="/images/sdgs/12.png" className="relative z-20 cursor-pointer hover:scale-110 transition duration-700 ease-in-out"/>

                                <div className="absolute top-0 left-3 w-[200px] h-full scale-110 bg-[#BF8B2E] py-2 px-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-[60%] transition-all duration-500 ease-in-out z-10 group-hover:z-30 pointer-events-none">
                                    <p className="text-white font-bold text-sm">
                                        Konsumsi & Produksi Bertanggung Jawab <br/>
                                        <span className="text-xs font-normal">Menjamin pola konsumsi dan produksi yang berkelanjutan serta efisien.</span>
                                    </p>
                                </div>
                            </div>

                            {/* poin 13 */}
                            <div className="relative group flex flex-row w-30 h-30 cursor-pointer">
                                <img src="/images/sdgs/13.png" className="relative z-20 cursor-pointer hover:scale-110 transition duration-700 ease-in-out"/>

                                <div className="absolute top-0 left-0 w-[200px] h-full scale-110 bg-[#3F7E44] py-3 px-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-[65%] transition-all duration-500 ease-in-out z-10 group-hover:z-30 pointer-events-none">
                                    <p className="text-white font-bold text-sm">
                                        Penanganan Perubahan Iklim <br/>
                                        <span className="text-xs font-normal">Mengambil tindakan cepat untuk mengatasi perubahan iklim dan dampaknya.</span>
                                    </p>
                                </div>
                            </div>

                            {/* poin 14 */}
                            <div className="relative group flex flex-row w-30 h-30 cursor-pointer">
                                <img src="/images/sdgs/14.png" className="relative z-20 cursor-pointer hover:scale-110 transition duration-700 ease-in-out"/>

                                <div className="absolute top-0 left-0 w-[200px] h-full scale-110 bg-[#0A97D9] py-3 px-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-[65%] transition-all duration-500 ease-in-out z-10 group-hover:z-30 pointer-events-none">
                                    <p className="text-white font-bold text-sm">
                                        Ekosistem Laut <br/>
                                        <span className="text-xs font-normal">Melestarikan dan menjaga keberlanjutan sumber daya laut untuk pembangunan.</span>
                                    </p>
                                </div>
                            </div>
                            {/* poin 15 */}
                            <div className="relative group flex flex-row w-30 h-30 cursor-pointer">
                                <img src="/images/sdgs/15.png" className="relative z-20 cursor-pointer hover:scale-110 transition duration-700 ease-in-out"/>

                                <div className="absolute top-0 left-0 w-[225px] h-full scale-110 bg-[#56C02B] py-3 px-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-[55%] transition-all duration-500 ease-in-out z-10 group-hover:z-30 pointer-events-none">
                                    <p className="text-white font-bold text-sm">
                                        Ekosistem Daratan <br/>
                                        <span className="text-xs font-normal">Melindungi hutan, menghentikan degradasi lahan, dan mencegah hilangnya keanekaragaman hayati.</span>
                                    </p>
                                </div>
                            </div>
                            {/* poin 16 */}
                            <div className="relative group flex flex-row w-30 h-30 cursor-pointer">
                                <img src="/images/sdgs/16.png" className="relative z-20 cursor-pointer hover:scale-110 transition duration-700 ease-in-out"/>

                                <div className="absolute top-0 left-0 w-[225px] h-full scale-110 bg-[#00689D] py-2 px-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-[60%] transition-all duration-500 ease-in-out z-10 group-hover:z-30 pointer-events-none">
                                    <p className="text-white font-bold text-sm">
                                        Perdamaian, Keadilan & Kelembagaan <br/>
                                        <span className="text-xs font-normal">Mendukung masyarakat damai, akses keadilan, dan membangun lembaga yang akuntabel.</span>
                                    </p>
                                </div>
                            </div>
                            {/* poin 17 */}
                            <div className="relative group flex flex-row w-30 h-30 cursor-pointer">
                                <img src="/images/sdgs/17.png" className="relative z-20 cursor-pointer hover:scale-110 transition duration-700 ease-in-out"/>

                                <div className="absolute top-0 left-0 w-[250px] h-full scale-110 bg-[#19486A] py-2 px-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-[55%] transition-all duration-500 ease-in-out z-10 group-hover:z-30 pointer-events-none">
                                    <p className="text-white font-bold text-sm">
                                        Kemitraan untuk Mencapai Tujuan <br/>
                                        <span className="text-xs font-normal">Memperkuat kemitraan global dan sarana implementasi untuk mencapai tujuan bersama.</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Section Target */}
                <section className="mx-30 mt-25 mb-25 space-y-6">
                    <div className="flex flex-row space-x-15">
                        <img src="/images/target.jpeg" alt="" className="w-100" />
                        <div className="flex flex-col space-y-10">
                            <h2 className="text-4xl font-semibold">Apa target yang perlu dicapai?</h2>
                            <p className="text-2xl">Mewujudkan pendidikan dasar hingga menengah yang inklusif dan berkualitas</p>
                        </div>
                    </div>
                    {/* Fakta-fakta */}
                    <div className="flex flex-col mt-15 gap-10">
                        <h2 className="text-2xl font-semibold">Apa saja fakta-fakta terkait target tersebut? </h2>
                        <div className="flex flex-col gap-5">
                            {/* Fakta 1 */}
                            <div className="px-10 flex flex-row items-center justify-center gap-10 bg-gradient-to-b from-[#D62B40] to-[#941323] text-white p-4 rounded-lg mb-4 mr-auto shadow-xl/50">
                                <h1 className="text-5xl font-extrabold" >01</h1>
                                <div className="flex flex-col">
                                    <p className="w-[500px] text-sm text-justify">Jika dibanding dengan negara maju yang lain, kualitas pembelajaran di Indonesia terkategori masih rendah, sebab belum mencapai mutu yang optimal, serta tujuan pendidikan sebelumnya pula belum tercapai.</p>
                                    <b className="ml-auto opacity-75">(Kadi et al., 2017)</b>
                                </div>
                            </div>
                            {/* Fakta 2 */}
                            <div className="px-10 flex flex-row items-center justify-center gap-10 bg-gradient-to-b from-[#D62B40] to-[#941323] text-white p-4 rounded-lg mb-4 ml-auto shadow-xl/50">
                                <h1 className="text-5xl font-extrabold" >02</h1>
                                <div className="flex flex-col gap-4">
                                    <p className="w-[600px] text-sm text-justify">Dalam mewujudkan pendidikan yang bermutu, Kementerian Pendidikan Dasar dan Menengah menetapkan 4 indikator dari pendidikan bermutu, yakni sarana dan prasarana yang memadai, pendidik dan tenaga kependidikan yang kompeten dan sejahtera, lingkungan sosial-budaya yang mendukung, dan pembelajaran yang adaptif serta bermakna.</p>
                                    <b className="ml-auto opacity-75">(Yunandra, 2024)</b> 
                                </div>
                            </div>
                            {/* Fakta 3 */}
                            <div className="px-10 flex flex-row items-center justify-center gap-10 bg-gradient-to-b from-[#D62B40] to-[#941323] text-white p-4 rounded-lg mb-4 mr-auto shadow-xl/50">
                                <h1 className="text-5xl font-extrabold" >03</h1>
                                <div className="flex flex-col gap-4">
                                    <p className="w-[600px] text-sm text-justify">PBB mendukung pendidikan bermutu di Indonesia yang tercermin melalui program kolaborasi dengan UNESCO, UNICEF dan UNDP dimana UNESCO mendukung kebijakan pendidikan Indonesia, seperti kurikulum, pelatihan guru dan kepala sekolah, dan literasi. UNICEF berperan besar dalam membantu pemerintah dalam menyusun kebijakan yang inklusif, dan UNDP berperan dalam penguatan sistem pendidikan berbasis data dan inklusivitas serta bekerja sama dalam menyediakan akses pada pendidikan digital dan pelatihan vokasi untuk para remaja.</p>
                                    <b className="ml-auto opacity-75">(Nurahman, 2025)</b>
                                </div>
                            </div>
                            {/* Fakta 4 */}
                            <div className="px-10 flex flex-row items-center justify-center gap-10 bg-gradient-to-b from-[#D62B40] to-[#941323] text-white p-4 rounded-lg mb-4 ml-auto shadow-xl/50">
                                <h1 className="text-5xl font-extrabold" >04</h1>
                                <div className="flex flex-col gap-4">
                                    <p className="w-[600px] text-sm text-justify">Pemerintah Provinsi (Pemprov) DKI Jakarta terus menunjukkan komitmennya dalam meningkatkan akses pendidikan bagi masyarakat kurang mampu melalui program Kartu Jakarta Pintar (KJP) Plus. Pada tahap pertama tahun 2025, jumlah penerima manfaat meningkat signifikan menjadi 707.622 siswa, dibandingkan tahap kedua tahun 2024 yang berjumlah 523.622 siswa. Seiring dengan peningkatan jumlah penerima, anggaran KJP Plus juga mengalami kenaikan dari Rp2,5 triliun pada tahun 2024 menjadi Rp3,2 triliun pada tahun 2025.</p>
                                    <b className="ml-auto opacity-75">(Tobing et al., 2025)</b>
                                </div>
                            </div>
                            {/* Fakta 5 */}
                            <div className="px-10 flex flex-row items-center justify-center gap-10 bg-gradient-to-b from-[#D62B40] to-[#941323] text-white p-4 rounded-lg mb-4 mr-auto shadow-xl/50">
                                <h1 className="text-5xl font-extrabold" >05</h1>
                                <div className="flex flex-col gap-4">
                                    <p className="w-[600px] text-sm text-justify">Kementerian Pendidikan Dasar dan Menengah (Kemendikdasmen) mencatat pencapaian signifikan dalam implementasi program prioritas Pendidikan Bermutu untuk Semua sepanjang periode Oktober 2024 hingga September 2025. Dengan alokasi anggaran sebesar Rp 181,72 triliun untuk enam program prioritas, pemerintah membuktikan komitmennya dalam memastikan layanan pendidikan yang lebih merata, inklusif, dan bermutu bagi seluruh anak Indonesia.</p>
                                    <b className="ml-auto opacity-75">(Westiana, 2025)</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}

export default Homepage;