// Home page Velo code for Epic Threadz
// Replace element IDs and placeholder images with your actual page elements and media

import wixLocation from 'wix-location';

$w.onReady(function () {
  // ---------------- Offer Banner ----------------
  const OFFER_ID = "#offerText"; // Text element for offer
  if ($w(OFFER_ID)) {
    $w(OFFER_ID).text = "🎉 Special Offer: Buy Any 3 T-Shirts & Get a Surprise Gift! 🎉";
  }

  // ---------------- Hero Slideshow ----------------
  // Use Slideshow element ID (replace #heroSlideshow)
  const HERO_SLIDES = [
    {
      title: "Unleash the Dream. Wear Your Anime.",
      subtitle: "Get 15% Off Your First Purchase!",
      image: "https://static.wixstatic.com/media/placeholder.jpg",
      link: "/shop"
    },
    {
      title: "Free Shipping",
      subtitle: "On All Orders",
      image: "https://static.wixstatic.com/media/placeholder.jpg",
      link: "/collections"
    }
  ];

  const HERO_ID = "#heroSlideshow"; // Slideshow element
  if ($w(HERO_ID)) {
    const slides = HERO_SLIDES.map(slide => ({
      title: slide.title,
      subtitle: slide.subtitle,
      image: slide.image
    }));
    $w(HERO_ID).slides = slides;

    // Optional: update text/image elements when slide changes
    $w(HERO_ID).onChange(() => {
      const idx = $w(HERO_ID).currentIndex;
      $w("#heroTitle").text = HERO_SLIDES[idx].title;
      $w("#heroSubtitle").text = HERO_SLIDES[idx].subtitle;
      $w("#heroImage").src = HERO_SLIDES[idx].image;
    });

    // Click on slide navigates to link
    $w(HERO_ID).onClick(() => {
      const idx = $w(HERO_ID).currentIndex;
      wixLocation.to(HERO_SLIDES[idx].link);
    });
  }

  // ---------------- Anime Categories Repeater ----------------
  const animeCategories = [
    { name: "One Piece", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Sail with the Straw Hat Pirates", link: "/collections/one-piece" },
    { name: "Naruto", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Ninja way of the Hidden Leaf", link: "/collections/naruto" },
    { name: "Bleach", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Soul Reaper battles await", link: "/collections/bleach" },
    { name: "Demon Slayer", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Slay demons with style", link: "/collections/demon-slayer" },
    { name: "Solo Leveling", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Arise and level up your wardrobe", link: "/collections/solo-leveling" }
  ];

  const ANIME_REPEATER = "#animeCategoriesRepeater";
  if ($w(ANIME_REPEATER)) {
    $w(ANIME_REPEATER).data = animeCategories;
    $w(ANIME_REPEATER).onItemReady(($item, itemData) => {
      if ($item("#catImage")) $item("#catImage").src = itemData.image;
      if ($item("#catName")) $item("#catName").text = itemData.name;
      if ($item("#catDescription")) $item("#catDescription").text = itemData.description;
      if ($item("#catLink")) $item("#catLink").onClick(() => wixLocation.to(itemData.link));
    });
  }

  // ---------------- Non-Anime Categories Repeater ----------------
  const nonAnimeCategories = [
    { name: "Meme Culture", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Internet humor you can wear", link: "/collections/meme-culture" },
    { name: "Minimalist", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Less is more in design", link: "/collections/minimalist" },
    { name: "Vintage Streetwear", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Classic urban style", link: "/collections/vintage" }
  ];

  const NON_ANIME_REPEATER = "#nonAnimeCategoriesRepeater";
  if ($w(NON_ANIME_REPEATER)) {
    $w(NON_ANIME_REPEATER).data = nonAnimeCategories;
    $w(NON_ANIME_REPEATER).onItemReady(($item, itemData) => {
      if ($item("#catImage")) $item("#catImage").src = itemData.image;
      if ($item("#catName")) $item("#catName").text = itemData.name;
      if ($item("#catDescription")) $item("#catDescription").text = itemData.description;
      if ($item("#catLink")) $item("#catLink").onClick(() => wixLocation.to(itemData.link));
    });
  }

  // ---------------- Featured Products Repeater ----------------
  const featuredProducts = [
    { title: "Naruto Shadow Clone Tee", price: 1199, image: "https://static.wixstatic.com/media/placeholder.jpg", link: "/product/naruto-shadow-clone-tee" },
    { title: "Solo Leveling Arise Tee", price: 1299, image: "https://static.wixstatic.com/media/placeholder.jpg", link: "/product/solo-arise-tee" }
  ];

  const FEATURED_REPEATER = "#featuredProductsRepeater";
  const formatINR = price => "₹" + Math.round(price);
  if ($w(FEATURED_REPEATER)) {
    $w(FEATURED_REPEATER).data = featuredProducts;
    $w(FEATURED_REPEATER).onItemReady(($item, itemData) => {
      if ($item("#prodImage")) $item("#prodImage").src = itemData.image;
      if ($item("#prodTitle")) $item("#prodTitle").text = itemData.title;
      if ($item("#prodPrice")) $item("#prodPrice").text = formatINR(itemData.price);
      if ($item("#prodBtn")) $item("#prodBtn").onClick(() => wixLocation.to(itemData.link));
    });
  }

  // ---------------- Optional: Click on Offer Banner ----------------
  if ($w(OFFER_ID)) {
    $w(OFFER_ID).onClick(() => wixLocation.to("/offers"));
  }
});
