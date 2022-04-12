// Serial port global variables

let serialPDM;                        
let portName = 'COM3';    

let sensors;
let backgroundColor = 'BLACK';


function setup() {

  serialPDM = new PDMSerial(portName);
  console.log(serialPDM.inData);

  sensors = serialPDM.sensorData;
  
  createCanvas(800,600);
  
}

// Send information via .transmit(name,value)

function keyPressed() {
  serialPDM.transmit('led6',1);
  serialPDM.transmit('led13', 0);
  
  console.log(serialPDM.sensorsConnected());
}

function keyReleased() {
  serialPDM.transmit('led6',0);
  serialPDM.transmit('led13', 1);
}


function draw(){
  background(backgroundColor);
  textSize(32);
  textAlign(CENTER);
  fill(32, 140, 110);
  text("a0: "+ sensors.a0, 10, 30);
  
  if(sensors.a0 < 500){
    backgroundColor = 'BLUE';
  } else if(sensors.a0 > 500){
    backgroundColor = 'BLACK';
  }
}


