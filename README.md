# TITANIA Pulse · Next.js

Versión lista para repositorio del explorador socioterritorial TITANIA Pulse.

## Incluye

- Resumen ejecutivo y ficha visual del estudio.
- Resultados oficiales ponderados y bases por segmento.
- 1.255 transcripciones anonimizadas con búsqueda, filtros y exportación.
- Nube de palabras, conceptos y grafo de coocurrencias.
- Cruces completos por género, edad y cercanía industrial.
- Vista gráfica animada, tablas clásicas y descarga CSV.
- Hallazgos trazables, territorio contextual y seis entregables.
- Diseño responsive y soporte para movimiento reducido.

## Desarrollo local

```bash
npm ci
npm run dev
```

Abre `http://localhost:3000`.

## Compilación

```bash
npm run typecheck
npm run build
```

El sitio está configurado como exportación estática. El resultado queda en `out/`.

## GitHub Pages

1. Crea un repositorio y sube esta carpeta a la rama `main`.
2. En **Settings → Pages**, selecciona **GitHub Actions** como fuente.
3. El workflow incluido compila y publica el sitio en cada push a `main`.

La ruta base se calcula automáticamente desde el nombre del repositorio durante el workflow.

## Vercel

Importa el repositorio en Vercel y despliega con la configuración detectada de Next.js. No requiere variables de entorno.

## Datos y límites

El simulador conserva 431 encuestas, 588 porcentajes verificados y las bases procesables P2 424, P3 423 y P4 408. Los resultados categoriales están ponderados por género y edad; las estadísticas textuales usan el corpus sin ponderar.

El mapa es contextual y esquemático. No representa domicilios, distribución de encuestas ni exposición ambiental medida. Las transcripciones se encuentran desidentificadas y requieren revisión humana antes de una publicación externa definitiva.

El repositorio es de uso restringido y debe mantenerse privado mientras contenga datos del estudio.

## Estructura

- `app/` contiene el contenedor Next.js, metadata y pantalla de carga.
- `simulator-source/` contiene la interfaz, lógica y datos editables del explorador.
- `build-simulator.mjs` recompone la experiencia autocontenida antes de cada build.
- `public/simulator/` contiene la experiencia Pulse generada.
- `public/data/` contiene el JSON estructurado del simulador y la base funcional del explorador.
- `.github/workflows/` contiene el despliegue automático a GitHub Pages.
