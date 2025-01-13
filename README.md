# countryna.me
[![Site](https://img.shields.io/badge/Visit%20the%20site-purple?logo=firefox)](https://countryna.me)
[![Build Status](https://img.shields.io/github/actions/workflow/status/vlsts/countryname/fe-docker-publish.yml?logo=githubactions)](https://github.com/vlsts/countryname/actions)
[![Bun](https://img.shields.io/badge/Runtime-Bun-pink?logo=bun)](https://bun.sh)
[![SvelteKit](https://img.shields.io/badge/Framework-SvelteKit-orange?logo=svelte)](https://kit.svelte.dev)
[![Flowbite](https://img.shields.io/badge/UI-Flowbite%20Svelte-orange)](https://flowbite-svelte.com)
[![TailwindCSS](https://img.shields.io/badge/CSS-Tailwind-blue?logo=tailwindcss)](https://tailwindcss.com)
[![Docker](https://img.shields.io/badge/Containerization-Docker-black?logo=docker)](https://www.docker.com)
[![GitHub Pages](https://img.shields.io/badge/Hosting-GitHub%20Pages-black?logo=github)](https://pages.github.com)
[![GitHub Actions](https://img.shields.io/badge/CI/CD-GitHub%20Actions-black?logo=github)](https://github.com/features/actions)
[![Namecheap](https://img.shields.io/badge/Registrar-Namecheap-orange?logo=namecheap)](https://namecheap.com)

`countryna.me` is a tiny web project that uses the [restcountries](https://restcountries.com/) API to display various info about countries.

# Features ⭐
- Country list
- Searching through countries
- Country details
- Navigation
- Application Info page
- Contact page

# Stack used 🖥️
## Frontend 🌐
- [Svelte & Sveltekit](https://svelte.dev/) for the web framework
- [Flowbite Svelte](https://flowbite-svelte.com/) for the components and icons
- [Tailwind CSS](https://tailwindcss.com) for easy styling.
- [bun](https://bun.sh) as the package manager and runner

## DevOps / Architecture 🤖
- [Docker](https://www.docker.com/) for containerizing the app
- GitHub actions to automatically publish both the site and the Docker image
- Github pages to deploy the static site
- [Namecheap](https://namecheap.com) as the domain registrar

# How to build / use the app 🔨
## Docker method 1 🐳

You can simply build the docker image with `docker build .` and run the container by changing the exposed port (or not).

## Docker method 2 🐳
This image is published on the Github Package Registry. You can run it directly without building it.
```
docker run -d \
  --name countryname \
  -p 80:80 \
  ghcr.io/vlsts/countryname:latest
```

## Manually running the application 👷
### Dependencies: nodejs (latest LTS), a package manager (preferably bun)
The commands below use [bun](https://bun.sh), it should be pretty similar for npm / pnpm / yarn, etc.

1. Install the project dependencies with `bun i`
2. If you want to run the project run `bun run dev`, if you want to build the project run `bun run build` and the files should be in `build`.* You can then use Vercel's [serve](https://github.com/vercel/serve) or some other way to serve the files. (Check the Dockerfile for an example of how to serve the page)

*: The build has a 404.html file that's specially named like that for Github pages. you can tweak that manually or by modifying the fallback name in `svelte.config.js`.