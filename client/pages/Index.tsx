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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-50">
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-8">
        {/* Left Sidebar - Contact Info */}
        <div className="lg:col-span-1 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground p-8 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
          <div className="space-y-8">
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
                <p className="flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>Positive Employee Relations</p>
                <p className="flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>Compliance Management</p>
                <p className="flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>Vendor Management</p>
              </div>
            </div>

            {/* Certifications Section */}
            <div className="pt-6 border-t border-white/20">
              <h3 className="text-lg font-bold mb-4 flex gap-2 items-center text-white">
                <Award className="w-5 h-5" />
                Certifications
              </h3>
              <p className="text-sm text-blue-100 flex items-center"><span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>HR Analytics</p>
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-2 p-8 lg:py-12 lg:px-12">
          {/* Hero Section */}
          <div className="mb-12 lg:mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full bg-accent/15 text-secondary font-semibold text-sm border border-accent/30">
                HR Executive & Talent Management Expert
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4 leading-tight">
              Surbhi Prajapati
            </h1>
            <p className="text-xl md:text-2xl text-secondary font-semibold mb-3 leading-relaxed">
              Building People-First Cultures
            </p>
            <p className="text-lg text-muted-foreground mb-3">
              HR Executive @ Appyzie | Certified HR Analytics
            </p>
            <div className="flex gap-2 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>Jaipur, Rajasthan, India</span>
            </div>
          </div>

          {/* Professional Summary */}
          <section className="mb-8 lg:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Professional Summary
            </h2>
            <p className="text-foreground leading-relaxed text-base md:text-lg">
              Passionate HR professional with expertise in building and managing
              high-performing teams. Specialized in full-cycle recruitment,
              employee engagement, and strategic HR operations. Committed to
              creating people-first cultures that drive organizational success
              and employee satisfaction.
            </p>
          </section>

          <div className="section-divider"></div>

          {/* Skills Section */}
          <section className="mb-8 lg:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div key={index} className="skill-badge">
                  {skill}
                </div>
              ))}
            </div>
          </section>

          <div className="section-divider"></div>

          {/* Experience Section */}
          <section className="mb-8 lg:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Experience
            </h2>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="border-l-4 border-accent pl-6">
                  <h3 className="text-xl font-bold text-primary mb-1">
                    {job.company}
                  </h3>
                  <p className="text-secondary font-semibold mb-1">
                    {job.title}
                  </p>
                  <p className="text-muted-foreground text-sm mb-2">
                    {job.duration}
                  </p>
                  <p className="text-muted-foreground text-sm mb-3">
                    {job.location}
                  </p>
                  {job.description && (
                    <p className="text-foreground leading-relaxed mb-3">
                      {job.description}
                    </p>
                  )}
                  {job.highlights && (
                    <div className="flex flex-wrap gap-2">
                      {job.highlights.map((highlight, hIdx) => (
                        <span
                          key={hIdx}
                          className="text-xs bg-accent/10 text-accent px-2 py-1 rounded"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          <div className="section-divider"></div>

          {/* Education Section */}
          <section className="mb-8 lg:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
              Education
            </h2>
            <div className="border-l-4 border-accent pl-6">
              <h3 className="text-xl font-bold text-primary mb-1">
                Suresh Gyan Vihar University
              </h3>
              <p className="text-secondary font-semibold mb-2">
                Master of Business Administration - MBA, Human Resources
                Management and Services
              </p>
              <p className="text-muted-foreground">India</p>
            </div>
          </section>

          {/* Footer */}
          <div className="pt-8 border-t border-border text-center text-muted-foreground text-sm">
            <p>© 2025 Surbhi Prajapati. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
