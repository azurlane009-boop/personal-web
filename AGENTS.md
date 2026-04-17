# Agent Guide

## Muc tieu

Du an nay uu tien mot workflow de nguoi va AI agent co the cung chinh sua nhanh:

- Noi dung tap trung trong `src/data/site-content.js`
- HTML cua tung section duoc render tai `src/scripts/render.js`
- Theme token nam trong `src/styles/tokens.css`
- Layout va responsive nam trong `src/styles/layout.css`

## Cach lam viec an toan

1. Neu chi sua copy, thong tin lien he, du an, ky nang:
   - Chi can sua `src/data/site-content.js`
2. Neu them hoac xoa section:
   - Sua `render.js`
   - Bo sung style can thiet trong `layout.css`
3. Neu chi doi mau hoac khoang cach:
   - Uu tien sua `tokens.css` truoc

## Nguyen tac

- Giu website o dang 1 trang, noi dung ngan, de quet
- Moi section phai ho tro muc tieu quang ba ban than
- Uu tien mobile va toc do tai
- Han che hard-code text ngoai `site-content.js`, tru cac label co tinh cau truc

## Viec nen lam tiep

- Thay du lieu mau bang thong tin that cua chu website
- Them anh dai dien va preview du an
- Gan domain, analytics va form lien he neu can
