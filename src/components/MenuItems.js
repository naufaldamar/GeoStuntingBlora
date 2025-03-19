export const MenuItems = [
  {
    title: "Home",
    url: "/Home",
    cName: "nav-links",
    icon: "fa-solid fa-house",
  },
  {
    title: "Storytelling",
    url: "/Storytelling",
    cName: "nav-links",
    icon: "fa-solid fa-chart-simple",
  },
  {
      title: "Map",
      url: "#",
      cName: "nav-links dropdown-toggle",
      icon: "fa-solid fa-map",
      submenu: [
        {
          title: "Stunting 2021",
          url: "/Stunting2021",
          cName: "dropdown-item",
        },
        {
          title: "Stunting 2022",
          url: "/Stunting2022",
          cName: "dropdown-item-custom",
        },
        {
          title: "Stunting 2023",
          url: "/Stunting2023",
          cName: "dropdown-item-custom",
        },{
          title: "Compare Map",
          url: "/CompareMap",
          cName: "dropdown-item-custom",
        },
      ],
    },

  {
    title: "About",
    url: "/About",
    cName: "nav-links",
    icon: "fa-solid fa-circle-info",
  },
];
