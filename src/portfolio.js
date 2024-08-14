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
  username: "kjo-codes",
  title: "Hi all, I'm Kajol",
  subTitle: emoji(
    "I am all about exploring sandwich places and trying every new tech I find interesting."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1O0qltg67ylUTLHOywqaWuucM_-skl2fw/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kjo-codes",
  linkedin: "https://www.linkedin.com/in/kajol-k-222251242/",
  gmail: "kajolkabiraj6@gmail.com",
  instagram: "https://www.instagram.com/kajol.kabiraj/",
  medium: "https://medium.com/@kajolkabiraj6",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A passionate aspiring Software Developer 🚀 passionate about developing innovative tech solutions and making a positive impact. With hands-on experience in iOS Development, Automation and Databases , I thrive in challenging environments that push me to grow and excel",
  skills: [
    emoji(
      "⚡ Develop innovative projects that solves real world problems and build a user base"
    ),
    emoji("⚡ Deeply curious to build projects using GenAI "),
    emoji(
      "⚡ Integration of third party services such as Firebase, Google Cloud etc"
    )
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Thapar Institute of Engineering and Technology",
      logo: require("./assets/images/thapar.png"),
      subHeader: "Bachelor's in Computer Science and Engineering",
      duration: "August 2021 - November 2025",
      desc: "Secretary - Student Alumni Relations Cell",
      descBullets: [
        "Gained a solid foundation in computer engineering, focusing on both theoretical knowledge and practical application through various hands-on projects like Arduino based RoboCar, ELC RoboARM and Capstone Project- Semi Autonomous Fertlizer Sprinkling System.",
        "Courses- Operating Systems, Advanced Data Structures and Algorithms, AI, Machine Learning, DataBase Management System, Compliler Design and many more."
      ]
    },
    {
      schoolName: "The Century School",
      logo: require("./assets/images/century.png"),
      subHeader: "12th CBSE",
      duration: "Graduated 2021",
      desc: "Ranked in the top 5 of the class. Scored 95.6%",
      descBullets: [
        "Excelled academically in a rigorous CBSE curriculum, consistently ranking in the top 5% of the class, which strengthened my foundational knowledge and study discipline.",
        "Participated in various extracurricular activities that nurtured my leadership abilities and collaborative skills, contributing to a well-rounded educational experience."
      ]
    },
    {
      schoolName: "St. Theresa's Convent Sr. Sec. School",
      logo: require("./assets/images/stcs.png"),
      subHeader: "10th CBSE",
      duration: "Graduated 2018",
      desc: "Ranked top 10% in the entire school. Scored 92.7%",
      descBullets: [
        "Actively participated in the Student Council and was a key member of the Debate Team, where I honed my leadership and public speaking skills. These experiences not only enhanced my ability to articulate ideas clearly and persuasively but also instilled a strong sense of responsibility and teamwork."
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Test and Use Automation", //Insert stack or technology you have experience in
      progressPercentage: "65%" //Insert relative proficiency in percentage
    },
    {
      Stack: "React.js",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineering Intern",
      company: "S&P Global",
      companylogo: require("./assets/images/sp.png"),
      date: "June 2024 – August 2024",
      desc: "Contributed to key projects working with the Foreseer team, Data Transformation",
      descBullets: [
        "Developed a Python automation system reducing data migration errors by 70%.",
        "Collaborated in the Intern Hackathon, enhancing ATS scanning with GenAI, improving processing speed by 25%.",
        "Enhanced Foreseer UI using Java Vaadin Framework, increasing user interaction efficiency by 20%."
      ]
    },
    {
      role: "Open Source Contributor (Spring 2024 Cohort)",
      company: "Humanitarian OpenStreetMap Team",
      companylogo: require("./assets/images/outreachy.png"),
      date: "March 2024",
      desc: "Worked on improving the efficiency of fieldwork data collection through innovative solutions.",
      descBullets: [
        "Enhanced the Basemapper module, boosting data collection efficiency by 25%.",
        "Developed a Python Kivy-based mobile interface, simplifying the process of fieldwork data collection."
      ]
    },
    {
      role: "Intern",
      company: "DeepStrat",
      companylogo: require("./assets/images/ds.png"),
      date: "January 2024",
      desc: "Collaborated on the development of a criminal data analysis system for Haryana Police.",
      descBullets: [
        "Contributed to a Flask-based system that improved crime predictive accuracy by 60%.",
        "Modeled complex criminal relationships using SQLAlchemy, enhancing criminal profiling capabilities."
      ]
    },
    {
      role: "Project Management and Outreach Intern",
      company: "Ambitio",
      companylogo: require("./assets/images/ambitio.png"),
      date: "Aug 2023 – Oct 2023",
      desc: "Managed and executed campaigns, enhancing company reach and product offerings.",
      descBullets: [
        "Helped develop two major software applications, increasing company reach by 30%.",
        "Collaborated cross-functionally with operations teams to execute 10 successful campaigns."
      ]
    }
  ]
};


// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "INNOVATIVE TECH SOLUTIONS THAT I DEVELOPED",
  projects: [
    {
      image: require("./assets/images/flashcardLogo.png"),
      projectName: "Flashcard with Paywall (SaaS)",
      projectDesc: "Developed a SaaS application for flashcard creation with premium content paywall, boosting user engagement and revenue through secure authentication and payment gateway integration.",
      footerLink: [
        {
          name: "View Project",
          url: "https://kjo-codes.github.io/portofino/"
        }
      ]
    },
    {
      image: require("./assets/images/splittyLogo.png"),
      projectName: "Splitty",
      projectDesc: "Created a C++ application designed to calculate and simplify debt settlements among multiple parties using efficient algorithms, reducing debt complexity by 50%.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/kjo-codes/splitty"
        }
      ]
    },
    {
      image: require("./assets/images/rateMyProfessorLogo.png"),
      projectName: "TURateMyProfessor - iOS",
      projectDesc: "Developed an iOS app allowing students to rate and review professors, enhancing their course selection experience with a user-friendly interface.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/kjo-codes/turate-myprofessor"
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
  achievementsCards: [
    {
      title: "Google Cloud Digital Leader",
      subtitle:
        "Silver Badge, Completed 8+ Certifications.",
      image: require("./assets/images/gcp.png"),
      imageAlt: "Google digital boost Logo",
      footerLink: [
        {
          name: "Profile and Certifications",
          url: "https://www.cloudskillsboost.google/public_profiles/36a9892c-9833-4061-8629-b078b16b1a8e"
        },
        {
          name: "Google Cloud Facilitator 2024",
        }
      ]
    },
    {
      title: "S&P Global EssentialTECH",
      subtitle:
        "Completed a number of Certifications on the S&P Global EssentiaLTECH learning platform",
      image: require("./assets/images/sp.png"),
      imageAlt: "et logo",
      footerLink: [
        {
          name: "View Transcript",
          url: "https://drive.google.com/file/d/1pqL5fl3dkdsx80x8S1SMAJDbGpeEZ1u5/view?usp=share_link"
        }
      ]
    },
    {
      title: "Product Roadmapping Micro-Certification (PRC)™️",
      subtitle: "Completed Certifcation from The Product School",
      image: require("./assets/images/ps.png"),
      imageAlt: " Logo",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/1UAUa9yhnkneCjTPXiBPyin9CB-kcMa7t/view?usp=share_link" }
      ]
    },
    {
      title: "Certifed NIFAA Volunteer",
      subtitle: "Volunteer for National Integrated Forum of Artists and Activists, 8+ events recognized by the World Book of Records",
      image: require("./assets/images/nifaa.png"),
      imageAlt: " Logo",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/drive/folders/1mIiN4SZbA0z_Oz964uDnJT2BdkMnWtvg?usp=share_link" }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "I love to write",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@kajolkabiraj6/kubernetes-the-cloud-native-powerhouse-and-why-its-a-scarce-skill-607c81375bfb",
      title: "Kubernetes: The Cloud-Native Powerhouse and Why It’s a Scarce Skill"
    },
    {
      url: "https://medium.com/@kajolkabiraj6/the-day-the-blue-screen-returned-how-crowdstrike-glitched-the-matrix-d52d9b5714d7",
      title: "The Day the Blue Screen Returned: How CrowdStrike Glitched the Matrix"
    },
    {
      url: "https://medium.com/@kajolkabiraj6/my-outreachy-adventure-mapping-the-future-with-hots-osm-fieldwork-project-d770fa7fa233",
      title: "My Outreachy Adventure"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
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
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open.",
  number: "+91-7988469106",
  email_address: "kajolkabiraj6@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
