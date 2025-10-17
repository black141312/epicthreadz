import wixLocation from 'wix-location';

$w.onReady(function () {
  // ---------------- Offer Banner ----------------
  const OFFER_BOX = "#offerBox"; // Use a Box element instead of Text for clickable banner
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
      boxId: "#heroBox1", // Must be a Box marked clickable
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

      // Click only on Box elements
      if ($w(slide.boxId).type === "Box" || $w(slide.boxId).type === "Container") {
        $w(slide.boxId).onClick(() => wixLocation.to(slide.link));
      }
    }
  });

  // ---------------- Repeaters ----------------
  const animeCategories = [
    { name: "One Piece", image: "https://static.wixstatic.com/media/placeholder.jpg", description: "Sail with the Straw Hat Pirates", link: "/collections/one-piece" }
  ];

  const ANIME_REPEATER = "#animeCategoriesRepeater";
  if ($w(ANIME_REPEATER)) {
    $w(ANIME_REPEATER).data = animeCategories;
    $w(ANIME_REPEATER).onItemReady(($item, itemData) => {
      if ($item("#catImage")) $item("#catImage").src = itemData.image;
      if ($item("#catName")) $item("#catName").text = itemData.name;
      if ($item("#catDescription")) $item("#catDescription").text = itemData.description;
      // Click only on Button element inside repeater
      if ($item("#catLink") && $item("#catLink").type === "Button") {
        $item("#catLink").onClick(() => wixLocation.to(itemData.link));
      }
    });
  }
});
