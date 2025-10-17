// Home page Velo code for Epic Threadz
// Safe version: no onClick/onChange errors
// Replace placeholder IDs and images with actual ones from your Wix Editor

import wixLocation from 'wix-location';

$w.onReady(function () {
  // ---------------- Offer Banner ----------------
  const OFFER_BOX = "#offerBox"; // Box wrapping your text (must be clickable)
  if ($w(OFFER_BOX)) {
    $w(OFFER_BOX).onClick(() => wixLocation.to("/offers"));
  }

  // ---------------- Hero Boxes ----------------
  const HERO_DATA = [
    {
      title: "Unleash the Dream. Wear Your Anime.",
      subtitle: "Get 15% Off Your First Purchase!",
      image: "https://static.wixstatic.com/media/placeholder.jpg",
      link: "/shop",
      boxId: "#heroBox1",       // Must be a clickable Box or Container
      titleId: "#heroTitle1",
      subtitleId: "#heroSubtitle1",
      imageId: "#heroImage1"
    },
    {
      title: "Free Shipping",
      subtitle: "On All Orders",
      image: "https://static.wixstatic.com/media/placeholder.jpg",
      link: "/collections",
      boxId: "#heroBox2",
      titleId: "#heroTitle2",
      subtitleId: "#heroSubtitle2",
      imageId: "#heroImage2"
    }
  ];

  HERO_DATA.forEach(slide => {
    if ($w(slide.boxId)) {
      if ($w(slide.titleId)) $w(slide.titleId).text = slide.title;
      if ($w(slide.subtitleId)) $w(slide.subtitleId).text = slide.subtitle;
      if ($w(slide.imageId)) $w(slide.imageId).src = slide.image;

      // Attach click only if Box or Container
      const boxType = $w(slide.boxId).type;
      if (boxType === "Box" || boxType === "Container") {
        $w(slide.boxId).onClick(() => wixLocation.to(slide.link));
      }
    }
  });

  // ---------------- Anime Categories Repeater ----------------
  const animeCategories = [
    { name: "One Piece", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Sail with the Straw Hat Pirates", link: "/collections/one-piece" },
    { name: "Naruto", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Ninja way of the Hidden Leaf", link: "/collections/naruto" },
    { name: "Bleach", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Soul Reaper battles await", link: "/collections/bleach" }
  ];

  const ANIME_REPEATER = "#animeCategoriesRepeater";
  if ($w(ANIME_REPEATER)) {
    $w(ANIME_REPEATER).data = animeCategories;
    $w(ANIME_REPEATER).onItemReady(($item, itemData) => {
      if ($item("#catImage")) $item("#catImage").src = itemData.image;
      if ($item("#catName")) $item("#catName").text = itemData.name;
      if ($item("#catDescription")) $item("#catDescription").text = itemData.description;

      // Only attach click if Button or Image
      if ($item("#catLink")) {
        const elType = $item("#catLink").type;
        if (elType === "Button" || elType === "Image") {
          $item("#catLink").onClick(() => wixLocation.to(itemData.link));
        }
      }
    });
  }

  // ---------------- Non-Anime Categories Repeater ----------------
  const nonAnimeCategories = [
    { name: "Meme Culture", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Internet humor you can wear", link: "/collections/meme-culture" },
    { name: "Minimalist", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Less is more in design", link: "/collections/minimalist" }
  ];

  const NON_ANIME_REPEATER = "#nonAnimeCategoriesRepeater";
  if ($w(NON_ANIME_REPEATER)) {
    $w(NON_ANIME_REPEATER).data = nonAnimeCategories;
    $w(NON_ANIME_REPEATER).onItemReady(($item, itemData) => {
      if ($item("#catImage")) $item("#catImage").src = itemData.image;
      if ($item("#catName")) $item("#catName").text = itemData.name;
      if ($item("#catDescription")) $item("#catDescription").text = itemData.description;

      if ($item("#catLink")) {
        const elType = $item("#catLink").type;
        if (elType === "Button" || elType === "Image") {
          $item("#catLink").onClick(() => wixLocation.to(itemData.link));
        }
      }
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

      if ($item("#prodBtn")) {
        const elType = $item("#prodBtn").type;
        if (elType === "Button" || elType === "Image") {
          $item("#prodBtn").onClick(() => wixLocation.to(itemData.link));
        }
      }
    });
  }

});
