Title : StudyCircle: Where Students Help Students Win

Description : StudyCircle is a peer tutoring site where students assist one another in learning either within or out of school. It's an open, sociable environment in which learning becomes effortless and nourishing. Regardless of whether you're stuck in math or nailing biology, you can seek assistance or offer it, on your own schedule.

Problem Statement : In most schools and colleges, students silently struggle since they don't receive the assistance they require. Some students are excellent in some subjects but hardly assist others. At the same time, a lot of students can't hire tutors or simply don't dare to ask for assistance. There is a large gap between the ones who can assist and the ones who need it. StudyCircle wants to close that gap.

Existing Application Chegg, Brainly: Primarily Q&A, not actual tutoring Wyzant, Preply: Pay-per-tutor websites, typically pricey Khan Academy: Awesome videos, but no individual relationship Discord Study Servers: Fun but chaotic and difficult to organize

What Makes StudyCircle Different? Students teaching students – Not teachers or experts, just friends One profile, two roles – Be a learner and a tutor Smart matching – Find someone on your level, in your timezone Chat integrated – No app switching AI utilities (optional) – For summarizing notes, tutor recommendations, and voice chat Free, simple, and inviting – No gates, just learning

Tools & Tech Stack Frontend: • React + Vite: Smooth and fast user experience • Tailwind CSS: Clean, modern aesthetic Backend: • Node.js + Express: Robust API setup • MongoDB: Easy database • Socket.io: For real-time chats

Authentication: • Firebase Auth or JWT: Secure login with roles (learner/tutor)

Extras: • Vercel + Render/Netlify: Easy and fast deployment • Postman: To test the backend • Figma: To create wireframes and mockups

Conclusion : StudyCircle isn't a new app, it's a fresh way of learning. It reverses the model from competition to cooperation. Where students help students instead of being behind. It's light, welcoming, and designed to develop alongside students. In a world where learning seems to be a struggle and loneliness, StudyCircle creates a bridge one supportive student at a time.

References : Wyzant Brainly
Preply Khan Academy

StudyCircle: Platform - Day-by-Day Plan (25 Days)

Week 1 - Setup & Design

Day 1: Selecting a technology stack (React, Express, MongoDB, Tailwind) Making some rough sketches (just sketching out homepage, profile, search, chat) Day 2 : Creating Github repo (with frontend & backend folders) Creating a basic folder/file structure Day 3 : Laying out the homepage (header, sections, basic styling) Day 4 : How to sign-up & log-in (auth with JWT or session cookies) Day 5 : Testing the activation flowPolish UI (basic responsive base)

Week 2 - Profiles & Search

Day 6 : Building a profile form: Subjects to teach/learn When you are available What grade level Day 7 : Saving profiles to MongoDB Connecting the frontend form to backend Day 8 : Building the frontend of the tutor search page (filters results layout)

Day 9 : Backend: an API to fetch filtered tutors (by subject, classrooms, when available) Day 10 : Linking search filters to backend Testing the search flow (see matching tutors)

Week 3 - Messaging & Scheduling

Day 11 : Building out chat backend (Socket.io, or a polling system) Day 12 : Building chat UI (to send / receive messages) Day 13 : Saving chat history into MongoDB Rendering previous chat messages Day 14 : Building out session scheduler (select date/time make request)

Day 15 : Saving session requests Rendering upcoming session for each user

Week 4 - Reviews & Notifications

Day 16 : Creating reviews form (stars feedback text) Day 17 : Rendering reviews on tutor pages Adding tags like "great notes" or "super

Day 18 : Creating a notification system (store notifications in DB). Day 19 : Displaying notifications for upcoming sessions A reminder to submit a review Alerts about new tutors Day 20 : Using a program like EmailJS or Nodemailer, you can optionally add email notifications.

Week 5 – AI & Final Touches

Day 21 : Including voice note upload in chat (record + play audio) Day 22 : Including a basic AI tutor recommendation (sort by subject match or top rating). Day 23 : Completing user interface polish : Making it responsive Resolving layout issues Including loading spinners. Day 24 : Completing testing (search, chat, schedule, and review flows) Having a friend test it and provide feedback. Day 25 : Frontend deployment (Vercel/Netlify) Backend deployment (Render/Railway)

FINISHED