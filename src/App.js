import Shehneela from './Assets/Shehneela.jpg';
import { FaEnvelope, FaLinkedin, FaGithub, FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import './App.css';
import Skills from './Skills';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);


  return (
    <div className="font-sans bg-white text-gray-900">
      <header className="fixed w-full bg-gray-800 dark:bg-black shadow-md z-10">
        <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto text-white">
          {/* Logo */}
          <h1 className="text-xl font-bold">Shehneela Farman</h1>

          <div className="flex items-center space-x-6">
            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-4 text-sm">
              <li><a href="#home" className="hover:text-green-600 transition">Home</a></li>
              <li><a href="#education" className="hover:text-green-600 transition">Education</a></li>
              <li><a href="#skills" className="hover:text-green-600 transition">Skills</a></li>
              <li><a href="#professionalexperience" className="hover:text-green-600 transition">Professional Experience</a></li>
              <li><a href="#projects" className="hover:text-green-600 transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-green-600 transition">Contact</a></li>
            </ul>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition-transform"
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
            </button>

            {/* Mobile Menu Icon */}
            <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
          </div>

        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-gray-800 dark:bg-black rounded-sm text-white fixed top-  6 right-0 w-3/5 h-30 overflow-y-auto p-6 space-y-6 shadow-lg">
            <a href="#home" onClick={() => setMenuOpen(false)} className="block hover:text-green-600">Home</a>
            <a href="#education" onClick={() => setMenuOpen(false)} className="block hover:text-green-600">Education</a>
            <a href="#skills" onClick={() => setMenuOpen(false)} className="block hover:text-green-600">Skills</a>
            <a href="#professionalexperience" onClick={() => setMenuOpen(false)} className="block hover:text-green-600">Professional Experience</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="block hover:text-green-600">Projects</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="block hover:text-green-600">Contact</a>
          </div>
        )}

      </header>


      <main className="pt-4 sm:pt-12 md:pt-8 lg:pt-4">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-center gap-8 bg-gray-200 dark:bg-black px-4 lg:px-16 py-12">

          <div className="text-left px-4 max-w-2xl">
            <h2 className="font-bold mb-4 text-2xl sm:text-3xl lg:text-5xl text-gray-800 dark:text-white">Hi, I'm Shehneela</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">A Software Engineer with a strong focus on designing and developing scalable, efficient, and maintainable software solutions. With a strong foundation in full-stack development, I'm passionate about solving real-world problems through technology. I’m always eager to learn, grow, and contribute to impactful projects.</p>
            <a
              href="/Shehneela-CV.pdf"
              download
              className="inline-block px-6 py-2 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition mt-10">
              Download CV
            </a>
            <div className="flex justify-start gap-4 mt-6">
              <a href="https://mail.google.com/mail/?view=cm&to=shehneelafarman@gmail.com" target="_blank" rel="noreferrer" className='text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-600 transition'><FaEnvelope size={24} /></a>
              <a href="https://www.linkedin.com/in/shehneelafarman039" target="_blank" rel="noreferrer" className='text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-600 transition'><FaLinkedin size={24} /></a>
              <a href="https://github.com/shehneelafarman" target="_blank" rel="noreferrer" className='text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-600 transition'><FaGithub size={24} /></a>
            </div>
          </div>

          <div className='w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 shadow-2xl dark:shadow-2xl dark:shadow-gray-800 rounded-full'>
            <img src={Shehneela} alt='Shehneela' className='w-full h-full object-cover rounded-full shadow-2xl' />
          </div>

        </section>

        <hr className="border-gray-300 dark:border-gray-800" />

        {/* Education Section */}
        <section id="education" className="py-20 bg-gray-100 dark:bg-black px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Education</h2>
            <h3 className="text-xl font-semibold text-gray-700 dark:text-white">Bachelor of Science in Software Engineering</h3>
            <p className="text-gray-600 dark:text-gray-300 italic">COMSATS University Islamabad - Attock Campus</p>
            <p className="text-gray-500 dark:text-gray-300 italic">2021 - 2025</p>
          </div>
        </section>

        <hr className="border-gray-300 dark:border-gray-800" />

        {/* Skills Section */}
        <section id='skills' className="py-20 bg-gray-200 dark:bg-black px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Technical Skills</h2>
            <Skills />
          </div>
        </section>

        <hr className="border-gray-300 dark:border-gray-800" />

        {/* Professional Experience Section */}
        <section id="professionalexperience" className="py-20 bg-gray-100 dark:bg-black px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-10 text-gray-800 dark:text-white">Professional Experience</h2>
          </div>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 h-full border-l-4 border-gray-800 dark:border-gray-300"></div>


            {/* Internship 1 */}
            <div className="mb-12 ml-12 relative">
              <div className="absolute -left-7 top-2 w-6 h-6 bg-gray-800 rounded-full border-4 border-white"></div>
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 mr-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  RiayaTech Islamabad <span className="text-sm text-gray-500 dark:text-gray-300">— Flutter developer</span>
                </h3>
                <p className="text-gray-500 dark:text-gray-300 mb-4">Nov 2024 - Present | On-site</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-400">
                  <li>Flutter project structure, MVC, and state management with GetX.</li>
                  <li>Firebase integration and GitHub version control.</li>
                </ul>
              </div>
            </div>

            {/* Internship 2 */}
            <div className="mb-12 ml-12 relative">
              <div className="absolute -left-7 top-2 w-6 h-6 bg-gray-800 rounded-full border-4 border-white"></div>
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 mr-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  TeamsUp4Solutions Peshawar <span className="text-sm text-gray-500 dark:text-gray-300">— Software Developer Intern</span>
                </h3>
                <p className="text-gray-500 dark:text-gray-300 mb-4">Sep 2024 - Oct 2025 | 1 Months | On-site</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-400">
                  <li>Assisted in customizing Odoo modules (Sales, CRM, and Accounting) using Python and XML.</li>
                  <li>Designed and modified QWeb reports and form views tomeet business requirements.</li>
                </ul>
              </div>
            </div>

            {/* Internship 3 */}
            <div className="mb-12 ml-12 relative">
              <div className="absolute -left-7 top-2 w-6 h-6 bg-gray-800 rounded-full border-4 border-white"></div>
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 mr-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  ESoftage Lahore <span className="text-sm text-gray-500 dark:text-gray-300">— Mobile App Developer Intern</span>
                </h3>
                <p className="text-gray-500 dark:text-gray-300 mb-4">July 2024 - Aug 2024 | 2 Months | On-site</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-400">
                  <li>Designed UI using Adobe XD</li>
                  <li>Developed system using Flask, Python, MongoDB, and React Native</li>
                  <li>Integrated backend APIs and tested using Postman</li>
                </ul>
              </div>
            </div>

            {/* Internship 4 */}
            <div className="ml-12 relative">
              <div className="absolute -left-7 top-2 w-6 h-6 bg-gray-800 rounded-full border-4 border-white"></div>
              <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 mr-4">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  GigaLabs (Pvt) Ltd Lahore <span className="text-sm text-gray-500 dark:text-gray-300">— Backend Developer Intern</span>
                </h3>
                <p className="text-gray-500 dark:text-gray-300 mb-4">Jan 2024 - Feb 2024 | 1 Month | On-site</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-400">
                  <li>Built an Employee Management System using Python (OOP) with database integration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <hr className="border-gray-300 dark:border-gray-800" />

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-200 dark:bg-black px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">Projects</h2>
            <div className="grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-3 gap-6">

              <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow hover:shadow-lg transition text-center">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">TWZN AI</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                  A comprehensive health app that lets users track prescriptions, daily dosage, meals, water intake, mood, and BMI. Integrated AI coach provides personalized health guidance, while real-time notifications keep users on track and maintain historical health data.
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-3">
                  <p className='font-bold  text-gray-800 dark:text-white text-center'>Tools & Technologies used:</p>Flutter, Firebase, Notifications, AI Integration
                </p>
                <a
                  href="https://github.com/shehneelafarman/twzn.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700 transition"
                >View on GitHub </a>
              </div>

              <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow hover:shadow-lg transition text-center">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Crypto Analyzer</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                  Your gateway to cryptocurrency insights and automated trading.
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-3">
                  <p className='font-bold  text-gray-800 dark:text-white text-center'>Tools & Technologies used:</p>Adobe XD, React Native, Flask, Python, Postman, Git, Github, Android Studio, MongoDB Compass
                </p>
                <a
                  href="https://github.com/shehneelafarman/CryptoAnalyzer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700 transition"
                >View on GitHub </a>
              </div>

              <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow hover:shadow-lg transition text-center">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center">Portfolio Website</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 text-center mt-1">
                  A clean and responsive website showcasing my skills, projects, and professional experience in software development.
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-3">
                  <p className='font-bold  text-gray-800 dark:text-white text-center'>Tools & Technologies used:</p>ReactJS, HTML, TailwindCSS
                </p>
                <a
                  href="https://github.com/shehneelafarman/shehneela-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700 transition"
                >View on GitHub </a>
              </div>



              {/* <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow hover:shadow-lg transition text-center">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center">Prayer App</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 text-center mt-1">
                  A mobile application designed to help users stay consistent with daily prayers by providing reminders and prayer time tracking based on their location.
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-3">
                  <p className='font-bold'>Tools & Technologies used:</p>React Native
                  </p> */}
              {/* <a 
                 href="https://github.com/shehneelafarman/CryptoAnalyzer" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="inline-block mt-4 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700 transition"
                  >View on GitHub </a> */}
              {/* </div> */}

              <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow hover:shadow-lg transition text-center">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center">COMSATS Website UI Clone</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 text-center mt-1">
                  A front-end clone replicating the official COMSATS University website layout and design to practice adaptive and user-friendly interface development.
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-3">
                  <p className='font-bold text-gray-800 dark:text-white text-center'>Tools & Technologies used:</p>HTML, CSS, JS
                </p>
                <a
                  href="https://github.com/shehneelafarman/COMSATS-UI-Clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700 transition"
                >View on GitHub </a>
              </div>

              <div className="p-4 border rounded-lg bg-white dark:bg-gray-800 shadow hover:shadow-lg transition text-center">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white text-center">Amazon Website UI Clone</h3>
                <p className="text-sm text-gray-500 dark:text-gray-300 text-center mt-1">
                  A front-end clone replicating the official Amazon website layout and design to practice UI development.
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-300 mt-3">
                  <p className='font-bold  text-gray-800 dark:text-white text-center'>Tools & Technologies used:</p>HTML, CSS, JS
                </p>
                <a
                  href="https://github.com/shehneelafarman/Amazon-UI-Clone"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700 transition"
                >View on GitHub </a>
              </div>

            </div>
          </div>
        </section>

        <hr className="border-gray-300 dark:border-gray-800" />

        {/* Contact Section */}
        <section className="bg-gray-300 dark:bg-black py-12 px-4" id="contact">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Get In Touch</h2>
            <p className="text-sm text-gray-500 dark:text-gray-300 text-center mt-1 mb-5">I'm always open to discussing new opportunities and interesting projects. Let's connect!</p>

            {/* Icons Row */}
            <div className="flex justify-center gap-8 text-4xl">
              {/* Email */}
              <a
                href="https://mail.google.com/mail/?view=cm&to=shehneelafarman@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-600 transition"
              >
                <FaEnvelope />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/shehneelafarman039"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-600 transition"
              >
                <FaLinkedin />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/shehneelafarman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-white hover:text-green-600 dark:hover:text-green-600 transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </section>

      </main>
      <hr className="border-gray-300 dark:border-gray-800" />

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-black text-center py-4 text-sm text-white">
        Shehneela Farman &copy; {new Date().getFullYear()}
      </footer>

    </div>
  );
}

export default App;
