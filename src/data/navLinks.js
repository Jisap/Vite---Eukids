export const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "Pages",
    children: [
      { label: "About Us", path: "/about" },
      { label: "Team", path: "/team" },
      { label: "Event", path: "/event" },
      { label: "Pricing", path: "/pricing" },
    ],
  },
  {
    label: "Classes",
    children: [{ label: "Courses", path: "/courses" }],
  },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];
