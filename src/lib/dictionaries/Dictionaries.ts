import "server-only";

import DynamicDictionaryLoader from "./DynamicDictionaryLoader";
import { DEFAULT_LOCALE, GetDictionaryProps, Locale, LOCALES } from "./type";
import { headers } from "next/headers";



export const getDictionary = async ({ locale, module }: GetDictionaryProps) => {
  if (
    DynamicDictionaryLoader[locale] &&
    DynamicDictionaryLoader[locale][module]
  ) {
    return await DynamicDictionaryLoader[locale][module]();
  } else {
    throw new Error(
      `Dictionary or module "${module}" for locale "${locale}" is not found`
    );
  }
};




export const getLocale: () => Promise<Locale> = async (): Promise<Locale> => {
  try {
    const headerList = await headers();
    const acceptLanguage = headerList.get("accept-language");
    const lang = "";

    if (acceptLanguage) {
    const detected = acceptLanguage
      .split(",")
      .map((lang) => lang.split("-")[0].trim())
      .find((lang) =>
        LOCALES.includes(lang as Locale)
      );

    if (detected) {
      return detected as Locale;
    }
  }

    return lang as Locale;
  } catch (error) {
    return DEFAULT_LOCALE as Locale;
  }
};
