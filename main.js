// Esta función dibuja cada figura en su respectivo canvas
function draw() {
    // 1. Rectángulo [cite: 41]
    const ctx1 = document.getElementById('canv1').getContext('2d');
    ctx1.fillStyle = "green";
    ctx1.fillRect(50, 50, 100, 100);

    // 2. Triángulo [cite: 42]
    const ctx2 = document.getElementById('canv2').getContext('2d');
    ctx2.beginPath();
    ctx2.moveTo(100, 50);
    ctx2.lineTo(150, 150);
    ctx2.lineTo(50, 150);
    ctx2.closePath();
    ctx2.stroke();

    // 3. Happy Face [cite: 43]
    const ctx3 = document.getElementById('canv3').getContext('2d');
    ctx3.beginPath();
    ctx3.arc(100, 100, 75, 0, Math.PI * 2); // Cara
    ctx3.moveTo(140, 110);
    ctx3.arc(100, 110, 40, 0, Math.PI, false); // Boca
    ctx3.moveTo(85, 80);
    ctx3.arc(80, 80, 5, 0, Math.PI * 2); // Ojo izq
    ctx3.moveTo(125, 80);
    ctx3.arc(120, 80, 5, 0, Math.PI * 2); // Ojo der
    ctx3.stroke();

    // 4. Líneas [cite: 44]
    const ctx4 = document.getElementById('canv4').getContext('2d');
    ctx4.beginPath();
    ctx4.moveTo(20, 20);
    ctx4.lineTo(180, 180);
    ctx4.stroke();

    // 5. Arcos [cite: 45]
    const ctx5 = document.getElementById('canv5').getContext('2d');
    ctx5.beginPath();
    ctx5.arc(100, 100, 50, 0, Math.PI, true);
    ctx5.stroke();

    // 6. Curvas Bézier y cuadráticas [cite: 47]
    const ctx6 = document.getElementById('canv6').getContext('2d');
    ctx6.beginPath();
    ctx6.moveTo(20, 100);
    ctx6.quadraticCurveTo(100, 20, 180, 100);
    ctx6.stroke();

    // 7. Combinaciones [cite: 48]
    const ctx7 = document.getElementById('canv7').getContext('2d');
    ctx7.fillStyle = "blue";
    ctx7.fillRect(60, 100, 80, 50);
    ctx7.beginPath();
    ctx7.arc(100, 100, 40, 0, Math.PI, true);
    ctx7.fill();
}

// Ejecuta la función una vez que todo el HTML esté listo
document.addEventListener("DOMContentLoaded", draw);
