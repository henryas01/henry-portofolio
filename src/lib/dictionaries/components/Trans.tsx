"use client";

import DOMPurify from "isomorphic-dompurify";
import { ReactElement } from "react";
import useTranslate from "../hooks/useTranslation";
import { TransProps } from "../type";
import { isEmpty, parseTranslation } from "./Utils";

/**
 * @component Trans (client-side)
 * Trans component for rendering translations with HTML-like support.
 * Replaces placeholders and dynamic components.
 *
 * @param {TransSSRProps} props - ns, i18n, variables, components
 *
 *
 * @example Basic translation
 * ```
 * <TransSSR
 *   ns="common"
 *   i18n="test-html2"
 *   variables={{ name: "John Doe SSR" }}
 * />
 * ```
 *
 * @example Component replacement
 * ```
 * <TransSSR
 *   ns="common"
 *   i18n="test-html"
 *   variables={{ name: "John Doe SSR" }}
 *   components={{
 *     Text: <Text color="red50" weight="bold" />,
 *   }}
 * />
 * ```
 *
 * @example HTML parse
 * ```
 * <div>
 *   Hi i'm HTML Parse client with Basic HTML
 *   <Trans
 *     ns="common"
 *     i18n="test-html3"
 *     variables={{ name: "John Doe Strong" }}
 *   />
 * </div>
 * ```
 */
const Trans = ({
  ns,
  i18n,
  variables = {},
  components = {},
  raw = false,
  ...props
}: TransProps): ReactElement | string => {
  const { t } = useTranslate(ns || "");

  // Retrieve and process the translation

  const value = raw ? i18n : t(i18n, variables);

  // ✅ HANDLE ARRAY
  if (Array.isArray(value)) {
    return (
      <>
        {value.map((item, i) => (
          <span key={i} {...props}>
            {parseTranslation(item, variables, components)}
          </span>
        ))}
      </>
    );
  }

  // Render HTML safely
  if (isEmpty(components)) {
    return DOMPurify.sanitize(value);
  }

  return (
    <span {...props}>{parseTranslation(value, variables, components)}</span>
  );

  // // Render HTML safely
  // if (isEmpty(components)) {
  //   return DOMPurify.sanitize(translation);
  // }

  // // Render parsed translation string
  // return (
  //   <span {...props}>
  //     {parseTranslation(translation, variables, components)}
  //   </span>
  // );
};

export default Trans;
