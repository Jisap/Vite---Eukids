import course1 from "@assets/course-image-01.jpg";
import course2 from "@assets/course-image-02.jpg";
import course3 from "@assets/course-image-03.jpg";
import course4 from "@assets/course-image-04.jpg";
import course5 from "@assets/course-image-05.jpg";
import course6 from "@assets/course-image-06.jpg";
import course7 from "@assets/course-image-07.jpg";
import course8 from "@assets/course-image-08.jpg";

import author1 from "@assets/author-01.png";
import author2 from "@assets/author-02.png";
import author3 from "@assets/author-03.png";
import author4 from "@assets/author-04.png";
import author5 from "@assets/author-02.png";
import author6 from "@assets/author-03.png";
import author7 from "@assets/author-02.png";
import author8 from "@assets/author-03.png";

export const courses = [
  {
    id: 1,
    courseImage: course1,
    authorImage: author1,
    title: "Little Adventurers Travel the World Together!",
    className: "bg-primary-2",
    age: "3-8",
    duration: "50 Min",
    rating: "4.5",
    reviews: "124",
    instructor: "Maria Sofa",
    price: "$15",

    about:
      "A fun travel-themed course for young learners who love exploring the world. Children will discover countries, cultures, landmarks, and exciting adventures through playful learning activities.",

    description:
      "This course introduces children to global travel in a simple and engaging way. Students will learn about different places, traditions, and famous destinations while building creativity, curiosity, and communication skills. The lessons are designed to inspire imagination and make learning feel like a real adventure.",

    level: "Beginner",
    students: "1240",
    lectures: "18",
    certificate: true,

    curriculum: [
      {
        title: "Introduction",
        lessons: [
          "Welcome to the Course",
          "Meet Your Instructor",
          "Course Overview",
        ],
      },
      {
        title: "World Adventures",
        lessons: ["Exploring Europe", "Discovering Asia", "Amazing Landmarks"],
      },
      {
        title: "Creative Activities",
        lessons: [
          "Travel Storytelling",
          "Cultural Projects",
          "Final Adventure Challenge",
        ],
      },
    ],
  },

  {
    id: 2,
    courseImage: course2,
    authorImage: author2,
    title: "Weekly English Language Arts Club (Age 9-13)",
    className: "bg-primary-5",
    age: "4-10",
    duration: "60 Min",
    rating: "4.9",
    reviews: "210",
    instructor: "Arya Stark",
    price: "$10",

    about:
      "A weekly English learning club focused on reading, writing, grammar, and speaking. It helps students build confidence in language skills through fun and interactive sessions.",

    description:
      "This course is designed to strengthen English Language Arts skills in a supportive and creative environment. Students will practice reading comprehension, grammar, vocabulary, writing, and communication through structured activities and weekly lessons. It is a great choice for learners who want to improve fluency and express their ideas better.",

    level: "Intermediate",
    students: "2100",
    lectures: "24",
    certificate: true,

    curriculum: [
      {
        title: "Introduction",
        lessons: ["Course Overview", "Reading Basics", "Writing Fundamentals"],
      },
      {
        title: "Language Skills",
        lessons: [
          "Grammar Practice",
          "Vocabulary Building",
          "Reading Comprehension",
        ],
      },
      {
        title: "Creative Writing",
        lessons: ["Story Writing", "Essay Writing", "Final Project"],
      },
    ],
  },

  {
    id: 3,
    courseImage: course3,
    authorImage: author3,
    title: "Dragon, Monster & Magical Creature Drawing Club",
    className: "bg-primary-3",
    age: "3-8",
    duration: "50 Min",
    rating: "4.5",
    reviews: "88",
    instructor: "Rosabell",
    price: "$16",

    about:
      "A creative drawing course for students who love fantasy characters like dragons, monsters, and magical creatures. It teaches art in a fun and imaginative way.",

    description:
      "In this course, students will learn how to draw fantasy characters step by step. They will explore basic shapes, sketching techniques, color ideas, and creative design methods to bring dragons, monsters, and magical creatures to life. The course also helps improve imagination, confidence, and artistic skill.",

    level: "Beginner",
    students: "980",
    lectures: "20",
    certificate: true,

    curriculum: [
      {
        title: "Drawing Basics",
        lessons: [
          "Sketching Fundamentals",
          "Shape Practice",
          "Character Design",
        ],
      },
      {
        title: "Fantasy Creatures",
        lessons: ["Drawing Dragons", "Drawing Monsters", "Creature Details"],
      },
      {
        title: "Creative Projects",
        lessons: ["Build Your Creature", "Color Techniques", "Final Artwork"],
      },
    ],
  },

  {
    id: 4,
    courseImage: course4,
    authorImage: author4,
    title: "Bloxburg 1 on 1 Class Learn to Build or Improve",
    className: "bg-primary-9",
    age: "3-8",
    duration: "45 Min",
    rating: "4.5",
    reviews: "44",
    instructor: "Morgan Jofs",
    price: "$35",

    about:
      "A personalized Bloxburg building class that helps learners improve their building, decorating, and design skills with one-on-one guidance.",

    description:
      "This course teaches students how to build better houses, rooms, and creative spaces in Bloxburg. From layout planning to decoration and advanced design, learners will get practical tips to make their builds more polished and impressive. It is ideal for students who want to improve their creativity and building style in a focused way.",

    level: "Advanced",
    students: "740",
    lectures: "16",
    certificate: true,

    curriculum: [
      {
        title: "Building Basics",
        lessons: ["Tools Overview", "Layout Design", "Planning"],
      },
      {
        title: "Advanced Design",
        lessons: ["Modern Homes", "Interior Design", "Decorations"],
      },
      {
        title: "Final Build",
        lessons: ["Custom Project", "Optimization", "Showcase"],
      },
    ],
  },

  {
    id: 5,
    courseImage: course5,
    authorImage: author5,
    title: "Girls Just Want to Have Fun Art and Ongoing Social Club",
    className: "bg-primary-6",
    age: "3-8",
    duration: "50 Min",
    rating: "4.5",
    reviews: "44",
    instructor: "Maria Sofa",
    price: "$35",

    about:
      "A fun and friendly art club where students can create, socialize, and enjoy creative activities together in a relaxed environment.",

    description:
      "This course combines art and social interaction to create a joyful learning experience. Students will explore drawing, painting, and craft activities while making friends and expressing themselves creatively. The class is designed to encourage confidence, creativity, and group participation in a positive space.",

    level: "Beginner",
    students: "1100",
    lectures: "22",
    certificate: true,

    curriculum: [
      {
        title: "Getting Started",
        lessons: ["Introduction", "Materials", "Creative Ideas"],
      },
      {
        title: "Art Activities",
        lessons: ["Drawing", "Painting", "Craft Projects"],
      },
      {
        title: "Showcase",
        lessons: ["Group Project", "Presentation", "Celebration"],
      },
    ],
  },

  {
    id: 6,
    courseImage: course6,
    authorImage: author6,
    title: "Private Math Tutoring Grades 3rd-7th (One Time Class)",
    className: "bg-primary-7",
    age: "4-9",
    duration: "50 Min",
    rating: "4.5",
    reviews: "44",
    instructor: "Arya Stark",
    price: "$35",

    about:
      "A private math tutoring class for students who need extra support in school math topics. It focuses on building confidence, accuracy, and problem-solving skills.",

    description:
      "This one-on-one math class helps students understand important topics such as numbers, operations, fractions, geometry, and word problems. The lessons are personalized to the learner’s level so they can improve step by step. It is a strong choice for students who want focused support and better results in math.",

    level: "Intermediate",
    students: "1350",
    lectures: "28",
    certificate: true,

    curriculum: [
      {
        title: "Math Foundations",
        lessons: ["Numbers", "Operations", "Practice"],
      },
      {
        title: "Problem Solving",
        lessons: ["Fractions", "Geometry", "Word Problems"],
      },
      {
        title: "Assessment",
        lessons: ["Review", "Quiz", "Final Evaluation"],
      },
    ],
  },

  {
    id: 7,
    courseImage: course7,
    authorImage: author7,
    title: "A Full One on One Roblox Game Making Experience",
    className: "bg-primary-8",
    age: "3-8",
    duration: "50 Min",
    rating: "4.5",
    reviews: "44",
    instructor: "Rosabell",
    price: "$35",

    about:
      "A complete one-on-one Roblox game creation class for students who want to learn game design, building, and development from scratch.",

    description:
      "This course teaches students how to make their own Roblox game using practical, easy-to-follow steps. Learners will explore game planning, building, scripting basics, testing, and publishing. It is perfect for students who want to turn their creativity into a playable game and understand how game development works.",

    level: "Advanced",
    students: "1560",
    lectures: "26",
    certificate: true,

    curriculum: [
      {
        title: "Game Development Basics",
        lessons: ["Studio Setup", "Game Planning", "Assets"],
      },
      {
        title: "Building Games",
        lessons: ["Maps", "Characters", "Gameplay"],
      },
      {
        title: "Publishing",
        lessons: ["Testing", "Optimization", "Launch"],
      },
    ],
  },

  {
    id: 8,
    courseImage: course8,
    authorImage: author8,
    title: "Learn To Read With Teacher Tracy - Individual Beginner",
    className: "bg-primary-5",
    age: "7-9",
    duration: "50 Min",
    rating: "4.5",
    reviews: "44",
    instructor: "Morgan Jofs",
    price: "$35",

    about:
      "A beginner reading class designed to help children build strong reading foundations, improve vocabulary, and gain confidence with words.",

    description:
      "This course supports young learners as they develop reading skills through phonics, short stories, pronunciation practice, and guided exercises. The lessons are simple, engaging, and carefully planned to help beginners improve fluency and understanding step by step. It is a great start for children who are learning to read independently.",

    level: "Beginner",
    students: "920",
    lectures: "18",
    certificate: true,

    curriculum: [
      {
        title: "Reading Basics",
        lessons: ["Alphabet", "Phonics", "Pronunciation"],
      },
      {
        title: "Reading Practice",
        lessons: ["Short Stories", "Vocabulary", "Fluency"],
      },
      {
        title: "Final Review",
        lessons: ["Reading Test", "Feedback", "Certificate"],
      },
    ],
  },
];
