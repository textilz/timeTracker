import Project from './Models/Project.js'
import Commit from "./Models/Commit.js";

const commits = []

const project = new Project('proj1', 'desc')
const project1 = new Project('proj2', 'desc')
const commit = new Commit(project, 'title1', 'desc', 1)
const commit1 = new Commit(project1, 'title2', 'desc', 1)
const commit2 = new Commit(project1, 'title3', 'desc', 1)

commits.push(commit)
commits.push(commit1)
commits.push(commit2)

console.log(commits.filter(item => item.project == project1))