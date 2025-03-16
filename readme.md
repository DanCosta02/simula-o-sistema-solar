# Simulação do Sistema Solar

Este projeto implementa uma visualização interativa do Sistema Solar com planetas orbitando o Sol. A animação é construída usando HTML5, CSS3 e JavaScript, criando uma representação gráfica das órbitas dos planetas com base em suas distâncias reais do Sol.

## Tecnologias Utilizadas

- **HTML5**: Para estruturação do canvas onde a simulação ocorre.
- **CSS3**: Para o estilo básico da página.
- **JavaScript**: Para a lógica de simulação, movimentação dos planetas, e animação contínua.

## Funcionalidades

- O Sol é centralizado na tela e possui um raio fixo.
- Os planetas orbitam o Sol com base em suas distâncias reais em unidades astronômicas (UA).
- A velocidade angular de cada planeta é ajustada para que planetas mais próximos se movam mais rápido.
- As órbitas dos planetas são desenhadas como círculos no canvas.
- O movimento dos planetas é suavizado e animado, proporcionando uma visualização dinâmica.

## Detalhes dos Planetas

Os planetas são representados com cores distintas e seus raios e distâncias são proporcionais à realidade:

- **Mercúrio**: 0.39 UA
- **Vênus**: 0.72 UA
- **Terra**: 1.00 UA
- **Marte**: 1.52 UA
- **Júpiter**: 5.20 UA
- **Saturno**: 9.58 UA
- **Urano**: 19.18 UA
- **Netuno**: 30.07 UA

Cada planeta possui uma cor e um raio para facilitar a visualização, com a velocidade angular ajustada conforme a distância do Sol.

## Como Usar

1. Abra o arquivo HTML em um navegador de sua escolha.
2. A simulação será carregada automaticamente, com a animação do movimento dos planetas ao redor do Sol.
3. A tela será redimensionada automaticamente para se ajustar à largura e altura da janela do navegador.

## Personalizações

- **Resize do Canvas**: O canvas será redimensionado automaticamente para se ajustar à tela.
- **Raios de Órbita**: O raio das órbitas é calculado proporcionalmente à distância dos planetas do Sol.

## Contribuições

Sinta-se à vontade para fazer contribuições. Você pode melhorar a simulação, adicionar mais planetas, ajustar a animação ou criar novas funcionalidades.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
