import { flatten, resolveTemplate, translator } from "@solid-primitives/i18n";
import { Accessor, createContext, createSignal, useContext } from "solid-js";
import nl from "../assets/locales/nl.json" with { type: "json" };

const dicts = {
  nl: flatten(nl),
} as const;

export const createLocale = () => createSignal<keyof typeof dicts>("nl");

const I18nContext = createContext<Accessor<keyof typeof dicts>>(() => "nl" as const);
export const I18nProvider = I18nContext.Provider;

const useLocale = () => {
  return useContext(I18nContext);
};

export const useI18n = () => {
  return translator(() => dicts[useLocale()()], resolveTemplate);
};
