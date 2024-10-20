import type { ComponentProps } from "solid-js";

export const GithubIcon = ({ class: className, ...props }: ComponentProps<"span">) => (
  <span class={`${className} grid bg-black px-2 py-1 text-white`} {...props}>
    <i class="i-brands:github-alt" />
  </span>
);

export const InstagramIcon = ({ class: className, ...props }: ComponentProps<"span">) => (
  <span
    class={`${className} grid bg-[#0077B5] px-2 py-1 text-white`}
    style={{ background: "linear-gradient(150deg, #405DE6, #5B51D8, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)" }}
    {...props}
  >
    <i class="i-brands:instagram" />
  </span>
);

export const LinkedinIcon = ({ class: className, ...props }: ComponentProps<"span">) => (
  <span class={`${className} grid bg-[#0077B5] px-2 py-1 text-white`} {...props}>
    <i class="i-brands:linkedin-in" />
  </span>
);

export const TiktokIcon = ({ class: className, ...props }: ComponentProps<"span">) => (
  <span class={`${className} grid grid-cols-1 grid-rows-1 bg-slate-100 px-2 py-1 text-black`} {...props}>
    <i class="i-brands:tiktok z-1 col-start-1 row-start-1 text-2xl" />
    <i class="i-brands:tiktok col-start-1 row-start-1 ml-px text-2xl text-[#FE2C55]" />
    <i class="i-brands:tiktok -ml-px -mt-px col-start-1 row-start-1 text-2xl text-[#25F4EE]" />
  </span>
);

export const TwitterIcon = ({ class: className, ...props }: ComponentProps<"span">) => (
  <span class={`${className} grid bg-slate-100 px-2 py-1 text-black`} {...props}>
    <i class="i-brands:x-twitter" />
  </span>
);

export const WhatsappIcon = ({ class: className, ...props }: ComponentProps<"span">) => (
  <span class={`${className} grid bg-[#25D366] px-2 py-1 text-white`} {...props}>
    <i class="i-brands:whatsapp" />
  </span>
);
