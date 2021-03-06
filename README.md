# FindCare

_A Patient Portal Web Application._

FindCare is a hospital booking application that allows you to book appointments as easily as booking a cab. It allows instant booking using OTP and allows you to see the past appointments and also rebook the past appointments.

---

### Booking Page :

![Home Page](https://i.imgur.com/CYNqnHK.png)

This allows a patient to book an appointment (patient registration through otp send to their phone is done along, if not previously done) for a doctor.
The dates visible in the form, will be those where free slots are available for the chosen doctor.

### Login Page
![Login Page](https://i.imgur.com/dXUcNMq.png)

After entering the booking details enter your password to book.

### Slots for Doctor Concept :

The Doctor table along main details will contain a visiting time column (eg: 240 mins, 360 mins etc) , an Average Time per Patient column (15min, 30 mins etc) and a Slots column.
This Slots column will be generated by the application based on the visiting time and average time.

### Patient Profile:

![rofile Page](https://i.imgur.com/BwcCNv9.png)

Here a patient can see their past and upcoming appointments and also will have an option to re-book.

## Technology Stack

* React
* UIkit
* Codeignitor
* MySQL
* Nodemailer on AWS Lambda

## Phoenix Team Members

[Agney menon](https://github.com/BoyWithSilverWings)
[Mazahir B Haroon](https://github.com/MazahirHaroon)
[Akkshay Lawrence](https://github.com/akkshaylawrence)
