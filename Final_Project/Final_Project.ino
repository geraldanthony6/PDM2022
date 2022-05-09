#include "PDMSerial.h"

PDMSerial pdm;

const int led13 = 13;
const int circleButton = 2;
const int squareButton = 4;
const int spaceBarButton = 6;

int circleButtonState = 0;
int squareButtonState = 0;
int spaceBarButtonState = 0;

int delayTime = 200;
void setup() {
  Serial.begin(9600);

  pinMode(led13, OUTPUT);
  pinMode(circleButton, INPUT);
  pinMode(sqaureButton, INPUT);
  pinMode(spaceBarButton, INPUT);
}

void loop() {
   
   circleButtonState = digitalRead(circleButton);
   squareButtonState = digitalRead(squareButton);
   spaceBarButtonState = digitalRead(spaceBarButton);

   if(sqaureButtonState == HIGH){
      digitalWrite(led13, HIGH);
    } else{
      digitalWrite(led, LOW);  
    }

    pdm.transmitSensor("circle", circleButtonState);
    pdm.transmitSensor("square", squareButtonState);
    pdm.transmitSensor("spaceBar", spaceBarButtonState);
    pdm.transmitSensor("end");

    boolean newData = pdm.checkSerial();

    if(newData) {
      if(pdm.getName().equals(String("led13"))) {
        digitalWrite(led13, pdm.getValue());
      }  
    }

    delay(delayTime);

}
