/**
 * Práctica: 2.2 Introducción a la graficación 2D
 * Alumna: Valeria Abigail Villeda Hernandez
 */

function draw() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d"); 

        // Limpiar el canvas antes de dibujar cada nueva evidencia
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // --- DESCOMENTA SOLO UNA SECCIÓN A LA VEZ PARA TUS EVIDENCIAS ---

      
        ctx.fillStyle = "green"; [cite: 29]
        ctx.fillRect(50, 50, 150, 100); 
        ctx.strokeStyle = "black";
        ctx.strokeRect(250, 50, 150, 100);
       

        // 2. TRIÁNGULO [cite: 42]
        /*
        ctx.beginPath();
        ctx.moveTo(100, 300);
        ctx.lineTo(200, 300);
        ctx.lineTo(150, 200);
        ctx.closePath();
        ctx.fillStyle = "orange";
        ctx.fill();
        ctx.stroke();
        */

        // 3. HAPPY FACE (Carita feliz) [cite: 43]
        /*
        ctx.beginPath();
        ctx.arc(300, 200, 100, 0, Math.PI * 2, true); // Cara
        ctx.moveTo(370, 200);
        ctx.arc(300, 200, 70, 0, Math.PI, false);    // Boca
        ctx.moveTo(265, 170);
        ctx.arc(260, 170, 5, 0, Math.PI * 2, true);  // Ojo izquierdo
        ctx.moveTo(345, 170);
        ctx.arc(340, 170, 5, 0, Math.PI * 2, true);  // Ojo derecho
        ctx.stroke();
        */

        // 4. LÍNEAS [cite: 44]
        /*
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.lineCap = "round";
        ctx.moveTo(50, 50);
        ctx.lineTo(200, 350);
        ctx.strokeStyle = "blue";
        ctx.stroke();
        */

        // 5. ARCOS [cite: 45]
        /*
        for (var i = 0; i < 4; i++) {
            ctx.beginPath();
            var x = 100 + i * 120;
            var y = 200;
            var radius = 40;
            var startAngle = 0;
            var endAngle = Math.PI + (Math.PI * i) / 2;
            ctx.arc(x, y, radius, startAngle, endAngle, i % 2 === 0);
            ctx.stroke();
        }
        */

        // 6. CURVAS BÉZIER Y CUADRÁTICAS [cite: 47]
        /*
        // Cuadrática (un punto de control)
        ctx.beginPath();
        ctx.moveTo(50, 200);
        ctx.quadraticCurveTo(250, 50, 450, 200);
        ctx.strokeStyle = "red";
        ctx.stroke();

        // Bézier (dos puntos de control)
        ctx.beginPath();
        ctx.moveTo(50, 300);
        ctx.bezierCurveTo(150, 100, 350, 500, 550, 300);
        ctx.strokeStyle = "purple";
        ctx.stroke();
        */

        // 7. COMBINACIONES DE LÍNEAS Y FIGURAS [cite: 48]
        /*
        ctx.fillStyle = "yellow";
        ctx.fillRect(200, 150, 200, 150); // Casa
        ctx.beginPath();
        ctx.moveTo(200, 150);
        ctx.lineTo(300, 50);
        ctx.lineTo(400, 150);
        ctx.closePath();
        ctx.fillStyle = "red";
        ctx.fill(); // Techo
        */
    }
}

// Ejecutar la función al cargar la página
window.onload = draw;
