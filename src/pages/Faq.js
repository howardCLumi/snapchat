import React from "react";
import "./Faq.css";
import resume from "../assets/resume.png";

const promptsData = [
  {
    question: `Name:`,
    answer: `Howard Chi`,
    id: "Prompt-1",
  },
  {
    question: `Phone Number:`,
    answer: `(515) 729-2255`,
    id: "Prompt-2",
  },
  {
    question: `Website URL:`,
    answer: `https://petpridesnapchat.netlify.app/`,
    id: "Prompt-3",
  },
  {
    question: `Github Repo:`,
    answer: `https://github.com/howardCLumi/snapchat`,
    id: "Prompt-4",
  },
  {
    question: `How many hours did you spend to complete this project?`,
    answer: `Day 1: about 4-5 hours planning
             Day 2-4: 10-12 hours of on and off coding
             Day 5: break
             Day 6: 10-12 hours
             So about 45-53 hours`,
    id: "Prompt-5",
  },
  {
    question: `What are some tools or online resources you used to complete this project?`,
    answer: `
    I learned A LOT!
    Here is my Trello board: https://trello.com/b/ilGj70uB/snapchat
    My Figma board: https://www.figma.com/file/OJO3OQ0YF6hQGSmfwsUSMS/Pet-Pride?t=sxPR9czAdKrzO6Oj-1

    Useful tools
    CSS naming convention: https://getbem.com/introduction/
    SVGs: https://freesvg.org/black-anthropomorphic-cat
    Ipsum: https://www.lipsum.com/feed/html
    Lotties: https://lottiefiles.com/128832-404-cat-pink
    CSS Flexbox Guide: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
    CSS Grid Guide: https://css-tricks.com/snippets/css/complete-guide-grid/
    Fonts: https://fonts.google.com/specimen/Poppins?preview.text=testing&preview.text_type=custom
    Button Maker: https://bennettfeely.com/clippy/
    Design System: https://coolors.co/fefffe-fe938c-2274a5-f1c40f-00cc66
    Anchor guide: https://www.w3docs.com/snippets/html/how-to-create-an-anchor-link-to-jump-to-a-specific-part-of-a-page.html
    JS Syntax: https://www.w3schools.com/js/js_arrays.asp
    Website Deployer: https://app.netlify.com/sites/petpridesnapchat/overview
    Hover Guide: https://success.appen.com/hc/en-us/articles/202703155-CSS-Guide-to-Enlarge-Images-on-Hover
    CSS Grid CrashCourse: https://www.youtube.com/watch?v=jV8B24rSN5o
    CSS Font Size Syntax: https://www.w3schools.com/css/css_font_size.asp
    CSS Box Shadow Syntax: https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
    `,
    id: "Prompt-6",
  },
  {
    question: `Was this your first time developing a website`,
    answer: `
    This was my first time having full ownership on a website. I've had a web development
    class when it was html only. I've been "a part" of website projects where I maybe add
    an about section but this is the first real deal. A lot of effort was put into this. 
    `,
    id: "Prompt-7",
  },
  {
    question: `Which features did you implement?`,
    answer: `
    A section for “About the Business
    A section with images and descriptions of three (3) to four (4) items/services offered by the business
    At least one HTML button linking to a different website
    A CSS file for styling your website. Use this file to change the color palette and fonts for your website; they cannot be the same as the ones from a template if you choose to use one.
    Use GitHub Pages (or another tool) to publish your website to the world! - MAKE SURE you give us the correct URL/link to visit your website.
    Navigation menu and multiple pages
    An “overview” section linking to other sections with page anchors
    onHover/onScroll animations
    A mobile responsive site
    More advanced use of flexbox/grid CSS

    `,
    id: "Prompt-8",
  },
  {
    question: `Reflect on the code you submitted. Choose one aspect of your project that took the longest to develop and/or challenged you. In 4-5 sentences, describe the process you went through to develop this aspect, what you learned, and what you would improve if you had more time.`,
    answer: `
    There were so many challenges on this project. This is my first time coding in Javascript, HTML, and CSS. The last time
    I touched HMTL was a couple years ago for a school project. Just learning the syntax of the language was a challenge! When you connect
    all 3 together. Placing them in the correct order to do what you want it to do. I can improve on a lot of aspects still, like learning
    which modification does what and learning technical terms!

    Another challenging aspect was learning CSS grid and flexbox! both are extremely useful grid systems!
    Just picturing how the grid is placed on the page was a new concept and I think i have this down! I'm really
    confident on my grid and flexbox skills now! But learning where to apply specific aspects took a little bit
    but it was really fun learning how to use these grid systems! I think I have these down pretty well!

    Another challenging aspect was debugging! I've never debugged using inspect element before but now
    I feel really comfortable! I know how this project is layered and using the CSS Bem naming
    convention helped a lot! I'm really proud of the backend for this project. I know as an experienced
    engineer, it might look really bad, but I think there is a lot of order and easy to follow names. at least
    hopefully after I explain it lol. I can definitely improve with my use of inspect element! There is a lot on there.
    I feel like I am aware of most of the neccessary ones, I would like to learn more about debugging.

    I kind of touched up on these earlier, but learning css and what placing the correct
    modifications to the correct component took quite a bit of time to get down! I was still making mistakes
    even after 30+ hours. I finally learned how to properly use inspect element and also learned what the different
    syntax does (justify-content vs justify-self, ect) whiched helped a lot! I'm really confident in my ability
    to traverse a project now. atleast one of this size!

    Some not so challenging ones but also very fun to learn were the hover animations, lotties, using images,
    creating arrays to hold data instead of a million <divs>, react-router and nav, and page anchors.
    Also I've always used adobe photo shop and premiere pro when I was in community college, and it was really
    cool to learn that illustrator is for SVGs and after affects is for lotties!

    Making it mobile friendly is still challenging for me! If I had more time, I would have done better in this aspect.
    Not everything is properly formatted on mobile :(
    `,
    id: "Prompt-9",
  },
];

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

const Faq = () => {
  return (
    <>
      <div className="faq__parallax">
        <div className="faq__header">
          <a href="#form-questions">Form Questions</a>
          <a href="#resume-faq">Resume</a>
          <a href="#cover-letter">Cover Letter</a>
        </div>
      </div>
      <div className="faq">
        <div className="faq__container">
          <h2 id="form-questions" className="faq__form">
            Form Questions
          </h2>
          {promptsData.map((prompt) => (
            <>
              <button className="collapsible">{prompt.question}</button>
              <div className="faq__prompt-question">
                <p>{prompt.answer}</p>
              </div>
            </>
          ))}
          <h2 id="resume" className="faq__resume-title">
            Resume
          </h2>
          <div className="faq__resume-container">
            <img src={resume} className="faq__resume" alt="resume"></img>
          </div>
          <h2 id="cover-letter" className="faq__cover-letter">
            Cover Letter
          </h2>
          <div className="faq__cover-letter-text">
            <p>Dear Snap Engineering Academy,</p>
            <p>
              I am excited to submit my Website and potentionally move on to the
              final round for a position at Snap Engineering Academy. As a
              transfer student in Software Engineering, I have tried my best to
              hone my skills in software engineering, programming, and data
              analysis through hands-on experience and academic coursework. My
              passion for innovation and technology has driven me to explore the
              latest advancements in the field and learn new technologies to
              stay current in this ever-evolving industry.
            </p>
            <p>
              My previous work experience as a software engineer at John Deere
              has given me the opportunity to develop and deliver successful
              software solutions. I have gained proficiency in programming
              languages such as Python, Java, and Web Developing languages. I
              have also gained experience in agile development methodologies and
              understand the importance of teamwork, communication, and
              collaboration in achieving project goals.
            </p>
            <p>
              I am drawn to Snapchat's commitment to creativity, innovation, and
              the company's unique culture. I am excited to join the Snap
              Engineering Academy team and contribute to developing high-quality
              software solutions that enhance the user experience. I am
              confident that my technical skills, passion for innovation, and
              eagerness to learn will make me a valuable addition to your team.
            </p>
            <p>
              Thank you for your time and consideration. I look forward to the
              opportunity to discuss my qualifications further.
            </p>
            <p>Sincerely, Howard Chi</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
