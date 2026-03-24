import { createBrowserRouter } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { Home } from "./pages/Home";
import { NewsPage } from "./pages/NewsPage";
import { NewsDetailPage } from "./pages/NewsDetailPage";
import { HistoryPage } from "./pages/HistoryPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ServiceDetailsPage } from "./pages/ServiceDetailsPage";
import { ContactPage } from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "news", Component: NewsPage },
      { path: "news/:id", Component: NewsDetailPage },
      { path: "history", Component: HistoryPage },
      { path: "services", Component: ServicesPage },
      { path: "services/:id", Component: ServiceDetailsPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);