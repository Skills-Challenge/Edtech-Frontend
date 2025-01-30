const adminRoutes = [
  {
    name: "Dashboard",
    route: "/admin",
    icon: "lineicons:home-2",
    exact:true,
  },
  {
    name: "challenges & hackathons",
    route: "/admin/challenges&hackathons",
    icon: "lineicons:home-2",
  },
  {
    name: "community",
    route: "",
    icon: "lineicons:home-2",
    modal:true
  },
  {
    name: "settings",
    route: "/admin#",
    icon: "lineicons:home-2",
  },
  {
    name: "help center",
    route: "/admin#",
    icon: "lineicons:home-2",
  },
  {
    name: "Refer family & friends",
    route: "/admin#",
    icon: "lineicons:home-2",
  },
];

const talentRoutes = [
  {
    name: "Dashboard",
    route: "/talent",
    icon: "lineicons:home-2",
    exact:true,
  },
  {
    name: "challenges & hackathons",
    route: "/talent/challenges&hackathons",
    icon: "lineicons:home-2",
  },
  {
    name: "community",
    route: "",
    icon: "lineicons:home-2",
    modal:true
  },
  {
    name: "settings",
    route: "/talent#",
    icon: "lineicons:home-2",
  },
  {
    name: "help center",
    route: "/talent#",
    icon: "lineicons:home-2",
  },
  {
    name: "Refer family & friends",
    route: "/talent#",
    icon: "lineicons:home-2",
  },
];

const homeNavLinks = [
  { name: "Home", path: "/" },
  { name: "Challenges & Hackathons", path: "/challenges" },
  { name: "For Educational Institutions", path: "/institutions" },
  { name: "About Us", path: "/challenges" },
  { name: "Contact Us", path: "/contact" },
];

export default { adminRoutes, talentRoutes, homeNavLinks };
