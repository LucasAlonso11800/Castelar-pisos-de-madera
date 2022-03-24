export type Product = {
    categories: string[]
    marca: string
    title: string
    subtitle: string
    options: {
        name: string
        colors: string[]
        liters: number[]
    }[];
    image: string
};

export type Category = {
    name: string
}

export type Brand = {
    name: string
}