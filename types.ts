export interface PricingPackage {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
  renewalPrice?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}