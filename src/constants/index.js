import { paschoalotto, auaha } from "../assets/images";
import {
    dogs,
    animals,
    slide,
    moone,
    list,
    bikcraft,
    css,
    git,
    github,
    html,
    javascript,
    bootstrap,
    python,
    linkedin,
    react,
    rstudio,
    postgresql,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: rstudio,
        name: "Rstudio",
        type: "Backend",
    },
    {
        imageUrl: postgresql,
        name: "PostgreSQL",
        type: "Backend",
    },  
];

export const experiences = [
    {
        title: "Managerial Information Systems Assistant (M.I.S)",
        company_name: "Paschoalotto S/A",
        icon: paschoalotto,
        iconBg: "#fff",
        date: "Jul 2021 - Mar 2022",
        points: [
            "Report extraction and maintenance.",
            "Measurement of results and comparisons for decision making, providing relevant information.",
        ],
    },
    {
        title: "Managerial Information Systems Analyst (M.I.S)",
        company_name: "Paschoalotto  S/A",
        icon: paschoalotto,
        iconBg: "#fff",
        date: "Mar 2022 - Out 2022",
        points: [
            "Creation, maintenance and automation of reports.",
            "Identification of improvements in data collection, analysis and communication processes to increase the department's efficiency and effectiveness.",
            "Support company departments by providing relevant information and insights into business performance.",
        ],
    },
    {
        title: "Quality Assurance (QA).",
        company_name: "Auaha",
        icon: auaha,
        iconBg: "#fff",
        date: "Out 2022 - Nov 2023",
        points: [
            "Carrying out tests (QA) on websites implemented at the agency.",
            "Assistance and guidance with payment and shipping configurations, product registration and integration with ERP.",
            "Meetings with customers for training on the Tray, Nuvemshop and Well.Commerce platforms.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/sarahprando',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sarah-prando-26a5751b4/',
    }
];

export const projects = [
    {
        iconUrl: dogs,
        theme: 'btn-back',
        name: 'Dogs',
        description: 'Developed in the React course, Dogs social network.',
        link: 'https://dogs-origamid.000webhostapp.com/',
    },
    {
        iconUrl: animals,
        theme: 'btn-back',
        name: 'Fantastic Beasts',
        description: 'Developed in the JavaScript course, Fantastic Beasts.',
        link: 'https://sarahprando.github.io/exercicios-origamid/animais-fantasticos/index.html',
    },
    {
        iconUrl: slide,
        theme: 'btn-back',
        name: 'Slide',
        description: 'Developed in the JavaScript course, Slide.',
        link: 'https://sarahprando.github.io/slide/index.html',
    },
    {
        iconUrl: moone,
        theme: 'btn-back',
        name: 'Studio Moone',
        description: 'Personal project to deepen knowledge in HMTL, CSS Grid, Studio Moone to buy personalized jewelry.',
        link: 'https://sarahprando.github.io/studio-moone/assents/home.html',
    },
    {
        iconUrl: list,
        theme: 'btn-back',
        name: 'Supermarket List',
        description: 'Personal project to deepen knowledge in JavaScript, application for market listing.',
        link: 'https://sarahprando.github.io/supermarket-list/',
    },
    {
        iconUrl: bikcraft,
        theme: 'btn-back-white',
        name: 'Bikcraft',
        description: 'Developed in the HTML and CSS course, custom-made bicycles.',
        link: 'https://sarahprando.github.io/exercicios-origamid/bikcraft/home.html',
    },
];