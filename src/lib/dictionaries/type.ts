import { FC, ReactNode } from "react";

export const LOCALES = ["id", "en"] as const;
export const DEFAULT_LOCALE: Locale = "id";
export type Locale = (typeof LOCALES)[number];

// Define the dictionaries with types
export type Dictionaries = {
  [key in Locale]: {
    [module: string]: () => Promise<object>; // Each module returns a promise (JSON)
  };
};

export type Dictionary = {
  [key: string]: {
    [key: string]: string;
  };
};

export type RecordLoadDictionaries = Record<string, () => Promise<object>>;

export type TranslationVariables = {
  [key: string]: string | number | boolean;
};

export type RecordTranslationVariables = Record<
  string,
  string | number | boolean
>;

export type TFunction = (
  key: string,
  variables?: TranslationVariables
) => string;

export type UseTranslate = {
  t: TFunction;
  locale?: Locale;
  isLoading?: boolean;
};

export type TranslateKey = Record<string, unknown> & {
  _dataTranslation: Dictionary;
  isLoading: boolean;
  key: string;
  keyProps: string;
  variables?: RecordTranslationVariables;
};

export type TransProps = {
  ns?: string; // the namespace or module for translations
  components?: Record<string, ReactNode | FC<{ children: ReactNode }>>; // Custom components to replace placeholders
  i18n: string; // The specific key within the base key
  variables?: Record<string, string>; // Dynamic variables for placeholders
  className?: string;
  raw?: boolean; // If true, return raw string without parsing
};

export type GetDictionaryProps = {
  locale: Locale; // Expect a valid locale value ('en' | 'id' | 'ms')
  module: string;
};
