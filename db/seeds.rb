# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Program.create([{
  name: "Intro of Coding",
  description: "Have you ever wished you know how to program, but have no idea where to start from?
  \nThis course will teach you how to program in Scratch, an easy to use visual programming language. More importantly, it will introduce you to the fundamental principles of computing and it will help you think like a software engineer.
  \nSKILLS YOU WILL GAIN:\nComputer Programming\nAlgorithms\nProgramming Language\nScratch (Programming Language)",
  duration_days: 90,
  img_url: {name: "Intro of Coding", key:"1", url:"https://res.cloudinary.com/de6puygvt/image/upload/v1648695665/coding%20courses/ykdltfnsiqpegevzz2j4.jpg"
  }}, {
  name: "Web Development",
  description: "This Web Development course is probably one of the most complete and comprehensive online courses you will ever get to see covering web development from top to bottom. In more than 30 hours of content, this course will cover all you need to know about how to become a top skilled web developer even if you never programmed before. In this course we will be covering the following subjects:
  FrontEnd Development: JavaScript, jQuery, HTML5, CSS3, Bootstrap
  BackEnd Development: PHP, MySQL (MySQLi)
  This course will give you all the insights on how the Internet works and after you've completed the course, you will have the breadth of knowledge to be able to create your own websites and apps with the latest technology.
  Note: This course is regularly updated with new lectures, guides and projects.",
  duration_days: 210,
  img_url: { name: "Web Development", key:"2", url:"https://res.cloudinary.com/de6puygvt/image/upload/v1649091594/coding%20courses/jfnvfcbdea1r3mw5at9s.jpg"
  }}, {
  name: "Mobile App",
  description: "This class teaches how to make a mobile application using X-Code and Titanium. This class requires no programming background. We have taught this class in San Francisco to individuals from all backgrounds. It is an ideal starting point for anyone interested in making mobile apps or working with someone who will make mobile apps. Taking this class will lay the foundation necessary for future app development.
  Management teams have benefited the most from this class because it teaches the framework within which mobile applications are made and having a good understanding of this framework allows for a more optimized results.
  If you are interested in starting a mobile application development business, working for a mobile app company, interested in making your own app or if you work with programmers then this class has something of value for you.
  Take advantage of the extremely valuable information taught in this class for better achievement of your goals. If you are a programmer and would like to learn Objective-C then this class offers the founding blocks of the language.
  Students who complete this class should be able to do more complicated X-Code exercises.",
  duration_days: 120,
  img_url: {  name: "Mobile App", key:"3", url:"https://res.cloudinary.com/de6puygvt/image/upload/v1649091941/coding%20courses/App-development-process-Feature-image_inm219.jpg"
  }}, {
  name: "Data Engineering",
  description: "This course introduces you to the core concepts, processes, and tools you need to know in order to get a foundational knowledge of data engineering. You will gain an understanding of the modern data ecosystem and the role Data Engineers, Data Scientists, and Data Analysts play in this ecosystem. 
  The Data Engineering Ecosystem includes several different components. It includes disparate data types, formats, and sources of data. Data Pipelines gather data from multiple sources, transform it into analytics-ready data, and make it available to data consumers for analytics and decision-making. Data repositories, such as relational and non-relational databases, data warehouses, data marts, data lakes, and big data stores process and store this data. Data Integration Platforms combine disparate data into a unified view for the data consumers. You will learn about each of these components in this course. You will also learn about Big Data and the use of some of the Big Data processing tools. 
  A typical Data Engineering lifecycle includes architecting data platforms, designing data stores, and gathering, importing, wrangling, querying, and analyzing data. It also includes performance monitoring and finetuning to ensure systems are performing at optimal levels. In this course, you will learn about the data engineering lifecycle. You will also learn about security, governance, and compliance. 
  Data Engineering is recognized as one of the fastest-growing fields today. The career opportunities available in the field and the different paths you can take to enter this field are discussed in the course. 
  The course also includes hands-on labs that guide you to create your IBM Cloud Lite account, provision a database instance, load data into the database instance, and perform some basic querying operations that help you understand your dataset.",
  duration_days: 120,
  img_url: {name: "Data Engineering", key:"4", url:"https://res.cloudinary.com/de6puygvt/image/upload/v1649091836/coding%20courses/Napa-Data-Engineering-Image_nxqm9i.jpg"
  }}, {
  name: "Intro of Data Science",
  description: "The Introduction to Data Science class will survey the foundational topics in data science, namely:
  Data Manipulation
  Data Analysis with Statistics and Machine Learning
  Data Communication with Information Visualization
  Data at Scale -- Working with Big Data
  The class will focus on breadth and present the topics briefly instead of focusing on a single topic in depth. This will give you the opportunity to sample and apply the basic techniques of data science.
  This course is also a part of our Data Analyst Nanodegree.",
  duration_days: 120,
  img_url: {  name: "Intro of Data Science", key:"5", url:"https://res.cloudinary.com/de6puygvt/image/upload/v1649091491/coding%20courses/blo55iz7tli3sa0glzjb.png"
  }}]);
