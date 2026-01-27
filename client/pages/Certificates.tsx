import { Award, Download, ExternalLink } from "lucide-react";

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: "HR Analytics Certified",
      issuer: "Professional HR Analytics Body",
      date: "2024",
      description:
        "Comprehensive certification in HR Analytics covering data-driven decision making, metrics analysis, and workforce planning.",
      color: "from-purple-500 to-purple-600",
      skills: [
        "Data Analysis",
        "HR Metrics",
        "Workforce Planning",
        "Analytics Tools",
      ],
    },
    {
      id: 2,
      title: "Full-Cycle Recruitment Expert",
      issuer: "Talent Management Institute",
      date: "2023",
      description:
        "Advanced certification in full-cycle recruitment processes, from sourcing to onboarding and retention strategies.",
      color: "from-blue-500 to-blue-600",
      skills: [
        "Sourcing",
        "Interviewing",
        "Onboarding",
        "Candidate Experience",
      ],
    },
    {
      id: 3,
      title: "Employee Relations Manager",
      issuer: "HR Professional Association",
      date: "2023",
      description:
        "Expert-level certification in managing employee relations, compliance, and fostering positive workplace cultures.",
      color: "from-teal-500 to-teal-600",
      skills: [
        "Employee Relations",
        "Compliance",
        "Conflict Resolution",
        "Culture Building",
      ],
    },
    {
      id: 4,
      title: "Employer Branding Specialist",
      issuer: "Brand Management Academy",
      date: "2024",
      description:
        "Specialized certification in creating and maintaining strong employer brands and attracting top talent.",
      color: "from-pink-500 to-pink-600",
      skills: [
        "Brand Strategy",
        "Recruitment Marketing",
        "EVP Development",
        "Talent Attraction",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-8 pb-12 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float"></div>
      <div
        className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-12 fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent mb-4 bounce-in">
            Certifications & Credentials
          </h1>
          <p
            className="text-xl text-gray-300 fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Professional development and industry-recognized certifications
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 scale-in group"
              style={{ animationDelay: `${0.3 + index * 0.15}s` }}
            >
              {/* Certificate Header with Gradient */}
              <div className={`bg-gradient-to-r ${cert.color} p-8 text-white`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                    <Award className="w-6 h-6" />
                  </div>
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm">
                    {cert.date}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{cert.title}</h3>
                <p className="text-white/90">{cert.issuer}</p>
              </div>

              {/* Certificate Content */}
              <div className="p-8">
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">
                    Key Skills
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${cert.color} text-white`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Qualifications */}
        <div
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-2xl transition-all duration-500 fade-in-up group overflow-hidden relative"
          style={{ animationDelay: "1s" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
          <h2
            className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3 relative z-10 bounce-in"
            style={{ animationDelay: "1.1s" }}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg animate-pulse"></div>
            Additional Qualifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {[
              {
                title: "MBA in Human Resources",
                org: "Suresh Gyan Vihar University",
                details: "Specialized in HR Management & Services",
              },
              {
                title: "Advanced Training",
                org: "Multiple Institutes",
                details: "Continuous professional development in HR practices",
              },
              {
                title: "Industry Certifications",
                org: "Professional Bodies",
                details:
                  "Regular upskilling in latest HR trends and technologies",
              },
              {
                title: "Workshops & Seminars",
                org: "International Organizations",
                details:
                  "Participated in global HR conferences and training sessions",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="border-l-4 border-accent pl-6 py-4 slide-in-left hover-lift transition-all duration-300"
                style={{ animationDelay: `${1.2 + idx * 0.1}s` }}
              >
                <h4 className="text-lg font-bold text-foreground mb-1 group-hover:text-secondary transition-colors">
                  {item.title}
                </h4>
                <p className="text-purple-600 font-semibold mb-2">{item.org}</p>
                <p className="text-muted-foreground">{item.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="mt-12 text-center fade-in-up"
          style={{ animationDelay: "1.6s" }}
        >
          <h3
            className="text-2xl font-bold text-foreground mb-6 bounce-in"
            style={{ animationDelay: "1.7s" }}
          >
            Want to Know More?
          </h3>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 hover-lift group relative overflow-hidden"
          >
            <span className="relative z-10">Get In Touch</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>
      </div>
    </div>
  );
}
