The prototype was developed mainly for androids and laptop, so the UI might differ slightly on some mobile devices. It should be fairly consistent on all laptops using chrome.


# Installation

1. Make sure you have node and npm installed. A simple check can be done in the terminal by running "node -v"
2. Clone the repo to your computer
3. Inside the newly cloned repo, do "npm install" in your terminal.
4. Build the project with "npm run build" 
5. From the same directory run "node server/server.js"
6. The server should now be running on your local machine and serving content through your local IP address (localhost in your browser window.) on port 4000. I.e. type "localhost:4000" in your browser to see if it shows you the login page. You can access the login page on your phone by typing "192.168.1.8:4000" in your phones browser.

# How to use it
## The teachers Interface
Is accessible through "localhost:4000/host". The resulting screen should be this:
<img width="1209" alt="Skjermbilde 2019-10-25 kl  11 02 25" src="https://user-images.githubusercontent.com/25436721/67535981-580c7d00-f718-11e9-8d3a-e04f186a22fb.png">

Opening this window effectively starts a new quiz session. Students are now able to join the session. When students join, the participants counter starts incrementing. If you close the tab, it stops the session and students are shown the results of the quiz session. After a refresh they will see that they have been logged out.

To post a question to the participants, simply follow the steps in the interface and click "Post". After the time limit you set (plus a little margin to collect answers) you will be redirected to the result screen:
<img width="1209" alt="Skjermbilde 2019-10-25 kl  11 21 06" src="https://user-images.githubusercontent.com/25436721/67536247-90608b00-f719-11e9-8b77-c10282e73f41.png">

This image shows that you have posted two questions. The newest question will always be shown as the most right bar. Out of the one participants, on the first question no one answered correctly (shown by the lack of a blue bar) and on the second question one person answered correctly (shown be the green bar reaching 1.0).

To post a new question simply click the back button and redo the firs steps.

## The students interface
Accessible to as the root url, i.e. "localhost:4000" or on your phone just "192.168.1.8:4000". This will greet you with the login screen:
![Screenshot_20191025-113443_Chrome](https://user-images.githubusercontent.com/25436721/67536737-f5b57b80-f71b-11e9-991f-497b6a665165.jpg)

If you try to login before the teacher has started the session, it will not respond. After a the teacher UI has been opened in a browser, the student can login and will be redirected to this page:
![Screenshot_20191025-113529_Chrome](https://user-images.githubusercontent.com/25436721/67536738-f5b57b80-f71b-11e9-884a-5b00a76574bc.jpg)
This is the Idle page, and is where the application listens for new questions. The screen encourages students to pay attention to class since there are currently no questions to be answered.

Using the teachers UI to create a new question where I ask about the students colour preference, they are greeted with this screen:
![Screenshot_20191025-113624_Chrome](https://user-images.githubusercontent.com/25436721/67536739-f64e1200-f71b-11e9-8880-f24e5633597b.jpg)

You can choose an answer by tapping one of the boxes:
![Screenshot_20191025-113636_Chrome](https://user-images.githubusercontent.com/25436721/67536740-f64e1200-f71b-11e9-9098-89e49a947d25.jpg)

After the timer goes out, you are shown the result of your answer:
![Screenshot_20191025-113643_Chrome](https://user-images.githubusercontent.com/25436721/67536742-f64e1200-f71b-11e9-9e05-99f3b6f5a69e.jpg)
After that, you are redirected to the Idle screen and the application stays there until either a new question is posed or the quiz is terminated.

When the quiz finishes, students are shown results from the session. You gain a 100 points per correctly answered question.
![Screenshot_20191025-113700_Chrome](https://user-images.githubusercontent.com/25436721/67536743-f6e6a880-f71b-11e9-9029-c02faa6adf53.jpg)
The chart shows the average score of some groups you might participate in. For example it might show that Interaction Design students had an average score of just below 60 in this session.
If you refresh from here, you will be redirected to the login page.
