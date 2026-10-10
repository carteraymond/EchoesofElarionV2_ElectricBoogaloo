Overview

Echoes of Elarion is an interactive web application built with Python and Django. The application allows users to enter an adventurer name and explore the lore of the fictional world of Elarion. As users discover new pieces of lore, they earn experience points and can eventually level up to unlock additional content.

The purpose of this project is to gain practical experience developing web applications with Python and Django. This project demonstrates how Django handles web pages, URL routing, templates, user input, sessions, and dynamically generated content. The application is also designed to be expanded into a larger interactive experience in the future.

How to Run

To run Echoes of Elarion on a local computer, you will need Python installed.

1. **Clone the Repository**

Clone or download this repository and open a terminal in the project folder.

2. **Create a Virtual Environment**

Create a new Python virtual environment:

    python -m venv .venv

3. **Activate the Virtual Environment**

On Windows PowerShell:

    .\.venv\Scripts\Activate.ps1
4. **Install the Required Packages**

Install the project's required Python packages using requirements.txt:

    pip install -r requirements.txt
5. **Start the Django Development Server**

Run the Django development server:

    python manage.py runserver
6. Open the Application

Open the following address in a web browser:

http://127.0.0.1:8000/

The application begins on the Welcome page, where the user enters their adventurer name before beginning their journey.

Software Demo

[Software Demo Video](https://youtu.be/3bqb-JTxYu4)


# Web Pages

**Welcome Page**

The Welcome page is the starting point of the application. The user enters an adventurer name and submits the form. Django stores the player's name, experience points, level, and discovered lore in the user's session before sending them to the Home page.

**Home Page**

The Home page displays the player's name, current level, and experience points. It also provides an introduction to the world of Elarion and gives the player access to the Lore page.

When the player reaches Level 2, the Home page dynamically displays a new Path of History that was previously unavailable.

**Lore Page**

The Lore page allows the player to choose from several topics about the world of Elarion. The available topics include the Wells of Elarion, the War of Sundering, Nytherael, the Concordance, and the Strange Observer.

When a player selects a topic, Django dynamically displays the selected lore entry. The first time a player discovers a topic, they receive 1 XP. Discovering the same topic again does not award additional XP.

After discovering all five unique lore entries, the player reaches 5 XP and advances to Level 2.

**Path of History**

The Path of History is unlocked when the player reaches Level 2. This page provides additional historical information about Elarion and expands upon the mystery of the Strange Observer.

The page is protected by Django so that players below Level 2 cannot access it directly. Players who have not reached the required level are redirected back to the Home page.

# Development Environment

The software was developed using Visual Studio Code, Python, Django, HTML, CSS, Git, GitHub, and SQLite.

The primary programming language used was Python. Django 5.2.17 was used as the web framework for handling URL routing, views, sessions, and server-side template rendering.

HTML was used to create the structure and content of the web pages. CSS was used to style the application and provide a consistent visual design.

The application uses Django's built-in session system to store player information such as the player's name, XP, level, and discovered lore.

# Useful Websites

* [Django Documentation](https://docs.djangoproject.com/)
* [Django Templates Documentation](https://docs.djangoproject.com/en/5.2/topics/templates/)
* [Django Sessions Documentation](https://docs.djangoproject.com/en/5.2/topics/http/sessions/)
* [Django Static Files Documentation](https://docs.djangoproject.com/en/5.2/howto/static-files/)
* [Python Documentation](https://docs.python.org/3/)

# Future Work

* Add additional levels and unlockable paths.
* Add more lore entries, characters, locations, and historical events.
* Expand the Path of History into a larger interactive progression system.
* Add a database to permanently store player progression.
* Add additional interactive choices and player decisions.
* Improve the visual design with additional artwork and themed elements.
* Expand the application into a larger interactive experience based on the world of Elarion.
