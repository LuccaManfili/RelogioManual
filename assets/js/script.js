// Selecionando os elementos do relógio
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

// Função para obter a hora atual
const getTime = () => {
    const date = new Date();
    return {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
    };
};

// Função para atualizar os ponteiros do relógio
const updateClock = () => {
    const time = getTime();
    
    // Calcular os ângulos para os ponteiros
    const secondAngle = time.seconds * 6; // Cada segundo move 6 graus (360 graus / 60 segundos)
    const minuteAngle = (time.minutes * 6) + (time.seconds * 0.1); // Cada minuto move 6 graus, mais 0.1 grau por segundo
    const hourAngle = (time.hours * 30) + (time.minutes * 0.5); // Cada hora move 30 graus, mais 0.5 grau por minuto
    
    // Aplicar transformações CSS para os ponteiros
    secondHand.style.transform = ` translate(0, -50%) rotate(${secondAngle}deg)`;
    minuteHand.style.transform = ` translate(0, -50%) rotate(${minuteAngle}deg)`;
    hourHand.style.transform = ` translate(0, -50%) rotate(${hourAngle}deg)`;
};

// Atualizar o relógio a cada segundo
setInterval(updateClock, 1000);
