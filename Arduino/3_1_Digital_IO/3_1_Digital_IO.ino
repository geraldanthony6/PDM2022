//Author:Gerald Anthony

const int buttonPin3 = 3;
const int buttonPin5 = 5;
const int blueLightPin = 13;
const int yellowLightPin = 2;
int buttonState3 = 0;
int buttonState5 = 0;
// the setup function runs once when you press reset or power the board
void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(buttonPin3, INPUT);
  pinMode(buttonPin5, INPUT);
  pinMode(blueLightPin, OUTPUT);
  pinMode(yellowLightPin, OUTPUT);
}

// the loop function runs over and over again forever
void loop() {
  buttonState3 = digitalRead(buttonPin3);
  buttonState5 = digitalRead(buttonPin5);

  if(buttonState3 == HIGH){
  digitalWrite(blueLightPin, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(200);                       // wait for a second
  digitalWrite(yellowLightPin, HIGH);    // turn the LED off by making the voltage LOW
  delay(1700);                       // wait for a second
  digitalWrite(blueLightPin, LOW);
  digitalWrite(yellowLightPin, HIGH);
  delay(500);
  digitalWrite(yellowLightPin, LOW);
  digitalWrite(blueLightPin, HIGH);
  delay(1000);
  }

  if(buttonState5 == HIGH){
  digitalWrite(yellowLightPin, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(1000);                       // wait for a second
  digitalWrite(blueLightPin, HIGH);    // turn the LED off by making the voltage LOW
  delay(3000);                 // wait for a second
  digitalWrite(yellowLightPin, LOW);
  digitalWrite(blueLightPin, LOW);
  delay(2000);
  }

  if(buttonState3 == LOW && buttonState5 == LOW){
  digitalWrite(yellowLightPin, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(500);                       // wait for a second
  digitalWrite(yellowLightPin, LOW);    // turn the LED off by making the voltage LOW
  delay(1000);    // wait for a second
  digitalWrite(blueLightPin, HIGH);   // turn the LED on (HIGH is the voltage level)
  delay(500);                       // wait for a second
  digitalWrite(yellowLightPin, LOW);    // turn the LED off by making the voltage LOW
  delay(500);  
  digitalWrite(yellowLightPin, HIGH);
  delay(500);
  digitalWrite(blueLightPin, LOW);
  delay(500);
  }
}
