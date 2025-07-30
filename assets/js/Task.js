export class Task {
    constructor(id, title, desc) {
        this._id = id;
        this._title = title;
        this._desc = desc;
    }

    // Getters
    get id() {
        return this._id;
    }

    get title() {
        return this._title;
    }

    get desc() {
        return this._desc;
    }

    // Setters
    set id(id) {
        this._id = id;
    }

    set title(title) {
        this._title = title;
    }

    set desc(desc) {
        this._desc = desc;
    }
}
