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
  username: "Daniel Joshua Lee",
  title: "Hi, I'm Daniel Joshua Lee",
  subTitle: emoji(
    "I craft modern applications where powerful backend systems meet artificial intelligence. From scalable APIs to AI-driven experiences, I build technology that makes an impact. Driven by innovation, clean code, and solving real-world problems."
  ),
  resumeLink:
    "https://flowcv.com/resume/swrbkh8kp8du", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/danieljoshua01",
  gmail: "danieljoshua01@protonmail.com",
  gitlab: "https://gitlab.com/danieljoshua01",
  stackoverflow: "https://stackoverflow.com/users/32912833/daniel-joshua-lee",

  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "",
  skills: [
    emoji(
      "⚡Building responsive, user-focused applications with clean architecture and seamless experiences."
    ),
    emoji("⚡Designing scalable APIs, databases, and server-side systems using Python and modern frameworks."),
    emoji(
      "⚡Bringing intelligence to applications through AI models, automation, and smart workflows."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML",
      fontAwesomeClassname: "fas fa-html"
    },
    {
      skillName: "CSS",
      fontAwesomeClassname: "fas fa-css"
    },
    {
      skillName: "Javascript",
      fontAwesomeClassname: "fas fa-javascript"
    },
    {
      skillName: "Typescript",
      fontAwesomeClassname: "fas fa-typescript"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fas fa-python"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fas fa-react"
    },
    {
      skillName: "AngularJS",
      fontAwesomeClassname: "fas fa-angular"
    },
    {
      skillName: "NextJS",
      fontAwesomeClassname: "fas fa-next"
    },
    {
      skillName: "TailwindCSS",
      fontAwesomeClassname: "fas fa-tailwind"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fas fa-node"
    },
    {
      skillName: "ExpressJS",
      fontAwesomeClassname: "fas fa-express"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fas fa-django"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fab fa-mongodb"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fab fa-postgresql"
    },
    {
      skillName: "REST API",
      fontAwesomeClassname: "fab fa-restapi"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "fab fa-fastapi"
    },
    {
      skillName: "GraphQL",
      fontAwesomeClassname: "fab fa-graphql"
    },
    {
      skillName: "LangChain",
      fontAwesomeClassname: "fab fa-langchain"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Univerisitiy of Malaya (UM)",
      subHeader: "Bachelor of Computer Science'",
      duration: "Sep 2021 - Aug 2025",
      desc: "Studying Computer Science at University of Malaya (UM) with a focus on full stack development and integrating AI systems and models into websites.",
      descBullets: [
        "Focus on Full Stack development and integrating AI systems and models",
        "Strong foundation in algorithms, data structures, and distributed systems",
        "Practical experience through research-oriented and project-based learning",
        "Participated in research on the Research Intern (Full-Stack Development), building analysis dashboards with the integration of AI models and systems."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend Development",
      progressPercentage: "90%"
    },
    {
      Stack: "Backend Development",
      progressPercentage: "95%"
    },
    {
      Stack: "AI Integration",
      progressPercentage: "85%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Intern (Full-Stack Development)",
      company: "Universitiy of Malaya",
      companylogo: require("./assets/images/um_logo.png"),
      date: "Mar 2025 – Jun 2025",
      desc: "Worked on developing research-driven software solutions, integrating AI capabilities into web applications, and building intelligent systems to enhance user experiences. Collaborated with researchers and developers to transform innovative ideas into practical, scalable, and reliable digital solutions while strengthening my expertise in software engineering and AI technologies.",
      descBullets: [
        "Built REST APIs (10+ endpoints) for dataset retrieval, filtering, and analytics processing",
        "Designed and implemented a dashboard handling 1,000+ dataset records for visualization and exploration",
        "Integrated MongoDB/PostgreSQL with optimized queries, reducing average data fetch time by ~30%",
        "Collaborated with a team of 3–5 members, following weekly sprint cycles and code reviews",
        "Tested and debugged system modules, improving stability across 15+ core features"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME REAL-WORLD PROJECTS I DEVELOPED",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Student Attendance Management System",
      projectDesc: "Class Project",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/danieljoshua01/Attendance-Management-System"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Dataset Search & Filtering System",
      projectDesc: "Research Tool",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/danieljoshua01/Data-Research-Analysis-Platform"
        }
      ]
    }, {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "E-Commerce Web Application",
      projectDesc: "Course Assignment Project",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/danieljoshua01/E-Commerce-App"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Real-Time Chat Application",
      projectDesc: "Personal Project",
      footerLink: [
        {
          name: "Visit Github",
          url: "https://github.com/danieljoshua01/Realtime-Chat-App"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      // image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      // image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      // image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+60 137 845 543",
  email_address: "danieljoshua01@protonmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
