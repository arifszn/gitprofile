# Portfolio
![OscarHernandez-portfolio](https://github.com/user-attachments/assets/e284a42b-15c5-495c-99c7-ad5c1eb3bbe7)
![Deploy Status](https://img.shields.io/badge/Deploy-Vercel-black?style=flat&logo=vercel)

---

[Demo](https://oscarhernandez.vercel.app/)

[Astro Themes](https://astro.build/themes/details/dark-minimal/)

[ReactBits Showcase](https://www.reactbits.dev/showcase) 

The component `<LetterGlitch \>` was taken from [ReactBits.dev](https://www.reactbits.dev/)

## **Stack**  
### **Frontend**  
![Astro](https://img.shields.io/badge/Astro-FF5D01?logo=astro&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)

### **Tools**  
![Figma](https://img.shields.io/badge/Figma-F24E1E?logo=figma&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7B93E?logo=prettier&logoColor=black)
![Canva](https://img.shields.io/badge/Canva-c900c3?logo=canva&logoColor=white)

### **Show your favorite Spotify album (or your own)** ![Spotify](https://img.shields.io/badge/Spotify-06cc1a?logo=spotify&logoColor=white)
1. Choose your Spotify album
2. Access the share options
3. Select 'copy embed code'
```
<iframe src="https://open.spotify.com/embed/album/ALBUM_ID" style="border-radius:12px border:0;" class="w-full h-40" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
```
4. Insert the embed code on footer.astro

That's it!

## **Project structure**
```
public/
└── svg/
src/
├── Components/
|    ├── contact.astro
|    ├── footer.astro
|    ├── home.astro
|    ├── logoWall.astro
|    ├── nav.astro
|    └── projects.astro
├── layouts/
|    └── Layout.astro
├── React/
|    ├── LetterGlitch.tsx
|    ├── LikeButton.tsx
|    └── SkillsList.tsx
└── pages/
     └── index.astro
```

## **Local configuration** 
1. Clone the repo:  
```
git clone https://github.com/gothsec/portfolio
```
2. Install dependencies:
```  
npm install
```
3. Start the develpoment server:
```  
npm run dev
```

> **Important Notice:**  
> This project is licensed under the [MIT License](https://opensource.org/licenses/mit).  
> According to the license terms, any redistribution (including compiled or modified versions), you **must** retain the original copyright 
> notice and the full license text. Copyright © 2025 Oscar Hernandez. All rights reserved.
