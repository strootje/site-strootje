import { routeTree } from "#/route-tree.gen.ts";
import { createRouter, LocationRewrite } from "@tanstack/solid-router";

const createSubdomainRewrite = <Pathname extends `/${string}`>(
  subdomains: Record<string, Pathname>,
): LocationRewrite => ({
  input: ({ url }) => {
    const subdomain = url.hostname.split(".")[0];

    const subpath = subdomains[subdomain];
    if (subpath !== undefined) {
      console.log("[INPUT]", subdomain, url.pathname, "==>", subpath + url.pathname);
      url.pathname = subpath + url.pathname;
    }

    return url;
  },

  output: ({ url }) => {
    const subpathMapping = Object.entries(subdomains).find(([, subpath]) => url.pathname.startsWith(subpath));
    if (subpathMapping !== undefined) {
      const [subdomain, subpath] = subpathMapping;
      const hostname = url.hostname.replace(`${subdomain}.`, "");
      const pathname = url.pathname.replace(subpath, "") || "/";
      console.log("[OUTPUT]", `${url.hostname}${url.pathname}`, "==>", `${subdomain}.${hostname}${pathname}`);
      url.hostname = `${subdomain}.${hostname}`;
      url.pathname = pathname;
    }

    const subdomainMapping = Object.entries(subdomains).find(([subdomain]) => url.hostname.startsWith(`${subdomain}.`));
    if (subdomainMapping !== undefined && subpathMapping === undefined) {
      const [subdomain] = subdomainMapping;
      const hostname = url.hostname.replace(`${subdomain}.`, "");
      url.hostname = hostname;
    }

    return url;
  },
});

export const getRouter = () => {
  const router = createRouter({
    defaultViewTransition: true,
    scrollRestoration: true,
    routeTree,
    // rewrite: composeRewrites([
    //   createSubdomainRewrite({
    //     links: "/links",
    //   }),
    // ]),
  });

  return router;
};
