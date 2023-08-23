/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Léo Teixeira",
  title: "Léo Teixeira",
  //!changer le text
  subTitle:
    "Titulaire d'un Bachelor Développeur Web à Angers, Je cherche actuellement une alternance en tant que développeur FullStack a partir de septembre 2023",
  //!mettre le lien du cv
  resumeLink: "/CV.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
//!good
const socialMediaLinks = {
  github: "https://github.com/lavaro883",
  linkedin: "https://www.linkedin.com/in/l%C3%A9o-teixeira-57024a1b9/",
  gmail: "teixeiraleo72@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Compétences techniques",
  subTitleLanguage: "Les différents langages de programmation :",
  subTitleFramework: "Les différents framework que j'ai pu utiliser :",
  subTitleBdd:
    "Les différents langages de base de données, ainsi que SGBD que j'ai pu découvrir :",
  subTitleOther: "Les différents logiciels ou autres : ",
  //!rajputer les icones manquant
  softwareSkillsLanguage: [
    {
      skillName: "Html",
      languageImage: "/images/html.png"
    },
    {
      skillName: "Css",
      languageImage: "/images/css.png"
    },
    {
      skillName: "JavaScript",
      languageImage: "/images/javascript.png"
    },
    {
      skillName: "Sass",
      languageImage: "/images/sass.png"
    },
    {
      skillName: "Python",
      languageImage: "/images/python.png"
    },
    {
      skillName: "Dart",
      languageImage: "/images/dart.png"
    },
    {
      skillName: "Php",
      languageImage: "/images/php.png"
    },
    {
      skillName: "Typescript",
      languageImage: "/images/ts.png"
    },
    {
      skillName: "C#",
      languageImage: "/images/csharp.png"
    },
    {
      skillName: "Kotlin",
      languageImage: "/images/kotlin.png"
    }
  ],
  softwareSkillsFramework: [
    {
      skillName: "React",
      languageImage: "/images/react.png"
    },
    {
      skillName: "Node Js",
      languageImage: "/images/node.png"
    },
    {
      skillName: "Bootstrap",
      languageImage: "/images/bootstrap.png"
    },
    {
      skillName: "Tailwinds",
      languageImage: "/images/tailwinds.png"
    },
    {
      skillName: "Flutter",
      languageImage: "/images/flutter.png"
    },
    {
      skillName: "Vue Js",
      languageImage: "/images/vuejs.png"
    },
    {
      skillName: "Symfony",
      languageImage: "/images/symfony.png"
    }
    // {
    //   skillName: "pygame",
    //   fontAwesomeClassname: "fab fa-symfony",
    //   languageImage: ""
    // }
  ],
  softwareSkillsBdd: [
    {
      skillName: "Graphql",
      languageImage: "/images/graphql.png"
    },
    {
      skillName: "Maria DB",
      languageImage: "/images/mariadb.png"
    },
    {
      skillName: "Mongo DB",
      languageImage: "/images/mongodb.png"
    },
    {
      skillName: "Prisma",
      languageImage: "/images/prisma.png"
    },
    {
      skillName: "Firebase",
      languageImage: "/images/firebase.png"
    }
  ],
  softwareSkillsOther: [
    {
      skillName: "Dbeaver",
      languageImage: "/images/dbeaver.png"
    },
    {
      skillName: "Postman",
      languageImage: "/images/postman.png"
    },
    {
      skillName: "Figma",
      languageImage: "/images/figma.png"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const bigProjects = {
  title: "Mes Projets",
  subtitle:
    "Voici une petite présentation des différents projets que j'ai pu développer :",
  projects: [
    {
      image: "/images/vozitel1.jpg",
      projectName: "Vozitel",
      projectDesc:
        "Application mobile pour de la téléphonie développée par l'entreprise Vozit",
      cardLanguage: [
        {
          name: "Flutter"
        },
        {
          name: "Node Js"
        },
        {
          name: "Dart"
        },
        {
          name: "Html/Css/Js"
        },
        {
          name: "Maria Db"
        }
        //  you can add extra buttons here.
      ],
      linkGithub: ""
    },
    {
      image: "/images/carbao1.jpg",
      projectName: "Carbao",
      projectDesc:
        "Réseau social pour professionnel développé par l'entreprise Vozit",
      cardLanguage: [
        {
          name: "Flutter"
        },
        {
          name: "Dart"
        },
        {
          name: "Firebase"
        }
      ],
      linkGithub: ""
    },
    {
      image: "/images/express.png",
      projectName: "learn Express js",
      projectDesc:
        "Création d'un petit site web afin d'apprendre Express Js dans le cadre d'un tp",
      cardLanguage: [
        {
          name: "Javascript"
        },
        {
          name: "Node Js"
        },
        {
          name: "Express Js"
        },
        {
          name: "Tailwinds Css"
        }
      ],
      linkGithub: "https://github.com/lavaro883/learn-Express"
    },
    {
      image: "/images/yahtzee.png",
      projectName: "Le Yahtzee",
      projectDesc: "Jeux de dés sur une interface cliente (CLI)",
      cardLanguage: [
        {
          name: "Python"
        }
      ],
      linkGithub: "https://github.com/lavaro883/yams"
    },
    {
      image: "/images/pendu.png",
      projectName: "Le Pendu",
      projectDesc:
        "Création d'un jeu du pendu dans le cadre d'un tp en BTS SIO",
      cardLanguage: [
        {
          name: "Python"
        }
      ],
      linkGithub: "https://github.com/lavaro883/pendu"
    },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "pygamon",
    //   projectDesc: "Sorte de pokemon interractif (inspiration par graven)",
    //   cardLanguage: [
    //     {
    //       name: "Python"
    //     },
    //     {
    //       name: "Pygame"
    //     },
    //     {
    //       name: "Tiled"
    //     }
    //   ]
    // },
    {
      image: "/images/meteo1.jpg",
      projectName: "Meteo App",
      projectDesc: "Application météo développer dans le cadre d'un tp",
      cardLanguage: [
        {
          name: "Flutter"
        },
        {
          name: "Dart"
        }
      ],
      linkGithub: "https://github.com/lavaro883/appMeteo"
    },
    {
      image: "/images/manga2.jpg",
      projectName: "MangList",
      projectDesc:
        "Application qui permet une gestion plus simple des mangas possédés par un utilisateur",
      cardLanguage: [
        {
          name: "Flutter"
        },
        {
          name: "Dart"
        }
      ],
      linkGithub: "https://github.com/lavaro883/manglist"
    },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "CyberProtective",
    //   projectDesc: "mettre description une fois l'app retester",
    //   cardLanguage: [
    //     {
    //       name: "C#"
    //     }
    //   ]
    // },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "LHTB",
    //   projectDesc: "tester également l'app pour mettre une description",
    //   cardLanguage: [
    //     {
    //       name: "C#"
    //     }
    //   ]
    // },
    {
      image: "/images/exeo1.jpg",
      projectName: "Exeo",
      projectDesc:
        "Application qui permet de chercher des activités à faire près de chez soi",
      cardLanguage: [
        {
          name: "Flutter"
        },
        {
          name: "Dart"
        },
        {
          name: "React"
        },
        {
          name: "Maria Db"
        }
      ],
      linkGithub: "https://github.com/lavaro883/exeo"
    }
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Cookie clicker",
    //   projectDesc: "Jeux mobile",
    //   cardLanguage: [
    //     {
    //       name: "Flutter"
    //     },
    //     {
    //       name: "Dart"
    //     },
    //     {
    //       name: "Flame"
    //     }
    //   ]
    // },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Love Addict",
    //   projectDesc: "Projet permettant d'apprendre dans le cadre d'un tp",
    //   cardLanguage: [
    //     {
    //       name: "NodeJs"
    //     },
    //     {
    //       name: "GraphQl"
    //     },
    //     {
    //       name: "Prisma"
    //     },
    //     {
    //       name: "ExpressJs"
    //     },
    //     {
    //       name: "SwaggerUi"
    //     },
    //     {
    //       name: "Jest"
    //     }
    //   ]
    // }
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Chick'Hand",
    //   projectDesc: "Application d'aide a la personne",
    //   cardLanguage: [
    //     {
    //       name: "Kotlin"
    //     },
    //     {
    //       name: "MariaDb"
    //     }
    //   ]
    // },
    // {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Formaflix",
    //   projectDesc: "Projet permettant d'apprendre dans le cadre d'un tp",
    //   cardLanguage: [
    //     {
    //       name: "C#"
    //     },
    //     {
    //       name: "MariaDb"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};
const educationInfo = {
  title: "Mes différentes écoles",
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "MyDigitalSchool Angers",
      logo: "/images/mds.png",
      subHeader: "Bachelor Developpement web en alternance",
      duration: "Septembre 2022 - Septembre 2023",
      linkSchool: "https://www.mydigitalschool.com/ecole-multimedia-angers"
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Lycée Polyvalent Chevrollier",
      logo: "/images/chevrollier.jpeg",
      subHeader: "BTS SIO option Solution logicielles et applications métiers",
      duration: "Septembre 2020 - juillet 2022",
      linkSchool: "https://chevrollier.paysdelaloire.e-lyco.fr/"
      // desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

const work = {
  title: "Mes Expériences Professionnelles",
  display: true, // Set false to hide this section, defaults to true
  work: [
    {
      workName: "Vozit",
      logo: "/images/vozit_slogan.ico",
      subHeader: "1 ans d'alternance en Bachelor",
      duration: "Septembre 2022 - Septembre 2023",
      linkWork: "https://vozit.fr/",
      desc: "Refonte d'un réseau social pour professionnel et Création d'une application de téléphonie mobile avec site web de gestion de ses utilisateurs"
    },
    {
      workName: "Rasec Amenagement",
      logo: "/images/rasec.png",
      subHeader: "Stage de BTS SIO",
      duration: "Janvier 2021 - Mars 2021",
      linkWork: "https://rasec-amenagement.com/",
      desc: "Création d'un site SAV"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const contactInfo = {
  title: emoji("Me contacter ☎️"),
  subtitle: "Si vous souhaitez discuter avec moi : ",
  number: "06 44 35 09 28",
  email_address: "teixeiraleo72@gmail.com"
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  work,
  openSource,
  bigProjects,
  contactInfo,
  isHireable
};
