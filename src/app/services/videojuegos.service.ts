import { Injectable } from '@angular/core';


@Injectable()
export class VideojuegosService {
  private videojuegos: Videojuego[] = [
    {
      nombre: "Fornite",
      descripcion: "Fortnite es un videojuego del año 2017 desarrollado por la empresa Epic Games, lanzado como diferentes paquetes de software que presentan diferentes modos de juego, pero que comparten el mismo motor de juego y mecánicas. Fue anunciado en los Spike Video Game Awards en 2011",
      img: "assets/img/juegos/fortnite.jpg",
      lanzamiento: "21 de julio de 2017",
      consola: "PlayStation 4"
    },
    {
      nombre: "Valorant",
      descripcion: "Valorant es un videojuego de disparos en primera persona multijugador gratuito desarrollado y publicado por Riot Games. El juego se anunció por primera vez con el nombre en clave Project A en octubre de 2019.",
      img: "assets/img/juegos/valorant.jpg",
      lanzamiento: "2 de junio de 2020",
      consola: "pc"
    },
    {
      nombre: "Forza Horizon 5",
      descripcion: "Forza Horizon 5 es un videojuego de carreras desarrollado por Playground Games y publicado por Xbox Game Studios. Es el quinto título de Forza Horizon y la duodécima entrega principal de la serie Forza. El juego está ambientado en una representación ficticia de México",
      img: "assets/img/juegos/forza5.jpg",
      lanzamiento: "4 de noviembre de 2021",
      consola: "xbox"
    },
    {
      nombre: "Call of Duty: Warzone",
      descripcion: "Call of Duty: Warzone es un videojuego de disparos en primera persona, perteneciente al Battle royale gratuito, lanzado el 10 de marzo de 2020 para PlayStation 4, PlayStation 5, Xbox One, Xbox Series X|S y Microsoft Windows.",
      img: "assets/img/juegos/cod.jpg",
      lanzamiento: "10 de marzo de 2020",
      consola: "PlayStation 4"
    },
    {
      nombre: "Red Dead Redemption 2",
      descripcion: "Red Dead Redemption 2, estilizado Red Dead Redemption II, es un videojuego de acción-aventura western, en un mundo abierto y en perspectiva de primera y tercera persona, ​ con componentes para un jugador y multijugador.​ Fue desarrollado por Rockstar Games.",
      img: "assets/img/juegos/red.jpg",
      lanzamiento: "24 de octubre de 2018",
      consola: "pc"
    },
    {
      nombre: "Riders Republic",
      descripcion: "Traducción del inglés-Riders Republic es un videojuego de deportes desarrollado por Ubisoft Annecy y publicado por Ubisoft. El juego fue lanzado para Microsoft Windows, PlayStation 4, PlayStation 5, Amazon Luna, Stadia, Xbox One y Xbox Series X / S el 28 de octubre de 2021",
      img: "assets/img/juegos/rider.jpg",
      lanzamiento: "27 de octubre de 2021",
      consola: "PlayStation 4"
    },
    {
      nombre: "F1",
      descripcion: "F1 2021 es el videojuego oficial de las temporadas 2021 de Fórmula 1 y del Campeonato de Fórmula 2 de la FIA desarrollado por Codemasters y distribuido por Electronic Arts bajo la división EA Sports. Fue lanzado el 16 de julio de 2021 para Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One y Xbox Series X/S.",
      img: "assets/img/juegos/f1.jpg",
      lanzamiento: "16 de julio de 2021",
      consola: "PlayStation 4"
    },
    {
      nombre: "Far Cry 6",
      descripcion: "Far Cry 6 es un videojuego de disparos en primera persona desarrollado por Ubisoft Toronto y publicado por Ubisoft. Es la sexta entrega principal de la serie Far Cry, fue lanzado el 7 de octubre del 2021 para las plataformas de Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S y Google Stadia.",
        img: "assets/img/juegos/fc6.jpg",
      lanzamiento: " 6 de octubre de 2021",
      consola: "xbox"
    },
    {
      nombre: "Hitman",
      descripcion: "Hitman es una serie de videojuegos de sigilo disponible en la mayoría de los formatos modernos. La trama de los videojuegos gira en torno a un hombre llamado Agente 47, que es el producto de experimentos de mejoras genéticas y creación de superhombres, especialmente diseñado para asesinar cuando se lo contrata.",
      img: "assets/img/juegos/hitman.jpg",
      lanzamiento: "19 de octubre de 2012",
      consola: "xbox"
    },
    {
      nombre: "fifa 2022",
      descripcion: "FIFA 22 es un videojuego de fútbol desarrollado por EA Vancouver y EA Romania, siendo publicado por EA Sports. Está disponible para PlayStation 4, PlayStation 5, Xbox Series X/S, Xbox One, Microsoft Windows, Google Stadia y Nintendo Switch.",
      img: "assets/img/juegos/fifa.jpg",
      lanzamiento: "26 de septiembre de 2021",
      consola: "PlayStation 5"
    },
    {
      nombre: "Halo 5: Guardians",
      descripcion: "Halo 5 Guardians es un videojuego de disparos en primera persona de la popular saga de videojuegos Halo exclusivo para la consola Xbox One, el cual salió el 27 de octubre de 2015 desarrollado por 343 Industries y publicado por Microsoft Studios. El juego sigue la línea argumental de Halo 4.",
      img: "assets/img/juegos/halo.jpg",
      lanzamiento: "27 de octubre de 2015",
      consola: "xbox"
    },
    {
      nombre: "The Witcher 3: Wild Hunt",
      descripcion: "The Witcher 3: Wild Hunt es un videojuego de rol desarrollado y publicado por la compañía polaca CD Projekt RED. Esta compañía es la desarrolladora mientras que la distribución corre a cargo de la Warner Bros. Interactive, en el caso de Norteamérica y Bandai Namco para Europa",
      img: "assets/img/juegos/h.jpg",
      lanzamiento: "18 de mayo de 2015",
      consola: "pc"
    }

  ];

  constructor() {
    console.log("servicio listo para usarse");
  }

  getVideoJuegos(): Videojuego[] {
    return this.videojuegos;
  }

  getVideojuego(idx: number) {
    return this.videojuegos[idx];
  }

  buscarVideojuegos(termino: string): Videojuego[] {
    let videojuegosArr: Videojuego[] = [];
    termino = termino.toLowerCase();
    this.videojuegos.forEach(videojuego => {
      let nombre = videojuego.nombre.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        videojuegosArr.push(videojuego);
      }
    });
    return videojuegosArr;
  }



}

export interface Videojuego {
  nombre: string;
  descripcion: string;
  img: string;
  lanzamiento: string;
  consola: string;
}
