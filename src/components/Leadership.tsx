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
      title: "Head of Marketing and Business",
      company: "Formula Student: AI Nottingham", // Keep it concise
      duration: "April 2024 - June 2025",
      location: "Nottingham, UK",
      roleType: "Marketing & Business Lead", // Clearer, more impactful role type
      contributions: [
        // Focus on core responsibilities and strategic actions
        "Spearheaded all business development and marketing initiatives for the university's autonomous racecar team, enhancing brand visibility and engagement.",
        "Orchestrated comprehensive sponsor relationships, from outreach and negotiation to ongoing engagement, ensuring sustained financial and resource support.",
        "Met all financial targets through meticulous budget management, optimizing resource allocation to fuel team operations and competition readiness.",
        "Implemented innovative digital marketing strategies to maximize team exposure and attract key sponsors, directly influencing ROI."
      ],
      leadershipHighlights: [
        // Focus on quantifiable impact and leadership outcomes
        "Successfully raised £4,000 for the team, directly enabling the development and racing of an autonomous racecar at Silverstone.",
        "Directed a cross-functional business team to align marketing efforts with engineering milestones, ensuring cohesive project delivery.",
        "Significantly enhanced the team's public and corporate image, attracting new partnerships and increasing overall project support.",
        "Managed all logistical and promotional aspects of public-facing events and sponsor engagements, ensuring professional representation."
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
      title: "Senior Student Mentor",
      company: "School of Computer Science, University of Nottingham",
      duration: "September 2023 - July 2025",
      roleType: "Senior Mentor", // Keep this explicit leadership type
      contributions: [
        // This section focuses on your core mentoring and support contributions
        "Provided personalized academic and career guidance to mentees, helping them navigate university life and professional development.",
        "Supported the successful transition of first-year students, addressing their queries and fostering a welcoming environment.",
        "Contributed to the overall mentor program's success by sharing best practices and assisting with mentor training."
      ],
      leadershipHighlights: [
        // This section highlights your direct leadership and organizational achievements
        "Promoted from Mentor to Senior Mentor, recognizing strong leadership and dedication.",
        "Led and organized all social events for the School of Computer Science, ensuring successful engagement and community building.",
        "Orchestrated welcome week events for 50-60 new students, facilitating integration into the community.",
        "Pioneered and managed first-year events, establishing foundational social activities for incoming students.",
        "Oversaw logistical planning and execution for all allocated events, ensuring smooth operations and positive attendee experiences."
      ]
    },
    {
      id: 4,
      title: "Equity Fund Manager",
      company: "Nottingham Economics and Finance Society (NEFS)", // Clarified full name
      duration: "September 2023 - July 2024",
      roleType: "Investment Fund Manager", // Strong and clear role type
      contributions: [
        // Focus on responsibilities and expertise
        "Managed a live equity portfolio valued at £2,500, applying advanced investment strategies to generate significant returns.",
        "Led and mentored a team of 11 junior analysts, guiding them through market analysis, valuation techniques, and portfolio construction.",
        "Developed and implemented robust investment strategies, including comprehensive portfolio optimization and risk management frameworks.",
        "Navigated dynamic financial markets, demonstrating adaptability and informed decision-making in volatile conditions."
      ],
      leadershipHighlights: [
        // Focus on quantifiable impact and leadership outcomes
        "Achieved the largest return in NEFS history, demonstrating exceptional alpha generation in challenging market conditions.",
        "Coordinated team efforts to successfully identify and execute high-conviction trades, contributing directly to portfolio outperformance.",
        "Enhanced team capabilities through structured training and collaborative research, empowering analysts to effectively contribute to investment decisions."
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
          <div className="flex-grow">
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
                    <li key={i} className="flex items-start last:pb-2">
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