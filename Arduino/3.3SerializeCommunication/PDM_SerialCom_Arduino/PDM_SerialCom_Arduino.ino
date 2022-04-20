#include "PDMSerial.h"

PDMSerial pdm;

const int analogPin = A1;  


const int outPin6 = 6;    
const int outPin13 = 13;  

int sensorValue = 0;
int sensorTransmitValue = 0;



void setup() {
  pinMode(analogPin, INPUT);

  pinMode(outPin6, OUTPUT);
  pinMode(outPin13, OUTPUT);

  Serial.begin(9600);

}

void loop() {
  sensorValue = analogRead(analogPin);
  float sensorFloatValue = sensorValue/1023.0;
   
  pdm.transmitSensor("a0", sensorValue);
  pdm.transmitSensor("float0", sensorFloatValue);
  pdm.transmitSensor("end");

  boolean newData = pdm.checkSerial();
  
  if(newData) {
    if(pdm.getName().equals(String("led6"))) {
      digitalWrite(outPin6, pdm.getValue());
    } 
    if(pdm.getName().equals(String("led13"))) {
      digitalWrite(outPin13, pdm.getValue());
    }
  }

}
