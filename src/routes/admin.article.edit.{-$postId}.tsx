import { useAppForm } from "#/components/hooks.form.ts";
import * as contentFns from "#/functions/content.functions.ts";
import { createFileRoute } from "@tanstack/solid-router";
import { nanoid } from "nanoid";

export const Route = createFileRoute("/admin/article/edit/{-$postId}")({
  loader: async ({ params }) => ({
    article: params.postId ? await contentFns.getForId({ data: { id: params.postId } }) : ({
      id: undefined,
      slug: "",
      featured: 0,
      title: "",
      description: "",
      content: "",
      createdDate: new Date().toISOString(),
      modifiedDate: new Date().toISOString(),
      publishDate: new Date().toISOString(),
    }),
  }),

  component: () => {
    const data = Route.useLoaderData();

    console.log(data().article);

    const editContent = useAppForm(() => ({
      defaultValues: data().article,

      onSubmit: async ({ value }) => {
        const newContent = await contentFns.update({
          data: {
            id: data().article.id ?? nanoid(),
            slug: value.slug,
            featured: value.featured,
            title: value.title,
            description: value.description,
            content: value.content,
            createdDate: value.createdDate,
            modifiedDate: value.modifiedDate,
            publishDate: value.publishDate,
          },
        });
        console.log("newContent", newContent);
      },
    }));

    return (
      <form
        onsubmit={async (e) => {
          e.preventDefault();
          e.stopPropagation();
          await editContent.handleSubmit();
        }}
      >
        <editContent.AppForm>
          <editContent.AppField name="slug">{(field) => <field.TextField />}</editContent.AppField>
          <editContent.AppField name="title">{(field) => <field.TextField />}</editContent.AppField>
          <editContent.AppField name="description">{(field) => <field.TextField />}</editContent.AppField>
          <editContent.AppField name="content">{(field) => <field.Editor />}</editContent.AppField>
          <editContent.SubmitButton>Add</editContent.SubmitButton>
        </editContent.AppForm>
      </form>
    );
  },
});
