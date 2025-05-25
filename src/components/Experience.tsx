// import { FaBriefcase, FaCodeBranch } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'FutureMaker and Founder',
      company: 'Standard Chartered x Itify',
      duration: 'August 2023 - Present',
      description: [
        'Pitched and secured £2000 funding for an AI-focused entrepreneurial venture, overseeing business development and operations. Spearheaded the creation of innovative software solutions. ',
        'Engineered an AI app using Flutter and website with React, JavaScript, and PHP with a 92% accuracy. ',
      ],
    //   icon: <FaBriefcase className="text-teal-600" /> // Ensure className is passed correctly
    },
    {
      id: 2,
      role: 'Software Engineering Intern',
      company: 'BlackRock',
      duration: 'June - August 2024',
      description: [
        'Enhanced BlackRock’s flagship Aladdin OS with AI-driven features for an application serving 500,000 global users, working as a Full Stack Developer with Java, Angular, and concurrent API endpoints. ',
        'Employed a Perl script for effective server management, maintaining a stable development environment.',
        'Improved UX/UI design to boost 25% user engagement, for an intuitive and efficient user experience. ',
        'Designed user interfaces using Java Swing and had 80% coverage unit testing with Mockito. '
      ],
    //   icon: <FaCodeBranch className="text-teal-600" /> // Ensure className is passed correctly
    },
    {
      id: 3,
      role: 'Software Engineering Team Lead',
      company: 'University of Nottingham',
      duration: 'October 2023 – May 2024',
      description: [
        'Directed a cross-functional team of 8 in delivering a React browser-based interactive whiteboard, ensuring timely project completion through effective coordination of weekly stand-ups and task allocation.',
        'Spearheaded back-end development using JavaScript and Supabase API within ScrumBan workflows, achieving a 25% reduction in bug reports through test-driven development and pair programming.',
        'Engineered an AI app using Flutter and website with React, JavaScript, and PHP with a 92% accuracy.',
      ],
    //   icon: <FaBriefcase className="text-teal-600" /> // Ensure className is passed correctly
    },
    {
      id: 4,
      role: 'Code For Good Software Engineer Hackathon',
      company: 'J.P Morgan',
      duration: 'June - August 2024',
      description: [
        'Lead front-end developer and Git admin for a team of 6 working with the Creativators charity to develop an online booking system utilising Bootstrap, React and JavaScript in a 24-hour hackathon.',
        'Developed a Python AI chatbot using NLTK and TensorFlow achieving 90% accuracy rate in responses.',
      ],
    //   icon: <FaCodeBranch className="text-teal-600" /> // Ensure className is passed correctly
    },
    {
      id: 5,
      role: 'Software Development Engineer Spring Intern',
      company: 'Amazon',
      duration: 'June 2023',
      description: [  
        "Championed agile methodologies to facilitate code reviews and paired programming sessions, driving the development of a Java-based role-playing game, that achieved a 4.5 out 5-star rating.",
        "Employed continuous integration to enhance UI designs, boosting user engagement by 12% and adapting to evolving needs through daily stand-up meetings.",
      ],
    }
  ];

  return (
    <div>        
      <div className="flex items-center mb-8">
        <div className="bg-gradient-to-r from-teal-100 to-purple-100 p-3 rounded-xl mr-4 flex-shrink-0">
          {/* Placeholder for icon, uncomment if using react-icons */}
          {/* <FaGraduationCap className="text-teal-600 text-2xl" /> */}
          <span className="text-teal-600 text-2xl">💼</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600 text-transparent">
          Professional Experience
        </h2>
      </div>
      
      <div className="space-y-8">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pl-8 group">
            {/* Timeline dot */}
            <div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-teal-500 border-4 border-teal-100 group-hover:bg-teal-600 transition-colors"></div>
            
            {/* Timeline connector */}
            {exp.id !== experiences.length && (
              <div className="absolute left-[7px] top-5 bottom-0 w-0.5 bg-gray-200"></div>
            )}
            
            <div className="bg-gray-50 p-5 rounded-lg hover:bg-teal-50 transition-colors duration-300">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-800">{exp.role}</h3>
                {/* <span className="text-sm text-teal-600 font-medium">{exp.duration}</span> */}
                <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex-shrink-0 ml-4">
                    {exp.duration}
                  </span>
              </div>
              
              <h4 className="text-md font-medium text-gray-600 mb-3">{exp.company}</h4>
              
              <ul className="space-y-2">
                {exp.description.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;