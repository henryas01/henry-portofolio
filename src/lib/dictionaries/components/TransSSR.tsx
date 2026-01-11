import "server-only";

import DOMPurify from "isomorphic-dompurify";
import React, { ReactElement } from "react";
import useTranslateSSR from "../hooks/getServerTranslation";
import { TransProps as TransSSRProps } from "../type";
import { isEmpty, parseTranslation } from "./Utils";

/**
 * @component TransSSR (server-side)
 * TransSSR component for server-side translations with HTML-like support.
 * Fetches and renders translations with dynamic variables replaced.
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
const TransSSR = async ({
  ns = "common",
  i18n,
  variables = {},
  components = {},
}: TransSSRProps): Promise<ReactElement | string> => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslateSSR(ns);
  // Retrieve and process the translation
  const translation = t(i18n, variables);

  // Render HTML safely
  if (isEmpty(components)) {
    return DOMPurify.sanitize(translation);
  }

  // Render parsed translation string
  return <>{parseTranslation(translation, variables, components)}</>;
};

export default TransSSR;
