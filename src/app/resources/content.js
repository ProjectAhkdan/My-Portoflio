import { InlineCode, SmartLink } from "@/once-ui/components";
import { title } from "process";

const person = {
  firstName: "Ahkdan Prika",
  lastName: "Nurwicaksono",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  get names() {
    return `${this.firstName}`;
  },
  role: "Frontend Web Developer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Indonesia"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ProjectAhkdan/ProjectAhkdan",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/ahkdanprikanurwicaksono-b1b0a9319",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "https://mail.google.com/mail/u/3/#sent?compose=new",
  },
];

const home = {
  label: "Home",
  title: `${person.names}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: (
    <>
      Crafting digital experiences with precision by day, fueling creativity by
      night
    </>
  ),
  subline: (
    <>
      I'm Ahkdan, a frontend web <InlineCode>developer</InlineCode>,where I
      create seamless and user-friendly web experiences, In my free time, I work
      on personal projects to further hone my skills.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: true,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        2024 Vocational School graduate majoring in Computer and Network
        Engineering with experience in the field Website and Dashboard
        development. Have the ability to use various languages programming such
        as HTML, CSS, Javascript, and Typescript, and familiar with using the
        Next JS framework, Tailwind CSS, and React JS. I am experienced in
        building responsive and front-end interfaces dynamic, utilizing APIs to
        obtain real-time data and historical data displayed on charts
        interactively. Currently I have a desire to develop my skills in the IT
        field again through internship and work opportunities.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Organizations & Commite Experience",
    experiences: [
      {
        company: "Head of Equipment Division1",
        timeframe: "2022 - 2023",
        role: "Paskibra Smk Negeri 2 Kabupaten Tangerang, and Paskibra district Sepatan",
        achievements: [
          <>
            Responsible for the management and maintenance of all Paskibra
            equipment and equipment.
          </>,
          <>
            Ensure distribution of equipment to PASKIBRA members in accordance
            with needs and standards which has been set.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Head of Equipment Division2",
        timeframe: "2024",
        role: "LKBB LOGARITMA VI Committee throughout Java Island",
        achievements: [
          <>
            Identify equipment needs, make a list of items that must be
            provided, and organize procurement and distribution schedule.
          </>,
          <>
            Communicate with vendors or equipment providers, make purchases or
            rentals goods, and ensure the quality and quantity of equipment is
            in accordance with event needs.
          </>,
        ],
        images: [],
      },
    ],
  },

  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "SMK Negeri 2 Kabupaten Tangerang",
        description: (
          <>
            Department of Computer and Network Engineering | Average: 85.80 /
            100
          </>
        ),
      },
      {
        name: "Relevant Subjects",
        description: (
          <>
            Simulation and Digital Communication, Computer Systems, Basic
            Programming, and Basics Graphic Design, Broad Based Network (WAN)
            Technology, Network Infrastructure Administration, Administration
            Network Systems, Network Service Technology, and Creative
            Entrepreneurship Products.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Languages",
        description: <>Indonesian (Active), English (Basic)</>,
      },
      {
        title: "Software",
        description: <>Visual Studio Code, Figma, Git, Github</>,
      },
      {
        title: "Certification",
        description: (
          <SmartLink href="https://drive.google.com/file/d/1Bm39xMVIi7gAN7y4dDJJXTZFi4xqRGAt/view?pli=1">
            Akademik or non Akademik
          </SmartLink>
        ),
      },
      {
        title: "Excess",
        description: (
          <>
            Computer, HTML, CSS, JavaScript, TypeScript, Tailwind CSS, Next JS,
            React JS, Communication, Work Same, Adapt
          </>
        ),
      },
      {
        title: "Lack",
        description: (
          <>
           Don't understand in depth about the Next js Framework
          </>
        ),
      }
    ],
  },
};

const blog = {
  label: "Blog",
  title: `
  I want to apologize for the lack of content on this blog right now. I'm working hard to prepare useful information to share soon. Thank you for your patience!
`,
  description: `Read what ${person.name} has been up to recently.`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/projects/project-01/cover-01.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
