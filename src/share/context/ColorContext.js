import { createContext, use } from "react";

const DEFAULT_VALUE = { textColor: null, palette: null };

const ColorContext = createContext(DEFAULT_VALUE);

export const useColorContext = () => use(ColorContext) || DEFAULT_VALUE;

export default ColorContext;
