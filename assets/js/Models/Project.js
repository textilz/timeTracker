export default class Project {
    name
    description
    dailyQuota
    tags = []

    constructor(name, description) {
        this.name = name
        this.description = description
        this.dailyQuota = null;
    }

    set name (value) {
        this.name = value
    }

    set description (value) {
        this.description = value
    }

    set dailyQuota (value) {
        this.dailyQuota = value
    }

    dailyQuotaValidate(value) {
        // Валидатор дейликовты
    }

    tagValidate (name) {
        // Проверка тега на существование
    }

    addTag (name, color) {
        if (!this.tagValidate(name)) return
        let tag = {name: name, color: color}
        this.tags.push(tag)
    }

    removeTag (name) {
        delete this.tags[this.tags.findIndex(tag => tag.name == name)]
    }
}