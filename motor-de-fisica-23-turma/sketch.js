//motor 
const Engine = Matter.Engine;
//Mundo
const World = Matter.World;
//Corpos
const Bodies = Matter.Bodies;
//Corpo
const Body = Matter.Body;



//variaveis
var engine;
var world;

var solo, parado;

var bola



function setup() {
    createCanvas(600, 400);

    //ETAPA 1: Configurar o motor de física
    //criar o motor
    motor = Engine.create();
    mundo = motor.world;
    

    //CRIAR CORPOS
    //1º passo: definir as props do corpo
    solo_options = {isStatic:true}

    //2º passo: criar o corpo
    solo = Bodies.rectangle(300,390,600,20, solo_options)
    //3º passo: adicionar no mundo
    World.add(mundo,solo)

    //props da bola
    bola_options={restitution:1,frictionAir:0}
    bola2_options={restitution:1}
    bola3_options={restitution:2, frictionAir:1}
    //cria o corpo da bola
    bola = Bodies.circle(300,10,30, bola_options)

    bola2 = Bodies.circle(300,200,30, bola2_options)

    bola3 = Bodies.circle(200,300,30, bola3_options)
    //adiciona ela no mundo
    World.add(mundo,bola)
    World.add(mundo,bola2)
    World.add(mundo,bola3)
    //define o tamanho da ellipse pelo raio
    ellipseMode(RADIUS)
    //posiciona o retângulo a partir do centro
    rectMode(CENTER);
}


function draw() {
    background("cyan");
    
    //atualizar o motor
    Engine.update(motor);

    //colore o solo de marrom
    fill ("yellow")
    //desenha um retângulo na posição do solo
    rect (solo.position.x,solo.position.y,600,20)

    //define a cor do desenho

    //desenha uma ellipse na posição da bola


    fill ("red")
    ellipse (30,10,30)

    fill ("blue")
    ellipse(bola.position.x, bola.position.y,30)

    fill ("green")
    ellipse(bola2.position.x,bola2.position.y,30)

    fill ("orange")
    ellipse(bola3.position.x,bola3.position.y,20)
}
