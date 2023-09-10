export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const

export const experiencesData = [
  {
    title: "Test",
    location: "Test",
    description: "Test",
    icon: null,
    date: "2019",
  },
] as const

export const projectsData = [
  {
    title: "NewQuiz",
    description: "A quiz app made with Jetpack Compose",
    tags: ["Android", "Kotlin", "Jetpack Compose"],
    imageUrl: null,
  },
] as const

export const skillsData = ["Android", "Kotlin", "Jetpack Compose"] as const
