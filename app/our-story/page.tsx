import Image from "next/image";

export default function OurStory() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/ımage-2.png"
              alt="Our Story Hero Image"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                Our Story
              </h1>
            </div>
          </div>
        </section>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl leading-relaxed mb-6">
            Ecommersion began with a simple yet bold vision: to bring
            exceptional products to customers worldwide, no matter where they
            are. Founded with a passion for connecting people with quality and
            innovation, we set out to redefine e-commerce by building a global
            network of brands, warehouses, and creators, all driven by a shared
            commitment to customer satisfaction.
          </p>
          <p className="mb-6">
            From our humble beginnings, we dreamed of a world where unique
            products from diverse niches could reach every corner of the globe.
            Today, Ecommersion is a thriving e-commerce powerhouse, with a
            vibrant team spread across continents, working hand-in-hand with
            manufacturers and suppliers to curate offerings that delight and
            inspire. Our warehouses, strategically located around the world, hum
            with activity as we ensure seamless delivery to our customers,
            wherever they may be.
          </p>
          <p className="mb-6">
            At Ecommersion, we believe in the power of variety. Our portfolio of
            brands spans countless niches, each crafted with care to meet the
            distinct needs and desires of our global community. Whether it's
            artisanal home goods, cutting-edge tech, or sustainable fashion,
            we're dedicated to offering something special for everyone. Our
            dynamic team, fueled by creativity and collaboration, works
            tirelessly to ensure every customer experience is nothing short of
            exceptional.
          </p>
          <p className="mb-6">
            Our journey is one of growth, connection, and relentless pursuit of
            excellence. We're not just an e-commerce company—we're a global
            family, united by our mission to bring joy, convenience, and quality
            to millions of lives. As we continue to expand, we remain grounded
            in our core values: innovation, inclusivity, and an unwavering
            commitment to making our customers happy.
          </p>
          <p>
            This is Ecommersion. This is our story—and we're just getting
            started.
          </p>
        </div>
      </div>
    </div>
  );
}
