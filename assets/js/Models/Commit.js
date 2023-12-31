export default class Commit {
    project
    title
    description
    time

    constructor(project, title, description, time) {
        this.project = project
        this.title = title
        this.description = description
        this.time = time
    }
}