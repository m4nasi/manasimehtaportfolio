import React from 'react';
import placeholderImage from '../assets/placeholder.jpg'; // Import the placeholder image

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveLink?: string; // Optional live demo link
  repoLink?: string; // Optional GitHub repository link
  span: string; // Tailwind CSS grid span class (e.g., "lg:col-span-2")
}

const Projects: React.FC = () => {
  const projectsData: Project[] = [
    {
      id: 1,
      title: "Deep Learning CNN-LSTM-AE Model with LLM Sentiment Analysis for Automated Trading",
      description: "Developed a CNN-LSTM-AE hybrid model for time-series trading analysis, integrating Gemini LLM sentiment analysis to enhance prediction accuracy using financial news and social media data.Conducted research on sentiment-driven trading strategies and portfolio allocation methods, evaluating their impact on market dynamics, and trading performance.Designed and deployed a TypeScript React website with a Python Flask back-end, enabling real-time visualisations with the AI model for enhanced data-driven decision-making",
      technologies: ["Python", "TypeScript", "React", "Flask", "CNN", "LSTM", "Autoencoder", "LLM", "Automated Trading", "Google Colab", "Google Gemini"],
      image: placeholderImage, // Updated to placeholder
      liveLink: "#",
      repoLink: "#",
      span: "lg:col-span-2", // Wider width
    },
    {
      id: 2,
      title: "Evaluation of A2C, PPO and DQN for Automated Trading",
      description: "Designed and implemented reinforcement learning agents, A2C, PPO, and DQN, for automated trading using Python, evaluating their performance in simulated financial markets.Conducted comparative analysis based on key trading metrics including Sharpe ratio, maximum drawdown, and cumulative returns, identifying optimal models for varying market conditions.Engineered custom trading environments and tailored reward functions to mirror real-world trading dynamics and improve agent decision-making efficiency",
      technologies: ["Python", "Reinforcement Learning", "A2C", "PPO", "DQN", "Google Colab"],
      image: placeholderImage, // Updated to placeholder
      liveLink: "#",
      repoLink: "#",
      span: "lg:col-span-1", // Standard card
    },
    {
      id: 3,
      title: "HyFlex-Compatible UAV Animal Feeding Problem Solver",
      description: "Implemented a HyFlex-compatible UAV Animal Feeding Problem domain and solution method using a selection hyper-heuristic in Java. Applied a variety of metaheuristic algorithms including PMX, AdjacentSwap, Reinsertion, NextDescent, and Davis Hill Climbing to explore optimal solutions. Developed and integrated the solution into the HyFlex framework, enhancing flexibility and efficiency in problem-solving. Conducted performance evaluation of different heuristics, comparing their effectiveness in solving complex UAV routing and feeding tasks.",
      technologies: ["Java"],
      image: placeholderImage, // Updated to placeholder
      liveLink: "#",
      repoLink: "#",
      span: "lg:col-span-1", // This card will be wider (2 out of 3 columns)
    },
    {
      id: 4,
      title: "Snake",
      description: "Designed and developed a multi-level Snake Game using JavaFX, transitioning from Java Swing to enhance UI responsiveness, performance, and overall user experience. •	Applied maintainable software design principles, ensuring a modular, scalable architecture that facilitates easy future updates and feature expansions. Implemented dynamic difficulty progression, introducing escalating speed, obstacles, and challenges to progressively enhance gameplay and player engagement.",
      technologies: ["Java", "JavaFX", "Java Swing"],
      image: placeholderImage, // Updated to placeholder
      liveLink: "#",
      repoLink: "#",
      span: "lg:col-span-2", // Standard width
    },
    {
      id: 5,
      title: "CPU Arithmetic Data Logic Unit (ALU)",
      description: "Designed and implemented Arithmetic Data Logic (ADL) for a CPU in Hardware Description Language (HDL), using logic gates to execute arithmetic operations. Developed low-level HDL code for arithmetic operations like addition, subtraction, multiplication, and division within the CPU architecture. Utilised a variety of logic gates (AND, OR, XOR, etc.) to create efficient arithmetic circuits, ensuring fast and accurate computation within the CPU.",
      technologies: ["HDL", "Logic Gates", "CPU Architecture"],
      image: placeholderImage, // Updated to placeholder
      liveLink: "#",
      repoLink: "#",
      span: "lg:col-span-2", // Standard width
    },
    {
      id: 6,
      title: "Concurrent Process Scheduler Simulation",
      description: "Developed software in C to emulate process execution and scheduling, applying concurrency principles like mutual exclusion, thread pools, deadlock avoidance, and load balancing, resulting in a 40% performance improvement. Implemented edge cases such as I/O handling, software interrupts, and concurrent priority queues using mutex arrays and pre-emptive/non-pre-emptive algorithms, reducing wait times for 100,000 processes by up to 50%.",
      technologies: ["C", "Concurrency", "Process Scheduling", "Mutex Arrays", "Pre-emptive Algorithms"],
      image: placeholderImage, // Updated to placeholder
      liveLink: "#",
      repoLink: "#",
      span: "lg:col-span-1", // Wider card
    },
    // {
    //   id: 5,
    //   title: "Machine Learning Microservice",
    //   description: "Developed and deployed a machine learning model as a service, exposing predictive analytics via a clean REST API.",
    //   technologies: ["Python (FastAPI)", "Scikit-learn", "Docker", "AWS Lambda"],
    //   image: "../assets/placeholder.jpg", // Updated to placeholder
    //   liveLink: "#",
    //   repoLink: "#",
    //   span: "lg:col-span-1", // Standard width
    // },
    // {
    //   id: 6,
    //   title: "Custom CLI Tool",
    //   description: "A command-line interface tool to automate common development tasks, improving workflow efficiency.",
    //   technologies: ["Python", "Click (CLI)", "Bash"],
    //   image: "../assets/placeholder.jpg", // Updated to placeholder
    //   liveLink: "#",
    //   repoLink: "#",
    //   span: "lg:col-span-1", // Standard width
    // },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center mb-8">
        <div className="bg-gradient-to-r from-blue-100 to-teal-100 p-3 rounded-xl mr-4 flex-shrink-0">
          <span className="text-teal-600 text-2xl">🚀</span> {/* Placeholder icon */}
        </div>
        <h2 className="text-3xl font-bold text-gray-900 bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 text-transparent">
          My Projects
        </h2>
      </div>

      {/* Projects Grid (Bento Box Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-grow">
        {projectsData.map((project) => (
          <div
            key={project.id}
            // bg-gray-50 p-5 rounded-lg hover:bg-teal-50 transition-colors duration-300
            className={`bg-teal-50 rounded-2xl shadow-lg overflow-hidden border border-gray-100
                        transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                        ${project.span} flex flex-col`}
          >
            {/* Project Image */}
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />

            <div className="p-6 flex-grow flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-grow">{project.description}</p>

              {/* Technologies */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              {/* <div className="flex space-x-4 mt-auto pt-4 border-t border-gray-100">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-600 hover:text-teal-800 font-medium transition-colors duration-200"
                  >
                    Live Demo
                  </a>
                )}
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
                  >
                    GitHub Repo
                  </a>
                )}
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;