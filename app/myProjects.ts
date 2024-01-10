interface Project {
    id : number,
    title : string,
    description : string,
    image : string,
    alt : string,
    techStack : string,
    link : string,
}

export const myProjects : Project[] = [
    {
        id: 0,
        title: "Jammming",
        description: "Using the spotify API this app let's you create your own playlists and add them to your spotify account.",
        image: "/images/JammmingScreenshot.png",
        alt: "Image of the Jammming homescreen.",
        techStack: "React, JS, Jest",
        link: "string",

    },
    {
        id: 1,
        title: "Medication Tracker",
        description: "Website that aims to reduce stress surrounding tracking prescription medication stock levels for individuals.",
        image: "/images/MedicationTrackerScreenshot.png",
        alt: "Image of the Medication Tracker homescreen.",
        techStack: "Next.js, React, TS",
        link: "string",
    },
    {
        id: 2,
        title: "Dots",
        description: "Click to add dots to the screen, there are additional buttons for undoing and redoing dots",
        image: "/images/DotsScreenshot.png",
        alt: "Image of the Dots homescreen.",
        techStack: "Next.js, React, TS",
        link: "string",
    },
    {
        id: 3,
        title: "Mac OS Calculator",
        description: "Calculator web app built to replicate the Mac OS calculator.",
        image: "/images/calculatorScreenshot.png",
        alt: "Image of the Calculator.",
        techStack: "React, JS",
        link: "string",
    },
    {
        id: 4,
        title: "Boss Machine",
        description: "CodeCademy Express project - create an entire API to serve information to a Boss Machine, a unique management application for today's most accomplished (evil) entrepreneurs. ",
        image: "/images/BossMachineScreenshot.png",
        alt: "Image of the Boss Machine homescreen.",
        techStack: "Express, JS",
        link: "string",
    },
    {
        id: 5,
        title: "Find the Hat",
        description: "Project completed on CodeCademy - find the hat '^' by moving through the maze and avoiding any holes 'O'",
        image: "/images/findTheHatScreenshot.png",
        alt: "Image of the Find the Hat game.",
        techStack: "JS",
        link: "string",
    },

]

