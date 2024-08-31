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

const Hobbies = [
  {
    title: "Theology",
    emoji: "📚",
  },
  {
    title: "Bible Reading",
    emoji: "📖",
  },
  {
    title: "Sharing Gospel",
    emoji: "🗣️",
  },
  {
    title: "Fitness",
    emoji: "🏃🏼‍♂️",
  },
  {
    title: "Travel",
    emoji: "🧳",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          title="About Me"
          eyebrow="A Glipse Into My World"
          description="Learn more about who I am, What I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-6">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my prespectives."
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={bookImage} alt="Book Cover" />
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I use."
              className="px-6 pt-6"
            />
            <ToolboxItems items={toolboxItems} className="mt-6" />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>
          <Card>
            <CardHeader
              title="Beyond the Code"
              description="Explore my interest and hobbies beyond the digital realm."
            />
            <div>
              {Hobbies.map((item) => (
                <div key={item.title}>
                  <span>{item.title}</span>
                  <span>{item.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt="map" />
            <Image src={smileMemoji} alt="smile memoji" />
          </Card>
        </div>
      </div>
    </div>
  );
};
