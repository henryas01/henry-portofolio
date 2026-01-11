import { HomeData } from "../models";


export interface ContextType extends ContextTypeData, ContextMethod {}



export interface ContextTypeData extends HomeData {
  name?: string;
}

export interface ContextMethod {
  setDataHome: (data: ContextTypeData | object, resetAll?: boolean) => void;
}
