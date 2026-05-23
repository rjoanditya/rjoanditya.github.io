type Profile = {
  fullName: string;
  nickname: string;
  role: string;
  institution: string;
  image: string;
};

type Activity = {
  name: string;
  url: string;
  image: string;
};

type Skill = {
  name: string;
  color: string;
  icon?: string;
};

type PortfolioItem = {
  title: string;
  thumbnail: string;
  description: string;
  url: string;
};

type PortfolioData = {
  profile: Profile;
  activities: Activity[];
  skills: Skill[];
  portfolio: PortfolioItem[];
};

export const portfolioData: PortfolioData = {
  profile: {
    fullName: "Rizky Joanditya",
    nickname: "Joan",
    role: "Fullstack Developer",
    institution:
      "Tenaga Ahli Pemrogram Dinas Komunikasi dan Informatika Kabupaten Sukoharjo",
    image: "/img/rizkyjoanditya.png",
  },
  activities: [
    {
      name: "Tenaga Ahli Pemrogram Diskominfo Sukoharjo",
      url: "https://portal.sukoharjokab.go.id",
      image: "/img/sukoharjo.png",
    },
    {
      name: "Semesta iHub UNS",
      url: "https://www.instagram.com/uns.innovationhub/",
      image: "/img/semesta.jpg",
    },
    {
      name: "Solocorn",
      url: "https://solocorn.id",
      image: "/img/solocorn.png",
    },
    {
      name: "VFS Bootcamp",
      url: "https://venturefactory.futureskills.id/fs/dashboard",
      image: "/img/vfs.png",
    },
    {
      name: "Pertamuda Seed & Scale",
      url: "https://pertamuda.id",
      image: "/img/pertamuda.png",
    },
    {
      name: "iotanic.id",
      url: "https://iotanic.id",
      image: "/img/iotanic.png",
    },
    {
      name: "aicademy.id",
      url: "https://aicademy.id/",
      image: "/img/aicademyid.png",
    },
  ],
  skills: [
    {
      name: "NestJS",
      color: "#E0234E",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nestjs.svg",
    },
    {
      name: "NuxtJS",
      color: "#00C58E",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nuxtdotjs.svg",
    },
    {
      name: "NextJS",
      color: "#ffffff",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nextdotjs.svg",
    },
    {
      name: "React",
      color: "#61DAFB",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg",
    },
    {
      name: "Laravel",
      color: "#FF2D20",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/laravel.svg",
    },
    {
      name: "TypeScript",
      color: "#3178C6",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typescript.svg",
    },
    {
      name: "PHP",
      color: "#777BB4",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/php.svg",
    },
    {
      name: "Git",
      color: "#F05032",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/git.svg",
    },
    {
      name: "PostgreSQL",
      color: "#336791",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg",
    },
    {
      name: "MySQL",
      color: "#4479A1",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg",
    },
    {
      name: "Prisma",
      color: "#a8a8a8",
      icon: "https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/prisma.svg",
    },
  ],
  portfolio: [
    {
      title: "POS Barbershop",
      thumbnail: "/img/kartoo.png",
      description:
        "Aplikasi Point of Sale (POS) untuk barbershop yang mempermudah proses transaksi dan monitoring aktivitas barber.",
      url: "https://kartoo.vercel.app",
    },
    {
      title: "Superapp SKH Core",
      thumbnail: "/img/core.png",
      description:
        "Platform pusat layanan yang terintegrasi menggunakan arsitektur microservices dan SSO Keycloak.",
      url: "#",
    },
    {
      title: "Dashboard IoT Monitoring",
      thumbnail: "/img/hydrosys.png",
      description:
        "Sistem pemantauan hidroponik pintar secara real-time untuk variabel suhu, ph, dan TDS menggunakan NextJS.",
      url: "#",
    },
  ],
};
