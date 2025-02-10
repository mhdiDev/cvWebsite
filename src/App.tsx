import React from 'react';
import { Mail, Linkedin, Download, User, Briefcase, GraduationCap, Code, MapPin, Phone, Calendar } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header/Hero Section */}
      <header className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">Chbihi ElMehdi</h1>
            <p className="text-2xl md:text-3xl mb-8 text-center font-light text-slate-200">Product Leader (MBA)</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-8 text-slate-200">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="text-lg">0661265723</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span className="text-lg">m.chbihi@web-techno-consulting.fr</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="text-lg">23 rue de cocagne, 78990 Elancourt, France</span>
              </div>
            </div>
            <div className="flex justify-center space-x-6">
              <a href="mailto:m.chbihi@web-techno-consulting.fr" className="hover:text-slate-300 transition-colors p-2">
                <Mail className="w-7 h-7" />
              </a>
              <a href="https://www.linkedin.com/in/mehdi-chbihi-b8355821" className="hover:text-slate-300 transition-colors p-2" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-7 h-7" />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 max-w-5xl">
        {/* About Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <User className="w-7 h-7 mr-3 text-slate-700" />
            <h2 className="text-3xl font-bold text-slate-800">Profil</h2>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-100">
            <p className="text-slate-700 text-lg leading-relaxed">
              Passionné de nouvelles technologies, j'évolue dans le monde du web depuis plus de 10 ans. Passé par l'école des SSII, j'ai
              effectué plusieurs missions en participant à des projets web et mobiles avec les dernières technologies et méthodes de travail,
              en changeant de casquette au fur et à mesure des missions.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed mt-6">
              Appétence pour un produit fini de qualité, je mets en oeuvre mes compétences en gestion de projet, mon expérience du
              monde digital et la connaissance des contraintes d'un site web grand public pour satisfaire mes clients.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['#ProductLeader', '#ProductOwner', '#Scrum', '#agilité'].map((tag) => (
                <span key={tag} className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Briefcase className="w-7 h-7 mr-3 text-slate-700" />
            <h2 className="text-3xl font-bold text-slate-800">Expérience Professionnelle</h2>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-100 space-y-12">
            <div>
              <div className="border-l-4 border-slate-700 pl-6">
                <h3 className="text-2xl font-semibold text-slate-800">Product Leader Monitoring & Support One/Wired</h3>
                <p className="text-slate-600 mt-2 text-lg">Renault Group • 05/2022 - Présent</p>
                <p className="text-slate-500">Boulogne, France</p>
              </div>
              <ul className="list-disc list-inside text-slate-700 mt-6 space-y-3 ml-6">
                <li>Recueil des besoins et priorisation des indicateurs de performance clés en production</li>
                <li>Définition des user stories et gestion de backlog avec les équipes offshore</li>
                <li>Coordination des déploiements de produits pour Renault, Dacia, Mobilize et Alpine</li>
                <li>Animation de réunions techniques avec les Product Leaders</li>
              </ul>
            </div>
            
            <div>
              <div className="border-l-4 border-slate-700 pl-6">
                <h3 className="text-2xl font-semibold text-slate-800">Product Owner - Développeur full stack</h3>
                <p className="text-slate-600 mt-2 text-lg">Groupe LaCentrale • 06/2018 - 04/2022</p>
                <p className="text-slate-500">Paris, France</p>
              </div>
              <ul className="list-disc list-inside text-slate-700 mt-6 space-y-3 ml-6">
                <li>Élaboration de la roadmap produit et animation des cérémonies agiles</li>
                <li>Développement d'API REST et mise en place de monitors Grafana</li>
                <li>Développement de Step Functions AWS et maintenance de l'application web</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <GraduationCap className="w-7 h-7 mr-3 text-slate-700" />
            <h2 className="text-3xl font-bold text-slate-800">Formation</h2>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-100 space-y-8">
            <div className="border-l-4 border-slate-700 pl-6">
              <h3 className="text-2xl font-semibold text-slate-800">Executive MBA Management et Administration des Entreprises</h3>
              <p className="text-slate-600 mt-2 text-lg">IAE Paris - Sorbonne Business School • 2020 - 2022</p>
            </div>
            <div className="border-l-4 border-slate-700 pl-6">
              <h3 className="text-2xl font-semibold text-slate-800">Mastère Spécialisé en technologie du web</h3>
              <p className="text-slate-600 mt-2 text-lg">IMT Atlantique • 2008 - 2010</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Code className="w-7 h-7 mr-3 text-slate-700" />
            <h2 className="text-3xl font-bold text-slate-800">Compétences Techniques</h2>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-100">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                'TypeScript',
                'React',
                'Symfony',
                'Scala',
                'AWS Lambda',
                'API Gateway',
                'DynamoDB',
                'ElasticSearch',
                'Docker'
              ].map((skill) => (
                <div key={skill} className="bg-slate-50 rounded-lg px-6 py-3 text-slate-700 font-medium text-center border border-slate-200">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors font-medium"
          >
            <Download className="w-5 h-5 mr-2" />
            Télécharger CV
          </a>
          <p className="mt-6 text-slate-400">© 2024 Chbihi ElMehdi. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;