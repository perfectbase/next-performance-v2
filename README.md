# Next.js Performance Examples

This repo contains a series of examples of how to improve navigation performance in Next.js.

## main

The main branch is the initial app structure. It is a simple dashboard app where most pages require signin. The dynamic data is fetched from server components and wrapped with Suspense. It shows that just wrapping your dynamic components with Suspense is not enough to make the page navigation fast.

## 1-loading.tsx

- [PR](https://github.com/perfectbase/next-performance-v2/pull/1)
- [URL](https://next-performance-v2-git-1-loadingtsx-perfectbases-projects.vercel.app)

This example shows that adding a `loading.tsx` to each page can make the page navigation feel instant. Except for programmatic navigation where Next.js can't prefetch the link. It does not offer the best DX, as you also need to add the static part of the page to the skeleton.

## 2-ppr

- [PR](https://github.com/perfectbase/next-performance-v2/pull/2)
- [URL](https://next-performance-v2-git-2-ppr-perfectbases-projects.vercel.app)

This example has Partial Prerendering enabled. With it we can get the same performance as the 1-loading.tsx branch, but without the need to create a `loading.tsx` file. The part outside of the `Suspense` will work like the `loading.tsx` file.

## 3-prefetching

- [PR](https://github.com/perfectbase/next-performance-v2/pull/3)
- [URL](https://next-performance-v2-git-3-prefetch-perfectbases-projects.vercel.app)

This example uses manual prefetching to also achieve fast navigation on programmatic navigation, so that the navigation from the table row click also feels instant.

## 4-server-cache

- [PR](https://github.com/perfectbase/next-performance-v2/pull/4)
- [URL](https://next-performance-v2-git-4-server-cache-perfectbases-projects.vercel.app)

This example caches the dynamic data so that we can have instant navigation without any loading skeletons, offering the fastest navigation experience.

## 5-link-status

- [PR](https://github.com/perfectbase/next-performance-v2/pull/5)
- [URL](https://next-performance-v2-git-5-link-status-perfectbases-projects.vercel.app)

This example takes a different approach. Instead of making the navigation faster, it just uses the navigation state to give some instant feedback to the user while the page is loading.

## 6-client-cache

- [PR](https://github.com/perfectbase/next-performance-v2/pull/6)
- [URL](https://next-performance-v2-git-6-client-cache-perfectbases-projects.vercel.ap)

This example enables client-side caching, so that the pages that were recently visited are cached and can be shown instantly.

## 7-edge-runtime

- [PR](https://github.com/perfectbase/next-performance-v2/pull/7)
- [URL](https://next-performance-v2-git-7-edge-runtime-perfectbases-projects.vercel.app)

This example sets all pages to run on the edge runtime, which is smaller than the default Node.js runtime. It can improve the time for the server to respond to the request, but it does not support all Node.js features and can lead to unexpected issues with some libraries.

## 8-react-router

- [PR](https://github.com/perfectbase/next-performance-v2/pull/8)
- [URL](https://next-performance-v2-git-8-react-router-perfectbases-projects.vercel.app)

This example opts out of the default Next.js routing system and uses React Router instead. It will load all your pages as a single page app, so you will have instant navigation to all pages (even for programmatic navigations). It can make your initial page load slower, especially for large apps with many pages. Your development environment will also need to compile all pages, which can make the development experience slower. You can implement lazy loading, but then you might re-introduce the slow navigation experience.

## 9-client-components-only

- [PR](https://github.com/perfectbase/next-performance-v2/pull/9)
- [URL](https://next-performance-v2-git-9-client-c-12b711-perfectbases-projects.vercel.app)

This example makes all pages client components, loading the dynamic data with TanStack Query, so all pages are considered static. It will make the navigation feel instant for most pages, but pages with dynamic routes (like /cards/[id]) will still be considered dynamic and will have a slower navigation experience.

## 10-pages-router

- [PR](https://github.com/perfectbase/next-performance-v2/pull/10)
- [URL](https://next-performance-v2-git-10-pages-router-perfectbases-projects.vercel.app)

This example migrates the frontend from the App Router to the Pages Router. As long as you don't use SSR features, most of the app navigation will feel instant. Although programmatic navigation will still need to be prefetched if you want to achieve the same performance.

# Local Setup

```bash
git clone https://github.com/perfectbase/next-performance-v2.git
cd next-performance-v2
npm install ## or pnpm/bun/yarn
npm run dev
```
