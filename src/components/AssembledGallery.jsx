// Assembled Gallery component - recreates the visual style from kozelsky.ch
// Food photos arranged with decorative illustrations

const AssembledGallery = ({ images, illustration }) => {
  if (!images || images.length < 6) return null;

  return (
    <div className="relative">
      {/* Main grid layout mimicking original site */}
      <div className="grid grid-cols-12 gap-4 lg:gap-6">
        {/* Row 1 */}
        <div className="col-span-6 md:col-span-4">
          <div className="aspect-square overflow-hidden">
            <img
              src={images[0]}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>
        <div className="col-span-6 md:col-span-4 md:row-span-2">
          <div className="h-full overflow-hidden">
            <img
              src={images[1]}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>
        <div className="col-span-6 md:col-span-4 md:row-span-2">
          <div className="h-full overflow-hidden">
            <img
              src={images[2]}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>

        {/* Row 2 - first column continues */}
        <div className="col-span-6 md:col-span-4">
          <div className="aspect-square overflow-hidden">
            <img
              src={images[3]}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="col-span-6 md:col-span-4 md:row-span-2">
          <div className="h-full overflow-hidden">
            <img
              src={images[4]}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-8">
          <div className="aspect-video overflow-hidden">
            <img
              src={images[5]}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>

        {/* Row 4 */}
        <div className="col-span-6 md:col-span-4">
          <div className="aspect-square overflow-hidden">
            <img
              src={images[6]}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>
        <div className="col-span-6 md:col-span-4">
          <div className="aspect-square overflow-hidden">
            <img
              src={images[7]}
              alt=""
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Decorative illustration overlay */}
      {illustration && (
        <div className="hidden lg:block absolute -bottom-20 -right-10 w-64 xl:w-80 pointer-events-none opacity-80">
          <img
            src={illustration}
            alt=""
            className="w-full h-auto"
          />
        </div>
      )}
    </div>
  );
};

export default AssembledGallery;
