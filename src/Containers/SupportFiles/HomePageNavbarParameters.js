import profilePc from "../../User Dashboard/Resources/nadir.jpg";
import NotificationIcon from "@material-ui/icons/NotificationImportant";
import NotificationImportant from "@material-ui/icons/NotificationImportant";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { Avatar } from "@material-ui/core";
import { ListItemAvatar } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";

export const isNavbarTabs=true;
export const isAvatar=false;
export const isNavBarIconButtons=false;
// navbar menu options here
export const navbarMenuOptions = [
  // icon is optional here
  {
    title: "About",
    route: "about",
    onClick: function (title) {
      alert(title);
    },
  },
  {
    title: "Conatct",
    route: "contact",
    onClick: function (title) {
      alert(title);
    },
  },
  {
    title: "Login",
    route: "login",
    onClick: function (title) {
      alert(title);
    },
  },
  {
    title: "Register",
    route: "register",
    onClick: function (title) {
      alert(title);
    },
  },
];

// navbarDrawerOptions here
export const drawerMenuOptions = [
  // icon is optional here
  {
    title: "About",
    route: "about",
       onClick: function (title) {
      alert(title);
    },
  },
  {
    title: "Conatct",
    route: "contact",
       onClick: function (title) {
      alert(title);
    },
  },
  {
    title: "Login",
    route: "login",
    // icon: <NotificationImportant />,
    onClick: function (title) {
      alert(title);
    },
  },
  {
    title: "Register",
    route: "register",
    // icon: <NotificationImportant />,
    onClick: function (title) {
      alert(title);
    },
  },
  {
    title: "Setting",
    route: "setting",
    // icon: <NotificationImportant />,
    onClick: function (title) {
      alert(title);
    },
  },
];

// options after divider in drawer like search or logout
export const darwerMenuExtraOptions = [
  // {
  //   title: "Logout",
  //   route: "about",
  //   // icon: <NotificationImportant />,
  //   onClick: function (title) {
  //     alert(title);
  //   },
  // },
  {
    title: "Advanced Search",
    route: "/",
    icon: <SearchRoundedIcon />,
    onClick: function (title) {
      alert(title);
    },
  },
];

// navbar tabs
export const navbarTabsOptions = [
  {
    id: 0,
    label: "Web Development",
    panel: function () {
      return <h1>Web Developmen</h1>;
    },
  },
  {
    id: 1,
    label: "Mobile Development",
    panel: function () {
      return <h1>Web Developmen</h1>;
    },
  },
  {
    id: 2,
    label: "Automation",
    panel: function () {
      return <h1>Web Developmen</h1>;
    },
  },
  {
    id: 3,
    label: "AI MOdels",
    panel: function () {
      return <h1>Web Developmen</h1>;
    },
  },
  {
    id: 4,
    label: "Graphic Designing",
    panel: function () {
      return <h1>Web Developmen</h1>;
    },
  },
  {
    id: 5,
    label: "Database",
    panel: function () {
      return <h1>Web Developmen</h1>;
    },
  },
  {
    id: 6,
    label: "Bussincess",
    panel: function () {
      return <h1>Web Developmen</h1>;
    },
  },
  {
    id: 7,
    label: "Writting & Transaltions",
    panel: function () {
      return <h1>Web Developmen</h1>;
    },
  },
];

// navbar avatar
export const navbarAvatar = {
  onClick: function () {
    alert("avatar is clicked");
  },
  src: profilePc,
};

// navbar other icon button
export const navbarIconButtons = [
  {
    ariaLabel: "label",
    ariaHaspopup: true,
    onClick: function () {
      alert(`icon is clicked`);
    },
    color: "inherit",
    icon: <NotificationIcon />,
    subMenu: function () {
      alert(this.ariaLabel);
    },
  },
];

// drawer ListItemAvatar
export const drawerListItemAvatar = (
  <ListItem>
    <ListItemAvatar>
      <Avatar
        src={profilePc}
        onClick={() => {
          alert("Display Full Image of User");
        }}
        style={{ cursor: "pointer" }}
      />
    </ListItemAvatar>
  </ListItem>
);
