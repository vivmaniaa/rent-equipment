export interface Location {
    dealers_id: string;
    name: string;
    opco: string;
    branches: Array<Branch>
}

export interface Branch{
    branch_id: string;
    name: string;
    categories: Array<Category>;
}

export interface Category{
    name: string;
    image: string;
    subcategories: Array<SubCategories>;
}

export interface SubCategories {
    name: string;
    image: string;
}

export interface Breadcrumb{
    title: string;
    link?: string;
}