# PersonalWeb

Bo khung website ca nhan 1 trang de quang ba ban than, trinh bay du an va tao diem lien he ro rang.

## Muc tieu

- Chay ngay bang cach mo `index.html`
- Khong phu thuoc build tool hay package manager
- Tach `content`, `render`, `style` de AI agent de sua

## Cau truc thu muc

```text
PersonalWeb/
|- index.html
|- AGENTS.md
|- README.md
|- src/
   |- data/
   |  |- site-content.js
   |- scripts/
   |  |- app.js
   |  |- render.js
   |- styles/
      |- tokens.css
      |- base.css
      |- layout.css
```

## Sua nhanh

- Doi ten, mo ta, du an, social: sua trong `src/data/site-content.js`
- Doi bo cuc section: sua trong `src/scripts/render.js`
- Doi mau, spacing, radius: sua trong `src/styles/tokens.css`
- Doi giao dien chi tiet: sua trong `src/styles/layout.css`

## Goi y mo rong

- Them anh that vao `assets/` va gan trong `render.js`
- Tach them section `Testimonials`, `Case Studies`, `Blog`
- Neu can framework sau nay, co the nang cap tu scaffold nay len Vite/Next ma van giu data shape hien tai

## Deploy len GitHub Pages

Du an nay da duoc chuan bi san workflow tai `.github/workflows/pages.yml` de deploy len GitHub Pages bang GitHub Actions.

1. Tao mot repo GitHub moi va push toan bo source len nhanh `main`
2. Vao `Settings` -> `Pages`
3. O muc `Build and deployment`, chon `Source` la `GitHub Actions`
4. Sau khi push len `main`, workflow `Deploy GitHub Pages` se tu chay
5. Sau khi deploy xong, site se co URL dang:
   `https://<github-username>.github.io/<repo-name>/`

Luu y:

- Website nay dang dung route bang `hash` nhu `#home`, `#blog`, `#post/...`, nen phu hop de host tren GitHub Pages ma khong can server-side routing.
- File `.nojekyll` da duoc them de GitHub Pages phuc vu file static dung nhu mong muon.

Tai lieu GitHub Pages:

- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
