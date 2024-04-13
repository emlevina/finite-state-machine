export type ResponsiveProp<T extends string | number> =
  | T
  | { mobile?: T; tablet?: T; desktop?: T };

export type Direction = "row" | "column" | "row-reverse" | "column-reverse";

export type AlignItems = "center" | "start" | "end" | "stretch";

export type Gap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
