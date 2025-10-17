// Add this to your Home page code in the Wix Velo Editor

$w.onReady(function () {
  // --- NOTE: Replace the element IDs below with the actual IDs from your page if they differ ---
  // Offer banner (use a Text element, not a Box)
  // e.g. use an element with ID: #offerText
  if ($w("#offerText")) {
    $w("#offerText").text = "🎉 Special Offer: Buy Any 3 T-Shirts & Get a Surprise Gift! 🎉";
  }

  // --- Hero (implemented as a repeater so it's robust across sites) ---
  // Use a Repeater element with ID: #heroRepeater
  // Inside each repeater item you should have text elements with IDs: #heroTitle, #heroSubtitle and an Image element with ID: #heroImage
  const heroSlides = [
    {
      image: "https://static.wixstatic.com/media/placeholder.jpg", // replace with real image URL or media ID
      title: "Unleash the Dream. Wear Your Anime.",
      subtitle: "Get 15% Off Your First Purchase!"
    },
    {
      image: "https://static.wixstatic.com/media/placeholder.jpg", // replace
      title: "Free Shipping",
      subtitle: "On All Orders"
    }
  ];

  if ($w("#heroRepeater")) {
    $w("#heroRepeater").data = heroSlides;
    $w("#heroRepeater").onItemReady( ($item, itemData, index) => {
      if ($item("#heroImage")) $item("#heroImage").src = itemData.image;
      if ($item("#heroTitle")) $item("#heroTitle").text = itemData.title;
      if ($item("#heroSubtitle")) $item("#heroSubtitle").text = itemData.subtitle;
      // optional: link or CTA button inside each hero item (id: #heroCTA)
      if ($item("#heroCTA")) $item("#heroCTA").label = "Shop Now";
    });
  }

  // --- Anime Categories Repeater ---
  // Repeater ID: #animeCategoriesRepeater
  // Repeater item should contain: #catImage (Image), #catName (Text), #catDescription (Text)
  const animeCategories = [
    { name: "One Piece", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Sail with the Straw Hat Pirates" },
    { name: "Naruto", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Ninja way of the Hidden Leaf" },
    { name: "Bleach", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Soul Reaper battles await" },
    { name: "Demon Slayer", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Slay demons with style" },
    { name: "Solo Leveling", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Arise and level up your wardrobe" },
    { name: "Attack on Titan", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Freedom fighters collection" },
    { name: "Jujutsu Kaisen", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Cursed techniques in fashion" },
    { name: "My Hero Academia", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Plus Ultra hero gear" },
    { name: "Hunter x Hunter", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Master your Nen ability" }
  ];

  if ($w("#animeCategoriesRepeater")) {
    $w("#animeCategoriesRepeater").data = animeCategories;
    $w("#animeCategoriesRepeater").onItemReady( ($item, itemData) => {
      if ($item("#catImage")) $item("#catImage").src = itemData.image;
      if ($item("#catName")) $item("#catName").text = itemData.name;
      if ($item("#catDescription")) $item("#catDescription").text = itemData.description;
    });
  }

  // --- Non-Anime Categories Repeater ---
  const nonAnimeCategories = [
    { name: "Meme Culture", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Internet humor you can wear" },
    { name: "Minimalist", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Less is more in design" },
    { name: "Vintage Streetwear", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Classic urban style" },
    { name: "Motivational", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Wear your inspiration daily" },
    { name: "Retro Gaming", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Level up your wardrobe" }
  ];

  if ($w("#nonAnimeCategoriesRepeater")) {
    $w("#nonAnimeCategoriesRepeater").data = nonAnimeCategories;
    $w("#nonAnimeCategoriesRepeater").onItemReady( ($item, itemData) => {
      if ($item("#catImage")) $item("#catImage").src = itemData.image;
      if ($item("#catName")) $item("#catName").text = itemData.name;
      if ($item("#catDescription")) $item("#catDescription").text = itemData.description;
    });
  }

  // --- Featured Anime Products Repeater ---
  // Repeater ID: #featuredAnimeRepeater
  // Repeater item IDs inside: #prodImage, #prodTitle, #prodPrice
  const featuredAnimeProducts = [
    { title: "Naruto Shadow Clone Tee", price: 1199, image: "https://static.wixstatic.com/media/placeholder.jpg" },
    { title: "Solo Leveling Arise Tee", price: 1299, image: "https://static.wixstatic.com/media/placeholder.jpg" },
    { title: "Ninja Hoodie", price: 1600, image: "https://static.wixstatic.com/media/placeholder.jpg" },
    { title: "Tropical Baby", price: 1600, image: "https://static.wixstatic.com/media/placeholder.jpg" }
  ];

  const formatINR = price => {
    try {
      return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(price);
    } catch (e) {
      return "₹" + Math.round(price);
    }
  };

  if ($w("#featuredAnimeRepeater")) {
    $w("#featuredAnimeRepeater").data = featuredAnimeProducts;
    $w("#featuredAnimeRepeater").onItemReady( ($item, itemData) => {
      if ($item("#prodImage")) $item("#prodImage").src = itemData.image;
      if ($item("#prodTitle")) $item("#prodTitle").text = itemData.title;
      if ($item("#prodPrice")) $item("#prodPrice").text = formatINR(itemData.price);
    });
  }

  // --- Featured Non-Anime Products Repeater ---
  const featuredNonAnimeProducts = [
    { title: "Galatic Force", price: 720, image: "https://static.wixstatic.com/media/placeholder.jpg" },
    { title: "Green Lantern", price: 1600, image: "https://static.wixstatic.com/media/placeholder.jpg" },
    { title: "Snake Hippi", price: 900, image: "https://static.wixstatic.com/media/placeholder.jpg" }
  ];

  if ($w("#featuredNonAnimeRepeater")) {
    $w("#featuredNonAnimeRepeater").data = featuredNonAnimeProducts;
    $w("#featuredNonAnimeRepeater").onItemReady( ($item, itemData) => {
      if ($item("#prodImage")) $item("#prodImage").src = itemData.image;
      if ($item("#prodTitle")) $item("#prodTitle").text = itemData.title;
      if ($item("#prodPrice")) $item("#prodPrice").text = formatINR(itemData.price);
    });
  }

  // --- Upcoming Anime Drops Repeater ---
  const upcomingAnimeProducts = [
    { category: "Solo Leveling", name: "Shadow Monarch Tee", image: "https://static.wixstatic.com/media/placeholder.jpg", comingSoon: true },
    { category: "Demon Slayer", name: "Hashira Hoodie", image: "https://static.wixstatic.com/media/placeholder.jpg", comingSoon: true }
  ];

  if ($w("#upcomingAnimeRepeater")) {
    $w("#upcomingAnimeRepeater").data = upcomingAnimeProducts;
    $w("#upcomingAnimeRepeater").onItemReady( ($item, itemData) => {
      if ($item("#upImage")) $item("#upImage").src = itemData.image;
      if ($item("#upName")) $item("#upName").text = itemData.name;
      if ($item("#upCategory")) $item("#upCategory").text = itemData.category;
      if ($item("#upBadge") && itemData.comingSoon) $item("#upBadge").show(); // optional badge element
    });
  }

  // --- Upcoming Non-Anime Drops Repeater ---
  const upcomingNonAnimeProducts = [
    { category: "Minimalist", name: "Minimal Tee", image: "https://static.wixstatic.com/media/placeholder.jpg", comingSoon: true },
    { category: "Meme Culture", name: "Dank Hoodie", image: "https://static.wixstatic.com/media/placeholder.jpg", comingSoon: true }
  ];

  if ($w("#upcomingNonAnimeRepeater")) {
    $w("#upcomingNonAnimeRepeater").data = upcomingNonAnimeProducts;
    $w("#upcomingNonAnimeRepeater").onItemReady( ($item, itemData) => {
      if ($item("#upImage")) $item("#upImage").src = itemData.image;
      if ($item("#upName")) $item("#upName").text = itemData.name;
      if ($item("#upCategory")) $item("#upCategory").text = itemData.category;
      if ($item("#upBadge") && itemData.comingSoon) $item("#upBadge").show();
    });
  }

});
