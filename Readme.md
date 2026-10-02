# Syed Hammad's Portfolio

A personal portfolio built with Next.js. It includes a home page, project galleries, a Medium article shelf, a local article route, and links to contact and resume details.

## Features

- Responsive portfolio pages with light and dark themes
- Animated home page using GSAP
- Project cards with image and video galleries
- Cloudinary image delivery with automatic format, quality, and size transformations
- Medium article cards linking to the original articles
- Contact links, social profiles, and resume download

## Tech Stack

- Next.js 15 and React 19
- TypeScript
- Tailwind CSS 4
- GSAP
- React Icons

## Getting Started

### Requirements

- Node.js 18.18 or later
- npm

### Install and run

```bash
git clone https://github.com/syedhammad1/portfolio.git
cd portfolio
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production build

```bash
npm run build
npm start
```

The production server runs at [http://localhost:3000](http://localhost:3000) by default.

## Customize the Site

### Personal details and links

Edit `src/data/site.ts` to change the name, role, introduction, email, phone number, social profile URLs, portrait images, and resume link. Put local images under `public/` and reference them with root-relative paths such as `/img/me.png`. Put the resume PDF at the path configured in `site.resume.href`.

### Projects

Edit the `projects` array in `src/data/projects.ts`. Each project can include a summary, longer description, highlights, technology tags, a public link, and gallery media. Add local screenshots under `public/works/<project>/` and reference them as `/works/<project>/1.png`, or use Cloudinary URLs. The first gallery image is used as the card cover. Projects without a public link are shown as private.

### Articles

Edit `mediumArticles` in `src/data/articles.ts` to change the cards shown on `/shelf`. Each card links directly to its Medium article; update its title, teaser, topic, read time, and URL there.

## Project Structure

```text
src/
	app/                 Next.js routes: home, portfolio, and shelf
	components/          Shared page sections and UI components
	data/                Site details, project entries, and article entries
		articles/          HTML content for local articles
public/
	img/                 Site images
	pdf/                 Resume PDF
```

## Deployment

Deploy the repository to a host that supports Next.js, such as Vercel. Connect the Git repository, use the default Next.js build settings, and deploy. No environment variables are required by the current site configuration.