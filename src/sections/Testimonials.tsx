// import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
// import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
// import memojiAvatar5 from "@/assets/images/memoji-avatar-5.png";
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";
import { Card } from "@/components/Card";
import { Fragment } from "react";

const testimonials = [
  {
    name: "Choonho Son",
    position: "Managing Director @ktcloud Co., Ltd",
    text: "Suraj completed the LFX Mentorship program in Cloudforet Plugin Development 2023, actively engaging in the project. Though he initially faced challenges, he quickly adapted and efficiently completed his tasks, demonstrating strong potential. With his passion, enthusiasm, and solid programming foundation, I am confident Suraj will achieve outstanding results in his software development career.",
    avatar: memojiAvatar3,
  },
  {
    name: "Anamika Sahu",
    position: "Marketing Manager @Befrsher",
    text: "I highly recommend Suraj for his exceptional frontend development skills at Befrsher. His coding expertise, attention to detail, and collaborative spirit make him a valuable asset to any team.",
    avatar: memojiAvatar4,
  },
];

export const TestimonialsSection = () => {
  return (
    // The is a reusabel component

    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title="Happy People"
          eyebrow="What People Say about Me"
          description=" Don't just take my word for it. See what the people I've worked with say about my work."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:p-8 md:max-w-md p-6 lg:max-w-lg hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div className="">
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
