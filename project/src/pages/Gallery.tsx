import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

// Velvet Images
const velvetImages = [
  '/images/Velvet/417oyf0LEDL._AC_UF1000,1000_QL80_.jpg',
  '/images/Velvet/43_e89f8721-97c7-4c5f-9f81-e675070cda26.jpg',
  '/images/Velvet/61QpdquoitL._AC_UF1000,1000_QL80_.jpg',
  '/images/Velvet/71k5-DlIOQL.jpg',
  '/images/Velvet/71roaa8jMnL._AC_UF1000,1000_QL80_.jpg',
  '/images/Velvet/71TiLrWlM2L.jpg',
  '/images/Velvet/71yKeQV69wL.jpg',
  '/images/Velvet/81DDykTQkgL._AC_UF1000,1000_QL80_.jpg',
  '/images/Velvet/DSC08203_ad941cd6-bb5c-43b4-80e8-1112a43f10be.jpg',
  '/images/Velvet/Extra-Bridesmaid-Dress-Fabric-Kennedy-Blue-Velvet-3_924x.jpg',
  '/images/Velvet/images (18).jpeg',
  '/images/Velvet/images (19).jpeg',
  '/images/Velvet/images (20).jpeg',
  '/images/Velvet/images (21).jpeg',
  '/images/Velvet/images (22).jpeg',
  '/images/Velvet/images (23).jpeg',
  '/images/Velvet/Screenshot_20251207_175259_Amazon.jpg',
  '/images/Velvet/Screenshot_20251207_175347.jpg',
  '/images/Velvet/sf10686-saroj-fabrics-velvet-silk-lemonyellow.jpg',
  '/images/Velvet/sfk15089.jpg',
  '/images/Velvet/Tirumala_0429copy_9f8eb34e-f308-4578-93c9-e0bf120162cb.jpg',
  '/images/Velvet/Velvet-Fabric-Bolt-White-10-Yards.jpg',
  '/images/Velvet/w7dsy_512.jpg',
  '/images/Velvet/whatsappimage2022-01-29at5-44-04pm.jpg'
];

// Velboa Images
const VelboaImages = [
  '/images/Velboa/1mm-minky-mint2.jpg',
  '/images/Velboa/32660396-c249-4e52-9066-13732376ff70.jpg',
  '/images/Velboa/5499-051-1.jpg',
  '/images/Velboa/Hc7954afaab6c4b81af31e8abf053e9c9J.jpg',
  '/images/Velboa/images (24).jpeg',
  '/images/Velboa/images (25).jpeg',
  '/images/Velboa/images (26).jpeg',
  '/images/Velboa/images (27).jpeg',
  '/images/Velboa/images (28).jpeg',
  '/images/Velboa/images (30).jpeg',
  '/images/Velboa/images (31).jpeg',
  '/images/Velboa/product-jpeg-500x500.jpg'
];

// Full Dull Images
const fullDullImages = [
  '/images/FullDull/102376.png',
  '/images/FullDull/2d-full-dull-velvet-fabric-1737658422-7819935.jpeg',
  '/images/FullDull/images (29).jpeg',
  '/images/FullDull/IMG_E0481.jpg',
  '/images/FullDull/pl169040725-lightweight_recycled_nylon_fabric_type_solid_printing_construction_stripe.jpg',
  '/images/FullDull/polo-full-dull-polyester-fabric-1694085189-7069288.jpeg',
  '/images/FullDull/SMALL_00000014.jpg',
  '/images/FullDull/WhatsAppImage2023-03-10at5.03.46PM.jpg'
];

// Supersoft Images
const supersoftImages = [
  '/images/Supesoft/100-Polyester-Colorful-Super-Soft-Polyester-Spandex-Ef-Fabric.webp',
  '/images/Supesoft/100-Polyester-Super-Soft-Minky-Ef-Plain-Terry-Single-Sided-Minky-Cloth-Fabric-for-Baby-Portogal.jpg',
  '/images/Supesoft/61zs0n4Gt0L.jpg',
  '/images/Supesoft/H0a64790088424a89b601f0467c30af62j (1).jpg',
  '/images/Supesoft/images (32).jpeg',
  '/images/Supesoft/images (34).jpeg',
  '/images/Supesoft/images (35).jpeg',
  '/images/Supesoft/supersoft-ef-500x500.jpg'
];

// Festive Images
const festiveImages = [
  '/images/Festive/417oyf0LEDL._AC_UF1000,1000_QL80_.jpg',
  '/images/Festive/43_e89f8721-97c7-4c5f-9f81-e675070cda26.jpg',
  '/images/Festive/51finb1SCSL._AC_UF1000,1000_QL80_.jpg',
  '/images/Festive/619oMzOfgjL._AC_UF1000,1000_QL80_.jpg',
  '/images/Festive/71k5-DlIOQL.jpg',
  '/images/Festive/71roaa8jMnL._AC_UF1000,1000_QL80_.jpg',
  '/images/Festive/71TiLrWlM2L.jpg',
  '/images/Festive/71yKeQV69wL.jpg',
  '/images/Festive/images (18).jpeg',
  '/images/Festive/images (19).jpeg',
  '/images/Festive/images (22).jpeg',
  '/images/Festive/images (36).jpeg',
  '/images/Festive/images (41).jpeg',
  '/images/Festive/img20180808120446-500x500.jpg',
  '/images/Festive/noaju_512.jpg',
  '/images/Festive/Screenshot_20251207_175347.jpg',
  '/images/Festive/SFD0004088_3_1080x.jpg',
  '/images/Festive/SFD0005844_2.jpg',
  '/images/Festive/Velvet-Fabric-Bolt-White-10-Yards.jpg',
  '/images/Festive/whatsappimage2022-01-29at5-44-04pm.jpg'
];

// Designer Images
const designerImages = [
  '/images/Designer/44-tiger-print-velvet-fabrics-500x500.jpeg',
  '/images/Designer/Bokara.jpeg',
  '/images/Designer/images (37).jpeg',
  '/images/Designer/images (43).jpeg',
  '/images/Designer/images (44).jpeg',
  '/images/Designer/images (45).jpeg',
  '/images/Designer/images (46).jpeg',
  '/images/Designer/images (47).jpeg'
];

// Combine all images with metadata
const galleryImages = [
  ...velvetImages.map((src, index) => ({ id: `velvet-${index}`, src, alt: `Premium Velvet Fabric ${index + 1}`, category: 'Velvet' })),
  ...VelboaImages.map((src, index) => ({ id: `Velboa-${index}`, src, alt: `Velboa Collection ${index + 1}`, category: 'Velboa' })),
  ...fullDullImages.map((src, index) => ({ id: `fulldull-${index}`, src, alt: `Full Dull Fabric ${index + 1}`, category: 'Full Dull' })),
  ...supersoftImages.map((src, index) => ({ id: `supersoft-${index}`, src, alt: `Supersoft Fabric ${index + 1}`, category: 'Supersoft' })),
  ...festiveImages.map((src, index) => ({ id: `festive-${index}`, src, alt: `Festive Collection ${index + 1}`, category: 'Festive' })),
  ...designerImages.map((src, index) => ({ id: `designer-${index}`, src, alt: `Designer Prints ${index + 1}`, category: 'Designer' }))
];

const categories = ['All', 'Velvet', 'Velboa', 'Full Dull', 'Supersoft', 'Festive', 'Designer'];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);
  return (
    <div className="py-8 sm:py-12">
      <Helmet>
        <title>Fabric Gallery - Shree Vinayak</title>
        <meta name="description" content="View our latest fabric collections, shop images, and customer creations." />
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 mb-3 sm:mb-4">
            Fabric Gallery
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Explore our extensive collection of premium velvet, Velboa, full dull, supersoft, festive, and designer fabrics.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-gray-900 mb-4 sm:mb-6 text-center">
            Filter by Category
          </h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-lg font-medium transition-all duration-200 ${selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 shadow-md'
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 aspect-square"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white">
                  <p className="font-semibold text-sm sm:text-base md:text-lg">{image.alt}</p>
                  <p className="text-xs sm:text-sm opacity-90 mt-1">
                    <span className="inline-block bg-white/20 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm">
                      {image.category}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">No images found in this category.</p>
          </div>
        )}

        {/* Info Section */}
        <div className="mt-16 bg-primary-50 rounded-lg p-8">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4 text-center">
            Need More Information?
          </h2>
          <p className="text-center text-gray-700 mb-6 max-w-2xl mx-auto">
            Browse through our collection and contact us for detailed fabric specifications,
            pricing, and bulk order inquiries. All fabrics are available for wholesale purchase.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/products"
              className="bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors font-semibold"
            >
              View Products
            </a>
            <a
              href="/contact"
              className="bg-white text-primary-600 border-2 border-primary-500 px-6 py-3 rounded-lg hover:bg-primary-50 transition-colors font-semibold"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}