import { StaticImageData } from "next/image"

import image25 from "../../../../public/imgs/products/25.png";
import image26 from "../../../../public/imgs/products/26.png";
import image27 from "../../../../public/imgs/products/27.png";
import image28 from "../../../../public/imgs/products/28.png";
import image29 from "../../../../public/imgs/products/29.png";
import image30 from "../../../../public/imgs/products/30.png";
import image31 from "../../../../public/imgs/products/31.png";
import image32 from "../../../../public/imgs/products/32.png";
import image33 from "../../../../public/imgs/products/33.png";
import image34 from "../../../../public/imgs/products/34.png";
import image35 from "../../../../public/imgs/products/35.png";
import image36 from "../../../../public/imgs/products/36.webp";
import image37 from "../../../../public/imgs/products/37.webp";
import image38 from "../../../../public/imgs/products/38.png";
import image39 from "../../../../public/imgs/products/39.png";
import image40 from "../../../../public/imgs/products/40.png";
import image41 from "../../../../public/imgs/products/41.png";
import image42 from "../../../../public/imgs/products/42.png";
import image43 from "../../../../public/imgs/products/43.png";
import image44 from "../../../../public/imgs/products/44.png";




export type FightingProduct = {
    id: string,
    name: string,
    src?: StaticImageData,
}

const fightingProducts : FightingProduct[] = [
    { 
        id: "25", 
        name: "Firefighting Pump", 
        src: image25 
    },
    { 
        id: "26", 
        name: "Firefighting Cabinets", 
        src: image26 
    },
    { 
        id: "27", 
        name: "Double Cabinets", 
        src: image27 
    },
    { 
        id: "28", 
        name: "Standalone Cabinets", 
        src: image28 
    },
    { 
        id: "29", 
        name: "Hose Reel System", 
        src: image29 
    },
    {
        id: "30",
        name: "Automatic Sprinklers",
        src: image30
    },
    { 
        id: "31", 
        name: "Fire Hose", 
        src: image31 
    },
    { 
        id: "32", 
        name: "PVC Fire Hose", 
        src: image32 
    },
    { 
        id: "33", 
        name: "Landing Valves", 
        src: image33 
    },
    { 
        id: "34", 
        name: "Fire Nozzles ", 
        src: image34 
    },
    { 
        id: "35", 
        name: "Siamese Connection", 
        src: image35
    },
    { 
        id: "36", 
        name: "Water Monitors", 
        src: image36 
    },
    { 
        id: "37", 
        name: "Foam Monitors", 
        src: image37 
    },
    { 
        id: "38", 
        name: "CO2 fire search extinguishers", 
        src: image38 
    },
    { 
        id: "39", 
        name: "FM200 Cylinders", 
        src: image39 
    },
    { 
        id: "40", 
        name: "Kitchen Hood Systems Cylinders", 
        src: image40 
    },
    { 
        id: "41", 
        name: "45Kg CO2 Cylinders", 
        src: image41 
    },
    { 
        id: "42", 
        name: "CO2 Portable extinguishers", 
        src: image42 
    },
    { 
        id: "43", 
        name: "Fire Hydrant", 
        src: image43 
    },
    { 
        id: "44", 
        name: "Powder Fire extinguishers", 
        src: image44
    },
]

export default fightingProducts;