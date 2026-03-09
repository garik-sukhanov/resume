# Fullstack Web Developer Online Resume

A modern, responsive, and multilingual online resume built with React, Next.js 14 (App Router), TypeScript, and Tailwind CSS. Optimized for deployment on Vercel.

## 🚀 Features

- **Multilingual Support**: English and Russian localization using `next-intl`.
- **Dynamic Theme**: Dark and light modes with GitHub-inspired styling.
- **Hero Animation**: Smooth typing animation for skills using `framer-motion`.
- **Responsive Design**: Mobile-first approach, fully responsive on all devices.
- **PDF Resume**: Integrated PDF viewer and download functionality for both languages.
- **SEO Optimized**: Metadata and localized tags for better search engine visibility.
- **Fast Performance**: Optimized bundle size, lazy loading, and static asset management.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Testing**: [Vitest](https://vitest.dev/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## 📦 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd resume
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```bash
npm run build
```

### Running Tests

```bash
npm run test
```

## 📂 Project Structure

- `app/[locale]/`: Main application pages and layouts (localized).
- `messages/`: Translation JSON files for RU and EN.
- `src/components/`: Reusable UI components.
- `src/i18n/`: Internationalization configuration.
- `public/`: Static assets (PDFs, images).
- `artefacts/`: Original source files for CV and cover letters.

## 📄 Adding New Content

- **Translations**: Edit `messages/en.json` or `messages/ru.json`.
- **New Components**: Add them to `src/components/` and import where needed.
- **PDF Resumes**: Replace the files in `public/` with your updated CVs.

## 🚢 Deployment

The easiest way to deploy this project is via [Vercel](https://vercel.com/new).

1. Push your code to a GitHub repository.
2. Import the project in Vercel.
3. Vercel will automatically detect Next.js and deploy your application.

## 📝 License

This project is licensed under the MIT License.
