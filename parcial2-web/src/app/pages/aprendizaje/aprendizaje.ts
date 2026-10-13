 import { Component } from '@angular/core';

@Component({
  selector: 'app-aprendizaje',
  standalone: true,
  templateUrl: './aprendizaje.html',
  styleUrl: './aprendizaje.scss'
})
export class Aprendizaje {
  temas = [
    { nombre: 'HTML5', detalle: 'Estructura y organización semántica de páginas web.' },
    { nombre: 'CSS', detalle: 'Estilos, diseño adaptable y presentación visual.' },
    { nombre: 'JavaScript', detalle: 'Lógica e interactividad para aplicaciones web.' },
    { nombre: 'TypeScript', detalle: 'Tipado y organización del código JavaScript.' },
    { nombre: 'Angular', detalle: 'Componentes, plantillas, rutas y renderizado dinámico.' },
    { nombre: 'Bootstrap', detalle: 'Creación de interfaces mediante estilos y componentes.' },
    { nombre: 'Vite', detalle: 'Herramientas para ejecutar y construir proyectos web.' },
    { nombre: 'Node.js', detalle: 'Entorno utilizado para herramientas de desarrollo.' }
  ];

  conocimientos = [
    'Organizar una aplicación en componentes y páginas.',
    'Crear interfaces con HTML y aplicar estilos con CSS.',
    'Usar TypeScript y Angular para mostrar información dinámica.',
    'Configurar navegación entre páginas mediante rutas.',
    'Ejecutar y probar proyectos web durante su desarrollo.'
  ];

  herramientas = ['Visual Studio Code', 'Angular', 'Bootstrap', 'Vite', 'Node.js'];

  actividades = [
    {
      nombre: 'Portafolio web personal',
      detalle: 'Desarrollo de páginas para presentar información personal y hoja de vida.'
    },
    {
      nombre: 'Navegación del sitio',
      detalle: 'Creación de un navbar para acceder a las secciones del portafolio.'
    },
    {
      nombre: 'Página de aprendizaje',
      detalle: 'Organización dinámica de los temas, conocimientos y actividades del curso.'
    }
  ];
}