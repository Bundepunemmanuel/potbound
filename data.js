export const crops = [
  {
    slug: "tomatoes-in-containers",
    title: "Tomatoes in Containers",
    desc: "Why every guide gives you a different pot size — and the one variable that resolves it.",
    tag: "Most Requested",
  },
  {
    slug: "peppers-in-containers",
    title: "Peppers in Containers",
    desc: "Bell and hot peppers need different pots. Here's the root difference guides skip.",
    tag: "Common",
  },
  {
    slug: "cucumbers-in-containers",
    title: "Cucumbers in Containers",
    desc: "Bush vs vining changes the container size, the depth, and whether you need a trellis.",
    tag: "Common",
  },
  {
    slug: "lettuce-and-greens-in-containers",
    title: "Lettuce & Greens in Containers",
    desc: "Depth matters less than you think. Width is the number nobody mentions.",
    tag: "Beginner Friendly",
  },
  {
    slug: "herbs-in-containers",
    title: "Herbs in Containers",
    desc: "The one mistake that kills basil fast — and why rosemary dies from the opposite mistake.",
    tag: "Beginner Friendly",
  },
];

export function getAllCropSlugs() {
  return crops.map((c) => c.slug);
}
