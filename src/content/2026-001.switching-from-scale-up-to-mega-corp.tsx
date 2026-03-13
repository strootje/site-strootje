import type { ArticleExport } from "@scope/util/blog";

export const Article: ArticleExport = {
  frontmatter: {
    title: "Switching from scale-up to mega-corp",
    publishDate: new Date("2026-03-13"),
    description: "another artible written with care..",
    featured: true,
  },

  component: () => {
    return (
      <article class="col-[hero] grid grid-cols-subgrid gap-4 *:col-[content]">
        <p>
          <span>I would like to tell you about my onboarding at the Rabobank.</span>{" "}
          <span>Previously I worked at a (relatively) small scale-up called JEX in rotterdam.</span>
        </p>

        <p>
          <span>
            My day started at 8 sharp at security, getting my badge and going to the IT desk.
          </span>{" "}
          <span>
            The guy at the IT desk spend the better part of 30 minutes guiding me through a fairly simple account
            creation processs, which had me setup my rabobank account with a lot of extra security in place.
          </span>{" "}
          <span>Then he helped me setup my laptop, which basicaly sets itself up.</span>
        </p>

        <p>
          <span>
            This is the point where my buddy (actually called a buddy in the onboarding, it's just a colluege from my
            team) showed up to show me around, where the team sits and gives me a bunch of sharepoint and confluence
            links, the usual.
          </span>
        </p>

        <p class="col-[hero] grid grid-cols-subgrid gap-4 bg-emerald-700 bg-hero-wiggle-black/5 py-8 text-stone-100 *:col-[content]">
          <span>And we got to work.</span>
          <span>
            This is what I wish I could tell you about my first week at the RABOBANK. But reality has been a bit
            different for me.
          </span>
        </p>

        <p>
          My first day started at security. Seeing how the RABOBANK is.. well a bank, security is pretty tight. This
          means going to security to get a keycard. The person at the counter wasn't able to find my name in the system.
          So no card.. And no card means no entry. The people at the reception were kind enough to fix a visitors card
          for me but those require you to be escorted by an actual employee.
        </p>

        <p>
          The colluege who would show me around this day woudn't show up until 9 in the morning. My plan however, was to
          get there early, 8 sharp, get my card, pickup my laptop, get it compliant, so that when I would be picked up
          we would have a head start.
        </p>

        <p>So that meant waiting.</p>

        <p>
          <span>Eventually my buddy showed up and we got past the gates and got my laptop.</span>{" "}
          <span>
            The look on their face when they say my laptop spoke a thousand words.. I had gotten a{" "}
            <i>non</i>-developer laptop
          </span>{" "}
          <span>This would mean requesting a new one and going through the whole process again.</span>
        </p>

        <p>
          <span>It's also at this point that they figured out that I hadn't gotten my security key.</span>{" "}
          <span>Only too logical, seeing how I wasn't in the system for the security people.</span>
          <span>So we decide to go back to security and double check</span>{" "}
          <span>Apparently I applied with my calling name, while they check the name on my ID.</span>{" "}
          <span>Checking my last name helped it all a bunch. And I finaly got my keycard and my security key.</span>
        </p>

        <p>
          <span>At around 11 in the morning I had a one-on-one with my new manager.</span>{" "}
          <span>They helped me request a developer laptop with a delivery time of only 3 days.</span>{" "}
          <span>
            Meaning that for the coming three days I wasn't able to do anything except for the mandatory trainings
          </span>
        </p>

        <p>
          <span>
            The rest of the week was spent doing trainings, reading up on confluence, sharepoint and having some nice
            chats with my new team.
          </span>
        </p>
      </article>
    );
  },
};
