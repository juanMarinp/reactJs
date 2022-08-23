import React, {useState} from "react";
import {Footer} from './Footer'
import { Header } from "./Header";
import imgmain from '../bannerprueba/imgmain.webp'

export default function MainPage(){
  return(

    <div>
      <Header>

      </Header>

      <div className="container-fluid mt-2 mb-2 bg-secondary">
        <div className="row">
          <div className="col-lg-5 col-md-6 col-sm-12">
            <div>
              <h3><b>Integrantes:</b></h3>
              <h5><b>Juan Marin</b> <br/> <b>Jesús Rojas</b></h5>
            </div>
            <img
              className="rounded mb-2"
              src={imgmain}
              alt="imgmain"
              width="500"
              height="520"
            />
          </div>
          <div className="col-lg7 col-md-6 col-sm-12">
            <div>
              <h1 className="mb-4 mt-2">Introducción al metal</h1>
              <p>
                El <b>heavy metal</b> o simplemente <b>metal</b> "metal pesado", es un genero musical que nació a mediados de los años 60 y principios de los 70's en el Reino Unido y en los Estados Unidos, cuyos orígenes provienen del <b>BLUES ROCK, HARD ROCK</b> y del <b>ROCK PSICODELICO</b>. Se caracteriza principalmente por sus <b>GUITARRAS</b> fuertes y distorsionadas, ritmos enfáticos, los sonidos del <b>BAJO</b> y la <b>BATERIA</b> son más densos de lo habitual y por voces generalmente agudas.<br/><br/>

                Hasta el día de hoy no existe un consenso preciso que defina cuál fue la primera banda de heavy metal, algunos mencionan a Led Zeppelin y Deep Purple, mientras que otros dejan ese sitial exclusivamente a Black Sabbath. Por aquel mismo tiempo, a finales de los años 1960 y principios de los años 1970, surgieron muchas bandas que si bien no tuvieron el impacto mediático de las mencionadas anteriormente, también fueron de gran aporte al nacimiento del género como <b>Blue Cheer, Blue Öyster Cult, Sir Lord Baltimore, Budgie, UFO y Wishbone Ash</b>; posteriormente surgieron agrupaciones como <b>Scorpions, Rainbow, Judas Priest</b> (estos últimos introdujeron la combinación del doble bombo con ritmos rápidos en semicorchea de bajo y guitarra, y eliminaron las últimas influencias del blues) y Motörhead (quienes incluyeron algunos elementos del punk rock, dándole un nuevo énfasis a la agresividad y velocidad). En la segunda mitad de los setenta y en pleno auge del punk surgió la Nueva ola del heavy metal británico (abreviada comúnmente como NWOBHM) liderada por Iron Maiden, Saxon y Def Leppard y de la que formaron parte los muy influyentes ex post Diamond Head o Venom, que dio un nuevo valor al género derivando en el nacimiento de una posterior subcultura a ambos lados del Atlántico (influyendo la NWOBHM notablemente en el surgimiento de nuevas bandas estadounidenses como Manowar, Savatage o Queensrÿche a finales de esa década). 
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer>

      </Footer>
    </div>

  );
}