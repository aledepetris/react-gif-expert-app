/// <reference types="vite/client" />

// Para permitir importar archivos .css
declare module '*.css';

// Si en el futuro usás CSS Modules (por ejemplo: styles.module.css), agregá esto:
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

// Si usás otros tipos de archivos, podés ir agregando más declaraciones:
declare module '*.svg' {
  const src: string;
  export default src;
}
