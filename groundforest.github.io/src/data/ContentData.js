import {FaFacebookSquare, FaInstagram} from 'react-icons/fa'
import { GoTriangleRight, GoTriangleLeft } from "react-icons/go";

export const Utvandigt = {
    id: 1,
    reverse: false,
    inverse: false,
    Headline: 'Utvändigt',
    Description: `En utvändig målning ser lite olika ut beroende på skick och underlag. 
    Tex kan det behövas tvättas, skrapas bort färg, panelbyte, inoljning av trärena ytor, slipning och ommålning.
    Vid en mindre sliten fasad kan det räcka med en rejäl tvättning och ommålning utan att behöva utföra skrapning eller panelbyte. 
    För att veta vad vi behöver göra hos just er, ring oss för att boka in ett besök och få en kostnadsfri offert.
    På bilden har vi målat med en täcklasyr för att bevara träets struktur.
    `,

    img: ['img/Outdoor.jpg', 'img/OutdoorFinish.jpg'],
    
}
export const Invandigt = {
    id: 2,
    reverse: false,
    inverse: false,
    Headline: 'Invändigt',
    Description: `Exemplet på denna bild visar hur vi tagit ner gammal tapet, spärrgrundmålat ytan samt bred spacklat väggarna innan målning för att uppnå bästa resultat.`,
    img: ['img/Indoor1.jpg', 'img/IndoorSpackling.jpg', 'img/IndoorFinish.jpg'] 
     

}
export const Tapetsering = {
    id: 3,
    reverse: false,
    inverse: false,
    Headline: 'Tapetsering',
    Description: `I många fall kan det räcka med att man skär bort gamla skarvar på befintlig tapet och spacklar dessa för att sedan hänga upp ny tapet.
    Men om underlaget är dåligt riskerar det att bildas blåsbildning och då tar vi ned det lössittande ytorna precis som vi gjort på bilderna här
    Sedan patenterar vi väggen och till sist bred spackla innan tapetupphängning.
    Ibland behövs det även att man grundmålar väggarna en gång innan man hänger upp tapeten.
    Det är oftast om det är en väldigt ljus tapet då det annars finns risk att spacklet lyser igenom papperstapeten.
    `,

    img: ['img/rivaTapet.jpg', 'img/tapetFinish.jpg'],

}
export const Snickerier = {
    id: 4,
    classname: 'Snickerier',
    reverse: false,
    inverse: false,
    Headline: 'Snickerier',
    Description: `Underlaget på denna bild visar hur det kan bli när man tidigare målat ytan utan att använda sig av rätt färg då nästan hela färgytan släppt.
    När man målar på en trären yta behöver man måla 2ggr med en kvist och spärrgrund för att sedan färdig stryka med snickerifärg för att få ett fint och hållbart resultat.
    Vi utför även enklare snickeriarbeten som tex garderobsbyte och byte av golvlister/dörrfoder`,
    img: ['img/Snickeri.jpg', 'img/SnickeriFinish.jpg', 'img/Garderob1.jpg', 'img/Garderob2.jpg']

}

export const AboutData = {
    id: 'about',
    classname: 'About',
    reverse: true,
    inverse: false,
    Headline: 'Erik ',
    Description: "2008 började Erik som traditionell lärling på en större målerifirma i Stockholm. 2011 blev han klar med sin utbildning och har sedan dess jobbat som målare. 10 år senare var det dags att äntligen öppna egen målerifirma. Genom åren har Erik arbetat med många olika delar inom måleriet och har fått en bred kompetens inom yrket.",

    img: ['img/Presentation.jpg']

}


export const infoOne = {
    classname: 'info1',
    Description: '"Vi har F-skattsedel samt att ni kan använda er av ROT-avdraget när ni anlitar oss."'
}

export const infoTwo = {
    classname: 'info2',
    Description: '"Vårat mål är att kunden alltid ska vara lika nöjd som oss.."'
}

export const FooterData = {
        inverse: true,
        classname: 'Footer',
        Headline: 'Följ oss',
        icons: [<FaFacebookSquare/>, <FaInstagram/>],
        Link: ["https://www.facebook.com/Remes-M%C3%A5leri-104130291737132", "https://www.instagram.com/remesmaleri/"]
    
}

export const CarouselButtonData = {
    classname: 'carouselButton',
    icons: {'Left': <GoTriangleLeft className='left'/> , 'Right': <GoTriangleRight className='right'/>}
}