// Acá nos falta nuestra fuente de datos

const menu = [{
    nombre: 'Carpaccio fresco',
    descripcion: 'Carpaccio de salmón con cítricos',
    precio: 65.50,
    id: 1,
    img: 'Carpaccio-de-salmon.jpg'
},
{
    nombre: 'Risotto de berenjena',
    descripcion: 'Risotto de berenjena y queso de cabra',
    precio: 47.00,
    id: 2,
    img: 'Risotto-berenjena-queso-cabra.jpg'
},
{
    nombre: 'Mousse de arroz',
    descripcion: 'Mousse de arroz con leche y aroma de azahar',
    precio: 27.50,
    id: 3,
    img: 'Mousse-de-arroz-con-leche.jpg'
},
{
    nombre: 'Espárragos blancos',
    descripcion: '',
    precio: 37.50,
    id: 4,
    img: 'esparragos.png'
}];

menu.forEach(function(plato){
    if(plato.descripcion == undefined || plato.descripcion == ''){
        plato.descripcion = 'Plato Típico'};
    });

// Acá nos falta un objeto literal con las acciones para cada ruta
const controller = {
    index: (req,res) => {
        return res.render('index', {'menu': menu});
    },

    detalleMenu: (req,res) => {
        const producto = menu.find(plato =>
            plato.id == req.params.id);
        return res.render('detalleMenu', {'producto': producto});
    }
};

// Acá exportamos el resultado
module.exports = controller