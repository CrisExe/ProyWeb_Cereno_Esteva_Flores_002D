const getRemainTime = deadline => {//Función que recibe la fecha límite
  let now = new Date(),//Fecha actual
      remainTime = (new Date(deadline) - now + 1000) / 1000,//Tiempo restante para fecha limite se divide entre 1000 para obtener segundos ya que esta en milisegundos y en segundos facilita mas la operacion
      remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),//Se obtienen los segundos restantes (Se agrega 0 al inicio y se toman los últimos 2 dígitos para que siempre sean 2 dígitos)
      remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),//Se obtienen los minutos restantes (60 segundos en un minuto)
      remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),//Se obtienen las horas restantes (3600 segundos en una hora y 24 horas en un día)
      remainDays = Math.floor(remainTime / (3600 * 24));//Se obtienen los días restantes (3600 segundos en una hora y 24 horas en un día)

  return {
    remainTime,
    remainSeconds,
    remainMinutes,
    remainHours,
    remainDays
  }
};

const countdown = (deadline, elem, finalMessage) => {//Función que recibe la fecha límite, el elemento donde se mostrará el contador y el mensaje final
    const el = document.getElementById(elem);//Se obtiene el elemento donde se mostrará el contador
    const timerUpdate = setInterval( () => {//Se crea un intervalo que se ejecutará cada segundo
      let t = getRemainTime(deadline);//Se obtiene el tiempo restante
      el.innerHTML = `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;//Se muestra el tiempo restante en el elemento
      if(t.remainTime <= 1) {//Si el tiempo restante es menor o igual a 1
        clearInterval(timerUpdate);//Se detiene el intervalo
        el.innerHTML = finalMessage;//Se muestra el mensaje final
      }
    }, 1000)
}

countdown('May 14 2024 00:00:00 GMT-0400', 'cuenta', '');//Se llama a la función countdown con la fecha límite, el elemento donde se mostrará el contador y el mensaje final