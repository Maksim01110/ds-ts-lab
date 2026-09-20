export type Course = "starter" | "main" | "dessert";

export interface Nutrition {
  calories: number;
  allergens: string[];
}

export interface MenuItem {
  id: number;
  name: string;
  course: Course;
  price: number;
  nutrition: Nutrition;
  discountPercent?: number;
  availableFrom?: Date;
}

export interface ComboDeal {
  id: number;
  name: string;
  items: MenuItem[];
  price: number;
}

export type OrderLine = MenuItem | ComboDeal;
