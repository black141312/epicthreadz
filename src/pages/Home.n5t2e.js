// Add this to your Home.n5t2e.js page in the Wix Velo Editor

// When the homepage is loaded
$w.onReady(function () {
  // --- Offer Banner ---
  $w("#box1").text = "🎉 Special Offer: Buy Any 3 T-Shirts & Get a Surprise Gift! 🎉";

  // --- Hero Carousel ---
  $w("#section1").items = [
    { src: "placeholder.jpg", title: "Unleash the Dream. Wear Your Anime.", subtitle: "Get 15% Off Your First Purchase!" },
    { src: "placeholder.jpg", title: "Free Shipping", subtitle: "On All Orders" }
  ];

  // --- Anime Categories ---
  const animeCategories = [
    { name: "One Piece", image: "placeholder.jpg", description: "Sail with the Straw Hat Pirates" },
    { name: "Naruto", image: "placeholder.jpg", description: "Ninja way of the Hidden Leaf" },
    { name: "Bleach", image: "placeholder.jpg", description: "Soul Reaper battles await" },
    { name: "Demon Slayer", image: "placeholder.jpg", description: "Slay demons with style" },
    { name: "Solo Leveling", image: "placeholder.jpg", description: "Arise and level up your wardrobe" },
    { name: "Attack on Titan", image: "placeholder.jpg", description: "Freedom fighters collection" },
    { name: "Jujutsu Kaisen", image: "placeholder.jpg", description: "Cursed techniques in fashion" },
    { name: "My Hero Academia", image: "placeholder.jpg", description: "Plus Ultra hero gear" },
    { name: "Hunter x Hunter", image: "placeholder.jpg", description: "Master your Nen ability" }
  ];
  $w("#animeCategoriesRepeater").data = animeCategories;

  // --- Non-Anime Categories ---
  const nonAnimeCategories = [
    { name: "Meme Culture", image: "placeholder.jpg", description: "Internet humor you can wear" },
    { name: "Minimalist", image: "placeholder.jpg", description: "Less is more in design" },
    { name: "Vintage Streetwear", image: "placeholder.jpg", description: "Classic urban style" },
    { name: "Motivational", image: "placeholder.jpg", description: "Wear your inspiration daily" },
    { name: "Retro Gaming", image: "placeholder.jpg", description: "Level up your wardrobe" }
  ];
  $w("#nonAnimeCategoriesRepeater").data = nonAnimeCategories;

  // --- Anime Best Sellers ---
  const featuredAnimeProducts = [
    { title: "Naruto Shadow Clone Tee", price: 1199, image: "placeholder.jpg" },
    { title: "Solo Leveling Arise Tee", price: 1299, image: "placeholder.jpg" },
    { title: "Ninja Hoodie", price: 1600, image: "placeholder.jpg" },
    { title: "Tropical Baby", price: 1600, image: "placeholder.jpg" }
  ];
  $w("#featuredAnimeRepeater").data = featuredAnimeProducts;

  // --- Trending Styles (Non-Anime Best Sellers) ---
  const featuredNonAnimeProducts = [
    { title: "Galatic Force", price: 720, image: "placeholder.jpg" },
    { title: "Green Lantern", price: 1600, image: "placeholder.jpg" },
    { title: "Snake Hippi", price: 900, image: "placeholder.jpg" }
  ];
  $w("#featuredNonAnimeRepeater").data = featuredNonAnimeProducts;

  // --- Coming Soon: Anime Drops ---
  const upcomingAnimeProducts = [
    { category: "Solo Leveling", name: "Shadow Monarch Tee", image: "placeholder.jpg", comingSoon: true },
    { category: "Demon Slayer", name: "Hashira Hoodie", image: "placeholder.jpg", comingSoon: true }
  ];
  $w("#upcomingAnimeRepeater").data = upcomingAnimeProducts;

  // --- Coming Soon: More Styles ---
  const upcomingNonAnimeProducts = [
    { category: "Minimalist", name: "Minimal Tee", image: "placeholder.jpg", comingSoon: true },
    { category: "Meme Culture", name: "Dank Hoodie", image: "placeholder.jpg", comingSoon: true }
  ];
  $w("#upcomingNonAnimeRepeater").data = upcomingNonAnimeProducts;
});
