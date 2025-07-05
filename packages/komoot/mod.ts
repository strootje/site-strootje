import { encodeBase64 } from "@std/encoding";
import { dirname } from "@std/path";
import type { Pagable } from "./types.ts";

const komootBase = "https://api.komoot.de";
const komoot6 = `${komootBase}/v006`;
const komoot7 = `${komootBase}/v007`;

type Opts = {
  email: string;
  password: string;
};
export const KomootApi = (opts: Opts) => {
  const buildHeaders = () =>
    new Headers({
      Authorization: `Basic ${encodeBase64(`${opts.email}:${opts.password}`)}`,
    });

  const fetchAsJson = async <T>(url: string) => {
    console.log("GET", url);
    const resp = await fetch(url, {
      headers: buildHeaders(),
    });

    return await resp.json() as T;
  };

  const fetchAsText = async (url: string) => {
    console.log("GET", url);
    const resp = await fetch(url, {
      headers: buildHeaders(),
    });

    return await resp.text();
  };

  return {
    user() {
      const userPromise = fetchAsJson<{ username: string }>(`${komoot6}/account/email/${opts.email}/`);

      return {
        async tours() {
          const { username } = await userPromise;

          const tours: Array<{ id: number }> = [];
          let next: string | undefined = `${komoot7}/users/${username}/tours/`;
          while (next) {
            const { _embedded, _links } = await fetchAsJson<Pagable<{ tours: Array<{ id: number }> }>>(next);
            tours.push(..._embedded.tours);
            next = _links.next?.href;
          }
          return tours;
        },
      };
    },
    tour(tourId: number) {
      // const tourPromise = fetchAsJson<{}>(`${komoot7}/tours/${tourId}`);

      return {
        async gpx() {
          // const {} = await tourPromise;
          return await fetchAsText(`${komoot7}/tours/${tourId}.gpx`);
        },

        async downloadToGpx() {
          const filename = `data/${tourId}.gpx`;
          try {
            Deno.statSync(`${Deno.cwd()}/public/${filename}`);
          } catch {
            await Deno.mkdir(dirname(`${Deno.cwd()}/public/${filename}`), { recursive: true });
            const gpxData = await fetchAsText(`${komoot7}/tours/${tourId}.gpx`);
            console.log("WRITE", `${Deno.cwd()}/public/${filename}`);
            await Deno.writeTextFile(`${Deno.cwd()}/public/${filename}`, gpxData);
          }
          return filename;
        },
      };
    },
  };
};

// type LoginResp = {
//   username: string;
// };
// export const login = async () => {
//   const resp = await fetch(`https://api.komoot.de/v006/account/email/${email}/`, {
//     headers: new Headers({
//       Authorization: `Basic ${Buffer.from(`${email}:${passwd}`, "utf-8").toString("base64")}`,
//     }),
//   });

//   return await resp.json() as LoginResp;
// };

// type ToursResp = {
//   _embedded: {
//     tours: Array<{ id: number }>;
//   };
// };
// export const tours = async (userId: string) => {
//   const resp = await fetch(`https://api.komoot.de/v007/users/${userId}/tours/`, {
//     headers: new Headers({
//       Authorization: `Basic ${Buffer.from(`${email}:${passwd}`, "utf-8").toString("base64")}`,
//     }),
//   });

//   return await resp.json();
// };

// export const download = async (tourId: string) => {
//   console.log(`https://api.komoot.de/v007/tours/${tourId}.gpx`);
//   const resp = await fetch(`https://api.komoot.de/v007/tours/${tourId}.gpx`, {
//     headers: new Headers({
//       Authorization: `Basic ${Buffer.from(`${email}:${passwd}`, "utf-8").toString("base64")}`,
//     }),
//   });

//   return await resp.text();
// };
