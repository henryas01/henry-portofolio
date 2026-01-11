"use client";

import { useContext } from "react";
import { TranslationContext } from "../contexts";
import { UseTranslate } from "../type";
import { translateKey } from "./Utils";

/**
 * @hooks Hooks for retrieving translations along with its locale.
 * @description It fetches the active translation module based on the provided keyProps.
 *
 * @param {string} keyProps - The key of the translation module (e.g. 'common', 'wishlist')
 * @returns {UseTranslate} - Object with a t-function for translating and locale
 *
 * Set the translation context in the layout or page file as follows:
 *
 * @example
 * ```
 * export default async function RootLayout({
 *   children,
 * }: Readonly<PropsWithChildren>) {
 *   const locale = await getLocale();
 *   const dictionaryObj = await ServerSideTranslations(["common"]);
 *
 *   return (
 *     <Translations _PropsTranslation={dictionaryObj} locale={locale}>
 *       {children}
 *     </Translations>
 *   );
 * }
 * ```
 *
 * Then you can use it in your component as follows:
 *
 * @example
 * ```
 * const { t, locale } = useTranslation("common");
 * t("hello"); // "Hello World"
 * locale // "en" depends on your browser default language
 * ```
 */
function useTranslation(keyProps: string): UseTranslate {
  const { _dataTranslation, isLoading, locale } =
    useContext(TranslationContext);

   // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  const t: (key: string, variables?: {}) => string = (
    key: string,
    variables = {}
  ): string =>
    translateKey({
      isLoading: isLoading ?? false,
      _dataTranslation: _dataTranslation ?? {},
      key,
      keyProps,
      variables,
    });

  return { t, locale, isLoading };
}

export default useTranslation;
