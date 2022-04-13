import arroz from "../images/productos/platos/Arroz.jpg"
import cerAgridulce from "../images/productos/platos/CerdoAgridulce.jpg"
import churrasco from "../images/productos/platos/Churrasco.jpg"
import costillas from "../images/productos/platos/CostillasBBq.jpg"
import pechuga from "../images/productos/platos/PechugaPlancha.jpg"
import baSalsa from "../images/productos/platos/BagreSalsa.jpg"
import Mojarra from "../images/productos/platos/Mojarra.jpg"
import MojarraAsada from "../images/productos/platos/MojarraAsada.jpg"
import CachamaFrita from "../images/productos/platos/CachamaFrita.jpg"
import robalo from "../images/productos/platos/RobaloMarinero.jpg"
import caSudad from "../images/productos/platos/CachamaSudada.jpg"
import cazuela from "../images/productos/platos/Cazuela.jpg"
import salchipapa from "../images/productos/platos/Salchipapa.jpg"
import sancocho from "../images/productos/platos/Sancocho.jpg"
import Hamburguesa from "../images/productos/platos/Hamburguesa.jpg"
import brownie from "../images/productos/postres/PBrownie.jpg"
import flan from "../images/productos/postres/PFlanMandarina.jpg"
import gelatina from "../images/productos/postres/PGelatina.jpg"
import cocacola from "../images/productos/bebidas/cocacola.jpg"
import cafe from "../images/productos/bebidas/coffee.jpg"
import vino from "../images/productos/bebidas/vino.jpg"



const Contactme = {
    whatsapp: "https://api.whatsapp.com/send?phone=573158419824&text=hola%20",
    facebook: "https://www.facebook.com/Centro-Ecoturistico-Canaima-105501684381882",
    instagram: "https://www.instagram.com/centroecoturisticocanaima/",
    googleMaps: "https://goo.gl/maps/VRa7QTCziQefAvZp9"
}

const Platos = [
    {
        img: sancocho,
        name: "Sancocho de Gallina",
        descripcion:"Minimo 4 personas, acompañado de presa, arroz y patacon",
        value: 30000
    },
    {
        img: arroz,
        name: "Arroz",
        descripcion: "Arroz mixto minimo 4 personas, acompañado de papas a la francesa",
        value: 30000
    },
    {
        img: cerAgridulce,
        name: "Cerdo agridulce",
        descripcion:"Acompañada de ensalada de la casa, 2 patacones, arroz y vaso de limonada",
        value: 25000
    },
    {
        img: churrasco,
        name: "Churrasco",
        descripcion:"Acompañada de ensalada de la casa, papas a la francesa, arroz y vaso de limonada",
        value: 25000
    },
    {
        img: costillas,
        name: "Costillitas BBQ",
        descripcion:"Acompañada de ensalada de la casa, 2 patacones, arroz y vaso de limonada",
        value: 50000
    },
    {
        img: pechuga,
        name: "Pechuga a la plancha",
        descripcion:"Acompañada de ensalada de la casa, papas a la francesa, arroz y vaso de limonada",
        value: 50000
    },
    {
        img: baSalsa,
        name: "Bagre en salsa",
        descripcion:"Acompañada de ensalada de la casa, 2 patacones, arroz y vaso de limonada",
        value: 50000
    },
    {
        img: Mojarra,
        name: "Mojarra frita",
        descripcion:"Acompañada de ensalada de la casa, 2 patacones, arroz y vaso de limonada",
        value: 25000
    },
    {
        img: MojarraAsada,
        name: "Mojarra asada",
        descripcion:"Acompañada de ensalada de la casa, 2 patacones, arroz y vaso de limonada",
        value: 25000
    },
    {
        img: CachamaFrita,
        name: "Cachama Frita",
        descripcion:"Acompañada de ensalada de la casa, 2 patacones, arroz y vaso de limonada",
        value: 25000
    },
    {
        img: caSudad,
        name: "Cachama Sudada",
        descripcion:"Acompañada de ensalada de la casa, 2 patacones, arroz y vaso de limonada",
        value: 25000
    },
    {
        img: robalo,
        name: "Robalo",
        descripcion:"Acompañada de ensalada de la casa, 2 patacones, arroz y vaso de limonada",
        value: 27000
    },
    {
        img: cazuela,
        name: "Cazuela de mariscos",
        descripcion:"Acompañada 2 patacones, arroz y vaso de limonada",
        value: 33000
    },
    {
        img: Hamburguesa,
        name: "Hamburguesa",
        descripcion:"Acompañada papas a la francesa y vaso de limonada",
        value: 15000
    },
    {
        img: salchipapa,
        name: "Salchipapa",
        descripcion:"150 gr de salchicha zenu y 400 gr de papa",
        value: 50000
    }
]

const Postres = [
    {
        img: brownie,
        name: "producto4",
        value: 50000
    },
    {
        img: gelatina,
        name: "producto1",
        value: 50000
    },
    {
        img: flan,
        name: "producto3",
        value: 50000
    },
]

const Bebidas = [

    {
        img: cocacola,
        name: "producto4",
        value: 50000
    },
    {
        img: cafe,
        name: "producto1",
        value: 50000
    },
    {
        img: vino,
        name: "producto3",
        value: 50000
    },
]
export {
    Contactme,
    Platos, 
    Bebidas,
    Postres

}