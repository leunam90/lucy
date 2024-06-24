export function animarSprites(urlImagen: string, cantidadFotogramas: number, tamañoSprite: number, velocidad: number): void {
  const canvas = document.getElementById("canvas") as HTMLCanvasElement;
  if (!canvas) {
    console.error("No se encontró el elemento canvas en el documento.");
    return;
  }
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    console.error("No se pudo obtener el contexto 2D del canvas.");
    return;
  }
  const sprite = new Image();
  sprite.src = urlImagen;

  sprite.onload = function () {
    // Limpiar el canvas
    function limpiarCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    // Función para dibujar un sprite en una posición específica
    function dibujarSprite(posX: number) {
      // Dibujar el sprite en la posición especificada
      ctx.drawImage(sprite, posX, 0, tamañoSprite, tamañoSprite);
    }

    let fotogramaActual = 0;
    let posX = 0;

    // Función para actualizar la animación en cada fotograma
    function actualizarAnimacion() {
      limpiarCanvas();
      dibujarSprite(posX);
      fotogramaActual++;
      if (fotogramaActual >= cantidadFotogramas) {
        fotogramaActual = 0;
      }
      posX += tamañoSprite;
      if (posX >= canvas.width) {
        posX = 0;
      }
      setTimeout(actualizarAnimacion, 1000 / velocidad);
    }

    // Iniciar la animación
    actualizarAnimacion();
  };
}
