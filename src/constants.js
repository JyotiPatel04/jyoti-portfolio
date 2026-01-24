// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springLogo from './assets/tech_logo/spring.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import intellijLogo from './assets/tech_logo/intellij.png';
import figmaLogo from './assets/tech_logo/figma.png';
import dockerLogo from './assets/tech_logo/docker.png';
import vercelLogo from './assets/tech_logo/vercel.png';


// Experience Section Logo's
import educationfriendLogo from './assets/company_logo/educationfriend_logo.png';


// Education Section Logo's
import aktuLogo from './assets/education_logo/aktu_logo.png';
import upboardLogo from './assets/education_logo/upboard_logo.png';


// Project Section Logo's
import passwordgeneratorLogo from './assets/work_logo/pass_gen.png';
import simonsaysgameLogo from './assets/work_logo/ss_game.png';
import weatherappLogo from './assets/work_logo/wea_app.png';
import expensetrackerLogo from './assets/work_logo/exp_tra.png';
import calculatorLogo from './assets/work_logo/cal.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      {name: 'Spring',logo: springLogo},
      { name: 'Springboot', logo: springbootLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
     
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      {name : 'Intellij', logo: intellijLogo},
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
      {name: 'Docker' , logo: dockerLogo}
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: educationfriendLogo,
      role: "Web Developer/ Forntend Developer",
      company: "Education Friend",
      date: "September 2025 - Present",
      desc: "Worked on developing and maintaining responsive web pages using HTML, CSS, JavaScript, and React. Assisted in improving UI components, fixing layout issues, and ensuring cross-browser compatibility. Collaborated with team members to update content, enhance user experience, and support ongoing web development tasks.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Tailwind CSS",
        "Bootstrap",
       ],
    },
   ];
  
  export const education = [
    {
      id: 0,
      img: aktuLogo,
      imgClass: "w-40 h-15",
      school: "Dr. AKTU University, Lucknow",
      date: "Oct 2022 - July 2026",
      grade: "9.02 CGPA",
      desc: " I am a B.Tech student in Electronics Engineering from Dr. A.P.J. Abdul Kalam Technical University (AKTU) with a strong interest in the IT sector. Alongside my core electronics studies, I have actively developed skills in web development and programming. I have worked on multiple projects using HTML, CSS, JavaScript, React, and Java, which helped me build a solid foundation in software development. I am eager to start my career in the IT industry where I can apply my technical skills, learn continuously, and grow as a software professional.",
      degree: "Bachelor of Technology (B.Tech) – Electronics Engineering",
    },
    {
      id: 1,
      img: upboardLogo,
       imgClass: "w-20 h-20", 
      school: "SSIC Rajatalab, Varanasi",
      date: "Apr 2020 - Mar 2021",
      grade: "85%",
      desc: "Completed Class 12th from UP Board with a focus on Physics, Chemistry, and Mathematics. Gained a solid understanding of scientific concepts and logical reasoning, building a strong base for engineering and technical studies.",
      degree: "UP(XII) - PCM with Hindi",
    },
    {
      id: 2,
      img: upboardLogo,
       imgClass: "w-20 h-20", 
      school: "SHHBIC Rajatalab, Mathura",
      date: "Apr 2018 - March 2019",
      grade: "83.33%",
      desc: "Completed Class 10th from UP Board with a strong academic foundation. Studied core subjects including Mathematics, Science, and English, which helped develop analytical thinking and problem-solving skills.",
      degree: "UP(X) - PCM with Sanskrit",
    },
   
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Password Generator",
      description:
      "A secure and user-friendly Password Generator application built using modern web technologies. The app allows users to generate strong, customizable passwords based on selected criteria such as length, uppercase letters, lowercase letters, numbers, and special characters. Designed with a clean and intuitive interface, it helps users create reliable passwords to enhance online security.",
      image: passwordgeneratorLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/JyotiPatel04/password-generator-react",
      webapp: "https://password-generator-react-wheat.vercel.app/",
    },

    {
       id: 1,
      title: "Simon Says Game",
      description:
      "A fun and interactive Simon Says memory game built using JavaScript. The game challenges users to remember and repeat an increasing sequence of colors, helping improve memory and focus. With smooth animations, sound feedback, and progressive difficulty levels, the game delivers an engaging and user-friendly experience.",
     image: simonsaysgameLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/JyotiPatel04/Simon-Says-Game-",
      webapp: "https://simon-says-game-ten-bay.vercel.app/",
    },

    {
      id: 2,
      title: "Weather App",
      description:
      "A responsive Weather Application built using HTML, CSS, and JavaScript. The app fetches real-time weather data from a public API and displays information such as temperature, humidity, wind speed, and weather conditions based on the searched city. Designed with a clean UI and smooth user experience.",
      image: weatherappLogo,
      tags: ["HTML", "CSS", "JavaScript","API"],
      github: "https://github.com/JyotiPatel04/Weather-App-Using-OpenWeather-API-",
      webapp: "https://weather-app-using-open-weather-api-eight.vercel.app/",
    },
    
    {
      id: 3,
      title: "Expense Tracker",
      description:
        "A user-friendly Expense Tracker application built using HTML, CSS, and JavaScript. The app allows users to add, view, and manage daily expenses and income, automatically calculating the total balance. It uses dynamic DOM manipulation and local storage to persist data, helping users track their spending efficiently.",
      image: expensetrackerLogo,
      tags: ["HTML", "CSS", "JavaScript",],
      github: "https://github.com/JyotiPatel04/expense-tracker",
      webapp: "https://expense-tracker-nine-omega-90.vercel.app/",
    },

    {
      id: 4,
      title: "Calculator",
      description:
        " A responsive Calculator application built using HTML, CSS, and JavaScript. The app performs basic arithmetic operations such as addition, subtraction, multiplication, and division with real-time input handling. Designed with a clean interface and smooth user interaction for accurate calculations.",
      image: calculatorLogo,
      tags: ["HTML", "CSS", "JavaScript",],
      github: "https://github.com/JyotiPatel04/Calculator",
      webapp: "https://calculator-chi-ten-83.vercel.app/",
    },
  ];  
