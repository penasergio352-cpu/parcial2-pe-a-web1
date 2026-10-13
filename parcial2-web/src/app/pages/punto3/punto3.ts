import { Component } from '@angular/core';

@Component({
  selector: 'app-punto3',
  standalone: true,
  templateUrl: './punto3.html',
  styleUrl: './punto3.scss'
})
export class Punto3 {
  datosDelClub = [
    { titulo: 'Fundación', descripcion: 'América de Cali fue fundado en 1927.' },
    { titulo: 'Apodo', descripcion: 'Es conocido como Los Diablos Rojos.' },
    { titulo: 'Colores', descripcion: 'El rojo es su color representativo.' },
    { titulo: 'Estadio', descripcion: 'Juega en el estadio Olímpico Pascual Guerrero, en Cali.' }
  ];

  logros = [
    'Ha ganado campeonatos de la liga colombiana.',
    'Ha representado a Colombia en torneos internacionales.',
    'Cuenta con una gran afición en Cali y el Valle del Cauca.'
  ];

  valores = [
    { nombre: 'Pasión', descripcion: 'El entusiasmo de sus hinchas.' },
    { nombre: 'Historia', descripcion: 'Una trayectoria importante en el fútbol colombiano.' },
    { nombre: 'Identidad', descripcion: 'El orgullo de representar a Cali.' }
  ];
}