"use server";

import ServerSideTranslations from "../ServerSideTranslations";
import { Dictionary, UseTranslate } from "../type";
import { translateKey } from "./Utils";

async function getServerTranslation(keyProps: string): Promise<UseTranslate> {
  const dictionaryObj = await ServerSideTranslations([keyProps]);
  const _dataTranslation: Dictionary = dictionaryObj as Dictionary;

  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  const t: (key: string, variables?: {}) => string = (
    key: string,
    variables = {}
  ): string =>
    translateKey({
      isLoading: false,
      _dataTranslation,
      key,
      keyProps,
      variables,
    });

  return { t };
}

export default getServerTranslation;
