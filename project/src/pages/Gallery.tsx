const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1581375383680-908f0cd9c0b9?auto=format&fit=crop&q=80',
    alt: 'Plain Velvet Fabric',
    category: 'Plain Velvet'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1528459105426-b9548367069b?auto=format&fit=crop&q=80',
    alt: 'Crushed Velvet Fabric',
    category: 'Crushed Velvet'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1579447167432-ba8b796e5de3?auto=format&fit=crop&q=80',
    alt: 'Embossed Velvet Pattern',
    category: 'Embossed Velvet'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1579447167714-7b6932b4fdf1?auto=format&fit=crop&q=80',
    alt: 'Stretch Velvet Sample',
    category: 'Stretch Velvet'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1579447167567-98f8f66d5d54?auto=format&fit=crop&q=80',
    alt: 'Printed Velvet Design',
    category: 'Printed Velvet'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1581375383680-908f0cd9c0b9?auto=format&fit=crop&q=80',
    alt: 'Velvet Fabric Roll',
    category: 'Production'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1528459105426-b9548367069b?auto=format&fit=crop&q=80',
    alt: 'Fabric Warehouse',
    category: 'Warehouse'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1579447167432-ba8b796e5de3?auto=format&fit=crop&q=80',
    alt: 'Quality Testing',
    category: 'Quality Control'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1579447167714-7b6932b4fdf1?auto=format&fit=crop&q=80',
    alt: 'Customer Project',
    category: 'Customer Showcase'
  }
];

const categories = Array.from(new Set(galleryImages.map(img => img.category)));

export default function Gallery() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Our Gallery
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our collection of premium velvet fabrics, production process,
            and customer projects.
          </p>
        </div>

        {/* Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
            Categories
          </h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-full bg-primary-100 text-primary-800 hover:bg-primary-200 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="font-medium">{image.alt}</p>
                  <p className="text-sm opacity-75">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Showcase Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-6">
            Customer Showcases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {galleryImages
              .filter((img) => img.category === 'Customer Showcase')
              .map((image) => (
                <div
                  key={image.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Project Showcase
                    </h3>
                    <p className="text-gray-600">
                      Beautiful implementation of our premium velvet fabrics in a
                      customer project.
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}