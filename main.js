const menu = "Menú de cursos ya, Elige tu opción:\n 1. Añadir Curso\n 2. Listar Curso\n 3. Eliminar Curso\n 4. Editar Curso\n 5. Buscar Cursos\n 6. Salir"
let eleccion = parseFloat(prompt(menu))

const menuEditarCurso = "Que quieres editar: \n 1. Nombre\n 2. Docente \n 3.Descripción"

const menuBuscarCurso = "Cómo quieres buscar: \n 1.Nombre\n 2.Id"

let cursos = [
    { id: 1, nombre: 'JavaScript', descripcion: 'Curso de JavaScript', profesor: "Pepito Cardona" },
    { id: 2, nombre: 'Node.js', descripcion: 'Curso de Node.js', profesor: "María Perez"},
    { id: 3, nombre: 'React', descripcion: 'Curso de React', profesor: "Gonzalo Gil"}]

const continuar = () => {
    eleccion = parseFloat(prompt(menu))
    ejecutarMenu()
}

const ejecutarMenu = () => {
    if (eleccion !== 6)
switch (eleccion) {
    case 1:
        agregarCurso()
        break;
    case 2:
        listarCurso()
        break;
    case 3:
        eliminarCurso()
        break;
    case 4:
        editarCurso()
        break;
    case 5:
        buscarCurso()
        break;
    default:
        console.log("Opción no válida, intenta de nuevo")
        continuar()
        break;
} else{
    console.log("Gracias por visitar CursosYa!")}}

const listarCurso =() => {
    const lista = [];
    cursos.forEach(element => {
        datos = `ID: ${element.id}\n`+ `Nombre: ${element.nombre}\n` + `Descripción: ${element.descripcion}\n` + `Docente: ${element.profesor}\n`
        lista.push(datos)
    });
    console.log(`Estos son los cursos registrados en la base de datos:\n`+ lista.join("\n"))
    continuar()
}

const agregarCurso = () => {
    let curso = {}
    let id = parseInt(prompt("Ingresa el ID del nuevo curso: "))
    cursos.forEach(element => {
        if (id === element.id || isNaN(id)){
            console.log("El ID del curso ya existe o no está en el formato correcto. Ingresa un nuevo ID.")
            agregarCurso()
        } else {
            curso.id = id
        }
    });
    curso.nombre = prompt("Ingresa el nombre del nuevo curso: ")
    if (curso.nombre.length === 0){
        console.log("El nombre del curso no puede estar vacío.")
        agregarCurso()
    }
    curso.descripcion = prompt("Ingresa la descripción del nuevo curso: ")
    curso.profesor = prompt("Ingresa el nombre del docente del nuevo curso: ")
    cursos.push(curso)
    console.log("Curso agregado exitosamente.")
    continuar()
}

const eliminarCurso = () => {
    let id = parseInt(prompt("Ingresa el ID del curso que deseas eliminar: "))
    let index = cursos.findIndex(element => element.id === id)
    if (index === -1){
        console.log("El ID del curso no existe o es un formato inválido.")
        continuar()
    } else {
        cursos.splice(index, 1)
        console.log("Curso eliminado exitosamente.")
        continuar()
    }
}

const editarCurso = () => {
    let id = parseInt(prompt("Ingresa el ID del curso que deseas editar: "))
    let index = cursos.findIndex(element => element.id === id)
    if (index === -1){
        console.log("El ID del curso no existe o es un formato inválido.")
        continuar()
    } else {
        let eleccionEditar = parseInt(prompt(menuEditarCurso))
        let curso = cursos[index]
        switch (eleccionEditar) {
            case 1:
                curso.nombre = prompt(`Ingresa el nuevo nombre del curso (Actual: ${curso.nombre}): `)
                break;
            case 2:
                curso.descripcion = prompt(`Ingresa la nueva descripción del curso (Actual: ${curso.descripcion}): `)
                break
            case 3:
                curso.profesor = prompt(`Ingresa el nuevo nombre del docente del curso (Actual: ${curso.profesor}): `)
                break;
            default:
                console.log("Opción no válida")
                continuar()
                break;
        }
        console.log("Curso editado exitosamente.")
        continuar()
    }
}

const buscarCurso = () => {
    let eleccionBuscar = parseInt(prompt(menuBuscarCurso))
    switch (eleccionBuscar) {
        case 1:
            let busqueda = prompt("Ingresa el nombre del curso a buscar: ")
            for (let i; i< cursos.length;i++){
                if (cursos[i].nombre == busqueda){
                var infoBusqueda = `ID: ${cursos[i].id}\n`+ `Nombre: ${cursos[i].nombre}\n` + `Descripción: ${cursos[i].descripcion}\n` + `Docente: ${cursos[i].profesor}\n`
            }
                i++
            }
            if (infoBusqueda === undefined){
                console.log("No se encontraron resultados.")
                continuar()
            } else {
                console.log(`Resultados de la búsqueda:\n`+ infoBusqueda.join("\n"))
                continuar()
            }
            break
        case 2:
            let busquedaID = prompt("Ingresa el ID del curso a buscar: ")
            for (let i; i< cursos.length;i++){
                if (cursos[i].id == busquedaID){
                var infoBusquedaID = `ID: ${cursos[i].id}\n`+ `Nombre: ${cursos[i].nombre}\n` + `Descripción: ${cursos[i].descripcion}\n` + `Docente: ${cursos[i].profesor}\n`
            }
                i++
            }
            if (infoBusquedaID === undefined){
                console.log("No se encontraron resultados.")
                continuar()
            } else {
                console.log(`Resultados de la búsqueda:\n`+ infoBusquedaID.join("\n"))
                continuar()
            }
            break
        default:
            console.log("Opción no válida")
            continuar()
            break;
    }
}

ejecutarMenu()