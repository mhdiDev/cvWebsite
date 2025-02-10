import React from 'react';
import { Github, Mail, Linkedin, Download, User, Briefcase, GraduationCap, Code } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">John Doe</h1>
            <p className="text-xl md:text-2xl mb-6">Senior Software Engineer</p>
            <p className="text-lg mb-8">Passionate about creating elegant solutions to complex problems</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-200 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* About Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <User className="w-6 h-6 mr-2 text-blue-600" />
            <h2 className="text-2xl font-bold">About Me</h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700">
              With over 8 years of experience in software development, I specialize in building scalable web applications
              using modern technologies. I'm passionate about clean code, user experience, and solving complex problems.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Briefcase className="w-6 h-6 mr-2 text-blue-600" />
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Senior Software Engineer</h3>
              <p className="text-blue-600">Tech Corp Inc. • 2020 - Present</p>
              <p className="text-gray-700 mt-2">
                Led development of multiple high-impact projects, improving system performance by 40%.
                Mentored junior developers and implemented best practices.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Software Engineer</h3>
              <p className="text-blue-600">Innovation Labs • 2018 - 2020</p>
              <p className="text-gray-700 mt-2">
                Developed and maintained various web applications using React and Node.js.
                Collaborated with cross-functional teams to deliver projects on time.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <GraduationCap className="w-6 h-6 mr-2 text-blue-600" />
            <h2 className="text-2xl font-bold">Education</h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
            <p className="text-blue-600">University of Technology • 2014 - 2018</p>
            <p className="text-gray-700 mt-2">
              Graduated with honors. Focus on Software Engineering and Data Structures.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Code className="w-6 h-6 mr-2 text-blue-600" />
            <h2 className="text-2xl font-bold">Skills</h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'SQL'].map((skill) => (
                <div key={skill} className="bg-blue-50 rounded-lg px-4 py-2 text-blue-700">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </a>
          <p className="mt-4 text-gray-400">© 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;