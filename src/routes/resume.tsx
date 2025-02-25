import { A } from "@solidjs/router";
import { createSignal, For } from "solid-js";

type Resume = {
  experiences: Array<{
    company: string;
    roles: Array<{
      title: string;
      startDate: Date;
    }>;
  }>;
};

const [resume] = createSignal<Resume>({
  experiences: [
    {
      company: "Jex",
      roles: [
        {
          title: "Lead Developer",
          startDate: new Date(2024, 10),
        },
        {
          title: "Senior Fullstack Developer",
          startDate: new Date(2024, 3),
        },
      ],
    },
    {
      company: "Athora",
      roles: [
        {
          title: "Lead Developer",
          startDate: new Date(2019, 8),
        },
      ],
    },
    {
      company: "Strooware Interactive",
      roles: [],
    },
    {
      company: "Cargoguide",
      roles: [
        {
          title: "Lead Developer",
          startDate: new Date(),
        },
      ],
    },
    {
      company: "PGGM",
      roles: [
        {
          title: "Lead Developer",
          startDate: new Date(),
        },
        {
          title: "Senior Developer",
          startDate: new Date(),
        },
        {
          title: "Software Developer",
          startDate: new Date(),
        },
      ],
    },
    {
      company: "Dotcontrol",
      roles: [
        {
          title: "Senior Software Developer",
          startDate: new Date(),
        },
        {
          title: "Software Developer",
          startDate: new Date(),
        },
        {
          title: "Internship",
          startDate: new Date(),
        },
      ],
    },
  ],
});

export default function ResumePage() {
  return (
    <div class="flex justify-center items-center bg-hero-hideout-yellow-50 dark:bg-hero-hideout-yellow-800 dark:bg-slate-800 h-dvh">
      <main class="relative p-6 h-[95dvh] overflow-scroll">
        <header class="top-2 right-0 left-0 position-sticky bg-green shadow m-2 p-4 rounded h-20">
          <nav>
            <ul>
              <li>
                <A href="/">Back</A>
              </li>
            </ul>
          </nav>
        </header>

        <section class="flex flex-col gap-4 bg-white shadow p-4 rounded-sm w-[21cm]">
          <section class="flex flex-row justify-between mt-4">
            <header>
              <h1 class="text-3xl">
                <div>Bastiaan Stroosnijder</div>
                <div class="text-xl">Fullstack Technical Lead</div>
              </h1>
            </header>

            <div class="flex flex-row gap-4">
              <div class="flex flex-col">
                <div>Phone</div>
                <div>Email</div>
                <div>Location</div>
              </div>

              <div class="flex flex-col">
                <a href="tel:+31612203229" target="_blank" rel="noreferrer">
                  +31 6 122 03 229
                </a>
                <a
                  href="mailto:bas@strootje.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  bas@strootje.com
                </a>
                <div>Rotterdam, The Netherlands</div>
              </div>
            </div>
          </section>

          <hr />

          <section class="flex flex-col">
            <header>
              <h2 class="text-3xl">Experiences</h2>
            </header>

            <div class="flex flex-col gap-2">
              <For each={resume().experiences}>
                {(experience) => (
                  <article>
                    <header class="text-2xl">
                      <h3>{experience.company}</h3>
                    </header>

                    <div>
                      <For each={experience.roles}>
                        {(role) => (
                          <article>
                            <header>
                              <h4>{role.title}</h4>
                              <span>
                                {role.startDate.getFullYear()}/{role.startDate
                                  .getMonth()}
                              </span>
                            </header>
                          </article>
                        )}
                      </For>
                    </div>
                  </article>
                )}
              </For>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
