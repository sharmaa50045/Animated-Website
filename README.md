🌐 Animated React Website with GSAP ✨

⚡ A visually stunning, fully responsive animated website built using React and GSAP for buttery-smooth user experience.

🚀 Live Demo

🖼️ Preview

⚡ Highlights

✨ Smooth & modern animations
🎯 Scroll-based interactions (GSAP ScrollTrigger)
📱 Fully responsive across all devices
⚙️ Optimized performance & clean code
🧩 Component-based architecture
🎨 Minimal & aesthetic UI

🧠 What You’ll Learn
GSAP animations in React
ScrollTrigger implementation
Performance optimization for animations
Responsive UI design
Component reusability
🛠️ Tech Stack
Technology	Usage
⚛️ React	UI Development
🎬 GSAP	Animations
🎯 ScrollTrigger	Scroll Effects
🎨 CSS / Tailwind	Styling
⚡ Vite	Fast Build Tool
📂 Project Structure
📦 animated-react-gsap
 ┣ 📂 public
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┣ 📂 pages
 ┃ ┣ 📂 assets
 ┃ ┣ 📂 styles
 ┃ ┣ 📜 App.jsx
 ┃ ┗ 📜 main.jsx
 ┣ 📜 package.json
 ┗ 📜 README.md
⚙️ Getting Started
1️⃣ Clone Repo
git clone: https://github.com/sharmaa50045/Animated-Website
2️⃣ Install Dependencies
npm install
3️⃣ Run Project
npm run dev
🎬 Animation Example
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef();

  useEffect(() => {
    gsap.from(ref.current, {
      y: 80,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    });
  }, []);

  return <h1 ref={ref}>🔥 Smooth Animation</h1>;
}
📱 Responsiveness

✔ Mobile-first design
✔ Fluid layouts
✔ Optimized animations for performance

🚀 Deployment

Deploy easily on:

▲ Vercel
🌐 Netlify
📦 GitHub Pages
🤝 Contributing

Want to improve this project? Awesome!

1. Fork the repo
2. Create a new branch (feature/your-feature)
3. Commit changes
4. Push to branch
5. Open PR 🚀
🧑‍💻 Author

Aaditya Sharma
🔗 GitHub:https://github.com/sharmaa50045

⭐ Support

If you found this helpful:

👉 Give it a ⭐ on GitHub
👉 Share with friends

🏆 Bonus Tip

💡 For best performance:

Use will-change in CSS
Avoid too many heavy animations
Use ScrollTrigger wisely
