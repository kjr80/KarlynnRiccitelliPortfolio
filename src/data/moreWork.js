// Real "other work" entries, pulled verbatim from Karlynn's existing
// portfolio (https://sites.google.com/view/riccitelli-overall-portfolio),
// mainly the "My Work" and "Extracurriculars" sections. As with
// src/data/projects.js, every `description`/`body` string below is an exact
// quote (or several stitched together) from that site — nothing has been
// rewritten or paraphrased. `slug` drives routing (/more-work/:slug) and is
// the key used to track viewed items in MoreWorkContext, and to look up a
// matching image in src/assets/stamps/<slug>.jpg (see src/data/stampImages.js)
// — none exist yet for these, so they'll just show the plain stamp frame
// with no photo until you add one.
//
// `links` is optional — a list of { label, url } pointing to the actual
// deliverable (a Figma file, a GitHub notebook, a video, a Scratch project,
// etc.), since most of these live outside this site rather than as a full
// case study here.

export const moreWork = [
  {
    slug: "chrp",
    title: "CHRP",
    tag: "UX · Human Centered Systems",
    description: "We created CHRP, a social media platform specifically designed for children.",
    body: "The following is a group project created for Human Centered Systems. We were in charge of coming up with a product for a certain problem space — in our case the space was children on social media. We created CHRP, a social media platform specifically designed for children. We had to create prototypes, administer user testing, and present our entire process to the class.",
    links: [
      { label: "Slideshow presentation", url: "https://docs.google.com/presentation/d/1BQ9BVtYHLp8v9CT-BhkSab7T-jUCSu463Hd7YvWoy0A/edit?usp=sharing" },
      { label: "Project report", url: "https://docs.google.com/document/d/17gXSUBe8MMF5UWMtOdAWKgd12WaWgAmzG2FMmzvV0vM/edit?usp=sharing" },
    ],
  },
  {
    slug: "mobile-app-fictional-business",
    title: "Mobile app for a fictional business",
    tag: "UX · User Centered Design",
    description: "We were tasked with creating a mobile app for a fictional business.",
    body: "The following is a group project created for User Centered Design. We were tasked with creating a mobile app for a fictional business. Throughout the process, we created wireframes, lo-fi and hi-fi prototypes, and also conducted user testing. We then presented our Figma prototype to the class.",
    links: [
      { label: "Prototype presentation", url: "https://docs.google.com/presentation/d/1J4jCVR2cjNanLJstqCOhUa5NQS_RKcio0hT7XkaRSNQ/edit?usp=sharing" },
    ],
  },
  {
    slug: "emotional-expressions",
    title: "Emotional Expressions: A Lexicon of Feelings",
    tag: "Interactive · Kiosk",
    description: "An immersive collection of words for feelings that are hard to describe.",
    body: "Emotional Expressions: A Lexicon of Feelings is an immersive collection of words for feelings that are hard to describe. It's meant to give the user clarity and reassurance on emotions that may have been too confusing for them to express. The user views the title screen, then progresses to the next page where they are presented with several word options. They can then explore each word's meaning, coupled with visuals and short story scenarios that invoke that feeling within them. By the end, the user should be able to better express themselves in ways they may not have thought of before. This project was coded using HTML, CSS, and Javascript, and the materials within were edited using Adobe Premiere Pro and Adobe Photoshop. The project was created for a 16:9 aspect ratio and was displayed on a kiosk screen.",
    links: [
      { label: "View the full portfolio", url: "https://kjr80.github.io/FinalPortfolioPDC/" },
    ],
  },
  {
    slug: "pittsburgh-neighborhoods-data",
    title: "Which Pittsburgh neighborhood is best for kids?",
    tag: "Data · Python",
    description: "A team project analyzing data sets to answer which Pittsburgh, PA neighborhood is best for kids to have fun outside in.",
    body: "A team project for Big Ideas in Computing & Information, analyzing data sets with Python and pandas to answer the question: \"which neighborhood in Pittsburgh, PA is best for kids to have fun outside in?\"",
    links: [
      { label: "GitHub notebook", url: "https://github.com/kjr80/Final_Project/blob/main/FP_Notebook.ipynb" },
    ],
  },
  {
    slug: "cocktail-database",
    title: "Cocktail database project",
    tag: "Data · SQL",
    description: "A group final project building a SQL database for a business use case.",
    body: "We had a group project for our final in Database Management Concepts & Applications. The team built a SQL database for a business use case, then wrote a report covering possible questions for the database and the queries that would answer them.",
  },
  {
    slug: "music-mental-health-dataviz",
    title: "Mental health & music data visualization",
    tag: "Data · Jupyter",
    description: "A Data Visualization in Jupyter Notebook exploring possible correlations between mental health and the music people listen to.",
    body: "For Digital Narrative & Interactive Design's Unit 1 project, I created a Data Visualization in Jupyter Notebook exploring possible correlations between people with mental health issues and the music they listen to.",
    links: [
      { label: "Video walkthrough", url: "https://www.loom.com/share/85ca34a165b9438fa793742ce26cdb73?sid=34790fde-d793-467e-8ccf-4fbfc1645e14" },
    ],
  },
  {
    slug: "arduino-orpheus-eurydice",
    title: "Orpheus and Eurydice, in Arduino",
    tag: "Creative coding · Arduino",
    description: "A partner project recreating the last scene from the myth of Orpheus and Eurydice using Arduino programming.",
    body: "Our unit 2 project was a partner project where we were tasked with recreating a scene from a children's story using Arduino programming. My partner and I decided to show the last scene in the myth of Orpheus and Eurydice.",
    links: [
      { label: "Watch the video", url: "https://youtu.be/0TPQlmYEdYw?si=OBNtxng1OG0cpJdZ" },
    ],
  },
  {
    slug: "unity-2d-game",
    title: "2D video game in Unity",
    tag: "Game design · Unity",
    description: "What was supposed to be a group project unfortunately turned into a solo project — a 2D video game made in Unity.",
    body: "What was supposed to be a group project for Unit 3 unfortunately turned into a solo project for me. I had to make a 2D video game using Unity software, and it was certainly one of the more testing projects I've had. Much to my own surprise, I was still able to put forth a product.",
    links: [
      { label: "Watch the play-through", url: "https://youtu.be/b7moBmHo85w?si=3sfqyEan194qBlpQ" },
      { label: "Read the reflection paper", url: "https://docs.google.com/document/d/1PV5aSuk06LjgxvRcWfmNXwXDVh4D3j9g0rMyuV14J34/edit?tab=t.0" },
    ],
  },
  {
    slug: "scratch-digital-humanity",
    title: "Digital Humanity midterm, in Scratch",
    tag: "Creative coding · Scratch",
    description: "An educational animation exploring how affordances aid in creative expression.",
    body: "For my Digital Humanity midterm I explored the question: how does the use of affordances aid in creative expression? To do so, I created an educational animation using Scratch software that also includes slight interaction from the user.",
    links: [
      { label: "Play it on Scratch", url: "https://scratch.mit.edu/projects/810785483" },
    ],
  },
  
];
