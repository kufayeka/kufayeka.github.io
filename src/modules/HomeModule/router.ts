import MainRouter from "@/router/index";

// use arrow function to render component when needed (reduces web load);
const HomeModule = () => import("./HomeModule.vue");
const MainView = () => import("./views/MainView.vue");
const AboutView = () => import("./views/AboutView.vue");
const EducationView = () => import("./views/EducationView.vue");
const ProjectsView = () => import("./views/ProjectsView.vue");
const SkillsView = () => import("./views/SkillsView.vue");

const moduleRoute = {
  path: "/home",
  component: HomeModule,
  children: [
    {
      path: "",
      name: "home",
      component: MainView,
    },
    {
      path: "about",
      name: "about",
      component: AboutView,
    },
    {
      path: "education",
      name: "education",
      component: EducationView,
    },
    {
      path: "projects",
      name: "projects",
      component: ProjectsView,
    },
    {
      path: "skills",
      name: "skills",
      component: SkillsView,
    },
  ],
};

export default function () {
  MainRouter.addRoute(moduleRoute);
}
