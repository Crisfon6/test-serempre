import { Category } from "../entity/Category.entity";
import { Order } from "../entity/Order.entity";
import { OrderDetail } from "../entity/OrderDetail.entity";
import { Product } from "../entity/Product.entity";
import { Supplier } from "../entity/Supplier.entity";

export const saveTestData = async (connection)=>{
    
        //create category
        const cat = new Category();
        cat.description= "Desserts candies and sweet brea";
        cat.categoryName= "technology";
        cat.picture= new Buffer('moimopadsmopo<');

        const cat1 = await connection.save(cat);  

    //create supplier
        const supplier = new Supplier();        
        supplier.address= "dasda";
        supplier.city= "New Orleans";
        supplier.country= "USA";
        supplier.phone= "(100) 555-4822";
        supplier.postalCode= 70117;
        supplier.region= "LA"         ;
        supplier.companyName= "Techs";
        supplier.contactName= "Shelley Burke";
        supplier.contactTitle= "Order Administrator";
        supplier.fax = "dasdada";
        supplier.homePage= "dasdadada";
        
        const sup1 = await connection.save(supplier);
        
          //create order
    const order = new Order();
    order.requiredDate = new Date();
    order.orderDate = new Date();
    order.shippedDate= new Date();
    order.freight = 12312;
    order.shipName = "adadada";
    order.shipAddress= "colomba";
    order.shipCity ="snatnader";
    order.shipRegion = "bga";
    order.shipPostalCode = "dasda";
    order.shipCountry = "312313";

    const orderSaved = await connection.save(order);


      
        const prod = new  Product();
        prod.productName = "Cookies";
        prod.quantityPerUnit = "3";
        prod.unitPrice = 31;
        prod.unitsInStock= 31;
        prod.unitsOnOrder = 13;
        prod.reorderLevel = 2;
        prod.discontinued= 0;           
        
        prod.supplier = sup1;
        prod.category= cat1;
        const prodSaved  = await connection.save(prod);
        
      console.log('Product saved');
    //create orderdetails
        const orderDetails = new OrderDetail();
        orderDetails.quantity = 3;
        orderDetails.unitPrice= 314;
        orderDetails.order = orderSaved;
        orderDetails.product = prodSaved;
        orderDetails.discount = 1;
        
        const orderDataSaved = await connection.save(orderDetails);
        return orderDataSaved;
        
}