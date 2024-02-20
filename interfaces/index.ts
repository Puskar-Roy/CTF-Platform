import { ReactNode } from "react";

export interface NavbarItems {
  href: string;
  tags: string;
}

export interface GoogleProviderConfig {
  clientId: string;
  clientSecret: string;
}

export interface AuthProviderProps {
  children: ReactNode;
}