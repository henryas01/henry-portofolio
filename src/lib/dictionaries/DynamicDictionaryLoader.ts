import { Dictionaries, RecordLoadDictionaries } from "./type";

// Define your dictionaries with a structure matching the `Dictionaries` type
const listDictionary: string[] = [
  "common",
  "home",
  "resume",
  "request",
  "projects",
  "certificates",

];

const DynamicDictionaryLoader: Dictionaries = {
  en: loadDictionaries("en", listDictionary),
  id: loadDictionaries("id", listDictionary),
};

function loadDictionaries(language: string, dictionaryNames: string[]) {
  return dictionaryNames.reduce((acc: RecordLoadDictionaries, name: string) => {
    acc[name] = () =>
      import(`../../dictionaries/${language}/${name}.json`).then(
        (module) => module.default
      );
    return acc;
  }, {} as RecordLoadDictionaries);
}

export default DynamicDictionaryLoader;
