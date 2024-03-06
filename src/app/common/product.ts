export class Product {
    constructor(public id: number,
                public sku: string,
                public name: string,
                public desc: string,
                public price: number,
                public imgUrl: string,
                public active: boolean,
                public stock: number,
                public dateCreated: Date,
                public lastUpdated: Date) {

    }
}
