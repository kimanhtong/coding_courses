# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Program.create([{
  name: "Intro of Coding",
  description: "A good overview of the Coding world. You can take this class as a good start for beginners before going further.",
  duration_days: 90,
  img_url: "https://res.cloudinary.com/de6puygvt/image/upload/v1648695665/coding%20courses/ykdltfnsiqpegevzz2j4.jpg"
  }, {
  name: "Web Development",
  description: "Nowadays, it's hard to find a company without a website. This course provides you required skills to build a modern website using the latest technologies",
  duration_days: 210,
  img_url: "https://res.cloudinary.com/de6puygvt/image/upload/v1649091594/coding%20courses/jfnvfcbdea1r3mw5at9s.jpg"
  }, {
  name: "Mobile App",
  description: "You will get to go through all the steps of a Mobile App development process by implementing 5 different mobile applications",
  duration_days: 120,
  img_url: "https://res.cloudinary.com/de6puygvt/image/upload/v1649091941/coding%20courses/App-development-process-Feature-image_inm219.jpg"
  }, {
  name: "Data Engineering",
  description: "At the time of data booming, let's see how big companies analyze and evaluate data to get the useful information out of it",
  duration_days: 120,
  img_url: "https://res.cloudinary.com/de6puygvt/image/upload/v1649091836/coding%20courses/Napa-Data-Engineering-Image_nxqm9i.jpg"
  }, {
  name: "Data Science",
  description: "This is a step up from Data Engineering.",
  duration_days: 120,
  img_url: "https://res.cloudinary.com/de6puygvt/image/upload/v1649091491/coding%20courses/blo55iz7tli3sa0glzjb.png"
  }]);
