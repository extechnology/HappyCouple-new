export interface Benefit {
    id: number;
    benefit: string;
    product: number;
}

export interface HowToUse {
    id: number;
    how_to_use: string;
    product: number;
}

export interface Review {
    id: number;
    review: string;
    rating: number;
    product: number;
}

export interface FAQ {
    id: number;
    question: string;
    answer: string;
    product: number;
}

export interface ProductType {
    id: number;
    name: string;
    description: string;
    title_description: string;
    title_concern: string;
    concern: string;
    price: number;
    image: string;
    rating: number
    benefits: Benefit[];
    how_to_use: HowToUse[];
    reviews: Review[];
    faq: FAQ[];
}
