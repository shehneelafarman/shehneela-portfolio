
const skills = [
  { name: "Dart", icon: "https://cdn3d.iconscout.com/3d/free/thumb/free-dart-3d-icon-png-download-7578014.png" },
  { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
  { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
  { name: "HTML", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", icon: "https://avatars.githubusercontent.com/u/67109815?s=200&v=4" },
  { name: "Flask", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmD38KsMgEwahtWc_Nfs5ZVktP9dBc36MUZA&s" },
  { name: "Flutter", icon: "https://cdn.postindustria.com/wp-content/uploads/2020/12/Flutter-2.jpg" },
  { name: "React.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
  { name: "React Native", icon: "https://reactnative.dev/img/header_logo.svg" },
  { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
  { name: "Firebase", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2_Ho-GIw7Apr1c6B6yYl3mC-vPW4X2jCh2Q&s" },
  // { name: "MySQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
  { name: "Git", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://e7.pngegg.com/pngimages/914/758/png-clipart-computer-icons-logo-github-github-logo-logo-computer-program-thumbnail.png" },
  { name: "Bitbucket", icon: "https://cdn.worldvectorlogo.com/logos/bitbucket-icon.svg" },
  { name: "Android Studio", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/androidstudio/androidstudio-original.svg" },
  { name: "Figma", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg" },
  { name: "Adobe XD", icon: "https://images.saasworthy.com/adobexd_387_logo_1740566754_5vscb.png" },
  { name: "Canva", icon: "https://yt3.googleusercontent.com/M7S2_gnnaJT5buAfWW4tanX9NELz5PddzNCQgnRV1oP8t12s5pg4cYKMChkEoh8gtGX__KtcYKU=s900-c-k-c0x00ffffff-no-rj" },
  // { name: "Trello", icon: "https://cdn.worldvectorlogo.com/logos/trello.svg" },
  // { name: "Jira", icon: "https://cdn.worldvectorlogo.com/logos/jira-1.svg" },
  // { name: "Slack", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/slack/slack-original.svg" },
  { name: "Postman", icon: "https://www.svgrepo.com/show/354202/postman-icon.svg" },
  // { name: "Jenkins", icon: "https://www.jenkins.io/images/logos/jenkins/jenkins.svg" },
  // { name: "Docker", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
];

export default function Skills() {
  return (
    <div className="bg-gray-800 p-8 rounded-xl flex flex-wrap justify-center gap-8">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center text-white w-20 hover:scale-105 transition-transform duration-200"
        >
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-10 h-10 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 mb-2 rounded-md"
          />

          <span className="text-sm text-center">{skill.name}</span>
        </div>
      ))}
    </div>
  );
}
