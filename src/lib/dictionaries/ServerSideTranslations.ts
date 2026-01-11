import { getDictionary, getLocale } from "./Dictionaries";

/**
 * @description Fetches a list of dictionaries from the server and returns an object with the corresponding modules as keys
 * @param {string[]} listTranslations - list of modules to fetch within dictionaries.
 * e.g. ["common", "wishlist"] - less is better
 * @locale en, id
 *
 */
export default async function ServerSideTranslations(
  listTranslations: string[]
): Promise<{ [s: string]: object }> {
  const locale = await getLocale();

  // Dynamically map over the arrayList and fetch corresponding dictionaries
  const dictionaries = await Promise.all(
    listTranslations.map((module: string) => getDictionary({ locale, module }))
  );

  // If you want to associate each dictionary with its module name, you can map over the results and construct an object
  return Object.fromEntries(
    listTranslations.map((module, index) => [module, dictionaries[index]])
  );
}
