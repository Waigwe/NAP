// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import FavoriteIcon from "@material-ui/icons/Favorite";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import BubbleChart from "@material-ui/icons/BubbleChart";
import BookmarkBorder from "@material-ui/icons/BookmarkBorder";
import LibraryAdd from "@material-ui/icons/LibraryAdd";
// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import Alerts from "views/Alerts/Alerts.jsx";
import Following from "views/Following/Following.jsx";
import JobDiary from "views/JobDiary/JobDiary.jsx";
import NewEmployers from "views/NewEmployers/NewEmployers.jsx";
import CV from "views/CV/CV.jsx";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "N A P Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },

  {
    path: "/alerts",
    sidebarName: "Alerts",
    navbarName: "My Alerts",
    icon: Notifications,
    component: Alerts
  },
  {
    path: "/following",
    sidebarName: "Following",
    navbarName: "Following",
    icon: FavoriteIcon,
    component: Following
  },
  {
    path: "/diary",
    sidebarName: "My Job Diary",
    navbarName: "My Job Diary",
    icon: BubbleChart,
    component: JobDiary
  },
  {
    path: "/cv",
    sidebarName: "Upload CV",
    navbarName: "Upload CV",
    icon: LibraryAdd,
    component: CV
  },
  {
    path: "/employers",
    sidebarName: "New Employers",
    navbarName: "New Employers",
    icon: BookmarkBorder,
    component: NewEmployers
  },
  {
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
