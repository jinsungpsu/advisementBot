class Topic {
	present() {
		var output ="";
		if (typeof this.toolTip !== "undefined") {output+=this.toolTip;}
		
		return output;
    }
}

class Major {
    present() {
		var output ="";
		if (typeof this.id !== "undefined") {output+=this.id;}
		if (typeof this.name !== "undefined") {output+=this.name;}
		
		return output;
    }

    constructor(name, id, courseCategories, courseListByCategory) {
        this.name = name;
        this.id = id;
        this.courseCategories = courseCategories;
        this.courseListByCategory = courseListByCategory;

    }
}

class Course {
	present() {
		var output =this.name + ", ";
		if (typeof this.credits !== "undefined") {output+=this.credits+", ";}
		if (typeof this.title !== "undefined") {output+=this.title+", ";}
		if (typeof this.tooltip !== "undefined") {output+=this.tooltip;}
		
		return output;
	}
	
	constructor(name, syllabus, credits, title, tooltip) {
		this.name = name;
		this.syllabus = syllabus;
		this.credits = credits;
		this.title = title;
		this.tooltip = tooltip;
	}
}
