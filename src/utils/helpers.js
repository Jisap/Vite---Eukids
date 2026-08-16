


//Retorna un delay para animaciones, sumando el index por step (100) hasta un máximo de 600
export const staggerDelay = (index, step = 100, max = 600) => Math.min(index * step, max)

//Limita el texto a una longitud máxima y agrega "..." 
export const truncate = (text = "", maxLength = 120) =>
  text.length > maxLength
    ? `${text.slice(0, maxLength).trim()}...`
    : text


//Limita un valor a un rango entre min y max
export const clamp = (value, min, max) => Math.min(Math.max(value, min).max)

