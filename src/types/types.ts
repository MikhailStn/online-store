import { CSSProperties } from "react";

export type Product = {
  id: string;
  name: string;
  description: string;
  configuration: string;
  brand: string;
  price: number;
  stock: number;
  images: string[];
  quantity: number;
  display: string;
};

export type MenuStyle = {
  line1: CSSProperties;
  line2: CSSProperties;
  line3: CSSProperties;
  headerMenu: CSSProperties;
  headerOverlay: CSSProperties;
  headerButton: CSSProperties
};
