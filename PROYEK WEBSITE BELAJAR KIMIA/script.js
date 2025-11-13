document.addEventListener('DOMContentLoaded', () => {

    // === BAGIAN 1: DATA FUN FACT ===
    const funFactsData = [
        {
            id: 'takut',
            title: 'Biokimia Rasa Takut',
            image: 'images/biokimia-rasa-takut.jpg',
            sneakPeek: 'Membedah sains di balik respons "lawan atau lari" dan apa yang terjadi di otak Anda...',
            content: `
                <h3>Membedah Sains di Balik Rasa Takut</h3>
                <p>Rasa takut adalah respons alami dan penting untuk bertahan hidup. Saat kita mengantisipasi bahaya, otak dan tubuh kita memicu serangkaian reaksi biokimia yang kompleks.</p>
                <h3>Apa Penyebab Takut?</h3>
                <p>Rasa takut muncul ketika otak mengantisipasi adanya bahaya atau ancaman. Proses ini dimulai ketika Thalamus menerima rangsangan eksternal (seperti suara atau pemandangan) dan meneruskannya ke Amygdala. Amygdala adalah pusat emosi otak. Sementara itu, Hippocampus (penyimpan memori) dan Korteks Prefrontal (pengambil keputusan) membantu menafsirkan ancaman tersebut dan memberikan konteks.</p>
                <h3>Bagian Otak yang Terlibat:</h3>
                <ul>
                    <li><b>Amygdala:</b> Memproses emosi dan memicu respons takut.</li>
                    <li><b>Hypothalamus:</b> Mengaktifkan respons "lawan atau lari" (fight-or-flight).</li>
                    <li><b>Periaqueductal Gray (PAG):</b> Mengontrol respons perilaku seperti membeku, melompat, atau lari.</li>
                </ul>
                <h3>Biokimia Rasa Takut (Neurotransmitter):</h3>
                <p>Sejumlah neurotransmitter terlibat dalam pemrosesan rasa takut di otak:</p>
                <ul>
                    <li><b>Glutamat:</b> Neurotransmitter rangsang utama yang memainkan peran kunci.</li>
                    <li><b>Serotonin:</b> Membantu mengatur suasana hati dan kecemasan.</li>
                    <li><b>GABA (Gamma-aminobutyric acid):</b> Neurotransmitter penghambat utama yang membantu menenangkan otak.</li>
                </ul>
                <h3>Hormon Stres (Respon "Lawan atau Lari"):</h3>
                <p>Ketika Hypothalamus mendeteksi ancaman, ia memberi sinyal pada kelenjar adrenal untuk melepaskan hormon stres ke dalam darah:</p>
                <ul>
                    <li><b>Adrenaline (Epinefrin) & Noradrenaline (Norepinefrin):</b> Hormon-hormon ini secara instan meningkatkan detak jantung, tekanan darah, laju pernapasan, dan gula darah. Ini mempersiapkan tubuh untuk reaksi fisik yang cepat.</li>
                    <li><b>Kortisol:</b> Hormon stres yang pelepasannya lebih lambat, membantu tubuh tetap waspada dalam jangka waktu yang lebih lama.</li>
                </ul>
            `
        },
        {
            id: 'logam',
            title: 'Logam Kritis dalam Ponsel Pintar',
            image: 'images/logam-kritis-smartphone.jpg',
            sneakPeek: 'Komponen kimia di balik teknologi ponsel pintar Anda, dari layar sentuh hingga baterai...',
            content: `
                <h3>Komponen Kimia di Balik Teknologi Ponsel Pintar</h3>
                <p>Ponsel pintar modern adalah keajaiban teknologi yang bergantung pada berbagai logam dan elemen langka. Ketersediaan banyak dari logam ini terbatas atau berisiko secara geopolitik, sehingga mereka disebut sebagai "logam kritis".</p>
                <h3>Layar Sentuh (Touch Screen):</h3>
                <p>Menggunakan lapisan tipis <b>Indium</b> (biasanya dalam bentuk Indium Tin Oxide atau ITO). Bahan ini unik karena sangat konduktif (dapat menghantarkan listrik) namun juga transparan, memungkinkan jari Anda berinteraksi dengan layar.</p>
                <h3>Layar (Display):</h3>
                <p>Untuk menghasilkan warna-warna cerah, layar kristal cair (LCD) menggunakan beberapa Unsur Tanah Jarang (Lanthanida), termasuk: <b>Lanthanum (La)</b>, <b>Praseodymium (Pr)</b>, <b>Europium (Eu)</b>, <b>Gadolinium (Gd)</b>, <b>Terbium (Tb)</b>, dan <b>Dysprosium (Dy)</b>.</p>
                <h3>Mikrofon, Speaker, dan Unit Getar:</h3>
                <p>Komponen ini bergantung pada magnet kuat untuk mengubah energi listrik menjadi energi suara (getaran).</p>
                <ul>
                    <li><b>Nikel (Ni):</b> Digunakan dalam diafragma mikrofon.</li>
                    <li><b>Unsur Tanah Jarang:</b> Magnet yang kuat dibuat menggunakan <b>Neodymium (Nd)</b>, <b>Praseodymium (Pr)</b>, <b>Gadolinium (Gd)</b>, dan <b>Dysprosium (Dy)</b>.</li>
                </ul>
                <h3>Baterai:</h3>
                <p>Sebagian besar ponsel pintar menggunakan baterai lithium-ion yang dapat diisi ulang. Komponen utamanya adalah <b>Lithium (Li)</b> dan <b>Kobalt (Co)</b>.</p>
                <h3>Elektronik (Papan Sirkit):</h3>
                <p>Papan sirkuit utama adalah rumah bagi otak ponsel dan memerlukan:</p>
                <ul>
                    <li><b>Nikel (Ni):</b> Untuk berbagai koneksi.</li>
                    <li><b>Galium (Ga):</b> Digunakan dalam semikonduktor untuk pemrosesan sinyal.</li>
                    <li><b>Tantalum (Ta):</b> Sangat penting untuk membuat kapasitor mikro berkualitas tinggi yang menyimpan muatan listrik.</li>
                </ul>
                <h3>Casing (Kerangka):</h3>
                <p>Casing sering kali terbuat dari paduan <b>Magnesium (Mg)</b> karena ringan namun kuat. <b>Nikel (Ni)</b> juga dapat digunakan untuk mengurangi interferensi elektromagnetik.</p>
            `
        },
        {
            id: 'vitamind',
            title: 'Sintesis Vitamin D di Kulit',
            image: 'images/sintesis-vitamin-d.jpg',
            sneakPeek: 'Bagaimana sinar matahari diubah oleh tubuh Anda menjadi nutrisi penting...',
            content: `
                <h3>Bagaimana Sinar Matahari Menghasilkan Vitamin D di Tubuh Kita</h3>
                <p>Vitamin D adalah nutrisi penting yang sering disebut "vitamin sinar matahari". Ini karena tubuh kita dapat memproduksinya sendiri ketika kulit kita terpapar sinar matahari melalui proses sintesis kimia yang menarik.</p>
                <h3>Bahan Awal: 7-dehydrocholesterol</h3>
                <p>Di dalam kulit kita terdapat senyawa prekursor yang disebut <b>7-dehydrocholesterol</b>.</p>
                <h3>Langkah 1: Paparan Sinar UV</h3>
                <p>Ketika kulit terpapar sinar matahari, radiasi ultraviolet B (UVB) dengan panjang gelombang antara 290-315 nm mengenai molekul 7-dehydrocholesterol. Energi dari sinar UVB ini memicu reaksi fotokimia yang memutus salah satu ikatan kimia dalam molekul tersebut, mengubahnya menjadi <b>Previtamin D₃</b>.</p>
                <h3>Langkah 2: Isomerisasi</h3>
                <p>Previtamin D₃ yang baru terbentuk kemudian mengalami reaksi penataan ulang struktural yang disebut isomerisasi (khususnya, isomerisasi termal). Reaksi ini mengubahnya menjadi <b>Vitamin D₃</b> (juga dikenal sebagai cholecalciferol).</p>
                <h3>Langkah 3: Aktivasi di Hati dan Ginjal</h3>
                <p>Vitamin D₃ yang terbentuk di kulit (atau yang kita dapatkan dari makanan) sebenarnya belum aktif secara biologis. Untuk menjadi aktif, ia harus melalui dua langkah metabolisme lagi:</p>
                <ol>
                    <li>Pertama, ia diangkut ke <b>hati (liver)</b> untuk diubah menjadi <b>calcidiol</b>.</li>
                    <li>Kemudian, ia diangkut ke <b>ginjal (kidneys)</b> untuk diubah menjadi <b>calcitriol</b>, bentuk aktif dari vitamin D yang dapat digunakan oleh tubuh untuk mengatur kalsium dan kesehatan tulang.</li>
                </ol>
            `
        },
        {
            id: 'petir',
            title: 'Sains di Balik Badai Petir',
            image: 'images/sains-badai-petir.jpg',
            sneakPeek: 'Memahami fisika muatan listrik dan kimia pembersih udara alami...',
            content: `
                <h3>Memahami Fisika dan Kimia Petir dan Guntur</h3>
                <p>Badai petir adalah fenomena cuaca yang menakjubkan yang melibatkan fisika muatan listrik dan kimia atmosfer.</p>
                <h3>Fisika Petir (Pemisahan Muatan):</h3>
                <p>Di dalam awan badai (kumulonimbus), arus udara ke atas (updraft) membawa tetesan air kecil dan kristal es ke bagian atas awan.</p>
                <p>Saat bertabrakan, kristal es yang lebih ringan cenderung menjadi bermuatan positif dan tetap berada di atas awan.</p>
                <p>Butiran es yang lebih berat (disebut soft hail atau graupel) cenderung menjadi bermuatan negatif dan tenggelam ke dasar awan.</p>
                <p>Pemisahan muatan ini menciptakan perbedaan potensial listrik yang sangat besar. Bagian bawah awan yang negatif kemudian menginduksi muatan positif di permukaan tanah di bawahnya.</p>
                <p>Ketika perbedaan tegangan ini cukup besar untuk menembus resistansi udara, terjadilah pelepasan muatan listrik besar yang kita sebut <b>petir</b>.</p>
                <h3>Fisika Guntur (Suara):</h3>
                <p>Petir memiliki suhu yang sangat ekstrem, mencapai sekitar 30.000 °C (lebih panas dari permukaan matahari). Panas yang hebat ini menyebabkan udara di sekitar saluran petir memuai dengan sangat cepat (lebih cepat dari kecepatan suara). Ekspansi dan kontraksi udara yang tiba-tiba ini menciptakan gelombang kejut sonik yang kita dengar sebagai <b>guntur</b>.</p>
                <h3>Kimia Petir (Penyubur Tanah dan Pembersih Udara):</h3>
                <p>Energi petir yang sangat besar mampu memicu reaksi kimia di atmosfer:</p>
                <ul>
                    <li><b>Produksi Ozon:</b> Energi listrik memecah molekul oksigen diatomik (O<sub>2</sub>) menjadi atom oksigen tunggal. Atom-atom ini kemudian bereaksi dengan molekul O<sub>2</sub> lainnya untuk membentuk ozon (O<sub>3</sub>), yang memiliki bau "bersih" khas yang sering tercium sebelum hujan.</li>
                    <li><b>Produksi Nitrat:</b> Atmosfer kita sebagian besar terdiri dari gas nitrogen (N<sub>2</sub>) yang sangat stabil. Energi petir dapat memecah ikatan kuat N<sub>2</sub>, memungkinkannya bereaksi dengan oksigen (O<sub>2</sub>) membentuk nitrogen oksida. Nitrogen oksida ini larut dalam tetesan hujan dan jatuh ke tanah sebagai nitrat, yang merupakan bentuk pupuk alami penting yang dapat diserap oleh tanaman.</li>
                </ul>
            `
        },
        {
            id: 'buku',
            title: 'Kimia di Balik Aroma Buku',
            image: 'images/kimia-aroma-buku.jpg',
            sneakPeek: 'Mengapa buku baru dan buku lama memiliki bau yang khas? Ini semua tentang VOC...',
            content: `
                <h3>Mengapa Buku Baru dan Buku Lama Memiliki Bau yang Khas?</h3>
                <p>Aroma khas dari sebuah buku, baik baru maupun lama, adalah hasil dari campuran kompleks <b>Senyawa Organik Volatil (Volatile Organic Compounds/VOCs)</b>. Senyawa-senyawa ini mudah menguap ke udara dan sampai ke hidung kita.</p>
                <h3>Aroma Buku Baru:</h3>
                <p>Bau buku baru berasal dari bahan-bahan yang digunakan selama proses produksi dan manufaktur.</p>
                <ul>
                    <li><b>Perekat (Lem):</b> Lem penjilid modern seringkali berbahan dasar co-polimer seperti Vinil Asetat Etilena (Vinyl Acetate Ethylene), yang melepaskan VOC saat mengering.</li>
                    <li><b>Kertas dan Tinta:</b> Kertas itu sendiri diperlakukan dengan berbagai bahan kimia. Alkyl Ketene Dimer (AKD) digunakan untuk membuat kertas tahan air. Hidrogen Peroksida (H<sub>2</sub>O<sub>2</sub>) digunakan sebagai zat pemutih (bleaching agent). Selain itu, pelarut (solven) yang digunakan dalam tinta cetak juga berkontribusi pada aroma buku baru.</li>
                </ul>
                <h3>Aroma Buku Lama:</h3>
                <p>Bau buku lama yang sering digambarkan sebagai "manis" atau "apek" adalah aroma dari proses dekomposisi kimia. Seiring waktu, dua komponen utama kertas, yaitu <b>selulosa</b> dan <b>lignin</b>, perlahan-lahan terurai.</p>
                <ul>
                    <li><b>Degradasi Lignin:</b> Lignin (polimer kompleks yang memberi kekuatan pada kayu) terurai menjadi senyawa aromatik.</li>
                    <li><b>Degradasi Selulosa:</b> Selulosa (polimer gula) juga terurai melalui proses hidrolisis asam.</li>
                </ul>
                <h3>Senyawa Khas pada Buku Lama:</h3>
                <p>Proses degradasi ini melepaskan berbagai VOC yang menciptakan aroma khas buku lama, di antaranya:</p>
                <ul>
                    <li><b>Benzaldehida:</b> Memberikan aroma seperti kacang almond.</li>
                    <li><b>Vanillin:</b> Memberikan aroma seperti vanila (lignin terkait erat dengan vanillin).</li>
                    <li><b>Etil Benzena & Toluena:</b> Memberikan aroma manis.</li>
                    <li><b>2-Etil Heksanol:</b> Memberikan aroma sedikit seperti bunga.</li>
                </ul>
                <p>Singkatnya, tidak ada satu senyawa tunggal yang bertanggung jawab atas "bau buku". Itu adalah koktail kimia yang kompleks dari sisa-sisa produksi (untuk buku baru) atau produk dekomposisi (untuk buku lama).</p>
            `
        }
    ];


    // === BAGIAN 2: SELEKSI ELEMEN ===
    const loginPage = document.getElementById('login-page');
    const appPage = document.getElementById('app-page');
    const successAnimation = document.getElementById('success-animation');
    
    // Form Login
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginError = document.getElementById('login-error');

    // Navigasi & Tampilan
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    
    // Tombol Navigasi
    const navHome = document.getElementById('nav-home');
    const navNotes = document.getElementById('nav-notes');
    const navFunFact = document.getElementById('nav-fun-fact');
    const navGlossary = document.getElementById('nav-glossary'); 
    const navLogout = document.getElementById('nav-logout');

    // Tampilan Konten (Views)
    const allViews = document.querySelectorAll('.view');
    const homeView = document.getElementById('home-view');
    const notesView = document.getElementById('notes-view');
    const grignardView = document.getElementById('grignard-view');
    const phView = document.getElementById('ph-view');
    const funFactListView = document.getElementById('fun-fact-list-view');
    const funFactDetailView = document.getElementById('fun-fact-detail-view');
    const glossaryView = document.getElementById('glossary-view'); 

    // Link di dalam konten
    const linkGrignard = document.getElementById('link-grignard');
    const linkPh = document.getElementById('link-ph');
    const backButtons = document.querySelectorAll('.btn-back');

    // Kontainer Dinamis Fun Fact
    const funFactGrid = document.getElementById('fun-fact-grid');
    const funFactDetailHeader = document.getElementById('fun-fact-detail-header');
    const funFactDetailContent = document.getElementById('fun-fact-detail-content');

    
    // === BAGIAN 3: FUNGSI ===

    /**
     * Fungsi untuk berpindah tampilan (view)
     */
    function showView(viewId) {
        allViews.forEach(view => {
            view.classList.add('hidden');
        });

        const viewToShow = document.getElementById(viewId);
        if (viewToShow) {
            viewToShow.classList.remove('hidden');
        }

        sidebar.classList.remove('open');
        mainContent.scrollTop = 0;
        window.scrollTo(0, 0);
    }

    /**
     * Fungsi untuk menangani proses login
     */
    function handleLogin(event) {
        event.preventDefault(); 
        const username = usernameInput.value;
        const password = passwordInput.value;
        const validUsers = {
            'mita': 'mita19',
            'rahmat': 'rahmat19'
        };

        if (validUsers[username] && validUsers[username] === password) {
            loginError.textContent = '';
            successAnimation.classList.remove('hidden');

            setTimeout(() => {
                successAnimation.classList.add('hidden'); 
                loginPage.classList.remove('active');
                loginPage.classList.add('hidden');
                appPage.classList.remove('hidden');
                appPage.classList.add('active');
                showView('home-view');
            }, 2900); 

        } else {
            loginError.textContent = 'Username atau password salah!';
        }
    }

    /**
     * Fungsi untuk logout
     */
    function handleLogout() {
        appPage.classList.remove('active');
        appPage.classList.add('hidden');
        loginPage.classList.remove('hidden');
        loginPage.classList.add('active');
        usernameInput.value = '';
        passwordInput.value = '';
        loginError.textContent = '';
        sidebar.classList.remove('open');
    }

    /**
     * Fungsi untuk membuat Skala pH Interaktif
     */
    function generatePhScale() {
        const container = document.getElementById('ph-scale-container');
        if (!container) return; 
        
        container.innerHTML = ''; 

        // ▼▼▼ DIMODIFIKASI: Data 't' (text color) sudah dihapus ▼▼▼
        const phData = [
            { p: 0, c: '#d00000', ex: 'Asam Baterai' },
            { p: 1, c: '#e85d04', ex: 'Asam Lambung' },
            { p: 2, c: '#f48c06', ex: 'Jus Lemon, Cuka' },
            { p: 3, c: '#faa307', ex: 'Jus Jeruk, Soda' },
            { p: 4, c: '#ffba08', ex: 'Jus Tomat, Hujan Asam' },
            { p: 5, c: '#fcf300', ex: 'Kopi Hitam, Pisang' },
            { p: 6, c: '#9ef01a', ex: 'Susu, Air liur' },
            { p: 7, c: '#15803d', ex: 'Air Murni (Netral)' },
            { p: 8, c: '#04a777', ex: 'Air Laut, Telur' },
            { p: 9, c: '#00b4d8', ex: 'Baking Soda' },
            { p: 10, c: '#023e8a', ex: 'Susu Magnesium' },
            { p: 11, c: '#0c00a3', ex: 'Larutan Amonia' },
            { p: 12, c: '#4900a3', ex: 'Air Sabun' },
            { p: 13, c: '#7b2cbf', ex: 'Pemutih, Pembersih Oven' },
            { p: 14, c: '#a4133c', ex: 'Pembersih Saluran' }
        ];
        // ▲▲▲ DIMODIFIKASI ▲▲▲

        phData.forEach(item => {
            const phItem = document.createElement('div');
            
            phItem.className = 'ph-item'; // Class sekarang simpel
            phItem.style.backgroundColor = item.c;
            
            phItem.innerHTML = `
                <h4>pH ${item.p}</h4>
                <p>${item.ex}</p>
            `;
            
            container.appendChild(phItem);
        });
    }

    /**
     * Membuat kartu-kartu fun fact di halaman daftar
     */
    function generateFunFactCards() {
        if (!funFactGrid) return;
        funFactGrid.innerHTML = ''; 

        funFactsData.forEach((fact, index) => {
            const card = document.createElement('div');
            card.className = 'fun-fact-card';
            card.dataset.index = index; 

            card.innerHTML = `
                <img src="${fact.image}" alt="${fact.title}">
                <div class="fun-fact-card-content">
                    <h5>${fact.title}</h5>
                    <p>${fact.sneakPeek}</p>
                </div>
            `;
            card.addEventListener('click', () => {
                showFunFactDetail(index);
            });
            funFactGrid.appendChild(card);
        });
    }

    /**
     * Menampilkan halaman detail untuk fun fact yang dipilih
     */
    function showFunFactDetail(index) {
        const fact = funFactsData[index];
        if (!fact) return;
        funFactDetailHeader.innerHTML = `<img src="${fact.image}" alt="${fact.title}">`;
        funFactDetailContent.innerHTML = `<h2>${fact.title}</h2> ${fact.content}`;
        showView('fun-fact-detail-view');
    }


    // === BAGIAN 4: EVENT LISTENERS ===
    
    loginForm.addEventListener('submit', handleLogin);
    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    // Navigasi Sidebar
    navHome.addEventListener('click', (e) => {
        e.preventDefault(); 
        showView('home-view');
    });

    navNotes.addEventListener('click', (e) => {
        e.preventDefault();
        showView('notes-view');
    });

    navFunFact.addEventListener('click', (e) => {
        e.preventDefault();
        showView('fun-fact-list-view');
    });

    navGlossary.addEventListener('click', (e) => {
        e.preventDefault();
        showView('glossary-view');
    });

    navLogout.addEventListener('click', (e) => {
        e.preventDefault();
        handleLogout();
    });

    // Navigasi Konten
    linkGrignard.addEventListener('click', (e) => {
        e.preventDefault();
        showView('grignard-view');
    });

    linkPh.addEventListener('click', (e) => {
        e.preventDefault();
        showView('ph-view');
    });

    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetView = button.getAttribute('data-target');
            if (targetView) {
                showView(targetView);
            }
        });
    });

    // === BAGIAN 5: INISIALISASI ===
    
    generatePhScale();
    generateFunFactCards(); 

});