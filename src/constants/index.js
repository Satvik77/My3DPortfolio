import {
    mobile,
    backend,
    creator,
    web,
    Java,
    python,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    BBR,
    RTU,
    AEGS,
    Pulmones,
    FoodApp,
    ERDeepak,
    CAPriyank,
    HRPankaj,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Python Developer",
      icon: mobile,
    },
    {
      title: "MySQL DB Developer",
      icon: backend,
    },
    {
      title: "Java Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: Java,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "Frontend Developer",
      company_name: "Bit to Byte Robotics ",
      icon: BBR,
      iconBg: "#383E56",
      date: "May 2022 - July 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Machine Learning Developer",
      company_name: "RTU,Kota",
      icon: RTU,
      iconBg: "#E6DEDD",
      date: "March 2023 - June 2023",
      points: [
        "It is an Automated-Essay-Grading-System which is my final year project." , 
        " We created a web app that can automatically score essays." ,
        "The grading model was trained using HP Essays Dataset from Kaggle.",
        "Used Long Short Term Memory (LSTM) network and machine learning algorithms to train model." ,
        "WebApp was created using Flask framework.",
      ],
    },
    {
      title: "Full stack Developer (Freelancer)",
      company_name: "Er Deepak Sharma",
      icon: ERDeepak,
      iconBg: "#383E56",
      date: "June 2023 - July 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Satvik proved me wrong.",
      name: "Pankaj Sharma",
      designation: "HR",
      company: "BBR Robotics",
      image: HRPankaj,
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Satvik does.",
      name: "Er Deepak Sharma",
      designation: "Ex SDE",
      company: "Intuit",
      image: ERDeepak,
    },
    {
      testimonial:
        "After Satvik optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Priyank Joshi",
      designation: "Ex CA",
      company: "Arvind Textiles",
      image: CAPriyank,
    },
  ];
  
  const projects = [
    {
      name: "Automated-Essay-Grading-System",
      description:
        "Introducing our Final Year Project: Automated Essay Grading WebApp!Our innovative web app utilizes LSTM networks and machine learning algorithms to automatically score essays. With the HP Essays Dataset from Kaggle, we've trained a robust grading model. Developed using Flask framework, our user-friendly platform streamlines the essay evaluation process for teachers and students alike.  Join us in revolutionizing essay grading!",
      tags: [
        {
          name: "NLTK",
          color: "blue-text-gradient",
        },
        {
          name: "Flask",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
        {
          name: "AI/ML/DL",
          color: "red-text-gradient",
        },
        {
          name: "Keras",
          color: "orange-text-gradient",
        },
      ],
      image: AEGS,
      source_code_link: "https://github.com/Satvik77/Final_Year_Project",
    },
    {
      name: "Pulmones",
      description:
        " Welcome to our innovative Lung Health Monitoring and Supervision Website! With the use of JavaScript functions, we engage patients by asking relevant questions and provide Disease Probability assessments for better health management.Harnessing the power of HTML5 and CSS3, we have designed a seamless user experience to ensure user-friendly navigation and accessibility. Our mission is to empower patients with a reliable platform for monitoring and supervision of their lung health.Explore our website and take charge of your lung health today!",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS3",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: Pulmones,
      source_code_link: "https://github.com/Satvik77/Pulmones",
    },
    {
      name: "Food Delivery Website",
      description:
        "Introducing our Responsive Food Delivery Form!Satisfy your cravings with ease using our interactive food delivery form, crafted with HTML, CSS, and JavaScript. Browse through our delectable food item templates, place your order hassle-free, and get ready to indulge in a delightful culinary experience.Our user-friendly design ensures a seamless ordering process, and once you've made your selections, you can even print out your customized bill for your convenience.Get ready to embark on a mouthwatering journey with our Food Delivery Form!",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "CSS3",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
      ],
      image: FoodApp,
      source_code_link: "https://github.com/Satvik77/Food-Delivery-Website",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };