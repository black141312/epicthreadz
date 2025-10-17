// src/pages/home/home.js
// Homepage Velo code for Epic Threadz
// NOTE: Replace element IDs and image URLs below to match your actual page elements & media files.

import wixLocation from 'wix-location';

$w.onReady(function () {
  // ---------- Offer banner ----------
  // Replace '#offerText' with your Text element ID that should show the offer banner.
  const OFFER_ID = "#offerText";
  if ($w(OFFER_ID)) {
    $w(OFFER_ID).text = "🎉 Special Offer: Buy Any 3 T-Shirts & Get a Surprise Gift! 🎉";
  }

  // ---------- Hero (repeater or slideshow) ----------
  // If your site uses a Repeater for hero slides use '#heroRepeater' and item IDs:
  //   #heroImage (Image), #heroTitle (Text), #heroSubtitle (Text), #heroCTA (Button)
  // If your hero is a Slideshow element, replace this block with Slideshow API code.
  const heroData = [
    {
      image: "https://static.wixstatic.com/media/placeholder.jpg", // replace with media URL or mediaId
      title: "Unleash the Dream. Wear Your Anime.",
      subtitle: "Get 15% Off Your First Purchase!",
      link: "/shop"
    },
    {
      image: "https://static.wixstatic.com/media/placeholder.jpg",
      title: "Free Shipping",
      subtitle: "On All Orders",
      link: "/collections"
    }
  ];

  const HERO_REPEATER = "#heroRepeater";
  if ($w(HERO_REPEATER)) {
    $w(HERO_REPEATER).data = heroData;
    $w(HERO_REPEATER).onItemReady(($item, itemData) => {
      if ($item("#heroImage")) $item("#heroImage").src = itemData.image;
      if ($item("#heroTitle")) $item("#heroTitle").text = itemData.title;
      if ($item("#heroSubtitle")) $item("#heroSubtitle").text = itemData.subtitle;
      if ($item("#heroCTA")) {
        $item("#heroCTA").label = "Shop Now";
        $item("#heroCTA").onClick(() => wixLocation.to(itemData.link || "/shop"));
      }
      // Optional: whole item clickable
      if ($item("#heroContainer")) {
        $item("#heroContainer").onClick(() => wixLocation.to(itemData.link || "/shop"));
      }
    });
  }

  // ---------- Repeater helper: anime categories ----------
  // Repeater ID: #animeCategoriesRepeater
  // Item elements: #catImage (Image), #catName (Text), #catDescription (Text), #catLink (Button)
  const animeCategories = [
    { name: "One Piece", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Sail with the Straw Hat Pirates", link: "/collections/one-piece" },
    { name: "Naruto", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Ninja way of the Hidden Leaf", link: "/collections/naruto" },
    { name: "Bleach", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Soul Reaper battles await", link: "/collections/bleach" },
    { name: "Demon Slayer", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Slay demons with style", link: "/collections/demon-slayer" },
    { name: "Solo Leveling", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Arise and level up your wardrobe", link: "/collections/solo-leveling" },
    { name: "Attack on Titan", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Freedom fighters collection", link: "/collections/attack-on-titan" },
    { name: "Jujutsu Kaisen", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Cursed techniques in fashion", link: "/collections/jujutsu-kaisen" },
    { name: "My Hero Academia", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Plus Ultra hero gear", link: "/collections/my-hero" },
    { name: "Hunter x Hunter", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Master your Nen ability", link: "/collections/hxh" }
  ];

  const ANIME_REPEATER = "#animeCategoriesRepeater";
  if ($w(ANIME_REPEATER)) {
    $w(ANIME_REPEATER).data = animeCategories;
    $w(ANIME_REPEATER).onItemReady(($item, itemData) => {
      if ($item("#catImage")) $item("#catImage").src = itemData.image;
      if ($item("#catName")) $item("#catName").text = itemData.name;
      if ($item("#catDescription")) $item("#catDescription").text = itemData.description;
      if ($item("#catLink")) $item("#catLink").onClick(() => wixLocation.to(itemData.link || "/collections"));
    });
  }

  // ---------- Non-anime categories ----------
  const nonAnimeCategories = [
    { name: "Meme Culture", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Internet humor you can wear", link: "/collections/meme-culture" },
    { name: "Minimalist", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Less is more in design", link: "/collections/minimalist" },
    { name: "Vintage Streetwear", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Classic urban style", link: "/collections/vintage" },
    { name: "Motivational", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Wear your inspiration daily", link: "/collections/motivational" },
    { name: "Retro Gaming", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Level up your wardrobe", link: "/collections/retro-gaming" }
  ];

  const NON_ANIME_REPEATER = "#nonAnimeCategoriesRepeater";
  if ($w(NON_ANIME_REPEATER)) {
    $w(NON_ANIME_REPEATER).data = nonAnimeCategories;
    $w(NON_ANIME_REPEATER).onItemReady(($item, itemData) => {
      if ($item("#catImage")) $item("#catImage").src = itemData.image;
      if ($item("#catName")) $item("#catName").text = itemData.name;
      if ($item("#catDescription")) $item("#catDescription").text = itemData.description;
      if ($item("#catLink")) $item("#catLink").onClick(() => wixLocation.to(itemData.link || "/collections"));
    });
  }

  // ---------- Featured products (repeaters) ----------
  // Product item IDs inside repeater: #prodImage, #prodTitle, #prodPrice, #prodBtn
  const featuredAnimeProducts = [
    { id: "p1", title: "Naruto Shadow Clone Tee", price: 1199, image: "https://static.wixstatic.com/media/placeholder.jpg", link: "/product/naruto-shadow-clone-tee" },
    { id: "p2", title: "Solo Leveling Arise Tee", price: 1299, image: "https://static.wixstatic.com/media/placeholder.jpg", link: "/product/solo-arise-tee" },
    { id: "p3", title: "Ninja Hoodie", price: 1600, image: "https://static.wixstatic.com/media/placeholder.jpg", link: "/product/ninja-hoodie" },
    { id: "p4", title: "Tropical Baby", price: 1600, image: "https://static.wixstatic.com/media/placeholder.jpg", link: "/product/tropical-baby" }
  ];

  const formatINR = price => {
    try {
      return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
    } catch (e) {
      return "₹" + Math.round(price);
    }
  };

  const FEATURED_ANIME_REPEATER = "#featuredAnimeRepeater";
  if ($w(FEATURED_ANIME_REPEATER)) {
    $w(FEATURED_ANIME_REPEATER).data = featuredAnimeProducts;
    $w(FEATURED_ANIME_REPEATER).onItemReady(($item, itemData) => {
      if ($item("#prodImage")) $item("#prodImage").src = itemData.image;
      if ($item("#prodTitle")) $item("#prodTitle").text = itemData.title;
      if ($item("#prodPrice")) $item("#prodPrice").text = formatINR(itemData.price);
      if ($item("#prodBtn")) $item("#prodBtn").onClick(() => wixLocation.to(itemData.link));
    });
  }

  // ---------- Upcoming drops repeaters ----------
  const upcomingAnimeProducts = [
    { category: "Solo Leveling", name: "Shadow Monarch Tee", image: "https://static.wixstatic.com/media/placeholder.jpg", comingSoon: true, link: "#" },
    { category: "Demon Slayer", name: "Hashira Hoodie", image: "https://static.wixstatic.com/media/placeholder.jpg", comingSoon: true, link: "#" }
  ];

  const UPCOMING_ANIME_REPEATER = "#upcomingAnimeRepeater";
  if ($w(UPCOMING_ANIME_REPEATER)) {
    $w(UPCOMING_ANIME_REPEATER).data = upcomingAnimeProducts;
    $w(UPCOMING_ANIME_REPEATER).onItemReady(($item, itemData) => {
      if ($item("#upImage")) $item("#upImage").src = itemData.image;
      if ($item("#upName")) $item("#upName").text = itemData.name;
      if ($item("#upCategory")) $item("#upCategory").text = itemData.category;
      if ($item("#upBadge")) {
        if (itemData.comingSoon) $item("#upBadge").show();
        else $item("#upBadge").hide();
      }
      if ($item("#upBtn")) $item("#upBtn").onClick(() => wixLocation.to(itemData.link || "#"));
    });
  }

  // ---------- Optional: Analytics click handlers (example) ----------
  // Example: track when a user clicks the offer banner
  if ($w(OFFER_ID)) {
    $w(OFFER_ID).onClick(() => {
      // track analytics or route to offers page
      wixLocation.to("/offers");
    });
  }

}); // $w.onReady
