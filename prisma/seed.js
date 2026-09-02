/* eslint-disable */
// Seed script for Aadyaa Jewels — run with: node prisma/seed.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const px = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;

const categories = [
  {
    name: "Rings",
    slug: "rings",
    description: "Classic to contemporary diamond rings for every moment.",
    image: px(735252),
    sortOrder: 1,
  },
  {
    name: "Solitaires",
    slug: "solitaires",
    description: "Timeless single-stone brilliance, engineered to perfection.",
    image: px(2849742),
    sortOrder: 2,
  },
  {
    name: "Pendants",
    slug: "pendants",
    description: "Graceful pendants that catch the light with every move.",
    image: px(17833830),
    sortOrder: 3,
  },
  {
    name: "Earrings",
    slug: "earrings",
    description: "Studs, drops and hoops — quiet luxury for every day.",
    image: px(5737290),
    sortOrder: 4,
  },
  {
    name: "Necklaces",
    slug: "necklaces",
    description: "Statement necklaces crafted for celebrations.",
    image: px(24815712),
    sortOrder: 5,
  },
  {
    name: "Bangles & Bracelets",
    slug: "bangles-bracelets",
    description: "Wrist adornments in gold, crafted to be treasured.",
    image: px(32874211),
    sortOrder: 6,
  },
];

const products = [
  {
    name: "Aaliyah Diamond Ring",
    slug: "aaliyah-diamond-ring",
    tagline: "Delicate solitaire with a hidden halo",
    description:
      "The Aaliyah ring pairs a brilliant round lab-grown diamond with a slender 18K gold band and a hidden halo that amplifies its fire. Ethically grown, CVD-certified and finished by master artisans in New Delhi.",
    price: 66024,
    compareAtPrice: 72000,
    metal: "18K Yellow Gold",
    carat: 0.5,
    clarity: "VS1",
    images: [px(2849742), px(5157363)],
    category: "rings",
    isNew: true,
    featured: true,
    rating: 4.9,
    reviews: 42,
  },
  {
    name: "Adeline Diamond Ring",
    slug: "adeline-diamond-ring",
    tagline: "A modern classic in platinum",
    description:
      "A refined cathedral setting in platinum, holding a 1.2 carat lab-grown diamond of VVS1 clarity. Adeline is designed for the moment you say yes — and every day after.",
    price: 100742,
    compareAtPrice: 118000,
    metal: "Platinum",
    carat: 1.2,
    clarity: "VVS1",
    images: [px(15777275), px(9420694)],
    category: "rings",
    featured: true,
    rating: 5.0,
    reviews: 28,
  },
  {
    name: "Alexa Diamond Ring",
    slug: "alexa-diamond-ring",
    tagline: "Rose gold romance",
    description:
      "The Alexa ring wraps a brilliant diamond in warm rose gold with a twisted shank design. A bestseller for good reason — effortless, feminine and luminous.",
    price: 83350,
    metal: "18K Rose Gold",
    carat: 0.9,
    clarity: "VS1",
    images: [px(9420694), px(14056405)],
    category: "rings",
    isBestseller: true,
    rating: 4.8,
    reviews: 56,
  },
  {
    name: "Alice Diamond Ring",
    slug: "alice-diamond-ring",
    tagline: "Everyday elegance, sustainably grown",
    description:
      "A petite 0.4 carat lab-grown diamond in a comfortable low-profile setting — the everyday ring that goes from desk to dinner without missing a beat.",
    price: 60751,
    metal: "18K Yellow Gold",
    carat: 0.4,
    clarity: "VS2",
    images: [px(5157293), px(11745246)],
    category: "rings",
    isNew: true,
    rating: 4.7,
    reviews: 19,
  },
  {
    name: "Alisha Diamond Men's Ring",
    slug: "alisha-diamond-mens-ring",
    tagline: "Bold, masculine, brilliant",
    description:
      "A sculpted platinum band with a single channel-set lab-grown diamond. Crafted for the modern man who appreciates quiet power.",
    price: 82321,
    metal: "Platinum",
    carat: 1.0,
    clarity: "VS1",
    images: [px(20507408), px(735252)],
    category: "rings",
    rating: 4.8,
    reviews: 23,
  },
  {
    name: "Adya Halo Diamond Ring",
    slug: "adya-halo-ring",
    tagline: "Maximum brilliance, zero compromise",
    description:
      "A 1.5 carat centre stone encircled by a pavé halo, set in 18K gold. The Adya halo ring delivers engagement-level sparkle with fully ethical provenance.",
    price: 112400,
    compareAtPrice: 124500,
    metal: "18K Yellow Gold",
    carat: 1.5,
    clarity: "VVS2",
    images: [px(735252), px(11745246)],
    category: "rings",
    featured: true,
    rating: 4.9,
    reviews: 31,
  },
  {
    name: "Celeste Solitaire Pendant",
    slug: "celeste-solitaire-pendant",
    tagline: "A single star, close to the heart",
    description:
      "A 0.6 carat lab-grown diamond suspended from a whisper-thin 18K gold chain. Minimal, luminous and endlessly versatile.",
    price: 42750,
    metal: "18K Yellow Gold",
    carat: 0.6,
    clarity: "VS1",
    images: [px(13204122), px(27357192)],
    category: "solitaires",
    isNew: true,
    rating: 4.9,
    reviews: 37,
  },
  {
    name: "Isla Solitaire Ring",
    slug: "isla-solitaire-ring",
    tagline: "The classic you'll never take off",
    description:
      "A 2.0 carat VVS1 round brilliant in a timeless six-prong platinum setting. Isla is the solitaire that started the conversation about ethical luxury.",
    price: 124900,
    metal: "Platinum",
    carat: 2.0,
    clarity: "VVS1",
    images: [px(14056405), px(5157293)],
    category: "solitaires",
    featured: true,
    isBestseller: true,
    rating: 5.0,
    reviews: 64,
  },
  {
    name: "Aiyana Diamond Pendant Set",
    slug: "aiyana-diamond-pendant-set",
    tagline: "Pendant and earrings in perfect harmony",
    description:
      "A complete pendant set — necklace and matching studs — featuring 0.8 carats of lab-grown diamonds in 18K gold. Designed to be gifted, loved and inherited.",
    price: 74500,
    compareAtPrice: 82000,
    metal: "18K Yellow Gold",
    carat: 0.8,
    clarity: "VS1",
    images: [px(17833830), px(14999288)],
    category: "pendants",
    featured: true,
    rating: 4.8,
    reviews: 45,
  },
  {
    name: "Luna Diamond Pendant",
    slug: "luna-diamond-pendant",
    tagline: "A crescent of light",
    description:
      "A delicate crescent-shaped pendant in rose gold, set with a brilliant lab-grown diamond. Sweet, modern and full of light.",
    price: 56800,
    compareAtPrice: 65000,
    metal: "18K Rose Gold",
    carat: 0.5,
    clarity: "VS2",
    images: [px(27903371), px(14999288)],
    category: "pendants",
    isNew: true,
    rating: 4.7,
    reviews: 22,
  },
  {
    name: "Halo Diamond Studs",
    slug: "halo-diamond-studs",
    tagline: "The everyday essential",
    description:
      "Classic round studs with a delicate halo, set in 18K gold. The pair you reach for every morning — certified and HUID-tagged for total assurance.",
    price: 45800,
    metal: "18K Yellow Gold",
    carat: 0.4,
    clarity: "VS1",
    images: [px(5737290), px(20943478)],
    category: "earrings",
    isBestseller: true,
    rating: 4.9,
    reviews: 88,
  },
  {
    name: "Rose Drop Earrings",
    slug: "rose-drop-earrings",
    tagline: "Grace in motion",
    description:
      "Teardrop lab-grown diamonds swing gently from rose gold studs. Light, feminine and made to catch the light at every angle.",
    price: 62300,
    metal: "18K Rose Gold",
    carat: 0.7,
    clarity: "VS1",
    images: [px(35270159), px(13042449)],
    category: "earrings",
    isNew: true,
    rating: 4.8,
    reviews: 26,
  },
  {
    name: "Dahlia Diamond Hoops",
    slug: "dahlia-diamond-hoops",
    tagline: "Hoop dreams, diamond reality",
    description:
      "Chunky yet refined diamond hoops in 18K gold — 1.0 carats of continuous brilliance for the evenings that matter.",
    price: 78900,
    metal: "18K Yellow Gold",
    carat: 1.0,
    clarity: "VS2",
    images: [px(20943476), px(7981566)],
    category: "earrings",
    featured: true,
    rating: 4.8,
    reviews: 34,
  },
  {
    name: "Pearl & Diamond Earrings",
    slug: "pearl-diamond-earrings",
    tagline: "Old-world charm, new-world ethics",
    description:
      "Freshwater pearls crowned with lab-grown diamond caps in 18K gold. A heritage silhouette with a fully sustainable soul.",
    price: 51200,
    metal: "18K Yellow Gold",
    carat: 0.3,
    clarity: "VS2",
    images: [px(29483946), px(31605846)],
    category: "earrings",
    rating: 4.7,
    reviews: 18,
  },
  {
    name: "Crown Diamond Necklace",
    slug: "crown-diamond-necklace",
    tagline: "For the queen in you",
    description:
      "A regal cascade of 2.5 carats of lab-grown diamonds in 18K gold. The Crown necklace is our most requested bridal piece.",
    price: 120500,
    compareAtPrice: 135000,
    metal: "18K Yellow Gold",
    carat: 2.5,
    clarity: "VVS1",
    images: [px(24815712), px(9322933)],
    category: "necklaces",
    featured: true,
    rating: 5.0,
    reviews: 41,
  },
  {
    name: "Aurora Diamond Necklace",
    slug: "aurora-diamond-necklace",
    tagline: "A river of light",
    description:
      "An 18-inch platinum chain carrying 1.8 carats of graduated lab-grown diamonds. Fluid, modern and utterly captivating.",
    price: 96700,
    metal: "Platinum",
    carat: 1.8,
    clarity: "VVS2",
    images: [px(14999288), px(27903371)],
    category: "necklaces",
    isNew: true,
    rating: 4.9,
    reviews: 29,
  },
  {
    name: "Tennis Diamond Bracelet",
    slug: "tennis-diamond-bracelet",
    tagline: "The icon, reimagined",
    description:
      "A continuous line of 2.2 carats of lab-grown diamonds in 18K gold. The tennis bracelet that belongs on every wrist.",
    price: 88900,
    metal: "18K Yellow Gold",
    carat: 2.2,
    clarity: "VS1",
    images: [px(38827895), px(38827914)],
    category: "bangles-bracelets",
    isBestseller: true,
    rating: 4.9,
    reviews: 73,
  },
  {
    name: "Regal Gold Bangle",
    slug: "regal-gold-bangle",
    tagline: "Tradition, polished to perfection",
    description:
      "A substantial 22K gold bangle with diamond accents — heirloom craftsmanship reimagined for modern wrists.",
    price: 96400,
    compareAtPrice: 112000,
    metal: "22K Yellow Gold",
    carat: 1.0,
    clarity: "VS2",
    images: [px(32874211), px(34399150)],
    category: "bangles-bracelets",
    featured: true,
    rating: 4.8,
    reviews: 38,
  },
  {
    name: "Bridal Diamond Bangle",
    slug: "bridal-diamond-bangle",
    tagline: "For the biggest days",
    description:
      "An intricate 22K gold bangle studded with 1.4 carats of diamonds, made to shine from the mehndi to the pheras.",
    price: 108300,
    metal: "22K Yellow Gold",
    carat: 1.4,
    clarity: "VS1",
    images: [px(14873626), px(20626511)],
    category: "bangles-bracelets",
    rating: 4.9,
    reviews: 27,
  },
];

async function main() {
  console.log("Clearing existing data…");
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  console.log("Seeding categories…");
  for (const c of categories) {
    await prisma.category.create({ data: c });
  }

  console.log("Seeding products…");
  for (const p of products) {
    const { category, ...data } = p;
    await prisma.product.create({
      data: {
        ...data,
        category: {
          connect: { slug: category },
        },
      },
    });
  }

  const counts = await Promise.all([
    prisma.category.count(),
    prisma.product.count(),
  ]);
  console.log(`Done! ${counts[0]} categories, ${counts[1]} products.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
