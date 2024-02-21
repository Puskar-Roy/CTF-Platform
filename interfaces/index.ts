import { ReactNode } from "react";

export interface NavbarItems {
  href: string;
  tags: string;
  onClick?: () => void;
}

export interface GoogleProviderConfig {
  clientId: string;
  clientSecret: string;
}

export interface AuthProviderProps {
  children: ReactNode;
}


export interface Users {
  email: string;
  image?: string;
  name?: string;
  questionsDone?: string[];
  totalScore?: number;
}

export interface Questions {
  title: string;
  description: string;
  category: string;
  points: number;
  flag?: string;
  isSolved?: boolean;
  // answeredCorrectly: { type: Boolean; default: false };
}