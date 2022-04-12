
const int analogInPin = A0;  
const int analogOutPin = 9;
const int player1Color = 13;
const int player2Color = 6;


int sensorValue = 0;        
int outputValue = 0;       
void setup() {

  Serial.begin(9600);
}

void loop() {

  sensorValue = analogRead(analogInPin);

  outputValue = map(sensorValue, 0, 1023, 0, 255);

  analogWrite(analogOutPin, outputValue);

  if(outputValue >= 115 && outputValue <= 130){
    digitalWrite(player1Color, HIGH);
  }
  if(outputValue < 125){
    digitalWrite(player1Color, LOW);
    digitalWrite(player2Color, LOW);
  }
  if(outputValue >= 245 && outputValue <= 255){
    digitalWrite(player2Color, HIGH);  
  }
  if(outputValue > 130 && outputValue < 245)
  {
    digitalWrite(player1Color, HIGH);
    digitalWrite(player2Color, LOW);
  }

  Serial.print("sensor = ");
  Serial.print(sensorValue);
  Serial.print("\t output = ");
  Serial.println(outputValue);

  delay(2);
}
