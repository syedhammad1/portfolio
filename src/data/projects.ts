// Each project shows as a card; clicking it opens a gallery with the details.
//
// - `link` set      → "Live" badge + "Visit live site" button
// - `link` omitted  → "Private" badge + note that only screenshots can be shown
// - `media`         → first item is the card cover. Images or .mp4 videos.
//                     Put your own files in /public/works/<project>/ and reference
//                     them as "/works/<project>/1.png".

export type Media = { src: string; caption?: string };

export type Project = {
  slug: string;
  name: string;
  category: "web" | "native";
  summary: string; // one line, shown on the card hover
  description: string[]; // paragraphs in the gallery
  highlights?: string[];
  role?: string;
  year?: string;
  tech: string[];
  link?: string;
  linkLabel?: string;
  media: Media[];
};

const cl = "https://res.cloudinary.com/dwa1jtluu";

export const projects: Project[] = [
  {
    slug: "insurance-market",
    name: "InsuranceMarket.ae",
    category: "web",
    summary: "A UAE insurance marketplace with quote journeys across personal and business cover.",
    description: [
      "InsuranceMarket.ae brings a broad range of UAE insurance options into one online experience. The home page directs visitors to car, health, home, life, savings, travel, and specialist cover, with clear quote pathways and advisor contact options.",
      "Customer ratings, insurer partnerships, and policyholder figures reinforce the marketplace's trust signals as visitors compare coverage and move toward a quote.",
    ],
    tech: ["Node.js", "TypeScript", "PostgreSQL", "MongoDB", "React", "Kafka", "Docker"],
    link: "https://insurancemarket.ae/",
    media: [
      {
        src: "https://res.cloudinary.com/dujahxiqs/image/upload/v1790946302/cqzxubutg9tlx2fjmk3i.png",
        caption: "Front page",
      },
      {
        src: "https://res.cloudinary.com/dujahxiqs/image/upload/v1790946266/fsbqohpzmj9our665v1w.png",
        caption: "Second page",
      },
    ],
  },
  {
    slug: "investment-market",
    name: "InvestmentMarket.ae",
    category: "web",
    summary: "A mobile investing experience for exploring markets and tracking a portfolio.",
    description: [
      "InvestmentMarket pairs market education with a mobile investment experience. The supplied app screens center on a user's portfolio and verification status, with separate stock and crypto wallets and visible available-funds information.",
      "From the dashboard, users can explore investment opportunities and add cash, while account navigation keeps the portfolio and account areas close at hand.",
    ],
    tech: ["Node.js", "TypeScript", "MongoDB", "PostgreSQL", "Kafka", "Docker"],
    link: "https://www.investmentmarket.ae/",
    media: [
      {
        src: "https://res.cloudinary.com/dujahxiqs/image/upload/v1790946267/whhdhuassbbdxeywngbt.png",
        caption: "Front page",
      },
      {
        src: "https://res.cloudinary.com/dujahxiqs/image/upload/v1790946265/mw7mqapoj7zzedbo7mxh.png",
        caption: "Second page",
      },
      {
        src: "https://res.cloudinary.com/dujahxiqs/image/upload/v1790946265/m8yeyzydzvklvcgnzf8u.png",
        caption: "Third page",
      },
      {
        src: "https://res.cloudinary.com/dujahxiqs/image/upload/v1790946264/dpo3j6ob57ydtx0j8stb.png",
        caption: "Fourth page",
      },
      {
        src: "https://res.cloudinary.com/dujahxiqs/image/upload/v1790946264/xx0ujo3jle1j4xvd31um.png",
        caption: "Fifth page",
      },
      {
        src: "https://res.cloudinary.com/dujahxiqs/image/upload/v1790946278/tvypkozr9rk79thqfgn0.png",
        caption: "Sixth page",
      },
      {
        src: "https://res.cloudinary.com/dujahxiqs/image/upload/v1790946277/bj2kxo8aunpm85lrpjs4.png",
        caption: "Seventh page",
      },
      {
        src: "https://res.cloudinary.com/dujahxiqs/image/upload/v1790946277/iu96qam9bdliit41dade.png",
        caption: "Eighth page",
      },
      {
        src: "https://res.cloudinary.com/dujahxiqs/image/upload/v1790946278/t5aqn7fazfswp7ap4db5.png",
        caption: "Ninth page",
      },
      {
        src: "https://res.cloudinary.com/dujahxiqs/image/upload/v1790946292/yzwjrgowp4wsyymipksy.png",
        caption: "Eleventh page",
      },
    ],
  },
  {
    slug: "office-hub-pakistan",
    name: "Office Hub Pakistan",
    category: "web",
    summary: "Search coworking, serviced, and private offices by location and workspace needs.",
    description: [
      "Office Hub helps businesses discover flexible workspaces, including coworking, serviced offices, and private offices. The search experience starts with a city, area, or postcode and offers filters to narrow the available spaces.",
      "The home page also surfaces personalized workspace assistance, making it easier for teams to move from an initial search toward a suitable office option.",
    ],
    tech: ["Node.js", "Elixir", "TypeScript", "MongoDB", "PostgreSQL", "React", "Docker"],
    link: "https://www.office-hub.com/pk",
    media: [
      {
        src: "https://res.cloudinary.com/dujahxiqs/image/upload/v1790946323/f9ienvt5gq7awlcuxkhy.png",
        caption: "Front page",
      },
      {
        src: "https://res.cloudinary.com/dujahxiqs/image/upload/v1790946326/lot1nr5vsja8seh9eap8.png",
        caption: "Second page",
      },
      {
        src: "https://res.cloudinary.com/dujahxiqs/image/upload/v1790946304/pavay0iasqdqkkxu1odt.png",
        caption: "Third page",
      },
      {
        src: "https://res.cloudinary.com/dujahxiqs/image/upload/v1790946281/pmdfwgzsa3dmqyc6uhgk.png",
        caption: "Fourth page",
      },
    ],
  },
  {
    slug: "kamelpay",
    name: "KamelPay",
    category: "web",
    summary: "Workforce payroll, employee payment cards, and corporate expense management.",
    description: [
      "KamelPay brings workforce payments and business finance tools together. The home page presents WPS-compliant payroll alongside the PayD employee card and AbsoluteCard for corporate spending.",
      "Its product story focuses on giving employees easier access to pay and everyday financial services while helping companies manage payroll and payments through one platform.",
    ],
    tech: ["Node.js", "PostgreSQL", "MongoDB", "RabbitMQ", "TypeScript", "React Native", "React", "Docker"],
    link: "https://kamelpay.com/",
    media: [
      {
        src: "https://res.cloudinary.com/dujahxiqs/image/upload/v1790946322/uno6csu34xaxi2q0ewrn.png",
        caption: "Front page",
      },
    ],
  },
  {
    slug: "hforce",
    name: "Hforce",
    category: "web",
    summary: "A recruiting campaign dashboard for organizing jobs and tracking hiring activity.",
    description: [
      "Hforce gives recruiting teams a central place to manage job campaigns. The dashboard organizes campaigns by status and provides filters for company, location, workplace, workload, salary, owner, and job posting.",
      "Campaign cards summarize ownership, publication state, candidate activity, and progress, while review notifications keep important team changes visible.",
    ],
    tech: ["Node.js", "React", "Kafka", "TypeScript", "Python", "Docker"],
    link: "https://app.hforce.ai/signIn",
    linkLabel: "Open Hforce",
    media: [
      {
        src: "https://res.cloudinary.com/dujahxiqs/image/upload/v1790946267/dq7dg6hbunx6axlixtpi.png",
        caption: "Front page",
      },
      {
        src: "https://res.cloudinary.com/dujahxiqs/image/upload/v1790946297/txu0tvriqwfvvycgthca.png",
        caption: "Second page",
      },
    ],
  },
  {
    slug: "reconciliation",
    name: "Reconciliation Platform",
    category: "web",
    summary: "Financial transaction ingestion, matching, and exception review.",
    description: [
      "An enterprise reconciliation system that collects and normalizes bank statements, TLOG and POS data, and Oracle TJE records. It matches transactions using references, amounts, dates, stores, and configurable business rules, then helps finance teams review exceptions and monitor syncs and reports.",
      "The Next.js dashboard supports reconciliation workflows, file uploads, reports, and access management, connecting to a modular NestJS API through a frontend proxy.",
    ],
    highlights: [
      "Ingests and parses bank and statement files",
      "Synchronizes Oracle/TJE and other transaction sources",
      "Supports automated matching and manual exception review",
      "Tracks scheduled syncs, processing status, and recovery",
    ],
    tech: ["NestJS", "Next.js", "Prisma", "PostgreSQL", "Oracle"],
    media: [
      {
        src: "https://res.cloudinary.com/dujahxiqs/image/upload/v1790946291/dvt3h6ts4yobq3r4kw7i.png",
        caption: "Front page",
      },
      {
        src: "https://res.cloudinary.com/dujahxiqs/image/upload/v1790946291/nihgsa0ia2t2rbvjm0ay.png",
        caption: "Second page",
      },
      {
        src: "https://res.cloudinary.com/dujahxiqs/image/upload/v1790946290/ccstrdczxtnoti2qmtgi.png",
        caption: "Third page",
      },
      {
        src: "https://res.cloudinary.com/dujahxiqs/image/upload/v1790946284/fi8ilocds2yyijmxutt8.png",
        caption: "Fourth page",
      },
      {
        src: "https://res.cloudinary.com/dujahxiqs/image/upload/v1790946282/ra6h9fx5rtvprrv9z97v.png",
        caption: "Fifth page",
      },
      {
        src: "https://res.cloudinary.com/dujahxiqs/image/upload/v1790946281/d5ttlf0yiuykxg0fsrjp.png",
        caption: "Sixth page",
      },
    ],
  },
  {
    slug: "dialflow",
    name: "Dialflow",
    category: "web",
    summary: "A business calling workspace with call analytics, agent tools, and AI insights.",
    description: [
      "Dialflow brings business calling operations into a single workspace. Its dashboard highlights call volume, average wait time, active-agent utilization, and caller sentiment so teams can monitor service at a glance.",
      "The interface also brings together a unified inbox, click-to-call, IVR building, queue management, AI call summaries, a lightweight CRM, and AI-generated insights for support teams.",
    ],
    tech: ["Node.js", "TypeScript", "gRPC", "PostgreSQL", "Docker"],
    media: [
      {
        src: "https://res.cloudinary.com/dujahxiqs/image/upload/v1790946268/vq9bvvwbsu4qx0aqkocp.png",
        caption: "Front page",
      },
      {
        src: "https://res.cloudinary.com/dujahxiqs/image/upload/v1790946267/mpufigtsbdg1gzof7m28.png",
        caption: "Second page",
      },
      {
        src: "https://res.cloudinary.com/dujahxiqs/image/upload/v1790946266/wyht2qapyqqgqwwjloic.png",
        caption: "Third page",
      },
      {
        src: "https://res.cloudinary.com/dujahxiqs/image/upload/v1790946277/s0vscnsxbdrqm4g1yrkv.png",
        caption: "Fourth page",
      },
    ],
  },
];

export const isVideo = (src: string) => /\.(mp4|webm|mov)$/i.test(src);

export const optimizedImageSrc = (src: string, width: number) => {
  let url: URL;
  try {
    url = new URL(src);
  } catch {
    return src;
  }

  if (url.hostname !== "res.cloudinary.com") return src;

  const uploadPath = "/image/upload/";
  const uploadIndex = url.pathname.indexOf(uploadPath);
  if (uploadIndex === -1) return src;

  const prefix = url.pathname.slice(0, uploadIndex + uploadPath.length);
  const imagePath = url.pathname.slice(prefix.length);
  const [firstSegment, ...remainingSegments] = imagePath.split("/");
  const transformations = `f_auto,q_auto,w_${width}`;

  if (/^v\d+$/i.test(firstSegment)) {
    url.pathname = `${prefix}${transformations}/${imagePath}`;
  } else if (firstSegment.includes(",") || /^(?:a|b|c|dpr|e|f|fl|g|h|l|o|q|r|t|w|x|y|z)_/.test(firstSegment)) {
    const existing = firstSegment
      .split(",")
      .filter((value) => value !== "f_auto" && value !== "q_auto" && !/^w_\d+$/.test(value));
    url.pathname = `${prefix}${[...existing, "f_auto", "q_auto", `w_${width}`].join(",")}/${remainingSegments.join("/")}`;
  } else {
    url.pathname = `${prefix}${transformations}/${imagePath}`;
  }

  return url.toString();
};
