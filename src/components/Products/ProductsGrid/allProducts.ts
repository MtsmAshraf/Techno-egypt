import { StaticImageData } from "next/image"

import image1 from "../../../../public/imgs/product-test.png";
// import image2 from "../../../../public/imgs/product-test.png";
// import image3 from "../../../../public/imgs/product-test.png";
// import image4 from "../../../../public/imgs/product-test.png";
import image5 from "../../../../public/imgs/product-test.png";
// import image6 from "../../../../public/imgs/product-test.png";
import image7 from "../../../../public/imgs/product-test.png";
// import image8 from "../../../../public/imgs/product-test.png";
import image9 from "../../../../public/imgs/product-test.png";
// import image10 from "../../../../public/imgs/product-test.png";
import image11 from "../../../../public/imgs/product-test.png";
// import image12 from "../../../../public/imgs/product-test.png";
// import image13 from "../../../../public/imgs/product-test.png";
// import image14 from "../../../../public/imgs/product-test.png";
import image15 from "../../../../public/imgs/product-test.png";
// import image16 from "../../../../public/imgs/product-test.png";
// import image17 from "../../../../public/imgs/product-test.png";
import image18 from "../../../../public/imgs/product-test.png";
import image19 from "../../../../public/imgs/product-test.png";
import image20 from "../../../../public/imgs/product-test.png";
// import image21 from "../../../../public/imgs/product-test.png";
import image22 from "../../../../public/imgs/product-test.png";
import image23 from "../../../../public/imgs/product-test.png";
import image24 from "../../../../public/imgs/product-test.png";



export type Product = {
    id: string,
    name: string,
    src?: StaticImageData,
    brand?: string,
    category: string
}

const products : Product[] = [
    { 
        id: "1", 
        name: "Conventional Control Panels", 
        src: image1, 
        brand: "Codesec",
        category: "conventional" 
    },
    { 
        id: "5", 
        name: "Detectors", 
        src: image5, 
        brand: "Codesec",
        category: "conventional" 
    },
    { 
        id: "9", 
        name: "Fire Sirens", 
        src: image9, 
        brand: "Codesec",
        category: "conventional" 
    },
    { 
        id: "72", 
        name: "Manual Call Points", 
        src: image7, 
        brand: "Codesec",
        category: "conventional" 
    },
    { 
        id: "73", 
        name: "Manual Call Points", 
        src: image7, 
        brand: "Codesec",
        category: "conventional" 
    },
    { 
        id: "74", 
        name: "Manual Call Points", 
        src: image7, 
        brand: "Codesec",
        category: "conventional" 
    }
]

export default products;