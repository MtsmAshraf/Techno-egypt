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
        id: "7", 
        name: "Manual Call Points", 
        src: image7, 
        brand: "Codesec",
        category: "conventional" 
    },
    { 
        id: "11", 
        name: "Conventional control panels", 
        src: image11, 
        brand: "ATS",
        category: "conventional" 
    },
    { 
        id: "15", 
        name: "Detectors", 
        src: image15, 
        brand: "ATS",
        category: "conventional" 
    },
    { 
        id: "18", 
        name: "Fire Sirens", 
        src: image18, 
        brand: "ATS",
        category: "conventional" 
    },
    { 
        id: "19", 
        name: "Manual Call Points", 
        src: image19, 
        brand: "ATS",
        category: "conventional" 
    },
    { 
        id: "20", 
        name: "Indication Devices", 
        src: image20, 
        brand: "ATS",
        category: "conventional" 
    },
    { 
        id: "22", 
        name: "Bells", 
        src: image22, 
        brand: "ATS",
        category: "conventional" 
    },
    { 
        id: "23", 
        name: "TNA Fire Alarm System", 
        src: image23, 
        brand: "TNA",
        category: "addressable" 
    },
    { 
        id: "24", 
        name: "TNA Beam Detectors", 
        src: image24, 
        brand: "TNA",
        category: "addressable"
    },
    { 
        id: "25", 
        name: "Apollo", 
        category: "conventional"
    },
    { 
        id: "26", 
        name: "Hochiki", 
        category: "conventional"
    },
    { 
        id: "27", 
        name: "Simplex", 
        category: "conventional"
    },
    { 
        id: "28", 
        name: "Gents", 
        category: "conventional"
    },
    { 
        id: "29", 
        name: "Notifier", 
        category: "conventional"
    },
    { 
        id: "30", 
        name: "Morley", 
        category: "conventional"
    },
    { 
        id: "31", 
        name: "FireClass", 
        category: "conventional"
    },
    { 
        id: "32", 
        name: "Thorns", 
        category: "conventional"
    },
    { 
        id: "33", 
        name: "Honeywell", 
        category: "conventional"
    },
    { 
        id: "34", 
        name: "System Sensors", 
        category: "conventional"
    },
    { 
        id: "35", 
        name: "Fire-Lite", 
        category: "conventional"
    },
    { 
        id: "36", 
        name: "Siemens", 
        category: "conventional"
    },
    { 
        id: "37", 
        name: "Apollo", 
        category: "addressable"
    },
    { 
        id: "38", 
        name: "Hochiki", 
        category: "addressable"
    },
    { 
        id: "39", 
        name: "Simplex", 
        category: "addressable"
    },
    { 
        id: "40", 
        name: "Gents", 
        category: "addressable"
    },
    { 
        id: "41", 
        name: "Notifier", 
        category: "addressable"
    },
    { 
        id: "42", 
        name: "Morley", 
        category: "addressable"
    },
    { 
        id: "43", 
        name: "FireClass", 
        category: "addressable"
    },
    { 
        id: "44", 
        name: "Thorns", 
        category: "addressable"
    },
    { 
        id: "45", 
        name: "Honeywell", 
        category: "addressable"
    },
    { 
        id: "46", 
        name: "System Sensors", 
        category: "addressable"
    },
    { 
        id: "47", 
        name: "Fire-Lite", 
        category: "addressable"
    },
    { 
        id: "48", 
        name: "Siemens", 
        category: "addressable"
    }
]

export default products;