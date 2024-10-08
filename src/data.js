import WaterImage from "./assets/images/projects/Water.gif"
import PokemonImage from "./assets/images/projects/Pokemon.gif"
import AByteSizedMuseumImage from "./assets/images/projects/AByteSizedMuseum.png"
import WFCImage from "./assets/images/projects/WFC_Python.png"
import PCDefenderImage from "./assets/images/projects/PCDefender.png"
import ScatterImage from "./assets/images/projects/Scatter.png"
import GeneticAlgorithmImage from "./assets/images/projects/GeneticAlgorithm.png"
import EnderDragonAIImage from "./assets/images/projects/EnderDragonAI.gif"

export const data = {
    projects: [
        {
            id: "1",
            title: "Water Simulation",
            tag: "Game Development",
            imageSrc: WaterImage.src,
            description: "An attempt to create a simple simulation of waves using Unity's Shader Language, implementing Sum of Sines and Lambertian Diffuse lighting.",
            tech: ["Unity", "C#"],
            details: [
                "Learned how to work with and configure Vertex and Fragment Shaders using Unity's Shader Language.",
            ],
        },
        {
            id: "2",
            title: "Pokemon Battle System Clone",
            tag: "Game Development",
            imageSrc: PokemonImage.src,
            description: "A simplified recreation of Pokemon's Generation 1 battle system.",
            tech: ["Unity", "C#"],
            details: [
                "Used PokeAPI to collect and display Pokemon data.",  
                "Learned how to use Unity's custom inspector.", 
                "Learned how to create/edit Scriptable Objects programmatically."
            ],
        },
        {
            id: "3",
            title: "A Byte-Sized Museum",
            tag: "Game Development",
            imageSrc: AByteSizedMuseumImage.src,
            description: "A Game-Based Learning application that introduces computer programming concepts using Wave Function Collapse for procedural generation.",
            tech: ["Unity", "C#"],
            details: [
                "3D game project developed for my Thesis."
            ],
        },
        {
            id: "4",
            title: "Wave Function Collapse Algorithm",
            tag: "Game Development",
            imageSrc: WFCImage.src,
            description: "A Python-based implementation of the Tile-Based Wave Function Collapse Algorithm",
            tech: ["Python", "Pygame", "Numpy"],
            details: [
                "Served as a prototype for testing for my final Thesis output."
            ],
        },
        {
            id: "5",
            title: "PCDefender",
            tag: "Game Development",
            imageSrc: PCDefenderImage.src,
            description: "A 2D Tower Defense game where you play as a computer's Antivirus Software defending against waves of computer malware.",
            tech: ["Unity", "C#"],
            details: [
                "Made in 5 days for a Hackathon held by our University."
            ],
        },
        {
            id: "6",
            title: "Scatter",
            tag: "Game Development",
            imageSrc: ScatterImage.src,
            description: "A 2D RTS game where survival depends on real-time resource scavenging.",
            tech: ["Unity", "C#"],
            details: [
                "Made in 2 weeks with a friend for the Pirate Software Game Jam 14 (Jan 12, 2024 – Jan 27, 2024)."
            ],
        },
        {
            id: "7",
            title: "Genetic Algorithm for Solving a Multiple Variable Combinatorial Optimization Problem",
            tag: "Others",
            imageSrc: GeneticAlgorithmImage.src,
            description: "A Python-based program using a Genetic Algorithm to solve a multi-variable combinatorial optimization problem.",
            tech: ["Python", "Numpy", "Pandas", "Matplotlib"],
            details: [
                "Made alongside a research manuscript of the same title as a final project for my Discrete Structures 2 course.",
                "Manuscript was recognized as runner-up for Best Manuscript in class."
            ],
        },
        {
            id: "8",
            title: "Ender Dragon AI Clone",
            tag: "Game Development",
            imageSrc: EnderDragonAIImage.src,
            description: "An attempt to recreate Minecraft's Ender Dragon AI in Unity.",
            tech: ["Unity", "C#"],
            details: [
                "Ender Dragon's behavior patterns were created to be as close to the original game as possible",
                "Learned how to implement enemy AI behavior using State Machines to manage the Ender Dragon's behavior patterns."
            ]
        }
    ],
    skills: [
        {
            category: "Preferred Languages",
            items: ["C#", "Java"],
        },
        {
            category: "Other Known Languages",
            items: ["Python", "Javasript", "PHP"],
        },
    ],
    technologies: [
        {
            category: "Game Development",
            items: ["Unity", "Shader Programming", "Pygame"],
        },
        {
            category: "Agorithm Development",
            items: ["Genetic Algorithms", "Procedural Generation"],
        },
        {
            category: "Web Development",
            items: ["Astro", "React", "Tailwind CSS"],
        },
        {
            category: "Data Analysis & Visualization",
            items: ["Numpy", "Pandas", "Matplotlib"],
        },
    ],
    professional_experience:[],
    education: [
        {
            title: "Bachelor of Computer Science",
            major: "Application Development Elective Track",
            institution: "University of Makati",
            location: "Makati City, Metro Manila, Philippines",
            date: "2020 - 2024",
        },
    ],
}