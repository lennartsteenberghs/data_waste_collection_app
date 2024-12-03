## Waste data collection app

This repository contains the results of a Master Thesis project conducted at the University of Aruba, aimed at addressing challenges in waste consumption and recycling through the development of a mobile application. The project was part of an ongoing PhD research initiative led by Alba de Agustin Camacho, focused on leveraging citizen science and technology to improve waste management on the island of Aruba.

---

## Project Objectives

The mobile application serves two critical purposes:
1. **Data Collection**: Facilitating the collection of data on waste consumption from users.
2. **Awareness Raising**: Educating and engaging users to promote recycling practices.

By combining these functionalities, the project aims to support research into the role of technology and citizen engagement in advancing waste management systems.

---

## Key Features

1. **QR Code Scanning**:
   - Users can scan a **QR code** attached to a waste bin to identify its location and type.
2. **Waste Logging**:
   - After scanning, users can input the type of waste they are discarding (e.g., plastic, paper, glass).
3. **Optional Photo Verification**:
   - Users can choose to take a photo of the waste for data verification purposes, supporting the research initiative with visual records.
4. **Educational Insights**:
   - The app provides feedback and tips on proper recycling practices to promote sustainable habits.

---

## Technical Design

The development of the application follows the Model-View-Controller (MVC) software design pattern. This approach separates the application's functionality into three interconnected components:

1. **Model**:
   - Represents the application’s data and business logic.
   - In this project, the Model is implemented in the APIs.
2. **View**:
   - Represents the user interface or presentation layer.
   - The two frontends in this project function as the View, as they are what users interact with.
3. **Controller**:
   - Acts as an intermediary between the Model and the View.
   - Handles user input and updates the Model accordingly. In this project, the Controller is implemented in the APIs.
     

---

## Owner Application

There is a separate repository for the web application designed for analyzing and managing the collected data:   
  [GitHub Repository](https://github.com/lennartsteenberghs/statisticsdontwastedata)

---

