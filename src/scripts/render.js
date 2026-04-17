const renderList = (items, className, formatter) =>
  `<div class="${className}">${items.map(formatter).join("")}</div>`;

const renderPostCards = (posts, limit) => {
  const visiblePosts = typeof limit === "number" ? posts.slice(0, limit) : posts;

  return visiblePosts
    .map(
      (post) => `
        <article class="content-card post-card">
          <p class="post-category">${post.category}</p>
          <h3>${post.title}</h3>
          <p>${post.excerpt}</p>
          <a class="project-link" href="#post/${post.slug}">Đọc bài viết</a>
        </article>
      `
    )
    .join("");
};

export function renderHomePage(content) {
  const projects = content.projects.items.filter((project) => project.name && project.name !== "Khong co");

  return `
    <section class="hero section">
      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">${content.hero.eyebrow}</p>
          <h1>${content.hero.title}</h1>
          <p class="lead">${content.hero.description}</p>
          <div class="tab-bar" aria-label="Hero navigation">
            <a class="tab is-active" href="#projects">Dự án</a>
            <a class="tab" href="#life">Đời sống</a>
            <a class="tab" href="#blog">Bài đăng</a>
          </div>
          <div class="actions">
            <a class="button button-primary" href="${content.hero.primaryCta.href}">${content.hero.primaryCta.label}</a>
            <a class="button button-secondary" href="${content.hero.secondaryCta.href}">${content.hero.secondaryCta.label}</a>
          </div>
          ${renderList(
            content.hero.highlights,
            "bullet-list",
            (item) => `<div class="bullet-item"><span></span><p>${item}</p></div>`
          )}
        </div>
        <aside class="hero-panel">
          <div class="gradient-stage" aria-hidden="true">
            <div class="gradient-orb orb-green"></div>
            <div class="gradient-orb orb-yellow"></div>
            <div class="gradient-orb orb-purple"></div>
            <div class="gradient-orb orb-pink"></div>
            <div class="stage-card stage-primary">
              <p class="panel-label">PROFILE PANEL</p>
              <h2>Tôi thích những sản phẩm có chiều sâu, hoạt động ổn định và được xây bằng một tư duy đủ rõ ràng.</h2>
            </div>
            <div class="stage-card stage-secondary">
              <p class="panel-label">CURRENT FOCUS</p>
              <p>Mobile iOS là nền tảng xuất phát. Backend Python là hướng tôi đang đầu tư nhiều hơn ở hiện tại.</p>
            </div>
          </div>
          <div class="stats-grid">
            ${content.hero.stats
              .map(
                (item) => `
                  <div class="stat-card">
                    <strong>${item.value}</strong>
                    <span>${item.label}</span>
                  </div>
                `
              )
              .join("")}
          </div>
        </aside>
      </div>
    </section>

    <section class="section" id="about">
      <div class="container section-heading">
        <p class="section-kicker">Giới thiệu</p>
        <h2>${content.about.title}</h2>
      </div>
      <div class="container about-grid">
        <div class="about-copy">
          ${content.about.text.map((paragraph) => `<p>${paragraph}</p>`).join("")}
        </div>
        ${renderList(
          content.about.cards,
          "card-grid",
          (card) => `
            <article class="content-card">
              <h3>${card.title}</h3>
              <p>${card.description}</p>
            </article>
          `
        )}
      </div>
    </section>

    <section class="section section-alt" id="life">
      <div class="container section-heading">
        <p class="section-kicker">Đời sống</p>
        <h2>${content.life.title}</h2>
      </div>
      <div class="container life-grid">
        <div class="about-copy">
          <p>${content.life.intro}</p>
        </div>
        <div class="card-grid">
          ${content.life.items
            .map(
              (item) => `
                <article class="content-card">
                  <h3>${item.title}</h3>
                  <p>${item.description}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section" id="services">
      <div class="container section-heading">
        <p class="section-kicker">Công việc</p>
        <h2>${content.services.title}</h2>
      </div>
      <div class="container card-grid card-grid-three">
        ${content.services.items
          .map(
            (item) => `
              <article class="content-card">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="section section-alt" id="work-style">
      <div class="container section-heading">
        <p class="section-kicker">Cách làm việc</p>
        <h2>${content.workStyle.title}</h2>
      </div>
      <div class="container bullet-list bullet-list-large">
        ${content.workStyle.items
          .map(
            (item) => `
              <article class="bullet-panel">
                <span></span>
                <p>${item}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="section" id="projects">
      <div class="container section-heading">
        <p class="section-kicker">Selected Work</p>
        <h2>${content.projects.title}</h2>
      </div>
      <div class="container project-list">
        ${projects
          .map(
            (project, index) => `
              <article class="project-card">
                <div class="project-meta">
                  <span>0${index + 1}</span>
                  <p>${project.role}</p>
                </div>
                <div class="project-body">
                  <h3>${project.name}</h3>
                  <p>${project.summary}</p>
                  <div class="tag-row">
                    ${project.stack.map((item) => `<span class="tag">${item}</span>`).join("")}
                  </div>
                  ${project.url ? `<a class="project-link" href="${project.url}" target="_blank" rel="noreferrer">Xem chi tiết</a>` : ""}
                </div>
                <p class="project-outcome">${project.outcome}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="section section-alt" id="posts-preview">
      <div class="container section-heading">
        <p class="section-kicker">Bài đăng</p>
        <h2>${content.posts.title}</h2>
      </div>
      <div class="container posts-head">
        <p class="posts-intro-text">${content.posts.intro}</p>
        <a class="button button-secondary" href="#blog">Xem tất cả bài viết</a>
      </div>
      <div class="container card-grid card-grid-three">
        ${renderPostCards(content.posts.items, 3)}
      </div>
    </section>

    <section class="section" id="skills">
      <div class="container section-heading">
        <p class="section-kicker">Kỹ năng</p>
        <h2>${content.skills.title}</h2>
      </div>
      <div class="container skill-groups">
        ${content.skills.groups
          .map(
            (group) => `
              <article class="skill-card">
                <h3>${group.name}</h3>
                <div class="tag-row">
                  ${group.items.map((item) => `<span class="tag">${item}</span>`).join("")}
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="section section-alt" id="differentiators">
      <div class="container section-heading">
        <p class="section-kicker">Điểm khác biệt</p>
        <h2>${content.differentiators.title}</h2>
      </div>
      <div class="container bullet-list bullet-list-large">
        ${content.differentiators.items
          .map(
            (item) => `
              <article class="bullet-panel">
                <span></span>
                <p>${item}</p>
              </article>
            `
          )
          .join("")}
      </div>
    </section>

    <section class="section contact-section" id="contact">
      <div class="container contact-card">
        <div class="contact-copy">
          <p class="section-kicker">Liên hệ</p>
          <h2>${content.contact.title}</h2>
          <p>${content.contact.description}</p>
        </div>
        <div class="contact-actions">
          <a class="contact-email" href="mailto:${content.contact.email}">${content.contact.email}</a>
          <div class="tag-row">
            ${content.contact.socials
              .map((social) => `<a class="tag tag-link" href="${social.href}" target="_blank" rel="noreferrer">${social.label}</a>`)
              .join("")}
          </div>
        </div>
      </div>
    </section>
  `;
}

export function renderPostsPage(content) {
  return `
    <section class="section page-hero">
      <div class="container page-hero-copy">
        <p class="eyebrow">Posts</p>
        <h1>${content.posts.pageTitle}</h1>
        <p class="lead">${content.posts.pageDescription}</p>
      </div>
    </section>

    <section class="section section-alt">
      <div class="container card-grid card-grid-three">
        ${renderPostCards(content.posts.items)}
      </div>
    </section>
  `;
}

export function renderPostDetailPage(content, post) {
  if (!post) {
    return `
      <section class="section page-hero">
        <div class="container page-hero-copy">
          <p class="eyebrow">404</p>
          <h1>Không tìm thấy bài viết</h1>
          <p class="lead">Bài viết bạn đang tìm có thể chưa được xuất bản hoặc đường dẫn không còn đúng.</p>
          <div class="actions">
            <a class="button button-primary" href="#blog">Quay lại danh sách bài viết</a>
            <a class="button button-secondary" href="#home">Về trang chủ</a>
          </div>
        </div>
      </section>
    `;
  }

  return `
    <article class="section post-detail">
      <div class="container post-header">
        <a class="back-link" href="#blog">← Tất cả bài viết</a>
        <p class="post-category">${post.category}</p>
        <h1>${post.title}</h1>
        <p class="lead">${post.excerpt}</p>
      </div>
      <div class="container post-body">
        ${post.body
          .map(
            (block) => `
              <section class="post-section">
                <h2>${block.heading}</h2>
                ${block.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("")}
              </section>
            `
          )
          .join("")}
      </div>
    </article>
  `;
}
