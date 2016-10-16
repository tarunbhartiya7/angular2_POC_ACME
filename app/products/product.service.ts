import { Injectable } from 'angular2/core';
import { IProduct } from './product';

@Injectable()

export class ProductService{
    getProducts(): IProduct[]{
        return [
                    {
                        "productId": 1,
                          "productName": "Leaf Rake",
                        "productCode": "GDN-0011",
                        "releaseDate": "March 19, 2016",
                        "description": "Leaf rake with 48-inch wooden handle.",
                        "price": 19.9578,
                        "starRating": 3,
                        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
                    },
                    {
                        "productId": 2,
                        "productName": "Garden Cart",
                        "productCode": "GDN-0023",
                        "releaseDate": "March 18, 2016",
                        "description": "15 gallon capacity rolling garden cart",
                        "price": 32.9,
                        "starRating": 4,
                        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
                    },
                    {
                        "productId": 10,
                        "productName": "Video Game Controller",
                        "productCode": "GMG-0042",
                        "releaseDate": "October 15, 2015",
                        "description": "Standard two-button video game controller",
                        "price": 35.95,
                        "starRating": 4.6,
                        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
                    }
            ];
    }

}