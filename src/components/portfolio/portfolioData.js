import Image1 from "../../assets/img/portfolio/project-1.jpg";

const PortfolioData = [
  {
    id: 1,
    type: "Clinic",
    image: Image1,
    tag: ["web", "logo"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Enola Clinic",
        client: "Enola",
        language: "Laravel",
        preview: "clinic.enola.space",
        link: "https://clinic.enola.space/",
      },
    ],
  },
  {
    id: 2,
    type: "Marketplace",
    image: Image1,
    tag: ["web", "mobile", "logo"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Enola Marketplace",
        client: "Enola",
        language: "Laravel, vue js, flutter",
        preview: "coming soon",
        link: "#",
      },
    ],
  },
  {
    id: 3,
    type: "Point of Sales",
    image: Image1,
    tag: ["web", "logo"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Enola POS",
        client: "Enola",
        language: "Laravel, vue js",
        preview: "coming soon",
        link: "#",
      },
    ],
  },
];

export default PortfolioData;
