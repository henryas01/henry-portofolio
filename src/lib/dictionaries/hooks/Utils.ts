import { TranslateKey } from "../type";

function getNestedTranslation<T>(
  data: Record<string, unknown>,
  key: string
): T | string {
  return key.split(".").reduce((acc: unknown, part: string) => {
    // Ensure the accumulator is an object before trying to access properties
    if (acc && typeof acc === "object" && part in acc) {
      return (acc as Record<string, unknown>)[part]; // Safely access the property
    }

    return key; // Return string if the key is not found
  }, data) as T | string; // Return the result casted to T or string
}

export const translateKey = ({
  _dataTranslation,
  isLoading,
  key,
  keyProps,
  variables = {},
}: TranslateKey): string => {
  if (isLoading) return "";
  if (!_dataTranslation) return key;

  // Retrieve the translation string from the context
  const translation =
    getNestedTranslation<string>(_dataTranslation, `${keyProps}.${key}`) || key;

  // Replace dynamic variables in the translation string
  return Object.keys(variables).reduce((str, variableKey) => {
    const regExp = new RegExp(`{{${variableKey}}}`, "g");
    return str.replace(regExp, String(variables[variableKey]));
  }, translation);
};
