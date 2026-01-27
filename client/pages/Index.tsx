import { Mail, Linkedin, MapPin, Award } from "lucide-react";

export default function Index() {
  const skills = [
    "Positive Employee Relations",
    "Compliance Management",
    "Vendor Management",
    "Full-Cycle Recruiting",
    "Employer Branding",
    "Diversity & Inclusion",
    "Recruitment Analytics",
    "Stakeholder Management",
    "ATS Management",
    "HR Analytics",
  ];

  const experience = [
    {
      company: "Appyzie",
      title: "Human Resources Executive",
      duration: "July 2025 - Present (7 months)",
      location: "Jaipur",
      description:
        "HR professional managing end-to-end HR operations including payroll processing, employee engagement initiatives, full-cycle recruitment, HR policy implementation, onboarding, and compliance. Skilled in fostering a positive work culture while ensuring smooth and efficient HR functions.",
    },
    {
      company: "Bot Consulting",
      title: "Talent Acquisition Partner | Strategic Recruitment | Employer Branding | Talent Management",
      duration: "May 2024 - June 2025 (1 year 2 months)",
      location: "Jaipur, Rajasthan, India",
      description:
        "Experienced Talent Acquisition Partner specializing in full-cycle recruitment and strategic talent management. Collaborated with hiring teams to align recruitment strategies with business goals, ensuring the attraction and retention of top-tier talent. Passionate about enhancing employer branding, driving diversity, and optimizing hiring processes for efficiency. Proven expertise across industries in sourcing, interviewing, and onboarding, with a focus on delivering an exceptional candidate experience and fostering long-term relationships.",
      highlights: [
        "Full-Cycle Recruiting",
        "Employer Branding",
        "Diversity & Inclusion",
        "Recruitment Analytics",
        "Stakeholder Management",
        "ATS Management",
      ],
    },
    {
      company: "TALENTPLOYER",
      title: "Information Technology Recruiter",
      duration: "May 2023 - June 2025 (2 years 2 months)",
      location: "Jaipur, Rajasthan, India",
    },
    {
      company: "Converse Placement Services India Pvt.Ltd",
      title: "Human Resources Specialist",
      duration: "July 2022 - May 2023 (11 months)",
      location: "India",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-background to-blue-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-teal-200 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-8 relative z-10">
        {/* Left Sidebar - Contact Info */}
        <div className="lg:col-span-1 bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 text-primary-foreground p-8 lg:sticky lg:top-20 lg:h-fit lg:overflow-y-auto rounded-b-3xl lg:rounded-2xl shadow-2xl transform transition-all duration-300 slide-in-left hover-lift">
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="w-40 h-40 rounded-2xl bg-white/20 backdrop-blur-sm overflow-hidden border-4 border-white/30 shadow-xl hover-lift float glow-effect">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F14afa3b7489b4bb2bfe41ff4aff8b2e6%2Ff25cd4716bf64c0fafd2c67799ec6191?format=webp&width=800&height=1200"
                  alt="Surbhi Prajapati"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
              <div className="space-y-3">
                <div className="flex gap-3 items-start group">
                  <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:text-accent transition-colors" />
                  <a
                    href="mailto:prajapatisurbhi8@gmail.com"
                    className="portfolio-link break-all text-white hover:text-accent"
                  >
                    prajapatisurbhi8@gmail.com
                  </a>
                </div>
                <div className="flex gap-3 items-start group">
                  <Linkedin className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:text-accent transition-colors" />
                  <a
                    href="https://www.linkedin.com/in/surbhiprajapati-4a5589238"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-link break-all text-white hover:text-accent"
                  >
                    www.linkedin.com/in/surbhiprajapati-4a5589238
                  </a>
                </div>
                <div className="flex gap-3 items-start">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="text-blue-100">Jaipur, Rajasthan, India</span>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="pt-6 border-t border-white/20">
              <h3 className="text-lg font-bold mb-4 text-white">Top Skills</h3>
              <div className="space-y-2 text-sm text-blue-100">
                <p className="flex items-center"><span className="w-1.5 h-1.5 bg-yellow-300 rounded-full mr-2"></span>Positive Employee Relations</p>
                <p className="flex items-center"><span className="w-1.5 h-1.5 bg-pink-300 rounded-full mr-2"></span>Compliance Management</p>
                <p className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-300 rounded-full mr-2"></span>Vendor Management</p>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="pt-6 border-t border-white/20">
              <h3 className="text-lg font-bold mb-4 flex gap-2 items-center text-white">
                <Award className="w-5 h-5" />
                Certifications
              </h3>
              <p className="text-sm text-blue-100 flex items-center"><span className="w-1.5 h-1.5 bg-yellow-300 rounded-full mr-2"></span>HR Analytics</p>
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-2 p-8 lg:py-12 lg:px-12 relative z-10">
          {/* Hero Section */}
          <div className="mb-12 lg:mb-16 slide-in-right">
            <div className="inline-block mb-4 scale-in">
              <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 font-semibold text-sm border border-purple-300 hover:shadow-lg transition-all duration-300 inline-block hover-lift">
                HR Executive & Talent Management Expert
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4 leading-tight bounce-in">
              Surbhi Prajapati
            </h1>
            <p className="text-xl md:text-2xl bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent font-bold mb-3 leading-relaxed fade-in-up" style={{animationDelay: '0.2s'}}>
              Building People-First Cultures
            </p>
            <p className="text-lg text-muted-foreground mb-3 fade-in-up" style={{animationDelay: '0.4s'}}>
              HR Executive @ Appyzie | Certified HR Analytics
            </p>
            <div className="flex gap-2 text-muted-foreground text-sm fade-in-up" style={{animationDelay: '0.6s'}}>
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>Jaipur, Rajasthan, India</span>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-12 lg:mb-16 fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-border hover-lift group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
              <h2 className="text-3xl font-bold text-primary mb-5 relative z-10">
                Professional Summary
              </h2>
              <p className="text-foreground leading-relaxed text-lg space-y-4 relative z-10">
                Passionate HR professional with expertise in building and managing
                high-performing teams. Specialized in full-cycle recruitment,
                employee engagement, and strategic HR operations. Committed to
                creating people-first cultures that drive organizational success
                and employee satisfaction.
              </p>
            </div>
          </section>

          <div className="section-divider"></div>

          {/* Skills Section */}
          <section className="mb-12 lg:mb-16 fade-in-up" style={{animationDelay: '0.4s'}}>
            <h2 className="text-3xl font-bold text-primary mb-8 bounce-in" style={{animationDelay: '0.5s'}}>
              Core Competencies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="skill-badge hover-lift" style={{animationDelay: `${0.6 + index * 0.1}s`}}>
                  {skill}
                </div>
              ))}
            </div>
          </section>

          <div className="section-divider"></div>

          {/* Experience Section */}
          <section className="mb-12 lg:mb-16 fade-in-up" style={{animationDelay: '0.5s'}}>
            <h2 className="text-3xl font-bold text-primary mb-8 bounce-in" style={{animationDelay: '0.6s'}}>
              Professional Experience
            </h2>
            <div className="space-y-10">
              {experience.map((job, index) => (
                <div key={index} className="experience-card bg-white rounded-lg p-6 border border-border hover:border-secondary/50 group relative overflow-hidden" style={{animationDelay: `${0.7 + index * 0.15}s`}}>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-primary mb-1 group-hover:text-secondary transition-colors duration-300">
                      {job.company}
                    </h3>
                    <p className="text-secondary font-semibold text-lg mb-2">
                      {job.title}
                    </p>
                    <div className="flex flex-col md:flex-row gap-3 mb-4">
                      <p className="text-muted-foreground font-medium text-sm">
                        📅 {job.duration}
                      </p>
                      <p className="text-muted-foreground font-medium text-sm">
                        📍 {job.location}
                      </p>
                    </div>
                    {job.description && (
                      <p className="text-foreground leading-relaxed mb-4 text-base">
                        {job.description}
                      </p>
                    )}
                    {job.highlights && (
                      <div className="flex flex-wrap gap-2">
                        {job.highlights.map((highlight, hIdx) => (
                          <span
                            key={hIdx}
                            className="text-xs font-semibold bg-gradient-to-r from-accent/20 to-secondary/20 text-secondary px-3 py-1.5 rounded-full border border-secondary/30 hover-lift transition-all duration-300"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <div className="section-divider"></div>

          {/* Education Section */}
          <section className="mb-12 lg:mb-16 fade-in-up" style={{animationDelay: '1s'}}>
            <h2 className="text-3xl font-bold text-primary mb-8 bounce-in" style={{animationDelay: '1.1s'}}>
              Education
            </h2>
            <div className="experience-card bg-white rounded-lg p-6 border border-border hover:border-secondary/50 group relative overflow-hidden" style={{animationDelay: '1.2s'}}>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                  Suresh Gyan Vihar University
                </h3>
                <p className="text-secondary font-semibold text-lg mb-3">
                  Master of Business Administration - MBA
                </p>
                <p className="text-foreground mb-2">
                  Human Resources Management and Services
                </p>
                <p className="text-muted-foreground font-medium">📍 India</p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <div className="pt-12 mt-12 border-t border-border text-center fade-in-up" style={{animationDelay: '1.3s'}}>
            <p className="text-muted-foreground text-sm mb-4">© 2025 Surbhi Prajapati. All rights reserved.</p>
            <div className="flex justify-center gap-6">
              <a href="mailto:prajapatisurbhi8@gmail.com" className="inline-flex items-center gap-2 text-secondary hover:text-accent font-semibold transition-all duration-300 hover:scale-110 hover-lift">
                <Mail className="w-4 h-4" />
                Email
              </a>
              <a href="https://www.linkedin.com/in/surbhiprajapati-4a5589238" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-secondary hover:text-accent font-semibold transition-all duration-300 hover:scale-110 hover-lift">
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
