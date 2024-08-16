// import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

// interface SocialLink {
//   name: string;
//   src: string;
//   link: string;
//   width: number;
//   height: number;
// }

// export const SkillData = [
//   {
//     name: "Html 5",
//     Image: "/html.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     name: "Css",
//     Image: "/css.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     name: "JavaScript",
//     Image: "/js.png",
//     width: 65,
//     height: 65,
//   },
//   {
//     name: "Tailwind Css",
//     Image: "/tailwind.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     name: "React",
//     Image: "/react.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     name: "Java",
//     Image: "/java.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     name: "spring",
//     Image: "/spring.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     name: "TypeScript",
//     Image: "/ts.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     name: "Nextjs",
//     Image: "/Nextjs.png",
//     width: 80,
//     height: 80,
//   },
    
//   {
//     name: "Node js",
//     Image: "/node-js.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     name: "Mongo db",
//     Image: "/mongodb.png",
//     width: 40,
//     height: 40,
//   },
//   {
//     name: "postgresql",
//     Image: "/postgresql.png",
//     width: 80,
//     height: 80,
//   },
//   {
//     name: "aws",
//     Image: "/aws.png",
//     width: 80,
//     height: 80,
//   },
// ];

// // export const Socials = [
// //   {
// //     name: "github",
// //     src: "/github.png",
// //     width: 80,
// //     height: 80,
// //   },
// //   {
// //     name: "linkedin",
// //     src: "/linkedin.png",
// //     width: 80,
// //     height: 80,
// //   }
// // ];

// export const Socials: SocialLink[] = [
//   {
//     name: "github",
//     src: "/github.png",
//     link: "https://github.com/user-1n",
//     width: 28,
//     height: 28,
//   },
//   {
//     name: "linkedin",
//     src: "/linkedin.png",
//     link: "https://www.linkedin.com/in/piyush-raj-user1", 
//     width: 28,
//     height: 28,
//   }
// ];


// export const Projects = [
//   {
//     title: "Microsoft Team Collaboration",
//     text: "A collaborative workspace for creating and sharing code files and documents, with real-time messaging and commenting.",
//     src: "/Loop.png",
//     // link: 'https://team-collaboration-microsoft-loop-clone.vercel.app/' 
//   },
//   {
//     title: "AI-Interview-Taker",
//     text: "Users input their job role and experience to receive AI-generated interview questions. The AI records audio and video, then provides a rating, feedback, and the candidates' answers.",
//     src: "/AI-Interview.png",
//     // link: 'https://ai-interview-taker-one.vercel.app/'
//   },
//   {
//     title: "AI-Travel-Planner",
//     text: "The AI Travel Planner allows users to input their travel budget, destination, number of people, and days. It generates a daily travel plan with hotel options and nearby tourist attractions.",
//     src: "/AI-Travel.png",
//     // link: 'https://ai-assisted-travel-guide.vercel.app/'
//   },
//   {
//     title: "Test Your Startup Ideas",
//     text: "Users can submit their startup ideas on the web portal, where visitors can upvote or downvote them. The app aims to gather public opinion to help founders prioritize which ideas to pursue based on user engagement.",
//     src: "/Startup-Idea.png",
//     // link: 'https://test-your-start-up-ideas.vercel.app/'
//   }
// ];


// export const NavLinks = [
//   {
//     name: "/",
//     icon: RxHome,
//     link: "/",
//   },
//   {
//     name: "/my-skills",
//     icon: RxPerson,
//     link: "/my-skills",
//   },
//   {
//     name: "/my-projects",
//     icon: RxDashboard,
//     link: "/my-projects",
//   },
//   {
//     name: "/contact-me",
//     icon: RxClipboard,
//     link: "/contact-me",
//   },
// ];


import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

interface SocialLink {
  name: string;
  src: string;
  link: string;
  width: number;
  height: number;
}

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Java",
    Image: "/java.png",
    width: 80,
    height: 80,
  },
  {
    name: "Spring",
    Image: "/spring.png",
    width: 80,
    height: 80,
  },
  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Nextjs",
    Image: "/Nextjs.png",
    width: 80,
    height: 80,
  },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
  {
    name: "PostgreSQL",
    Image: "/postgresql.png",
    width: 80,
    height: 80,
  },
  {
    name: "AWS",
    Image: "/aws.png",
    width: 80,
    height: 80,
  },
];

export const Socials: SocialLink[] = [
  {
    name: "github",
    src: "/github.png",
    link: "https://github.com/user-1n",
    width: 28,
    height: 28,
  },
  {
    name: "linkedin",
    src: "/linkedin.png",
    link: "https://www.linkedin.com/in/piyush-raj-user1",
    width: 28,
    height: 28,
  },
];

export const Projects = [
  {
    title: "Microsoft Team Collaboration",
    // text: "A collaborative workspace for creating and sharing code files and documents, with real-time messaging and commenting.",
    src: "/Loop.png",
    link: 'https://team-collaboration-microsoft-loop-clone.vercel.app/', // Added link
  },
  {
    title: "AI-Interview-Taker",
    // text: "Users input their job role and experience to receive AI-generated interview questions. The AI records audio and video, then provides a rating, feedback, and the candidates' answers.",
    src: "/AI-Interview.png",
    link: 'https://ai-interview-taker-one.vercel.app/', // Added link
  },
  {
    title: "AI-Travel-Planner",
    // text: "The AI Travel Planner allows users to input their travel budget, destination, number of people, and days. It generates a daily travel plan with hotel options and nearby tourist attractions.",
    src: "/AI-Travel.png",
    link: 'https://ai-assisted-travel-guide.vercel.app/', // Added link
  },
  {
    title: "Test Your Startup Ideas",
    // text: "Users can submit their startup ideas on the web portal, where visitors can upvote or downvote them. The app aims to gather public opinion to help founders prioritize which ideas to pursue based on user engagement.",
    src: "/Startup-Idea.png",
    link: 'https://test-your-start-up-ideas.vercel.app/', // Added link
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  }
  // {
  //   name: "/contact-me",
  //   icon: RxClipboard,
  //   link: "/contact-me",
  // },
];
