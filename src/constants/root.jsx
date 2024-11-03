import React from "react";
import Singin from "../components/accounts/signin/Singin";
const Account = React.lazy(() =>
  import("../components/accounts/account/Account")
);
const Singup = React.lazy(() => import("../components/accounts/signup/Signup"));
const Careers = React.lazy(() => import("../components/careers/Careers"));
const Corporate = React.lazy(() => import("../components/corporate/Corporate"));
const Equilibrium = React.lazy(() =>
  import("../components/equilibrium/Equilibrium")
);
const Ethics = React.lazy(() => import("../components/ethics/Ethics"));
const Faqs = React.lazy(() => import("../components/faqs/Faqs"));
const Legal = React.lazy(() => import("../components/legal/Legal"));
const PaymentForm = React.lazy(() => import("../components/pay/Payment"));
const Privacy = React.lazy(() => import("../components/privacy/Privacy"));
const Products = React.lazy(() => import("../components/products/Products"));
const SiteMap = React.lazy(() => import("../components/sitemap/SiteMap"));
const Unsubscribe = React.lazy(() =>
  import("../components/unsubscribe/Unsubscribe")
);
const Services = React.lazy(() => import("../components/xonservices/Service"));
const Mens = React.lazy(() => import("../components/collection/mens/Mens"));
const Home = React.lazy(() => import("../pages/Home"));
const About = React.lazy(() => import("../components/about/About"));

export const rootComponents = [
  {
    link: "/home",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Home />
      </React.Suspense>
    ),
  },
  {
    link: "/signin",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Singin />
      </React.Suspense>
    ),
  },
  {
    link: "/collection",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Mens />
      </React.Suspense>
    ),
  },
  {
    link: "/pay",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <PaymentForm />
      </React.Suspense>
    ),
  },
  {
    link: "/collection/:id",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Products />
      </React.Suspense>
    ),
  },
  {
    link: "/account",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Account />
      </React.Suspense>
    ),
  },
  {
    link: "/faqs",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Faqs />
      </React.Suspense>
    ),
  },
  {
    link: "/sitemap",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <SiteMap />
      </React.Suspense>
    ),
  },
  {
    link: "/unsubscribe",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Unsubscribe />
      </React.Suspense>
    ),
  },
  {
    link: "/about",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <About />
      </React.Suspense>
    ),
  },
  {
    link: "/equilibrium",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Equilibrium />
      </React.Suspense>
    ),
  },
  {
    link: "/ethics",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Ethics />
      </React.Suspense>
    ),
  },
  {
    link: "/careers",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Careers />
      </React.Suspense>
    ),
  },
  {
    link: "/legal",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Legal />
      </React.Suspense>
    ),
  },
  {
    link: "/privacy",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Privacy />
      </React.Suspense>
    ),
  },
  {
    link: "/corporate",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Corporate />
      </React.Suspense>
    ),
  },
  {
    link: "/service",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Services />
      </React.Suspense>
    ),
  },
  {
    link: "/signup",
    element: (
      <React.Suspense fallback={<React.Fragment>Loading...</React.Fragment>}>
        <Singup />
      </React.Suspense>
    ),
  },
];
