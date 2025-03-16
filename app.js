const canvas = document.getElementById("solarCanvas");
const ctx = canvas.getContext("2d");

// Define o Sol antes de qualquer uso
const sun = {
  x: 0, // Será atualizado no resize
  y: 0,
  radius: 40,
  color: "yellow"
};

// Defina variáveis para as órbitas
const maxDistanceAU = 30.07; // distância de Netuno em UA
const minOrbitRadius = sun.radius + 20; // garante que o planeta mais interno não fique dentro do Sol
let maxOrbitRadius; // será definido no resize do canvas

// Função para redimensionar o canvas para 100% da tela
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  // Atualiza a posição do Sol para o centro do canvas
  sun.x = canvas.width / 2;
  sun.y = canvas.height / 2;
  
  // Define o raio máximo de órbita com base na menor dimensão da tela
  maxOrbitRadius = Math.min(canvas.width, canvas.height) / 2 - 20;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Dados dos planetas (distância em UA, raio para visualização, velocidade angular básica e cor)
const planets = [
  { name: "Mercúrio", radius: 5, distance: 0.39, angle: Math.random() * 2 * Math.PI, color: "gray", speed: 47.87e3 },
  { name: "Vênus",   radius: 8, distance: 0.72, angle: Math.random() * 2 * Math.PI, color: "yellowgreen", speed: 35.02e3 },
  { name: "Terra",   radius: 10, distance: 1.00, angle: Math.random() * 2 * Math.PI, color: "blue", speed: 29.78e3 },
  { name: "Marte",   radius: 6, distance: 1.52, angle: Math.random() * 2 * Math.PI, color: "red", speed: 24.07e3 },
  { name: "Júpiter", radius: 20, distance: 5.20, angle: Math.random() * 2 * Math.PI, color: "orange", speed: 13.07e3 },
  { name: "Saturno", radius: 18, distance: 9.58, angle: Math.random() * 2 * Math.PI, color: "goldenrod", speed: 9.69e3 },
  { name: "Urano",   radius: 14, distance: 19.18, angle: Math.random() * 2 * Math.PI, color: "lightblue", speed: 6.81e3 },
  { name: "Netuno",  radius: 14, distance: 30.07, angle: Math.random() * 2 * Math.PI, color: "blue", speed: 5.43e3 }
];

// Mapeia uma distância em UA para um raio em pixels
function getOrbitRadius(distanceAU) {
  return minOrbitRadius + (distanceAU / maxDistanceAU) * (maxOrbitRadius - minOrbitRadius);
}

// Desenha a órbita (linha circular) do planeta
function drawOrbit(planet) {
  const orbitRadius = getOrbitRadius(planet.distance);
  ctx.beginPath();
  ctx.arc(sun.x, sun.y, orbitRadius, 0, 2 * Math.PI);
  ctx.strokeStyle = "rgba(255,255,255,0.2)";
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.closePath();
}

// Desenha o planeta na posição atual
function drawPlanet(planet) {
  const orbitRadius = getOrbitRadius(planet.distance);
  const x = sun.x + orbitRadius * Math.cos(planet.angle);
  const y = sun.y + orbitRadius * Math.sin(planet.angle);
  
  ctx.beginPath();
  ctx.arc(x, y, planet.radius, 0, 2 * Math.PI);
  ctx.fillStyle = planet.color;
  ctx.fill();
  ctx.closePath();
}

// Atualiza a posição do planeta alterando seu ângulo
// A velocidade angular é ajustada para que planetas mais próximos se movam mais rápido
function updatePlanetPosition(planet) {
  const baseAngularSpeed = 0.05; // ajuste para acelerar ou desacelerar a simulação
  planet.angle += baseAngularSpeed / planet.distance;
}

// Função de animação: limpa o canvas, desenha o Sol, as órbitas e os planetas, e atualiza os ângulos
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Desenha o Sol
  ctx.beginPath();
  ctx.arc(sun.x, sun.y, sun.radius, 0, 2 * Math.PI);
  ctx.fillStyle = sun.color;
  ctx.fill();
  ctx.closePath();
  
  // Para cada planeta: desenha a órbita, atualiza a posição e desenha o planeta
  planets.forEach(planet => {
    drawOrbit(planet);
    updatePlanetPosition(planet);
    drawPlanet(planet);
  });
  
  requestAnimationFrame(animate);
}

animate();
