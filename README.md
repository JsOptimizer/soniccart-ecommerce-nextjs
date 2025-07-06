# 🎧 SonicCart – High-End Audio E-commerce (Demo)

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

</div>

## 📝 Overview

SonicCart is a modern, responsive e-commerce demo platform specializing in high-end audio equipment. It is a static frontend project built with Next.js, TypeScript, and Tailwind CSS, showcasing clean architecture, reusable components, and a premium user interface. This project is ideal for learning, portfolio demonstration, or as a starting point for a full-stack e-commerce build.

### 🌟 Features

- 🎯 **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- 🔍 **Product Browsing**: Category-based navigation and detailed product pages
- 🎨 **Modern UI**: Pixel-perfect implementation of a premium design
- 🧩 **Reusable Components**: Modular, maintainable codebase
- 🗂 **Static Data**: All product data is loaded from local JSON files

> **Note:** This project is a static demo. Shopping cart, checkout, authentication, and backend integration are not implemented. "Add to cart" buttons and similar UI elements are non-functional placeholders.

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd sonic-cart
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗 Project Structure

```
sonic-cart/
├── app/                # Next.js app directory (routes, layouts, pages)
│   ├── earphones/      # Earphones category and product pages
│   ├── headphones/     # Headphones category and product pages
│   ├── speakers/       # Speakers category and product pages
│   └── ...             # Root, error, loading, not-found, etc.
├── features/           # Feature-specific UI components
├── shared/
│   ├── assets/         # Images and static assets
│   ├── components/     # Reusable UI components
│   ├── constants/      # Static data and config
│   ├── types/          # TypeScript types
│   └── ...
├── public/             # Public static files
├── package.json        # Project metadata and scripts
└── ...
```

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI**: Custom, reusable React components

## 📱 Pages & Routes

- `/` - Homepage
- `/headphones` - Headphones category
- `/headphones/[id]` - Headphones product details
- `/speakers` - Speakers category
- `/speakers/[id]` - Speakers product details
- `/earphones` - Earphones category
- `/earphones/[id]` - Earphones product details

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Frontend Mentor](https://www.frontendmentor.io/) for the original challenge inspiration
- [Next.js](https://nextjs.org/) team for the amazing framework
- All contributors who have helped shape this project

## 📞 Contact

Lekan Mike

---

<div align="center">
Made with ❤️ by jsoptimizer
</div>
