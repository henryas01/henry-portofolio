import { Dictionary, Locale } from "../type";

export type ContextType = ContextTypeData & ContextMethod;

export type ContextTypeData = {
  _dataTranslation?: Dictionary;
  isLoading?: boolean;
  name?: string;
  locale?: Locale;
};

export type ContextMethod = {
  setData: (data: ContextTypeData) => void;
};
