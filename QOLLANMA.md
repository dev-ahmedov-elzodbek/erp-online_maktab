# O'quv Markaz — ERP Tizimi Foydalanish Qo'llanmasi

## 📋 Mundarija

1. [Tizim haqida](#tizim-haqida)
2. [Tizimga kirish](#tizimga-kirish)
3. [Foydalanuvchi rollari](#foydalanuvchi-rollari)
4. [Super Admin paneli](#super-admin-paneli)
5. [Admin paneli](#admin-paneli)
6. [Talaba (Student) paneli](#talaba-paneli)
7. [Umumiy sayt](#umumiy-sayt)
8. [Texnik ma'lumotlar](#texnik-malumotlar)

---

## Tizim haqida

O'quv Markaz ERP — bu o'quv markazlarini boshqarish uchun yaratilgan to'liq tizim. Tizim quyidagi imkoniyatlarni beradi:

- Talabalar, o'qituvchilar va guruhlarni boshqarish
- Dars jadvali va davomat tizimi
- Moliyaviy hisobotlar va to'lovlar
- Online ta'lim platformasi (talabalar uchun)
- Kurslar katalogi va sertifikatlar

---

## Tizimga kirish

### Ro'yxatdan o'tish (yangi foydalanuvchilar)

1. `/register` sahifasiga o'ting
2. Quyidagi ma'lumotlarni kiriting:
   - **Ism** va **Familiya** (kamida 2 ta belgi)
   - **Email** (to'g'ri formatda: `ism@example.uz`)
   - **Telefon raqam** (`+998` dan keyin 9 raqam)
   - **Parol** (kamida 8 ta belgi, harf va raqam aralash)
   - Parolni tasdiqlang
3. "Foydalanish shartlari"ga rozilik bildiring
4. "Ro'yxatdan o'tish" tugmasini bosing
5. Muvaffaqiyatli bo'lsa — avtomatik **Talaba paneliga** yo'naltirilasiz

> ⚠️ Ro'yxatdan o'tgan foydalanuvchilar **student** (talaba) roli bilan yaratiladi.

### Tizimga kirish (mavjud foydalanuvchilar)

1. `/login` sahifasiga o'ting
2. **Email** yoki **telefon raqam** va **parol** kiriting
3. "Kirish" tugmasini bosing
4. Tizim rolingizga qarab avtomatik yo'naltiradi:
   - `admin` yoki `super_admin` → Admin panel (`/admin`)
   - `student` → Talaba panel (`/student`)

### Test hisoblar

| Rol | Email | Parol |
|-----|-------|-------|
| Super Admin | `super_admin@oquv.uz` | `SuperAdmin123` |
| Admin | `admin@oquv.uz` | `Admin123` |
| O'qituvchi | `teacher@oquv.uz` | `Teacher123` |
| Talaba | `student@oquv.uz` | `Student123` |

---

## Foydalanuvchi rollari

### 1. Super Admin (`super_admin`)
- **Eng yuqori darajadagi** foydalanuvchi
- Barcha admin vazifalari + tizim sozlamalari
- Yangi admin va o'qituvchi yaratish huquqi
- Moliyaviy hisobotlarga to'liq kirish
- Foydalanuvchi rollarini boshqarish

### 2. Admin (`admin`)
- O'quv markaz kundalik boshqaruvi
- Talabalar, guruhlar, o'qituvchilarni boshqarish
- Dars jadvali va davomat tizimi
- To'lovlar va moliya bo'limi
- Hisobotlar va statistika

### 3. O'qituvchi (`teacher`)
- O'z guruhlarini ko'rish
- Davomat belgilash
- Baho qo'yish
- O'z profilini boshqarish

### 4. Talaba (`student`)
- Online kurslarni ko'rish va o'rganish
- Test va topshiriqlarni bajarish
- Natijalar va sertifikatlarni ko'rish
- To'lov tarixi
- Profil sozlamalari

---

## Super Admin paneli

Super Admin barcha admin funksiyalariga ega bo'lib, qo'shimcha ravishda:

### Tizim boshqaruvi
- **Foydalanuvchilar** — barcha foydalanuvchilarni ko'rish, rol o'zgartirish
- **Sozlamalar** — tizim sozlamalari (til, vaqt mintaqasi)
- **Hisobotlar** — batafsil moliyaviy hisobotlar

### Xavfsizlik
- Aktiv sessiyalarni boshqarish
- Foydalanuvchi hisoblarini bloklash/faollashtirish

> Super Admin paneli admin panel bilan bir xil interfeysda ishlaydi (`/admin`), lekin qo'shimcha huquqlar mavjud.

---

## Admin paneli

Admin panelga `/admin` manzilidan kiriladi.

### Sidebar navigatsiya

#### ASOSIY bo'lim
| Sahifa | Tavsif |
|--------|--------|
| **Dashboard** | Umumiy statistika, daromad grafigi, bugungi darslar, so'nggi talabalar va to'lovlar |
| **Talabalar** (124) | Barcha talabalar ro'yxati, qidirish, filtrlash, profil ko'rish |
| **O'qituvchilar** | O'qituvchilar ro'yxati va profillari |
| **Guruhlar** | Guruhlar ro'yxati, yangi guruh yaratish, guruh tafsilotlari |
| **Jadval** | Haftalik dars jadvali, xonalar holati |
| **Davomat** | Kunlik davomat belgilash, statistika |
| **Baholar** | Talabalar baholarini boshqarish |

#### MOLIYA bo'lim
| Sahifa | Tavsif |
|--------|--------|
| **To'lovlar** (3) | To'lov tarixi, yangi to'lov qabul qilish |
| **Moliya** | Daromad/xarajat hisobotlari, KPI ko'rsatkichlari |

#### ALOQA bo'lim
| Sahifa | Tavsif |
|--------|--------|
| **Xabarlar** (12) | Ichki xabar almashish tizimi |
| **Hisobotlar** | Batafsil hisobotlar yaratish va yuklash |

#### TIZIM bo'lim
| Sahifa | Tavsif |
|--------|--------|
| **Sozlamalar** | Tizim sozlamalari |

### Dashboard tafsilotlari

Dashboard'da quyidagi ma'lumotlar ko'rsatiladi:

1. **KPI kartalar** — Faol talabalar (124), Aktiv guruhlar (18), Oylik daromad (86.4M), O'rtacha davomat (87%)
2. **Daromad statistikasi** — 12 oylik grafik, jami daromad
3. **Bugungi darslar** — Bugungi kun uchun dars jadvali
4. **Talabalar o'sishi** — 12 oylik bar grafik
5. **So'nggi talabalar** — Oxirgi qo'shilgan talabalar jadvali
6. **So'nggi to'lovlar** — Oxirgi to'lovlar jadvali

### Talabalar boshqaruvi

- **Ro'yxat ko'rish** — barcha talabalar jadvali (ism, guruh, to'lov holati, davomat)
- **Qidirish** — ism, email, ID bo'yicha qidirish
- **Profil** — talabaning to'liq ma'lumotlari (shaxsiy, ota-ona, o'quv)
- **Filtrlash** — guruh, to'lov holati, status bo'yicha

### Guruhlar boshqaruvi

- **Ro'yxat** — barcha guruhlar (nomi, kurs, o'qituvchi, talabalar soni)
- **Yangi guruh** — yangi guruh yaratish formasi
- **Tafsilot** — guruh a'zolari, davomat, statistika

### Jadval

- **Haftalik ko'rinish** — dushanba-shanba, soat bo'yicha
- **Xonalar holati** — qaysi xona band/bo'sh

---

## Talaba paneli

Talaba paneliga `/student` manzilidan kiriladi.

### Sidebar navigatsiya

#### ONLINE TA'LIM bo'lim
| Sahifa | Tavsif |
|--------|--------|
| **Dashboard** | Faol kurslar, statistika, haftalik maqsad, tavsiyalar |
| **Mening kurslarim** | Davom etayotgan va tugallangan kurslar |
| **Kurslar katalogi** | Barcha mavjud kurslar, qidirish, filtrlash |
| **Natijalarim** | Test va topshiriq natijalari jadvali |
| **Sertifikatlarim** | Olingan va kutilayotgan sertifikatlar |

#### HISOB bo'lim
| Sahifa | Tavsif |
|--------|--------|
| **Profil** | Shaxsiy va kasbiy ma'lumotlar |
| **To'lovlar** | To'lov tarixi va karta boshqaruvi |
| **Sozlamalar** | Profil, bildirishnomalar, xavfsizlik, til |

### Dashboard tafsilotlari

1. **Salomlash** — "Salom, [Ism]! 👋" va motivatsion xabar
2. **Hero banner** — Davom etayotgan kurs (progress, darsni davom ettirish tugmasi)
3. **Statistika** — 4 ta karta (faol kurslar, o'rganilgan soat, tugallangan, sertifikatlar)
4. **Faol kurslarim** — 4 ta kurs kartasi (rasm, progress bar, davom ettirish)
5. **Haftalik maqsad** — Streak kunlari, soat maqsadi
6. **Tavsiya etilgan kurslar** — 4 ta yangi kurs taklifi

### Mening kurslarim

- **Davom etayotgan kurslar** — progress bar, darslar soni, "Davom ettirish" tugmasi
- **Tugallangan kurslar** — yakuniy baho, "Sertifikatni yuklash" tugmasi
- **Yangi kurs qo'shish** — katalogga yo'naltiruvchi karta

### Kurslar katalogi

- **Qidirish** — kurs nomi bo'yicha
- **Filtrlash** — kategoriya, daraja, saralash
- **Kurs kartasi** — rasm, kategoriya, o'qituvchi, rating, narx
- **Batafsil** — kurs tafsiloti sahifasiga o'tish
- **Sotib olish** — to'lov sahifasiga o'tish

### Kurs tafsiloti

3 ta tab:
- **Tavsif** — kurs haqida, nimalarni o'rganasiz (checkmark ro'yxat)
- **Dastur** — modullar accordion (ochiladi/yopiladi)
- **O'qituvchi** — o'qituvchi profili, tajriba, bio

O'ng panel: narx, xususiyatlar, "Sotib olish" tugmasi

### To'lov sahifasi

- **To'lov usuli** — Payme / Click / Plastik karta (radio tanlash)
- **Karta ma'lumotlari** — karta raqami, muddat, CVV
- **Buyurtma xulosasi** — kurs, narx, chegirma, jami

### Natijalarim

- **Statistika** — o'rtacha natija, yechilgan testlar, o'tilgan, eng yuqori ball
- **Jadval** — test nomi, kurs, sana, natija (rangli %), holat (O'tdi / Qayta topshirish)

### Sertifikatlarim

- **Olingan sertifikatlar** — kurs nomi, berilgan sana, baho, ID, Ko'rish/Yuklash tugmalari
- **Kutilayotgan** — kurs nomi, progress bar, "Davom ettirish" tugmasi

### Profil

- Shaxsiy ma'lumotlar (ism, familiya, tug'ilgan sana, email, telefon, manzil)
- Kasbiy ma'lumotlar (yo'nalish, daraja, maqsad, GitHub, LinkedIn)
- Kurslar ro'yxati
- Hisob holati

### Sozlamalar

4 ta bo'lim:
- **Profil** — rasm o'zgartirish, shaxsiy ma'lumotlar formasi, Talaba ID
- **Bildirishnomalar** — 5 ta toggle (dars, baho, to'lov, imtihon, yangiliklar)
- **Xavfsizlik** — parol o'zgartirish, aktiv sessiyalar
- **Til va mintaqa** — interfeys tili, vaqt mintaqasi, qorong'u rejim

---

## Umumiy sayt

Umumiy sayt (public) `/` manzilidan barchaga ochiq.

### Sahifalar

| Sahifa | Manzil | Tavsif |
|--------|--------|--------|
| Bosh sahifa | `/` | Hero, kurslar, o'qituvchilar, testimoniallar, FAQ |
| Kurslar | `/kurslar` | Barcha kurslar katalogi |
| Kurs tafsiloti | `/kurslar/:slug` | Bitta kursning to'liq ma'lumotlari |
| O'qituvchilar | `/oqituvchilar` | O'qituvchilar ro'yxati |
| Narxlar | `/narxlar` | 3 ta tarif rejasi, chegirmalar, solishtirish |
| Blog | `/blog` | Maqolalar ro'yxati |
| Maqola | `/blog/:slug` | Bitta maqola |
| FAQ | `/faq` | Ko'p beriladigan savollar (qidiruv + kategoriya) |
| Biz haqimizda | `/biz-haqimizda` | Tarix, missiya, jamoa, yutuqlar |
| Aloqa | `/aloqa` | Aloqa formasi, xarita, telefon |

---

## Texnik ma'lumotlar

### Texnologiyalar

| Texnologiya | Versiya | Maqsad |
|------------|---------|--------|
| React | 19 | Frontend framework |
| TypeScript | 5 | Tip xavfsizligi |
| Vite | 6 | Build tool |
| Tailwind CSS | 4 | Styling |
| shadcn/ui | — | UI komponentlar |
| React Router | 7 | Routing |
| Zustand | 5 | State management |
| Axios | 1.18 | HTTP so'rovlar |
| Recharts | 3 | Grafiklar |
| React Hook Form | 7 | Form boshqaruvi |
| Zod | 4 | Validatsiya |

### Backend API

- **Server**: `http://3.90.217.113/api/v1`
- **Autentifikatsiya**: JWT (access + refresh token)
- **Framework**: NestJS + Prisma + PostgreSQL

### Loyihani ishga tushirish

```bash
# Bog'liqliklarni o'rnatish
npm install

# Dev server ishga tushirish
npm run dev

# Production build
npm run build

# Build natijasini ko'rish
npm run preview
```

### Papka tuzilmasi

```
src/
├── components/          # Qayta ishlatiluvchi komponentlar
│   ├── admin/          # Admin sidebar, topbar
│   ├── auth/           # Login/Register shell, private route
│   ├── site/           # Header, footer, logo
│   ├── student/        # Student sidebar, topbar
│   └── ui/             # shadcn/ui komponentlar
├── layouts/            # Admin, Student, Site layoutlar
├── lib/                # API, data, utils
├── pages/              # Sahifalar
│   ├── admin/          # Admin panel sahifalari
│   └── student/        # Talaba panel sahifalari
├── stores/             # Zustand store'lar
└── App.tsx             # Routing
```

### Xavfsizlik

- JWT tokenlar `localStorage`da saqlanadi
- Access token muddati: 15 daqiqa
- Refresh token muddati: 7 kun
- Token muddati tugasa avtomatik yangilanadi
- Protected route'lar — faqat ruxsat berilgan rollar kiradi
- Parol — kamida 8 belgi, harf + raqam

---

*O'quv Markaz ERP Tizimi — © 2025-2026*
