"use client";
// import { TranslationContext } from "@app/src/lib/Dictionaries/contexts";

import { PropsWithChildren, useContext, useEffect } from "react";
import { Locale } from "./type";
import { TranslationContext } from "./contexts";

type TranslationsProps = {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  _PropsTranslation: {};
  locale?: Locale;
} & PropsWithChildren;

const Translations = ({
  _PropsTranslation,
  locale,
  children,
}: TranslationsProps) => {
  const { setData } = useContext(TranslationContext);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const timer = setTimeout(() => {
        setData({
          locale: locale,
          _dataTranslation: _PropsTranslation,
        });
      }, 10);

      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_PropsTranslation]);

  return children;
};

export default Translations;
