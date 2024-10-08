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
        id: 8,
        title: "Full-Stack Sudoku Game",
        description: "I developed a full-stack Sudoku game with a React/Next.js front-end, built using TypeScript for type safety and modern UI features. The back-end is powered by a Python-based Sudoku generator and solver, leveraging recursion for puzzle generation. A Flask API connects the front-end with the back-end, enabling real-time interaction between the two. The front-end is hosted on Netlify, while the back-end is deployed on PythonAnywhere, ensuring a seamless, scalable solution. All project management and version control is done via Git, making this a key piece of my portfolio.",
        image: "/images/sudoku-slim.png",
        alt: "Image of Sudoku game in action",
        techStack: "React/Next.js, Typescript, Python, Flask, Netlify, PythonAnywhere, Git",
        link: "https://67040271ec44c700081c25a9--rufs-sudoku-game.netlify.app/"
    },
    {
        id: 7,
        title: "Wordle Solver",
        description: "A JavaScript script that automatically solves the popular word game Wordle using a letter frequency score system. Achieves a 97.37% success rate by analyzing letter frequencies, scoring words, and iteratively narrowing down solutions based on feedback.",
        image: "/images/wordle-solver-image.png",
        alt: "Image of wordle solver in action",
        techStack: "JavaScript, Netlify, Git",
        link: "https://github.com/rufusbiggs/wordle-solver"
    },
    {
        id: 0,
        title: "Wordle",
        description: "Challenged myself to recreate the popular game wordle. Guess a 5 letter word with 6 tries!",
        image: "/images/wordleImage.png",
        alt: "Image of the Wordle homescreen.",
        techStack: "React, TypeSript, Netlify, Git",
        link: "https://main--wordle-game-woo.netlify.app/",

    },
    {
        id: 1,
        title: "Jammming",
        description: "Using the spotify API this app lets you create your own playlists and add them to your spotify account.",
        image: "/images/JammmingScreenshot.png",
        alt: "Image of the Jammming homescreen.",
        techStack: "React, JavaScript, Jest, Git",
        link: "https://boisterous-medovik-f79b6d.netlify.app",

    },
    {
        id: 2,
        title: "Medication Tracker",
        description: "Website that aims to reduce stress surrounding tracking prescription medication stock levels for individuals.",
        image: "/images/MedicationTrackerScreenshot.png",
        alt: "Image of the Medication Tracker homescreen.",
        techStack: "Next.js, React, TypeScript, Git",
        link: "https://gleaming-dodol-3a7961.netlify.app/",
    },
    {
        id: 3,
        title: "Dots",
        description: "My first project using TypeScript. A browser game where clicking adds dots to the screen, there are additional buttons for undoing and redoing dots.",
        image: "/images/DotsScreenshot.png",
        alt: "Image of the Dots homescreen.",
        techStack: "Next.js, React, TypeScript", 
        link: "https://dazzling-bienenstitch-e6bddc.netlify.app/",
    },
    {
        id: 4,
        title: "Mac OS Calculator",
        description: "Calculator web app built to replicate the Mac OS calculator.",
        image: "/images/calculatorScreenshot.png",
        alt: "Image of the Calculator.",
        techStack: "React, JavaScript, Git",
        link: "https://idyllic-toffee-c73c20.netlify.app",
    },
    {
        id: 5,
        title: "Boss Machine",
        description: "CodeCademy Express project - create an entire API to serve information to a Boss Machine, a unique management application for today's most accomplished (evil) entrepreneurs. ",
        image: "/images/BossMachineScreenshot.png",
        alt: "Image of the Boss Machine homescreen.",
        techStack: "Express, JavaScript",
        link: "https://github.com/rufusbiggs/boss-machine",
    },
    {
        id: 6,
        title: "Find the Hat",
        description: "Project completed on CodeCademy - find the hat '^' by moving through the maze and avoiding any holes 'O'.",
        image: "/images/findTheHatScreenshot.png",
        alt: "Image of the Find the Hat game.",
        techStack: "JavaScript",
        link: "https://github.com/rufusbiggs/find-the-hat",
    },

]

