// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import FavoriteIcon from "@material-ui/icons/Favorite";
// import ContentPaste from "@material-ui/icons/ContentPaste";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Unarchive from "@material-ui/icons/Unarchive";
import LibraryAdd from "@material-ui/icons/LibraryAdd";

// core components/views
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import UserProfile from "views/UserProfile/UserProfile.jsx";
import Alerts from "views/Alerts/Alerts.jsx";
import Following from "views/Following/Following.jsx";
import JobDiary from "views/JobDiary/JobDiary.jsx";
import Maps from "views/Maps/Maps.jsx";
import NotificationsPage from "views/Notifications/Notifications.jsx";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.jsx";
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
    path: "/user",
    sidebarName: "User Profile",
    navbarName: "Profile",
    icon: Person,
    component: UserProfile
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
    path: "/maps",
    sidebarName: "Maps",
    navbarName: "Map",
    icon: LocationOn,
    component: Maps
  },
  {
    path: "/notifications",
    sidebarName: "Notifications",
    navbarName: "Notifications",
    icon: Notifications,
    component: NotificationsPage
  },
  {
    path: "/upgrade-to-pro",
    sidebarName: "Upgrade To PRO",
    navbarName: "Upgrade To PRO",
    icon: Unarchive,
    component: UpgradeToPro
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
