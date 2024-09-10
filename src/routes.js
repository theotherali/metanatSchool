import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Classes from "./pages/Classes/Classes";
import ContactUs from "./pages/ContactUs/ContactUs";
import Events from "./pages/Events/Events";
import Teachers from "./pages/Teachers/Teachers";

let routes = [
  { path: "/", element: <Home /> },
  { path: "/aboutUs", element: <AboutUs /> },
  { path: "/classes", element: <Classes /> },
  { path: "/events", element: <Events /> },
  { path: "/contactUs", element: <ContactUs /> },
  { path: "/teachers", element: <Teachers /> },
];

export default routes;
