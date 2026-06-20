const descriptions = [
  `Introducing our Premium Wireless Bluetooth Headphones, engineered for exceptional sound quality, deep bass, and crystal-clear calls. Designed with advanced Bluetooth technology, ergonomic comfort, and extended battery life, these headphones are ideal for music lovers, professionals, and gamers. Enjoy seamless connectivity, premium build quality, and an immersive listening experience wherever you go.`,

  `Upgrade your daily lifestyle with this modern Smart Fitness Watch featuring accurate health tracking, heart rate monitoring, sleep analysis, multiple sports modes, and long-lasting battery life. Its sleek design, durable construction, and intuitive interface make it the perfect companion for fitness enthusiasts and everyday users.`,

  `Experience unmatched typing precision with our Mechanical Gaming Keyboard featuring responsive tactile switches, customizable RGB lighting, anti-ghosting technology, and a durable aluminum frame. Built for gamers and professionals, it delivers exceptional performance, comfort, and reliability for every session.`,

  `This Premium Leather Wallet combines timeless craftsmanship with modern functionality. Made from high-quality genuine leather, it offers multiple card slots, RFID protection, and a slim profile that fits comfortably in your pocket while maintaining a sophisticated appearance.`,
];

export const generateDummyDescription = (productName = "") => {
  const random =
    descriptions[Math.floor(Math.random() * descriptions.length)];

  if (!productName.trim()) {
    return random;
  }

  return random.replace(
    /Premium Wireless Bluetooth Headphones|Smart Fitness Watch|Mechanical Gaming Keyboard|Premium Leather Wallet/,
    productName
  );
};

export default generateDummyDescription;