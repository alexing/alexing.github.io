import Image from 'next/image';
import {useState} from 'react';

const items = [
    {
        title: 'Arizer ArGo – Compact Vaporizer',
        price: '₪600',
        description: 'Clean, excellent condition.\nIncludes: hard case, accessories.\nDiscreet, high-quality vape.',
        img: '/images/vaporizer.jpeg',
        sold: false,
        category: 'Tech & Gadgets'
    },
    {
        title: 'Nintendo Switch',
        price: '₪700',
        description: 'Excellent condition.\nIncludes: extra joystick, accessories, soft cases, 3 physical games and several others in my Nintendo account.',
        img: '/images/switch.jpeg',
        sold: true,
        category: 'Tech & Gadgets'
    },
    {
        title: 'MacBook Pro - 13 inch',
        price: '₪1400',
        description: 'Core i5 2.9 GHz\n8 GB RAM – 256 GB SSD\nExcellent condition.',
        img: '/images/macbook.jpg',
        sold: false,
        category: 'Tech & Gadgets'
    },
    {
        title: 'AudioTechnica Turntable AT-LP60',
        price: '₪450',
        description: 'Belt-drive, 2-speed (33 & 45 RPM) turntable with built-in phono preamp.\nPerfect entry-level vinyl player.\nVery good condition.',
        img: '/images/turntable.png',
        sold: true,
        category: 'Tech & Gadgets'
    },
    {
        title: 'INGCO 850W Power Drill',
        price: '₪200',
        description: 'Adjustable speed, hammer function, and ergonomic grip.\nIncludes a set of drill bits.',
        img: '/images/drill.png',
        sold: true,
        category: 'Tech & Gadgets'
    },
    {
        title: 'Chair',
        price: '₪80',
        description: '“Stam” chair.\nExcellent condition.',
        img: '/images/chair.jpeg',
        sold: false,
        category: 'Furniture'
    },
    {
        title: 'IKEA LACK Wall Shelves',
        price: '₪200',
        description: 'Excellent condition.\n28x30x190cm.',
        img: '/images/shelves.jpeg',
        sold: false,
        category: 'Furniture'
    },
    {
        title: 'Oil-Filled Radiator Heater',
        price: '₪150',
        description: '2500W.\nHeats any home space – big or small – with ease.',
        img: '/images/estufa.jpeg',
        sold: false,
        category: 'Appliances'
    },
    {
        title: 'Electric Convector Heater',
        price: '₪80',
        description: 'Fast, even heat – perfect for bedrooms or offices.',
        img: '/images/caloventor.jpeg',
        sold: false,
        category: 'Appliances'
    },
    {
        title: 'Large Wall Mirror with Wooden Frame',
        price: '₪250',
        description: '60x80cm.',
        img: '/images/mirror.jpeg',
        sold: false,
        category: 'Furniture'
    },
    {
        title: 'Small Wooden Vintage Table',
        price: '₪250',
        description: 'Ideal for plants or decor.\nUpper and lower level.\n72x41x55cm.',
        img: '/images/mesa_madera.jpeg',
        sold: false,
        category: 'Furniture'
    },
    {
        title: 'Vintage Danish-Style Lounge Chair',
        price: '₪600',
        description: 'Upholstery shows some wear, but the structure is solid.',
        img: '/images/sillon_negro.jpeg',
        sold: false,
        category: 'Furniture'
    }
];


export default function GarageSale() {
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredItems = selectedCategory === 'All'
        ? items
        : items.filter(item => item.category === selectedCategory);

    return (
        <div className="min-h-screen bg-brand text-foreground px-4 py-12">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold mb-2">WE’RE MOVING!</h1>
                <h2 className="text-2xl mb-1">SELLING EVERYTHING :)</h2>
                <p className="text-md text-subtle mb-4">Pick up from Yaffo – Yehuda Hayamit st.</p>
                <a
                    href="https://wa.me/972585396433"
                    className="inline-block text-green-500 hover:underline"
                >
                    📞 Message me on WhatsApp
                </a>
                <p className="text-center text-subtle mt-4 max-w-md mx-auto">
                    More stuff coming soon – we're moving end of August.<br/>
                    If you're looking for anything for your home, reach out.<br/>
                    We're probably selling it. 😅
                </p>
            </div>

            <div className="flex justify-center space-x-4 mb-8">
                {['All', 'Tech & Gadgets', 'Appliances', 'Furniture'].map(cat => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-4 py-2 rounded-full border ${
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
                                <div
                                    className="mt-2 text-right text-lg font-medium bg-neutral-200 text-black px-2 py-1 w-fit ml-auto rounded">
                                    {item.price}
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
    );
}
