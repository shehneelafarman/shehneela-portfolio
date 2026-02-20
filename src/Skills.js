const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Dart", icon: "https://cdn3d.iconscout.com/3d/free/thumb/free-dart-3d-icon-png-download-7578014.png", level: 85 },
      { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", level: 80 },
      { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", level: 85 },
    ],
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg", level: 90 },
      { name: "CSS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg", level: 85 },
      { name: "Tailwind CSS", icon: "https://avatars.githubusercontent.com/u/67109815?s=200&v=4", level: 80 },
      { name: "React.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", level: 85 },
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "Flutter", icon: "https://cdn.postindustria.com/wp-content/uploads/2020/12/Flutter-2.jpg", level: 85 },
      { name: "React Native", icon: "https://reactnative.dev/img/header_logo.svg", level: 80 },
      { name: "Android Studio", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/androidstudio/androidstudio-original.svg", level: 75 },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Flask", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmD38KsMgEwahtWc_Nfs5ZVktP9dBc36MUZA&s", level: 80 },
      { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg", level: 75 },
      { name: "Firebase", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_Ho-GIw7Apr1c6B6yYl3mC-vPW4X2jCh2Q&s", level: 85 },
    ],
  },
  {
    title: "Version Control & Dev Tools",
    skills: [
      { name: "Git", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg", level: 85 },
      { name: "GitHub", icon: "https://e7.pngegg.com/pngimages/914/758/png-clipart-computer-icons-logo-github-github-logo-logo-computer-program-thumbnail.png", level: 90 },
      { name: "Bitbucket", icon: "https://cdn.worldvectorlogo.com/logos/bitbucket-icon.svg", level: 75 },
      { name: "Postman", icon: "https://www.svgrepo.com/show/354202/postman-icon.svg", level: 80 },
    ],
  },
  {
    title: "Design & Collaboration Tools",
    skills: [
      { name: "Figma", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg", level: 75 },
      { name: "Adobe XD", icon: "https://images.saasworthy.com/adobexd_387_logo_1740566754_5vscb.png", level: 70 },
      { name: "Canva", icon: "https://yt3.googleusercontent.com/M7S2_gnnaJT5buAfWW4tanX9NELz5PddzNCQgnRV1oP8t12s5pg4cYKMChkEoh8gtGX__KtcYKU=s900-c-k-c0x00ffffff-no-rj", level: 85 },
      { name: "Trello", icon: "https://cdn.worldvectorlogo.com/logos/trello.svg", level: 80 },
      { name: "Jira", icon: "https://cdn.worldvectorlogo.com/logos/jira-1.svg", level: 75 },
      { name: "Slack", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/slack/slack-original.svg", level: 85 },
    ],
  },
];


export default function Skills() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {skillCategories.map((category, index) => (
        <div
          key={index}
          className="bg-gray-100 dark:bg-gray-900 p-6 rounded-xl shadow-md"
        >
          {/* Category Title */}
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-gray-800 dark:text-white">
            {category.title}
          </h3>

          {/* Skills List */}
          <div className="space-y-4">
            {category.skills.map((skill, i) => (
              <div key={i}>
                {/* Skill Name & Percentage */}
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-3">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-6 h-6 object-contain"
                    />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-gray-300 dark:bg-gray-700 h-2 rounded-full">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
