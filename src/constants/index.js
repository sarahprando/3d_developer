import { paschoalotto, auaha } from "../assets/images";
import {
    car,
    contact,
    css,
    git,
    github,
    html,
    javascript,
    bootstrap,
    python,
    linkedin,
    react,
    tailwindcss,
    threejs,
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
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: threejs,
        name: "Three.js",
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
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
];