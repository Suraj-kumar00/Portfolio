import gurunimbusProjectThumbnail from "@/assets/images/gurunimbusProjectThumbnail.png";
import FlashFathomAIThumbnail from "@/assets/images/FlashFathomAIThumbnail.png";
import AIChatbotThumbnail from "@/assets/images/AIChatbotThumbnail.png";
import DevOpsURLtoQR from "@/assets/images/DevOpsURLtoQR.png";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    company: "GuruNimbus",
    year: "2024",
    title: "A RAG-Powered AI Chatbot",
    results: [
      {
        title: "Rate My Professor Support Agent",
      },
      { title: "Web Scraping Integration" },
      { title: "Advanced Search option to find Professors" },
    ],
    link: "https://guru-nimbus.vercel.app/",
    image: gurunimbusProjectThumbnail,
  },
  {
    company: "FlashFathom-AI",
    year: "2024",
    title: "The ultimate flashcard generator.",
    results: [
      { title: "SaaS UI & Landing Page" },
      { title: "AI Flashcards generator with OpenAI." },
      { title: "Stripe Subscriptions for payments." },
    ],
    link: "https://flash-fathom-ai.vercel.app/",
    image: FlashFathomAIThumbnail,
  },
  {
    company: "AI Chatbot",
    year: "2024",
    title: "Build Educational AI Chatbot",
    results: [
      { title: " Intelligent Responses of AI Chatbot" },
      { title: " Deployment on AWS EC2: " },
      { title: " Auth for Personalized chat experiences." },
    ],
    link: "https://aicustomersupport-alpha.vercel.app/",
    image: AIChatbotThumbnail,
  },
  {
    company: "DevOps URL2QR",
    year: "2024",
    title: "Generetes QR Codes for the provided URL.",
    results: [
      { title: " Built a containerized URL-to-QR code app with Docker" },
      {
        title:
          "Automated CI/CD with GitHub Actions and deployed on Kubernetes.",
      },
      {
        title:
          "Ensured monitoring with Grafana, CloudWatch, and AWS S3 storage. ",
      },
    ],
    link: "https://github.com/Suraj-kumar00/DevOps-URL2QR",
    image: DevOpsURLtoQR,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="project">
      <div className="container">
        <SectionHeader
          eyebrow="Real-World Results"
          title="Featured Projects"
          description="See how I transfomed ideas into reality."
        />
        <div className="mt-10 md:mt-20 flex flex-col gap-20">
          {portfolioProjects.map((project, projectIndex) => (
            <Card
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky"
              style={{
                top: `calc(64px + ${projectIndex * 40}px`,
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${grainImage.src})`,
                }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="flex">
                    <div
                      className="bg-gradient-to-r from-emerald-300 to-sky-400
              inline-flex font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text
              "
                    >
                      <span> {project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm md:text-base text-white/50">
                        <CheckCircleIcon className="size-5" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button
                      className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold
            inline-flex items-center justify-center gap-2 mt-8"
                    >
                      <span>Visit Live Site</span>
                      <ArrrowUpRightIcon className="size-4 " />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
