import Image from "next/image";

export default function OurStory() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto">
        <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/our-story-picture-2.png"
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
            Since our founding in 2022, Ecommersion set out on a mission to 
            deliver thoughtfully designed home decor, kitchen, and beauty products 
            that add value to every home around the world. Just a few years ago, 
            we began as a dynamic two-person team; today, we’re a diverse family of over 
            20 professionals—from designers and marketers to logistics experts 
            and customer-experience specialists—serving more than 50,000 customers 
            in 30 countries.
          </p>
          <p className="mb-6">
            At the heart of everything we do is a simple promise: durability meets delight. 
            From a perfectly balanced kitchen tool that feels like a natural extension of your hand, 
            to a beauty essential that enriches your daily routine, boosts your confidence, 
            and uplifts your outlook on life… every item we curate is built to last and crafted 
            for everyday use. Our strategically located warehouses on three continents ensure 
            your orders arrive quickly and securely, while we remain unwavering in our commitment to quality.
          </p>
          <p className="mb-6">
            We believe true connection is formed not just when a product looks stunning, but 
            when it performs flawlessly in real life. That’s why we partner with leading experts 
            in design and logistics—and listen closely to your feedback—to create solutions that 
            make your day a little easier. From the first prototype to the moment you unbox it at home, 
            we meticulously refine every detail so you can shop with confidence.
          </p>
          <p className="mb-6">
            As we turn the page to our next chapters, our vision remains clear: 
            grow without losing our genuine touch, innovate without compromising functionality, 
            and continually push boundaries so that every delivery becomes a moment of joy. 
            At Ecommersion, we’re more than an e-commerce company—we’re a global family dedicated to 
            empowering your everyday life with products you can trust. 
          </p>
          <p>
            This is Ecommersion. Welcome to our journey.
          </p>
        </div>
      </div>
    </div>
  );
}
