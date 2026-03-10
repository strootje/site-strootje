import { Icon } from "#/components/icon.tsx";
import { Editor as TiptapEditor } from "@tiptap/core";
import { Markdown } from "@tiptap/markdown";
import StarterKit from "@tiptap/starter-kit";
import { onMount } from "solid-js";

export const Editor = () => {
  let ref: HTMLDivElement;
  let editor!: TiptapEditor;

  onMount(() => {
    editor = new TiptapEditor({
      element: ref,
      extensions: [StarterKit, Markdown],
      content: "# Nice *title*",
      contentType: "markdown",
    });
  });

  const toggleUnderline = () => editor?.chain().focus().toggleUnderline().run();

  return (
    <div class="prose" ref={(el) => (ref = el)}>
      <div class="flex gap-1">
        <div class="flex rounded bg-stone-200">
          <button
            type="button"
            class="p-2"
            classList={{ "bg-white": editor?.isActive("bold") ?? false }}
            onclick={() => editor?.chain().focus().toggleBold().run()}
          >
            <Icon class="i-solar:text-bold-outline" />
          </button>

          <button
            type="button"
            class="p-2"
            classList={{ "bg-white": editor?.isActive("italic") }}
            onclick={() => editor?.chain().focus().toggleItalic().run()}
          >
            <Icon class="i-solar:text-italic-outline" />
          </button>

          <button type="button" class="p-2" onclick={toggleUnderline}>
            <Icon class="i-solar:text-underline-outline" />
          </button>
        </div>
      </div>
    </div>
  );
};
