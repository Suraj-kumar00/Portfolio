import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/linux-book-cover.png";
import Image from "next/image";
import AWSIcon from "@/assets/icons/AmazonWebServices.svg";
import DockerIcon from "@/assets/icons/Docker.svg";
import KubernetesIcon from "@/assets/icons/Kubernetes.svg";
import GoIcon from "@/assets/icons/Golang.svg";
import GitIcon from "@/assets/icons/git.svg";
import GitHubIcon from "@/assets/icons/github.svg";
import PrometheusIcon from "@/assets/icons/prometheus.svg";
import GrafanaIcon from "@/assets/icons/grafana.svg";
import TerraformIcon from "@/assets/icons/Terraform.svg";
import KafkaIcon from "@/assets/icons/Kafka.svg";
import LinuxIcon from "@/assets/icons/Linux.svg";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import TypeScriptIcon from "@/assets/icons/Typescript.svg";
import ReactIcon from "@/assets/icons/react.svg";
import NextJsIcon from "@/assets/icons/Nextjs.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import NodeJsIcon from "@/assets/icons/nodejs.svg";
import PostgreSQLIcon from "@/assets/icons/postgres.svg";
import RedisIcon from "@/assets/icons/redis.svg";
import TailwindCSSIcon from "@/assets/icons/twailwindcss.svg";
import VSCodeIcon from "@/assets/icons/vscode.svg";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/India-map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: "AWS",
    iconType: AWSIcon,
  },
  {
    title: "Docker",
    iconType: DockerIcon,
  },
  {
    title: "Kubernetes",
    iconType: KubernetesIcon,
  },
  {
    title: "Go",
    iconType: GoIcon,
  },
  {
    title: "Git",
    iconType: GitIcon,
  },
  {
    title: "GitHub",
    iconType: GitHubIcon,
  },
  {
    title: "Prometheus",
    iconType: PrometheusIcon,
  },
  {
    title: "Grafana",
    iconType: GrafanaIcon,
  },
  {
    title: "Terraform",
    iconType: TerraformIcon,
  },
  {
    title: "Kafka",
    iconType: KafkaIcon,
  },
  {
    title: "Linux",
    iconType: LinuxIcon,
  },
  {
    title: "JavaScript",
    iconType: JavaScriptIcon,
  },
  {
    title: "TypeScript",
    iconType: TypeScriptIcon,
  },
  {
    title: "ReactJs",
    iconType: ReactIcon,
  },
  {
    title: "NextJs",
    iconType: NextJsIcon,
  },

  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "NodeJs",
    iconType: NodeJsIcon,
  },
  {
    title: "PostgreSQL",
    iconType: PostgreSQLIcon,
  },
  {
    title: "Redis",
    iconType: RedisIcon,
  },
  {
    title: "TailwindCSS",
    iconType: TailwindCSSIcon,
  },
  {
    title: "VSCode",
    iconType: VSCodeIcon,
  },
];

const hobbies = [
  {
    title: "Theology",
    emoji: "📚",
    left: "5%",
    top: "5%",
  },
  {
    title: "Bible",
    emoji: "📖",
    left: "50%",
    top: "5%",
  },
  {
    title: "Sharing Gospel",
    emoji: "🗣️",
    left: "10%",
    top: "35%",
  },
  {
    title: "Fitness",
    emoji: "🏃🏼‍♂️",
    left: "5%",
    top: "65%",
  },
  {
    title: "Travel",
    emoji: "🧳",
    left: "70%",
    top: "45%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          title="About Me"
          eyebrow="A Glipse Into My World"
          description="Learn more about who I am, What I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1 ">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my prespectives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use."
                className=""
              />
              <ToolboxItems items={toolboxItems} className="" />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3 ">
            <Card className="h-[320px] p-0 flex flex-col col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interest and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{ left: hobby.left, top: hobby.top }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image
                  src={smileMemoji}
                  alt="smile memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
