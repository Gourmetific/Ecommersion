import Image from "next/image";

export default function OurStory() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/image-2"
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
            Founded with a vision to revolutionize the e-commerce landscape,
            Ecommersion has been at the forefront of digital commerce innovation
            since our inception.
          </p>

          <p className="mb-6">
            Our journey began when a team of e-commerce experts and technology
            enthusiasts came together with a shared mission: to create solutions
            that truly empower businesses in the digital marketplace. We
            recognized the challenges that merchants face in an increasingly
            competitive online environment and set out to build tools that would
            give them the edge they need.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Our Mission</h2>
          <p className="mb-6">
            At Ecommersion, we're committed to developing cutting-edge
            e-commerce solutions that help businesses of all sizes thrive in the
            digital economy. We believe in creating technology that's not only
            powerful but also accessible and user-friendly.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Our Approach</h2>
          <p className="mb-6">
            We take a collaborative approach to every project, working closely
            with our clients to understand their unique needs and challenges.
            Our team combines technical expertise with a deep understanding of
            e-commerce trends and best practices to deliver solutions that drive
            real results.
          </p>

          <p className="mb-6">
            Innovation is at the heart of everything we do. We're constantly
            exploring new technologies and methodologies to ensure our clients
            stay ahead of the curve in a rapidly evolving digital landscape.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-6">Looking Forward</h2>
          <p>
            As we continue to grow and evolve, our focus remains on creating
            value for our clients and contributing to the advancement of
            e-commerce technology. We're excited about the future and the
            opportunities it holds for businesses in the digital space.
          </p>
        </div>
      </div>
    </div>
  );
}
