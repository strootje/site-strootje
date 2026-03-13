import type { ArticleExport } from "@scope/util/blog";
import { tw } from "@scope/util/uno";

export const Article: ArticleExport = {
  frontmatter: {
    title: "Simplified deployments to kubernetes with Github actions and Keel",
    publishDate: new Date("2026-05-06"),
    description: "another artible written with care..",

    tagClass: tw`bg-cyan-300`,
  },

  component: () => {
    return (
      <>
        <div class="prose">
          <ol>
            <li>
              situatie hiervoor?
              <ul>
                <li>kustomize template in repo van de app/site</li>
                <li>de action van de app/site verzorgde ook de deployment</li>
                <li>permissions all over the place..</li>
              </ul>
            </li>

            <li>
              nieuwe situatie?
              <ul>
                <li>asdad</li>
              </ul>
            </li>
          </ol>
        </div>
      </>
    );
  },
};
