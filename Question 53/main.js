// *Question 53:* Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
// *Explain & TIP:* Breaking down a complex list into simpler parts makes it easier to work with and understand specific pieces of information.
// A list showing a programmer's skills in detail
var developerSkills = {
    languages: ["JavaScript", "TypeScript", "Python"],
    frameworks: ["React", "Angular", "Vue"],
    tools: ["Git", "Webpack", "Docker"]
};
// Getting specific skills from the list
var languages = developerSkills.languages, frameworks = developerSkills.frameworks, tools = developerSkills.tools;
// Showing a skill from each category
console.log("Language: ".concat(languages, ", Framework: ").concat(frameworks, ", Tool: ").concat(tools));
