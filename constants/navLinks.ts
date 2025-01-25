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
    route: "/admin/community",
    icon: "lineicons:home-2",
    modal:true
  },
  {
    name: "settings",
    route: "/admin/settings",
    icon: "lineicons:home-2",
  },
  {
    name: "help center",
    route: "/help-center",
    icon: "lineicons:home-2",
  },
  {
    name: "Refer family & friends",
    route: "/refer",
    icon: "lineicons:home-2",
  },
];

const talentRoutes = [
  {
    name: "Dashboard",
    route: "/talent",
    icon: "lineicons:home-2",
  },
  {
    name: "challenges & hackathons",
    route: "/talent/challenges&hackathons",
    icon: "lineicons:home-2",
  },
  {
    name: "community",
    route: "/talent/community",
    icon: "lineicons:home-2",
  },
  {
    name: "settings",
    route: "/talent/settings",
    icon: "lineicons:home-2",
  },
  {
    name: "help center",
    route: "/talent/help-center",
    icon: "lineicons:home-2",
  },
  {
    name: "Refer family & friends",
    route: "/talent/refer",
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
