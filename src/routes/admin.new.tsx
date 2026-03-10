import { Editor } from "#/components/editor.tsx";
import { createFileRoute } from "@tanstack/solid-router";

export const Route = createFileRoute("/admin/new")({
  component: () => {
    return (
      <>
        <h1>Editor..</h1>
        <Editor />
      </>
    );
  },
});
