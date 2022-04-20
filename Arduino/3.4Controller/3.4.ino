#include "PDMSerial.h"

PDMSerial pdm;

const int testPin = A1;
const int Ypin = A2;
//const int Ypin = A3;
int Spin = 2;
int led13 = 13;
const int colorButton = 10;
const int paintButton = 4;

int testPinVal = 0;

int Xval = 0;
int scaledDataX;

int Yval = 0;
int scaledDataY;
int Sval = 0;

int colorButtonState = 0;
int paintButtonState = 0;

int dt=200;
void setup() {
// put your setup code here, to run once:
Serial.begin(9600);

pinMode(testPin, INPUT);
//pinMode(Xpin,INPUT);
pinMode(Ypin,INPUT);
pinMode(Spin,INPUT);
pinMode(colorButton,INPUT);
pinMode(paintButton,INPUT);
pinMode(Spin, INPUT);

pinMode(led13, OUTPUT);

}

void loop() {
// put your main code here, to run repeatedly:
  testPinVal = analogRead(testPin);
  Yval = analogRead(Ypin);
  //Yval = analogRead(Ypin);
  Sval = digitalRead(Spin);

  paintButtonState = digitalRead(paintButton);
  colorButtonState = digitalRead(colorButton);
  if(paintButtonState == HIGH){
    digitalWrite(led13, HIGH);
  } else{
    digitalWrite(led13, LOW);
  }

  float sensorFloatValueX = Xval/1023.0;
  float sensorFloatValueY = Yval/1023.0;

  //digitalWrite(led13, HIGH);

  pdm.transmitSensor("a1", testPinVal);
  pdm.transmitSensor("a2", Yval);
  pdm.transmitSensor("paint", paintButtonState);
  pdm.transmitSensor("color", colorButtonState);
  pdm.transmitSensor("end");

  boolean newData = pdm.checkSerial();

  if(newData) {
  if(pdm.getName().equals(String("led13"))) {
    digitalWrite(led13, pdm.getValue());
  }
}

delay(dt);
Serial.print(Xval);
//Serial.print(Yval);
Serial.println(Sval);


}
