// src/components/Experience.tsx
import React from 'react';
// import { FaBriefcase, FaStar } from 'react-icons/fa'; // Example icons

interface ExperienceEntry {
  id: number;
  title: string;
  company: string;
  duration: string;
  location?: string; // Optional: if you want to include location
  roleType?: string; // e.g., "Individual Contributor", "Team Lead", "Mentor"
  contributions: string[]; // General technical contributions
  leadershipHighlights?: string[]; // Specific leadership achievements
}

const Leadership: React.FC = () => {
  const experienceData: ExperienceEntry[] = [
    {
      id: 1,
      title: "Head of Marketing and Business", // Example: A leadership title
      company: "Formula Student:AI Nottingham",
      duration: "April 2024 - June 2025",
      location: "Nottingham, UK",
      roleType: "Head of Marketing and Business", // Explicitly state the role type
      contributions: [
        "Spearhead business and marketing endeavours, orchestrating sponsor relationships and meticulously managing budgets to fuel the team's success in the competition.", 
        "Employ innovative marketing strategies to enhance the team's visibility and attract sponsors and optimize ROI, ensuring maximum exposure and support for the team's endeavours.",
      ],
      leadershipHighlights: [
        "Managed a team of 30 engineers, overseeing project assignments and delivery.",
        "Raiseed £4,000 for the fs:ai to be able to race an autonomous racecar in Silverstone",
        "Facilitated weekly stand-ups and sprint planning, ensuring agile methodologies were effectively followed.",
        "Coordinated cross-functional efforts with engineering and business teams to align technical roadmap with business goals."
      ]
    },
    
    {
      id: 2,
      title: "Treasurer", // Example: A leadership title
      company: "HackSoc Nottingham",
      duration: "April 2024 - June 2025",
      location: "Nottingham, UK",
      roleType: "Treasurer", // Explicitly state the role type
      contributions: [
        "Coordinating HackNotts' expansive budget, overseeing sponsorships and expenditures, optimizing resources to ensure an efficient experience for 3000 attendees.", 
        "Utilise financial management to streamline sponsor interactions, track expenditures, and allocate resources effectively, ensuring the event's success while maintaining fiscal responsibility.",
      ],
    //   leadershipHighlights: [
    //     "Managed a team of 4 software engineers, overseeing project assignments, code reviews, and performance evaluations.",
    //     "Mentored 2 junior developers, fostering their growth through regular 1:1s and technical guidance.",
    //     "Facilitated daily stand-ups and sprint planning, ensuring agile methodologies were effectively followed.",
    //     "Coordinated cross-functional efforts with product and design teams to align technical roadmap with business goals."
    //   ]
    },
    {
      id: 3,
      title: "Equity Fund Manager ", // Example: Non-traditional leadership
      company: "Nottingham Economics and Finance Society",
      duration: "September 2023 - July 2024",
      roleType: "Investment Fund Manager",
      contributions: [
        "Managing a portfolio valued at £2,500 and leading a team of 11 analysts to make alpha. Leverage and demonstrate expertise in investment strategy development, portfolio optimisation and risk management. Adept at navigating dynamic financial markets and adapting strategies.",
      ],
      leadershipHighlights: [
        "Coordinated a team of 15 analysts to be able to produce alpha in volatile markets",
        "Performed the largest return NEFS had ever seen"
      ]
    }
  ];

  return (
    <div className="h-full">
      {/* Header */}
      <div className="flex items-center mb-8">
        <div className="bg-gradient-to-r from-blue-100 to-teal-100 p-3 rounded-xl mr-4 flex-shrink-0">
          <span className="text-teal-600 text-2xl">💼</span> {/* Briefcase emoji */}
        </div>
        <h2 className="text-3xl font-bold text-gray-900 bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 text-transparent">
          Professional Experience
        </h2>
      </div>

      {/* Experience Timeline */}
      <div className="space-y-8 relative flex-grow">
        {/* Timeline bar */}
        <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-200 to-purple-200"></div>

        {experienceData.map((exp) => (
          <div key={exp.id} className="pl-12">
            {/* Timeline dot */}
            <div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-white border-4 border-teal-500 group-hover:bg-teal-100 transition-all duration-300 z-10"></div>

            {/* Experience Card */}
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 group-hover:border-teal-200 transition-all duration-300">
            <div className="max-w-prose flex-grow">
                <div className="flex justify-between items-start mb-2">
                <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <p className="text-teal-600 font-medium">{exp.company}</p>
                    {exp.location && <p className="text-gray-500 text-sm mt-1">{exp.location}</p>}
                </div>
                <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex-shrink-0 ml-4">
                    {exp.duration}
                </span>
                </div>

                {exp.roleType && exp.roleType !== "Individual Contributor" && (
                <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full mt-3 inline-block">
                    {exp.roleType}
                </span>
                )}

                {/* General Contributions */}
                {exp.contributions && exp.contributions.length > 0 && (
                <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Key Contributions
                    </h4>
                    <ul className="space-y-2">
                    {exp.contributions.map((item, i) => (
                        <li key={i} className="flex items-start">
                        <span className="text-teal-500 mr-2">•</span>
                        <span className="text-gray-700">{item}</span>
                        </li>
                    ))}
                    </ul>
                </div>
                )}

                {/* Leadership Highlights - Distinct Section */}
                {exp.leadershipHighlights && exp.leadershipHighlights.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-2 flex items-center">
                    <span className="text-xl mr-2">🌟</span> Leadership Impact
                    </h4>
                    <ul className="space-y-2">
                    {exp.leadershipHighlights.map((highlight, i) => (
                        <li
                        key={i}
                        className="flex items-start last:pb-2"
                        >
                        <span className="text-purple-500 mr-2">✓</span>
                        <span className="text-gray-800 font-medium">{highlight}</span>
                        </li>
                    ))}
                    </ul>
                </div>
                )} 
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;