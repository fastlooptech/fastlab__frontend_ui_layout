export type Override<O1, O2> = Pick<O1, Exclude<keyof O1, keyof O2>> & O2;
