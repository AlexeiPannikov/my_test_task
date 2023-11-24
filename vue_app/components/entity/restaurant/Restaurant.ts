export class Restaurant {
    name: string = "";
    time_of_delivery: number | null = null;
    stars: number | null = null;
    price: number | null = null;
    kitchen: string = "";
    image: string = "";
    products: string = "";

    constructor(obj?: Partial<Restaurant>) {
        if (obj) {
            // Object.assign(this, obj)
            // this.name = obj.name || ""
            // this.time_of_delivery = obj.time_of_delivery || null
            // this.stars = obj.stars || null
            // this.price = obj.price || null
            // this.kitchen = obj.kitchen || ""
            // this.image = obj.image || ""
            // this.products = obj.products || ""
        }
    }
}