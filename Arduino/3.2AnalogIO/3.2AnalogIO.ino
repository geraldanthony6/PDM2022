/* Game Mechanics:
 *  Objective - Activate the white light by reaching half of the analog value and remaining there for 5 seconds then player 2 can activate the second light by reaching the maximum analog value.
 *  Rules - You can't activate the green light unless the player has remained at half of the max analog value for 5 seconds. The game is reset once player 2 activates the green light.
 *  Challenge - Don't move for 5 seconds once the white light appears.
 *  Interaction - Twist the analog photoresistor to activate the lights.
 */
const int analogInPin = A0;  
const int analogOutPin = 9;
const int player1Color = 13;
const int player2Color = 6;

bool player1Complete = false;
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
    delay(5000);
    player1Complete = true;
  }
  if(outputValue < 115){
    player1Complete = false;
    digitalWrite(player1Color, LOW);
    digitalWrite(player2Color, LOW);
  }
  if(outputValue >= 245 && outputValue <= 255 && player1Complete == true){
    digitalWrite(player2Color, HIGH);  
    digitalWrite(player1Color, LOW);
  }
  if(outputValue > 130 && outputValue < 245)
  {
    digitalWrite(player1Color, HIGH);
    digitalWrite(player2Color, LOW);
  }

  //Testing prints
  Serial.print("sensor = ");
  Serial.print(sensorValue);
  Serial.print("\t output = ");
  Serial.println(outputValue);

  delay(2);
}
