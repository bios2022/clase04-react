const products = [
    {id:'1', category: 'celular', img:'../images/cel-moto.jpg', img_detalle:'../images/cel-moto.png', nombre:'Motorola E7' , 
    precio:'$54999,00', descrip:'Pantalla Max Vision HD+ de 6.5 pulg.Jugá, mirá películas y hablá con amigos en una pantalla ultra wide. Hasta 2 días de batería1. Disfrutá de la diversión con la potente batería de 5000 mAh. Sistema de dos cámaras con sensor principal de 13MP. Registrá todos los momentos con la cámara de enfoque rápido y capturá detalles pequeños con la cámara macro.    Lector de huella digital. Desbloqueá el teléfono de forma segura con solo apoyar el dedo.     Desempeño al instante y 32 GB de almacenamiento2. Experimentá la respuesta automática del teléfono gracias al procesador octa-core y expandí el almacenamiento hasta 1TB con una tarjeta microSD3    ', color: 'Color:Rosa',peso: 'Peso: 300 Grs', envio:'Envio: No se hacen envios', cant_cuotas: '6 x 12000', cuotas: 'CUOTAS SIN INTERÉS'},
    {id:'2', category: 'hogar', img:'../images/lava-drean.jpg', nombre:'Lavarropas Drean' , 
    precio:'$43499,00', cant_cuotas: '12 x 4800', cuotas: 'CUOTAS SIN INTERÉS'},
    {id:'3', category: 'hogar', img:'../images/aire-hitachi.jpg', nombre:'Aire SPLIT Hitachi' , 
    precio:'$59999,00', cant_cuotas: '12 x 6800', cuotas: 'CUOTAS SIN INTERÉS'},
    {id:'4', category: 'laptops', img:'../images/note-daewoo.jpg' , nombre:'Notebook Daewo' , 
    precio:'$49999,00', cant_cuotas: '18 x 4000', cuotas: 'CUOTAS SIN INTERÉS'}
]


export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 500)
    })
}