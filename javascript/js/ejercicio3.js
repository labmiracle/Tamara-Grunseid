function calcularDiasCrecimiento (velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
    if (velocidadCrecimiento>0 && velocidadDecrecimiento >0 && alturaDeseada>0 && velocidadCrecimiento%1 ==0 && velocidadDecrecimiento%1 ==0 && alturaDeseada%1 ==0) {
        return alturaDeseada/(velocidadCrecimiento-velocidadDecrecimiento)
    } else {
        return "Alguno de los parámetros ingresados no son enteros positivos"
    }
}