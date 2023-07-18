import { createContext } from "react";
import dataWWD from "../BLL/reducers/whatWeDoReducer";

export const LanguageContext = createContext(dataWWD);