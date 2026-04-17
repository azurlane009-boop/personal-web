import { siteContent } from "../data/site-content.js";
import { renderHomePage, renderPostsPage, renderPostDetailPage } from "./render.js";

const app = document.querySelector("#app");
const footerLinks = document.querySelector("#footer-links");
const yearNode = document.querySelector("#year");
const brandMark = document.querySelector("#brand-mark");
const brandName = document.querySelector("#brand-name");
const brandRole = document.querySelector("#brand-role");
const footerName = document.querySelector("#footer-name");
const descriptionMeta = document.querySelector('meta[name="description"]');
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

function getScrollBehavior() {
  return prefersReducedMotion.matches ? "auto" : "smooth";
}

function syncChrome() {
  if (brandMark) {
    brandMark.textContent = siteContent.profile.mark;
  }

  if (brandName) {
    brandName.textContent = siteContent.profile.name;
  }

  if (brandRole) {
    brandRole.textContent = siteContent.profile.role;
  }

  if (footerName) {
    footerName.textContent = siteContent.profile.name;
  }

  if (footerLinks) {
    footerLinks.innerHTML = siteContent.contact.socials
      .map(
        (social) =>
          `<a href="${social.href}" target="_blank" rel="noreferrer" aria-label="${social.label} (mở trong tab mới)" translate="no">${social.label}</a>`
      )
      .join("");
  }

  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }
}

function updateSeo(title, description) {
  document.title = title || siteContent.seo.title;

  if (descriptionMeta) {
    descriptionMeta.setAttribute("content", description || siteContent.seo.description);
  }
}

function renderRoute() {
  if (!app) {
    return;
  }

  const hash = window.location.hash || "#home";

  if (hash === "#home" || hash === "#" || hash === "") {
    app.innerHTML = renderHomePage(siteContent);
    updateSeo(siteContent.seo.title, siteContent.seo.description);
    window.scrollTo({ top: 0, behavior: "auto" });
    app.focus();
    return;
  }

  if (hash === "#blog") {
    app.innerHTML = renderPostsPage(siteContent);
    updateSeo(`Bài đăng | ${siteContent.profile.name}`, "Những bài viết về công việc, kỹ thuật và đời sống của Trần Thế Bảo.");
    window.scrollTo({ top: 0, behavior: "auto" });
    app.focus();
    return;
  }

  if (hash.startsWith("#post/")) {
    const slug = hash.replace("#post/", "");
    const post = siteContent.posts.items.find((item) => item.slug === slug);
    app.innerHTML = renderPostDetailPage(siteContent, post);
    updateSeo(
      post ? `${post.title} | ${siteContent.profile.name}` : `Không tìm thấy bài viết | ${siteContent.profile.name}`,
      post ? post.excerpt : siteContent.seo.description
    );
    window.scrollTo({ top: 0, behavior: "auto" });
    app.focus();
    return;
  }

  app.innerHTML = renderHomePage(siteContent);
  updateSeo(siteContent.seo.title, siteContent.seo.description);

  const sectionId = hash.replace("#", "");
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: getScrollBehavior(), block: "start" });
    return;
  }

  window.scrollTo({ top: 0, behavior: "auto" });
  app.focus();
}

syncChrome();
renderRoute();
window.addEventListener("hashchange", renderRoute);
