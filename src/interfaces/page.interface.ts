export enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Products
}

export interface TopPageAdvantage {
    _id: number
    title: string
    description: string
}

export interface HhData {
    _id: number
    count: number
    juniorSalary: number
    middleSalary: number
    seniorSalary: number
    updateAt: Date
}

export interface TopPageModel {
    tags: string[]
    _id: number
    secondaryCategory: string
    alias: string
    title: string
    category: string
    seoText: string
    tagsTitle: string
    metaTitle: string
    metaDescription: string
    firstCategory: TopLevelCategory
    advantages: TopPageAdvantage[]
    createdAt: Date
    updateAt: Date
    hh: HhData
}
