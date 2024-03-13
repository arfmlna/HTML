const cards = document.getElementById('cards')

const card = [{
        id: 1,
        textHeader : "Data Analyst",
        img: "./assets/src/DataAnalyst.jpg",
        href: "https://www.dicoding.com/blog/data-analyst-apa-itu-mari-mengenal-pengertian-dan-perannya/"
    },{
        id: 2,
        textHeader : "Data Science",
        img: "./assets/src/DataScience.jpg",
        href: "https://blog.skillacademy.com/apa-itu-data-scientist"
    },{
        id: 3,
        textHeader : "UI/UX Designer",
        img: "./assets/src/UIUX.jpg",
        href: "https://www.hostinger.co.id/tutorial/ux-design-adalah"
    },{
        id: 4,
        textHeader : "Web Development",
        img: "./assets/src/WebDev.jpeg",
        href: "https://www.dewaweb.com/blog/web-developer/"
    },{
        id: 5,
        textHeader : "Machine Learning",
        img : "./assets/src/MachineLearning.jpg",
        href : "dicoding.com/blog/machine-learning-adalah/"
    },{
        id: 6,
        textHeader: "Game Development",
        img: "./assets/src/GameDevelopment.jpg",
        href: "https://www.gamelab.id/news/1670-mengenal-profesi-game-developer-definisi-tugas-skill-dan-prospek-kerjanya"
    },{
        id: 7,
        textHeader: "Cyber Scurity",
        img: "./assets/src/CyberSecurity.jpeg",
        href: "https://www.dicoding.com/blog/cyber-security-pengertian-jenis-dan-ancamannya/"
    },{
        id: 8,
        textHeader: "Database Administator",
        img: "./assets/src/DatabaseAdministrator.png",
        href: "https://glints.com/id/lowongan/karier-database-administrator-adalah/"
    }]

const res = card.map((data) => {
    console.log(data)
        return(
            `
            <div key='${data.id}' class="card"}>
                <div class="cardheader"><h3>${data.textHeader}</h3></div>
                <div class="cardbody">
                    <img src="${data.img}" alt="${data.textHeader}" width="200px" height="120px">
                </div>
                <div class="cardfooter">
                    <button class="cardbotton"><a href="${data.href}">Click</a>
                    </button>
                </div>
            </div>
            `
        )
    }).join('')
    cards.innerHTML = res