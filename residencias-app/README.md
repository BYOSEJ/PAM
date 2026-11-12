# Residencias Connect — React Native

Aplicación móvil de demostración para la gestión de residencias profesionales. Proyecto desarrollado para cubrir el **Examen Parcial 1: Maquetación de Interfaz de Usuario (UI) con React Native**.

## Pantallas incluidas

1. **Dashboard:** bienvenida, estado de residencia, indicadores y avisos de coordinación.
2. **Explorador de vacantes:** buscador, filtros por modalidad y tarjetas con empresa, proyecto, tecnologías, ubicación y duración.
3. **Detalle de vacante:** descripción, tecnologías, requisitos, ubicación, duración, contacto y botón para postularse.

## Tecnologías

- React Native y Expo
- JavaScript (componentes funcionales y hooks)
- `StyleSheet`, Flexbox, `ScrollView`, `TextInput` y `Pressable`
- Datos estáticos de demostración
- Navegación entre pantallas mediante estado (`useState`), sin backend

## Requisitos

- Node.js LTS
- npm
- Expo Go en un teléfono Android/iOS, o un emulador compatible

## Instalación y ejecución

1. Descarga o clona este repositorio.
2. Abre una terminal en la carpeta del proyecto.
3. Instala las dependencias:

   ```bash
   npm install
   ```

4. Inicia Expo:

   ```bash
   npx expo start
   ```

5. Para abrir en Android, escanea el QR con Expo Go o presiona `a` si tienes un emulador Android configurado. Para navegador, ejecuta `npx expo start --web`.

## Estructura

```text
residencias-app/
├── App.js
├── app.json
├── package.json
├── src/
│   ├── components/
│   │   ├── BottomNav.js
│   │   ├── JobCard.js
│   │   └── Tag.js
│   ├── data/
│   │   └── vacantes.js
│   ├── screens/
│   │   ├── DashboardScreen.js
│   │   ├── JobsScreen.js
│   │   └── JobDetailScreen.js
│   └── styles/
│       └── theme.js
└── evidencias/
    ├── 01-dashboard.png
    ├── 02-explorador-vacantes.png
    ├── 03-detalle-vacante.png
    └── emulador.html
```

## Datos de demostración

Los nombres de estudiantes, empresas, asesores, cifras y vacantes son ficticios y se utilizan únicamente para visualizar la interfaz. No existe autenticación, conexión a una base de datos ni envío real de postulaciones; el botón muestra una confirmación local para demostrar la interacción.

## Evidencias

La carpeta `evidencias` incluye tres imágenes de referencia de la interfaz y un archivo HTML interactivo para recorrer la emulación en un navegador. **Las imágenes son maquetas visuales, no capturas tomadas de un dispositivo Android ni de Expo Go.** Para evidencia de ejecución nativa, inicia Expo y toma capturas reales desde Expo Go o el emulador Android.

## Subir a GitHub

Crea un repositorio vacío en GitHub y ejecuta desde esta carpeta:

```bash
git init
git add .
git commit -m "Proyecto UI React Native - Residencias Connect"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
git push -u origin main
```

Sustituye la URL de ejemplo por la URL real de tu repositorio.
