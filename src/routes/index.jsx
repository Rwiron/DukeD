import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../layouts/MainLayout";
import PageTransition from "../components/ui/PageTransition";

// Lazy load page components
const HomePage = lazy(() => import("../pages/HomePage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ServicesPage = lazy(() => import("../pages/ServicesPage"));
const ServiceDetailPage = lazy(() => import("../pages/ServiceDetailPage"));
const TeamPage = lazy(() => import("../pages/TeamPage"));
const ProjectsPage = lazy(() => import("../pages/ProjectsPage"));
const ProjectDetailPage = lazy(() => import("../pages/ProjectDetailPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));

// Loading component
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[70vh]">
    <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Wrapper for all pages with PageTransition
const withPageTransition = (Component) => {
  return (props) => (
    <PageTransition>
      <Component {...props} />
    </PageTransition>
  );
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            {withPageTransition(HomePage)()}
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<PageLoader />}>
            {withPageTransition(AboutPage)()}
          </Suspense>
        ),
      },
      {
        path: "services",
        element: (
          <Suspense fallback={<PageLoader />}>
            {withPageTransition(ServicesPage)()}
          </Suspense>
        ),
      },
      {
        path: "services/:slug",
        element: (
          <Suspense fallback={<PageLoader />}>
            {withPageTransition(ServiceDetailPage)()}
          </Suspense>
        ),
      },
      {
        path: "team",
        element: (
          <Suspense fallback={<PageLoader />}>
            {withPageTransition(TeamPage)()}
          </Suspense>
        ),
      },
      {
        path: "projects",
        element: (
          <Suspense fallback={<PageLoader />}>
            {withPageTransition(ProjectsPage)()}
          </Suspense>
        ),
      },
      {
        path: "projects/:id",
        element: (
          <Suspense fallback={<PageLoader />}>
            {withPageTransition(ProjectDetailPage)()}
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<PageLoader />}>
            {withPageTransition(ContactPage)()}
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<PageLoader />}>
            {withPageTransition(NotFoundPage)()}
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
