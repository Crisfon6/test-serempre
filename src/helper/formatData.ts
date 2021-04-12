import { Product } from "../entity/Product.entity";

export const formatData = (products:Product[])=>{
    let resproduct:any[]=[];
    products.forEach((product:any)=>{
       let {categoryName,categoryID,description,picture} = product.category;       
        product.category= {
            description:  description,
            id: categoryID,
            name:categoryName,
            picture,
        }
        let {supplierID,companyName,contactName,contactTitle,homePage,
            fax,...address}=product.supplier;
        product.supplier={
            address,
            companyName,
            contactName,
            contactTitle,
            id:supplierID
        }

        resproduct.push(product);
    });
    return resproduct;
}

