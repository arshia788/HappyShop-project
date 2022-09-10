
// headPhones
import headphone1 from './images/headphone.jpg';
import headphone2 from './images/headphone2.jpg';
import headphone3 from './images/headphone3.jpg';


// mobile =>
// iphoens
import iphone13pro from './images/iphone13pro.png';
import iphone11pro from './images/iphone11pro.png';
import iphone12pro from './images/iphone12pro.png';


// samsung
import samsung from './images/samsungmb1.jpg';
import samsungs20ultra from './images/samsungs20ultra.jpg';
import samsungsgalaxynote from './images/samsunggalaxynote20.webp';
import samsungsZFlip from './images/samsungZFlip.jpg';

// LG
import LGvelvet5 from './images/LGvelvet5.jpg';
import LGVelvetpro from './images/LGVelvetpro.jpg';
import LGV50 from './images/LGV50.jpg';
import LGV60 from './images/LGV60.jpg';


// xiaomi
import Xiaomi12 from './images/Xiaomi12.JPG'
import XiaomiMi11Pro from './images/XiaomiMi11Pro.jpg'
import Xiaomi12pro from './images/Xiaomi-12-Pro-2.jpg'


// perfumes =>
// chanel
import bluechanel from './images/perfumes/bluethechanel.jpg'

// dior
import diorsauvage from './images/perfumes/Diorsauvage.jpg'
import diorhommeintense1 from './images/perfumes/homme.webp'

// tomford
import fucking from './images/perfumes/fucking-fabulous-1.jpg';
import oudwood from './images/perfumes/oud-wood.webp';
import tobacco from './images/perfumes/tomford-tobaccovanille.jpg';

// VIKTOR&ROLF
import spicebomb from './images/perfumes/spicebomb.webp';

// creed 
import creed from './images/perfumes/creed.jpg'

// montblanc
import montblanc from './images/perfumes/montblanc.jpg'


const data=[

    // headPhones=>
    // razer
    {
        id:1,
        brand:'razer',
        image:headphone1,
        name:'razer s21',
        category:'headphone',
        price:1900000,
        type:'normal',
    }
    
    ,
    {
        id:2,
        brand:'razer',
        image:headphone2,
        name:'razer ev72',
        category:'headphone',
        price:1800000,
        type:'normal',
    }
    ,
    // logitech
    {
        id:3,
        brand:'logitech',
        image:headphone3,
        name:'logitech xy2.1',
        category:'headphone',
        price:1700000,
        type:'normal',
    }

    ,
    
    // mobiles => 
    // iphones

    {
        id:4,
        brand:'iphone',
        image:iphone13pro,
        name:'iphone13 pro',
        category:'mobile',
        price:50000000,
        type:'discount',
        priceDiscount:45000000,
    }

    ,

    {
        id:5,
        brand:'iphone',
        image:iphone12pro,
        name:'iphone12 pro',
        category:'mobile',
        price:30000000,
        type:'normal',
    }

    ,

    {
        id:6,
        brand:'iphone',
        image:iphone11pro,
        name:'iphone11 pro',
        category:'mobile',
        price:10000000,
        type:'normal',
    }

    ,

    // samsung 
    {
        id:7,
        brand:'samsung',
        image:samsungs20ultra,
        name:'samsungS20 ultra',
        category:'mobile',
        price:32000000,
        type:'normal',
    },

    {
        id:8,
        brand:'samsung',
        image:samsung,
        name:'samsung galaxy21',
        category:'mobile',
        price:2000000,
        type:'discount',
        priceDiscount:1990000,
    }

    ,

    {
        id:9,
        brand:'samsung',
        image:samsungsgalaxynote,
        name:'samsung note20',
        category:'mobile',
        price:4000000,
        type:'discount',
        priceDiscount:3500000,
    }

    ,

    {
        id:10,
        brand:'samsung',
        image:samsungsZFlip,
        name:'samsung Z Flip',
        category:'mobile',
        price:4100000,
        type:'normal',
    }
    ,
    // lg

    {
        id:11,
        brand:'LG',
        image:LGvelvet5,
        name:'LG velvet 5',
        category:'mobile',
        price:1000000,
        type:'normal',
    }
    ,

    {
        id:12,
        brand:'LG',
        image:LGVelvetpro,
        name:'LG velvet pro',
        category:'mobile',
        price:4000000,
        type:'normal',
    }
    ,

    {
        id:13,
        brand:'LG',
        image:LGV50,
        name:'LG V50',
        category:'mobile',
        price:4100000,
        type:'normal',
    }
    ,

    {
        id:14,
        brand:'LG',
        image:LGV50,
        name:'LG V50',
        category:'mobile',
        price:4100000,
        type:'normal',
    }
    ,

    {
        id:15,
        brand:'LG',
        image:LGV60,
        name:'LG V60',
        category:'mobile',
        price:4100000,
        type:'discount',
        priceDiscount:3800000
    }
    ,

    // Xiaomi

    {
        id:16,
        brand:'Xiaomi',
        image:Xiaomi12,
        name:'Xiaomi12',
        category:'mobile',
        price:4100000,
        type:'normal',
    }
    ,

    {
        id:17,
        brand:'Xiaomi',
        image:XiaomiMi11Pro,
        name:'XiaomiMi11Pro',
        category:'mobile',
        price:5000000,
        type:'normal',
    }
    ,

    {
        id:18,
        brand:'Xiaomi',
        image:Xiaomi12pro,
        name:'Xiaomi12pro',
        category:'mobile',
        price:5100000,
        type:'normal',
    }
    ,

    // perfumes

    {
        id:19,
        brand:'chanel',
        image:bluechanel,
        name:'blue The Chanel',
        category:'perfume',
        price:2000000,
        type:'normal',
    }
    ,

    // dior
    {
        id:20,
        brand:'dior',
        image:diorsauvage,
        name:'dior sauvage',
        category:'perfume',
        price:2000000,
        type:'normal',
        info: "Sauvage was launched in 2015. The nose behind this fragrance is Francois Demachy. Top notes are Calabrian bergamot; middle notes are Sichuan Pepper, Lavender; base notes are Ambroxan, Cedar."
    }
    ,

    {
        id:21,
        brand:'dior',
        image:diorhommeintense1,
        name:'dior homme intense',
        category:'perfume',
        price:3000000,
        type:'normal',
    }
    ,

    // tom ford

    {
        id:22,
        brand:'tomford',
        image:fucking,
        name:'tomford  Fabulous',
        category:'perfume',
        price:1000000,
        type:'normal',
    }
    ,

    {
        id:23,
        brand:'tomford',
        image:oudwood,
        name:'tomford oudwood',
        category:'perfume',
        price:1400000,
        type:'normal',
    }
    ,

    {
        id:24,
        brand:'tomford',
        image:tobacco,
        name:'tomford tobaco-vanille',
        category:'perfume',
        price:1700000,
        type:'normal',
    }
    ,

    // VIKTOR&ROLF

    {
        id:25,
        brand:'VIKTOR&ROLF',
        image:spicebomb,
        name:'Spicebomb Extreme',
        category:'perfume',
        price:3320000,
        type:'normal',
    }
    ,

    {
        id:26,
        brand:'Montblanc',
        image:montblanc,
        name:'Mont Blanc Legend',
        category:'perfume',
        price:1550000,
        type:'normal',
    }
    ,

    {
        id:27,
        brand:'creed',
        image:creed,
        name:'Creed-aventus',
        category:'perfume',
        price:10400000,
        type:'normal',
    }
    ,


]


export {data}

