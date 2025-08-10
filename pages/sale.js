import Image from 'next/image';
import {useState} from 'react';

import Head from 'next/head';


const items = [
    {
        title: 'Vespa Sprint 125 (2018)',
        price: '₪12,500',
        description: 'Green, sleek, fast, and beautiful.\nLess than 19K km.\n Minor cosmetic details, excellent functional condition',
        img: '/images/vespa.png',
        sold: true,
        category: 'Mobility',
        lastWeekOnly: true,
    },
    {
        title: 'WiFi Dud (Electrical Heater) - Switcher Touch',
        price: '₪150',
        description: 'Smart wall switch for your dud with app control.\nSchedule and control the heater remotely.\niOS and Android.',
        img: '/images/dud.png',
        sold: false,
        category: 'Tech & Gadgets',
        lastWeekOnly: false,
    },
    {
        title: 'Evoke City Bike',
        price: '₪900',
        description: 'Sturdy city bike with basket.\nSmooth ride, good condition, includes sturdy chain.\nPerfect for daily errands.',
        img: '/images/bike.jpeg',
        sold: false,
        category: 'Mobility',
        lastWeekOnly: true,
    },
    {
        title: 'Nintendo Switch',
        price: '₪700',
        description: 'Excellent condition.\nIncludes: extra joystick, accessories, soft cases, 3 physical games and several others in my Nintendo account.',
        img: '/images/switch.jpeg',
        sold: true,
        category: 'Tech & Gadgets',
        lastWeekOnly: false,
    },
    {
        title: 'MacBook Pro - 13 inch',
        price: '₪1400',
        description: 'Core i5 2.9 GHz\n8 GB RAM – 256 GB SSD\nExcellent condition.',
        img: '/images/macbook.jpg',
        sold: true,
        category: 'Tech & Gadgets',
        lastWeekOnly: false,
    },
    {
        title: 'AudioTechnica Turntable AT-LP60',
        price: '₪450',
        description: 'Belt-drive, 2-speed (33 & 45 RPM) turntable with built-in phono preamp.\nPerfect entry-level vinyl player.\nVery good condition.',
        img: '/images/turntable.png',
        sold: true,
        category: 'Tech & Gadgets',
        lastWeekOnly: false,
    },
    {
        title: 'INGCO 850W Power Drill',
        price: '₪200',
        description: 'Adjustable speed, hammer function, and ergonomic grip.\nIncludes a set of drill bits.',
        img: '/images/drill.png',
        sold: true,
        category: 'Tech & Gadgets',
        lastWeekOnly: false,
    },
    {
        title: 'Chair',
        price: '₪80',
        description: '"Stam" chair.\nExcellent condition.',
        img: '/images/chair.jpeg',
        sold: false,
        category: 'Furniture',
        lastWeekOnly: false,
    },
    {
        title: 'IKEA LACK Wall Shelves',
        price: '₪200',
        description: 'Excellent condition.\n28x30x190cm.',
        img: '/images/shelves.jpeg',
        sold: false,
        category: 'Furniture',
        lastWeekOnly: false,
    },
    {
        title: 'Red Wall Shelves',
        price: '₪200',
        description: 'Excellent condition.\n20x17x201cm.',
        img: '/images/red_shelves.jpeg',
        sold: true,
        category: 'Furniture',
        lastWeekOnly: false,
    },
    {
        title: 'Oil-Filled Radiator Heater',
        price: '₪150',
        description: '2500W.\nHeats any home space – big or small – with ease.',
        img: '/images/estufa.jpeg',
        sold: true,
        category: 'Appliances',
        lastWeekOnly: false,
    },
    {
        title: 'Electric Convector Heater',
        price: '₪80',
        description: 'Fast, even heat – perfect for bedrooms or offices.',
        img: '/images/caloventor.jpeg',
        sold: false,
        category: 'Appliances',
        lastWeekOnly: false,
    },
    {
        title: 'Small Wooden Vintage Table',
        price: '₪250',
        description: 'Ideal for plants or decor.\nUpper and lower level.\n72x41x55cm.',
        img: '/images/mesa_madera.jpeg',
        sold: false,
        category: 'Furniture',
        lastWeekOnly: false,
    },
    {
        title: 'Vintage Danish-Style Lounge Chair',
        price: '₪600',
        description: 'Upholstery shows some wear, but the structure is solid.',
        img: '/images/sillon_negro.jpeg',
        sold: true,
        category: 'Furniture',
        lastWeekOnly: false,
    },
    {
        title: 'Ti Plant',
        price: '₪250',
        description: 'Tropical look with pink-red leaves.\nLow maintenance and bold.\nGreat for bright indoor spots.',
        img: '/images/ti_plant.jpeg',
        sold: false,
        category: 'Plants',
        lastWeekOnly: false,
    },
    {
        title: 'Cactus (Columnar Type)',
        price: '₪80',
        description: 'Tall and architectural cactus.\nMinimal water needed.\nLoves sunlight.',
        img: '/images/cactus.jpeg',
        sold: false,
        category: 'Plants',
        lastWeekOnly: false,
    },
    {
        title: 'Croton',
        price: '₪200',
        description: 'Colorful and bold leaves.\nLoves bright, indirect light.\nAdds energy to any corner.',
        img: '/images/croton.jpeg',
        sold: true,
        category: 'Plants',
        lastWeekOnly: false,
    },
    {
        title: 'Rubber Plant 1',
        price: '₪200',
        description: 'Sculptural, glossy leaves.\nGreat light absorber.\nStatement indoor plant.',
        img: '/images/rubber_1.jpeg',
        sold: true,
        category: 'Plants',
        lastWeekOnly: false,
    },
    {
        title: 'Cylindrical Snake Plant',
        price: '₪150',
        description: 'Minimalist, modern look.\nVery low maintenance.\nThrives on neglect.',
        img: '/images/snake_cylinder.jpeg',
        sold: false,
        category: 'Plants',
        lastWeekOnly: false,
    },
    {
        title: 'Philodendron Selloum',
        price: '₪300',
        description: 'Big, dramatic leaves.\nGreat for filling space.\nTropical jungle vibes.',
        img: '/images/philodendron.jpeg',
        sold: true,
        category: 'Plants',
        lastWeekOnly: false,
    },
    {
        title: 'Plant',
        price: '₪100',
        description: 'Beautiful plant.',
        img: '/images/stevia.jpeg',
        sold: true,
        category: 'Plants',
        lastWeekOnly: false,
    },
    {
        title: 'Rubber Plant 2',
        price: '₪400',
        description: 'Tall, glossy and elegant and 2m+ tall.\nGreat light companion.\nIndoor classic.',
        img: '/images/rubber_2.jpeg',
        sold: true,
        category: 'Plants',
        lastWeekOnly: false,
    },
    {
        title: 'Pineapple Plant',
        price: '₪150',
        description: 'Grown from a pineapple top.\nSculptural and tropical.\nOne day it may fruit.',
        img: '/images/pineapple.jpeg',
        sold: true,
        category: 'Plants',
        lastWeekOnly: false,
    },
    {
        title: 'Vintage Nightstand',
        price: '₪200',
        description: 'Solid wood\nTwo big drawers\nExcellent condition\n40x40x59cm',
        img: '/images/mesa_de_luz_madera.jpeg',
        sold: false,
        category: 'Furniture',
        lastWeekOnly: true
    },
    {
        title: 'IKEA Kullen Nightstand',
        price: '₪100',
        description: 'Two big drawers\nExcellent condition\n35x30x49cm',
        img: '/images/mesa_de_luz_ikea.jpeg',
        sold: true,
        category: 'Furniture',
        lastWeekOnly: true,
    },
    {
        title: 'Vintage Velvet Ottoman Stool',
        price: '₪200',
        description: 'Mustard Gold\nExcellent condition, perfect as a footrest or accent seat.',
        img: '/images/banqueta_amarilla.jpeg',
        sold: true,
        category: 'Furniture',
        lastWeekOnly: false
    },
    {
        title: 'Wooden Cube Shelf Unit with Drawers',
        price: '₪700',
        description: 'Three drawers, six open spaces\nPerfect for organizing books, décor, or random chaos\n30x120x87cm',
        img: '/images/rack.jpeg',
        sold: true,
        category: 'Furniture',
        lastWeekOnly: true
    },
    {
        title: 'Mesh Back Office Chair',
        price: '₪200',
        description: 'Adjustable and comfy\nBreathable mesh back and a soft rust-orange seat',
        img: '/images/silla_ofi_naranja.jpeg',
        sold: true,
        category: 'Furniture',
        lastWeekOnly: true
    },
    {
        title: 'Black Faux Leather Executive Chair',
        price: '₪400',
        description: 'Comfortable, classic, and perfect for a home office or studio setup.',
        img: '/images/silla_ofi_cuero.jpeg',
        sold: false,
        category: 'Furniture',
        lastWeekOnly: true
    },
    {
        title: 'IKEA MICKE Desk',
        price: '₪250',
        description: 'Two drawers\nCable organizing space and opening\nGood condition\n142x50x75cm',
        img: '/images/escritorio_cajones.jpeg',
        sold: false,
        category: 'Furniture',
        lastWeekOnly: true
    },
    {
        title: 'Minimalist White Desk w/ Wooden Trestle Legs',
        price: '₪300',
        description: 'Spacious, sturdy, and stylish\nPerfect for work, study, or creative projects.',
        img: '/images/escritorio_mica.jpeg',
        sold: false,
        category: 'Furniture',
        lastWeekOnly: true
    },
    {
        title: 'Dell Screen P2719H',
        price: '₪500',
        description: '27" Full HD IPS Display\n1920 × 1080\nWide viewing angles (178°)\nExcellent condition',
        img: '/images/dell_p2719h.jpeg',
        sold: true,
        category: 'Tech & Gadgets',
        lastWeekOnly: true
    },
    {
        title: 'Dell Screen P2422H',
        price: '₪350',
        description: '24" Full HD IPS Display\n1920 × 1080\nWide viewing angles (178°)\nExcellent condition',
        img: '/images/dell_p2422h.jpeg',
        sold: true,
        category: 'Tech & Gadgets',
        lastWeekOnly: true
    },
    {
        title: 'IKEA FRIHETEN Couch',
        price: '₪1000',
        description: 'Sofa-bed with easy pull-out mechanism\nBig storage compartment\n230x151x66cm',
        img: '/images/sofa.jpeg',
        sold: true,
        category: 'Furniture',
        lastWeekOnly: true
    },
    {
        title: 'HISENSE TV 42 INCH',
        price: '₪400',
        description: 'Smart TV\nExcellent condition\n\n',
        img: '/images/tele.jpeg',
        sold: false,
        category: 'Tech & Gadgets',
        lastWeekOnly: true
    },
    {
        title: 'Apple TV 4K (1st Gen)',
        price: '₪200',
        description: '4K HDR.\nThe glass in the control is cracked, but its 100% functional.\n\n',
        img: '/images/appletv.jpeg',
        sold: true,
        category: 'Tech & Gadgets',
        lastWeekOnly: true
    },
    {
        title: 'IKEA ÅRSTID Table Lamp (x2)',
        price: '₪100',
        description: 'Brass finish\n55cm tall',
        img: '/images/velador.jpeg',
        sold: false,
        category: 'Appliances',
        lastWeekOnly: false
    },
    {
        title: 'Arizer ArGo – Compact Vaporizer',
        price: '₪600',
        description: 'Clean, excellent condition.\nIncludes: hard case, accessories.\nDiscreet, high-quality vape.',
        img: '/images/vaporizer.jpeg',
        sold: false,
        category: 'Tech & Gadgets',
        lastWeekOnly: false,
    },
    {
        title: 'IKEA ÅRSTID Standing Lamp',
        price: '₪200',
        description: 'Silver finish\n155cm tall',
        img: '/images/lampara.jpeg',
        sold: true,
        category: 'Appliances',
        lastWeekOnly: false
    },
    {
        title: 'IKEA Extendable Table and 4 Chairs',
        price: '₪1000',
        description: 'VIHALS Table: White, minimalist design – 140×70cm. Seats 6 (8 extended)\n4 LIDÅS Chairs: Grey seat with white legs',
        img: '/images/mesa_sillas1.jpeg',
        sold: false,
        category: 'Furniture',
        lastWeekOnly: true
    },
    {
        title: 'Tami4 Family',
        price: '₪400',
        description: 'Cream color\nExcellent condition',
        img: '/images/tami4.jpeg',
        sold: true,
        category: 'Appliances',
        lastWeekOnly: true
    },
    {
        title: 'BOSCH WAN2016TPL Washing Machine',
        price: '₪1000',
        description: '7kg, Front Load\nSUPER QUIET!\nLess than a year of use',
        img: '/images/lavarropas.jpeg',
        sold: true,
        category: 'Appliances',
        lastWeekOnly: true
    },
    {
        title: 'Ninja BL682 Blender + Food Processor',
        price: '₪400',
        description: '1500W motor\nIncludes pitcher, 3 sizes of Ninja cups and a cap for smoothies',
        img: '/images/ninja.jpeg',
        sold: true,
        category: 'Appliances',
        lastWeekOnly: true
    },
    {
        title: 'SodaStream Spirit + 3 bottles',
        price: '₪200',
        description: 'Excellent condition\n Includes 2 empty tubes and 3 bottles',
        img: '/images/sodastream.png',
        sold: true,
        category: 'Appliances',
        lastWeekOnly: true
    },
    {
        title: 'IKEA Kallax 2x4 White Shelves',
        price: '₪350',
        description: 'Clean, modern design.\n8 spacious cubes for storage or display.\nSturdy and in excellent condition.',
        img: '/images/kallax.jpeg',
        sold: true,
        category: 'Furniture',
        lastWeekOnly: true
    },
];


export default function GarageSale() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredItems = selectedCategory === 'All'
        ? items
        : items.filter(item => item.category === selectedCategory);

    return (
        <>
            <Head>
                <title>We're Leaving Israel - SALE</title>
                <meta property="og:title" content="We're Leaving Israel - SALE"/>
                <meta property="og:description"
                      content="Selling everything! Pick up from Yaffo - Yehuda Hayamit st. 🧳"/>
                <meta property="og:image" content="https://alexingberg.com/images/thumbnail.png"/>
                <meta property="og:url" content="https://alexingberg.com/sale"/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Head>
            <div className="min-h-screen bg-brand text-foreground px-4 py-12 w-full overflow-x-hidden">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold mb-2">WE'RE MOVING!</h1>
                    <h2 className="text-2xl mb-1">SELLING EVERYTHING :)</h2>
                    <p className="text-md text-subtle mb-4">Pick up from Yaffo – Yehuda Hayamit st.</p>
                    <a
                        href="https://wa.me/972585396433"
                        className="inline-block text-green-500 hover:underline"
                    >
                        📞 Message me on WhatsApp
                    </a>
                    <p className="text-center text-subtle mt-4 max-w-md mx-auto">
                        If you're looking for anything for your home and you don't see it here, reach out.<br/>
                        We're probably selling it too. 😅 <br/><br/>
                        <em>If it says “pickup late August,” you can reserve it with a Bit downpayment 💸.</em><br/>
                    </p>
                </div>

                <div className="
                flex flex-nowrap space-x-4 mb-8 overflow-x-auto no-scrollbar -mx-4 px-4 w-full
                md:justify-center md:flex-wrap md:overflow-x-visible md:no-scrollbar-none md:mx-0 md:px-0
            ">
                    {['All', 'Tech & Gadgets', 'Appliances', 'Furniture', 'Plants', 'Mobility'].map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-4 py-2 rounded-full border min-w-max ${
                                selectedCategory === cat
                                    ? 'bg-accent text-black font-semibold'
                                    : 'text-subtle border-subtle hover:bg-neutral-800'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {[...filteredItems]
                        .sort((a, b) => Number(a.sold) - Number(b.sold))
                        .map((item, idx) => (
                            <div
                                key={item.title}
                                className="relative group rounded-lg shadow-md overflow-hidden bg-[#1a1a1a] hover:shadow-lg transition-shadow duration-200"
                            >
                                <div className="aspect-square overflow-hidden relative">
                                    <div
                                        className="aspect-square overflow-hidden relative cursor-pointer"
                                        onClick={() => setSelectedItem(item)}
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-200"
                                        />
                                        {item.sold && (
                                            <img
                                                src="/images/sold.png"
                                                alt="Sold"
                                                className="absolute top-0 left-0 w-full h-full object-contain opacity-80 pointer-events-none"
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold">{item.title}</h2>
                                    <p className="text-sm whitespace-pre-line text-gray-300 mt-1">
                                        {item.description}
                                    </p>
                                    <div className="mt-2 flex flex-col items-end space-y-1">
                                        <div
                                            className="text-lg font-medium bg-neutral-200 text-black px-2 py-1 w-fit rounded">
                                            {item.price}
                                        </div>
                                        {item.lastWeekOnly && !item.sold && (
                                            <div
                                                className="text-xs bg-yellow-200 text-yellow-900 rounded-full px-2 py-0.5 font-semibold">
                                                ⏳ PICKUP LATE AUGUST
                                            </div>
                                        )}
                                    </div>

                                </div>
                            </div>

                        ))}
                </div>

                {selectedItem && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
                        onClick={() => setSelectedItem(null)}
                    >
                        <div className="max-w-3xl w-full p-4 bg-black rounded-lg relative">
                            <img
                                src={selectedItem.img}
                                alt={selectedItem.title}
                                className="w-full h-auto object-contain rounded"
                            />
                            <button
                                className="absolute top-2 right-4 text-white text-2xl"
                                onClick={() => setSelectedItem(null)}
                            >
                                ×
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
