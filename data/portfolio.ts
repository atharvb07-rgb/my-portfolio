
export const projectsData = [
    {
        id: 1,
        title: "Gyan Setu",
        category: "EdTech Platform",
        tagline: "Gamifying education to bridge the gap between learning and productivity.",
        description: "Gyan Setu is not just a study app; it's a productivity ecosystem. I noticed that students struggle with consistency, so I built interactive and engaging way to study. It uses Next.js for a snappy UI and Firebase for real-time data syncing.",
        tech: ["Next.js", "Firebase", "Tailwind CSS", "Framer Motion"],
        // THIS IS WHERE YOU ADD YOUR PHOTOS
        // Put these images in your public folder (e.g., public/p1-main.jpg)
        coverImage: "/p1-main.jpg",
        gallery: [
            "/gyansetu1.jpg",
        ],
        challenges: "studying in a intresting way and visualising the topics was hard for students",
        solution: "Gamified the studying experience and visualised the topics in a intresting way",
        liveLink: "#",
        githubLink: "https://github.com/atharv/gyansetu",
        gradient: "from-indigo-500 to-purple-500",
    },
    {
        id: 2,
        title: "Project Wall-EVE",
        category: "Robotics & AI",
        tagline: "A desktop companion that knows how you feel.",
        description: "Wall-EVE is a physical robot powered by a Raspberry Pi 5. Unlike standard assistants, it uses Computer Vision to analyze facial expressions. If you look stressed, it proactively asks if you need a break or plays calming music.",
        tech: ["Python", "OpenCV", "Raspberry Pi", "IoT"],
        coverImage: "/p2-main.jpg",
        gallery: [
            "/p2-1.jpg",
            "/p2-2.jpg"
        ],
        challenges: "creating a program that can analyse human emotions and also able to do any kind of office and personal work",
        solution: "Used the best libraries and connected the best api's that can work and also make sure the privacy of the data",
        liveLink: "#",
        githubLink: "https://github.com/atharv/wall-eve",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        id: 3,
        title: "Panacea",
        category: "Healthcare Innovation",
        tagline: "Auditing prescriptions with AI to prevent medical errors.",
        description: "Built during the SpinSci hackathon, Panacea unifies patient records. The core feature is access pin, user gets the access pin that should be put into the doctor dashboard that instantly gets the data of the patient",
        tech: ["React", "Node.js", "AI/ML", "Blockchain"],
        coverImage: "/p3-main.jpg",
        gallery: [
            "/panacea1.jpg",
            "/panacea2.jpg",
            "/panacea3.jpg"
        ],
        challenges: "Ensuring patient data privacy while training the AI model.",
        solution: "We used a mocked dataset for the hackathon and implemented a localized processing architecture.",
        liveLink: "#",
        githubLink: "#",
        gradient: "from-emerald-500 to-green-500",
    }
];

export const achievementsData = [
    {
        id: 1,
        title: "2nd Winner: AI Web Design",
        issuer: "AI Cell, Universal AI University",
        date: "September 2025",
        category: "Hackathon Win",
        description: "Achieved 2nd place in the AI-powered web design hackathon.",
        // Details for the 'Deep Dive' page
        details: "Secured the 2nd rank in a competitive hackathon focused on integrating Artificial Intelligence into modern web workflows. Our team utilized AI tools to generate dynamic layouts and optimize user experience in real-time.",
        image: "/cert3.PNG", // Make sure this image exists in /public
        impact: "Recognized for the most innovative use of generative AI in UI/UX.",
        skills: ["AI Integration", "Web Design", "Rapid Prototyping", "UI/UX"],
        link: "#"
    },
    {
        id: 2,
        title: "Hackathon Finalist",
        issuer: "SpinSci Healthcare Challenge",
        date: "Jan 2026",
        category: "Healthcare Innovation",
        description: "Reached top 30 out of 200+ teams with Project Panacea.",
        // Details for the 'Deep Dive' page
        details: "Project Panacea stood out among 200+ entries for its practical approach to solving patient record fragmentation. We demonstrated a live prototype that uses AI to audit prescriptions and prevent medication errors.",
        image: "/cert4.jpeg", // Make sure this image exists in /public
        impact: "Selected as Top 30 Finalist for technical feasibility and social impact.",
        skills: ["Healthcare IT", "System Architecture", "React", "Team Leadership"],
        link: "#"
    }
];