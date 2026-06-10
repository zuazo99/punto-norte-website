# Punto Norte — Website

Sitio web del local Punto Norte. Incluye página de inicio y sección de eventos (listado y detalle), con Contentful como CMS headless y despliegue continuo en Vercel.

## Stack

| Capa | Tecnología |
|---|---|
| Framework | [Astro 6](https://astro.build) — output estático con páginas SSR on-demand vía `prerender = false` |
| UI / Islands | [React 18](https://react.dev) para componentes interactivos |
| Estilos | [Tailwind CSS v3](https://tailwindcss.com) + tipografía fluida |
| Carrusel | [Swiper 12](https://swiperjs.com) |
| Mapa | [Leaflet](https://leafletjs.com) |
| CMS | [Contentful](https://www.contentful.com) vía GraphQL (`src/lib/queries.ts`) |
| Imágenes | [Sharp](https://sharp.pixelplumbing.com) (procesado interno de Astro) |
| Despliegue | [Vercel](https://vercel.com) — adapter serverless |

## Requisitos

- Node.js **≥ 22.12.0** (requerido por Astro 6)
- npm **≥ 9.6.5**

## Variables de entorno

Copia `.env.example` a `.env` y rellena los valores de tu espacio Contentful:

```bash
cp .env.example .env
```

| Variable | Descripción |
|---|---|
| `CONTENTFUL_SPACE_ID` | ID del espacio Contentful |
| `CONTENTFUL_DELIVERY_TOKEN` | Token de la Content Delivery API (producción) |
| `CONTENTFUL_PREVIEW_TOKEN` | Token de la Content Preview API (desarrollo) |

En desarrollo se usa `CONTENTFUL_PREVIEW_TOKEN`; en producción `CONTENTFUL_DELIVERY_TOKEN`.

## Instalación y desarrollo

```bash
npm install
npm run dev        # servidor en http://localhost:3000
```

## Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo en `localhost:3000` |
| `npm run build` | Genera el sitio de producción en `./dist/` |
| `npm run preview` | Previsualiza el build localmente |
| `npm run format` | Formatea código con Prettier |
| `npm run clean` | Elimina `node_modules` y el output de build |
| `npm run astro ...` | CLI de Astro (`astro check`, `astro add`, etc.) |

## Estructura del proyecto

```
src/
├── assets/          # Iconos SVG y recursos estáticos
├── components/      # Componentes Astro y React
│   └── events/      # Componentes específicos de eventos (mapa, carrusel, etc.)
├── layouts/         # Layouts base de página
├── lib/
│   └── queries.ts   # Funciones de fetch a la API GraphQL de Contentful
├── pages/
│   ├── index.astro  # Página de inicio (estática)
│   └── events/
│       └── [id].astro  # Detalle de evento (SSR — prerender = false)
├── styles/          # CSS global y tema Tailwind
└── types.ts         # Tipos TypeScript compartidos
```

## Despliegue en Vercel

El despliegue es automático al hacer push a `main`. Vercel detecta el adapter y construye el proyecto.

Configura las variables de entorno en el dashboard de Vercel:
**Project → Settings → Environment Variables** → añade `CONTENTFUL_SPACE_ID`, `CONTENTFUL_DELIVERY_TOKEN` y `CONTENTFUL_PREVIEW_TOKEN`.

## Seguridad de dependencias

```bash
npm audit          # revisa vulnerabilidades
npm audit fix      # aplica correcciones automáticas
```

Mantén las dependencias actualizadas periódicamente. Las versiones mínimas requeridas para estar libre de vulnerabilidades conocidas están fijadas en `package.json > overrides`.
