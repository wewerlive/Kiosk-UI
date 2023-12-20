
type Stats = {
    id: number,
    name: string,
    value: string,
};

type Pricing = {
    plan: string
    tagline: string
    quota: number
    price: number
    features: {
        text: string
        footnote?: string
        negative?: boolean
    }[]
};

type Links = {
    name?: string
    icon?: JSX.Element
    href: string
}