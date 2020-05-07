$(document).ready(function () {

    loadTopics(topics);
    loadMajors(majors);

    $("body").delegate("#generateNotes", "click", function () {
        generateSISNotes();
        generateEmailSummary();
    });
    
    $("body").delegate(".accordionBtn", "click", function() {
        $(this).nextAll('.accordionContent:first').toggle();
    });

    $('body').on("change",'input[type=checkbox]',  function() {
        var className = $(this).attr('class');
        if (this.checked) {
            $('.label'+className).addClass("classChosen");
        } else {
            $('.label'+className).removeClass("classChosen");
        }
    });

    $('.majorRadio').click(function() {

        var majorCode = this.id;
        console.log(majorCode);
        
        majors.forEach(function (element) {
            if (majorCode == element.id) {
                console.log(element.id + " chosen.");
                loadCourseList(semesters, element);

            }
        });

        $('[data-toggle="tooltip"]').tooltip();
    });
    
});

function loadMajors(majors) {
    container = $('#majors');
    container.empty();

    majors.forEach(function (element) {
        $('<input />', { type: 'radio', id: element.id, value: element.id, name: "hello", 'class': 'majorRadio' }).appendTo(container);
        $('<label />', { for: element.id, text: element.id+" ("+element.name+")" }).appendTo(container);
        container.append("<br />")
    });
}

function loadCourseList(semesters, major) {
    $("#Courses").empty();
    semesters.forEach(function (element) {
        $("#Courses").append($("<h2 class=\"accordionBtn\">").text(element));
        $("#Courses").append($("<div class=\"accordionContent\" id="+element+">"));
        addCourseCheckBoxes(major.courseCategories, major.courseListByCategory, element);
    });

    
}

function loadTopics(topics) {
    container = $('#topics');
    container.empty();

    topics.forEach(function (element) {
        $('<input />', { type: 'checkbox', id: element.id, value: element.checkBoxTitle, name: element.checkBoxTitle, 'class': 'input'+element.checkBoxTitle }).appendTo(container);
        $('<label />', { 'data-toggle':'tooltip', 'title': element.present(), 'for': element.checkBoxTitle, text: element.checkBoxTitle, 'class': 'label'+element.checkBoxTitle }).appendTo(container);
        container.append("<br />")
    });
}

function generateEmailSummary () {
    var output = "";
    var name = $("#name").val();

    output+= "Dear " + name + ",\n";

    topics.forEach(function (element) {
        if ($("#" + element.id).is(':checked')) {
            output+=element.emailText+"\n";
        }
    });

    semesters.forEach(function (element) {
        output += courses(element);
    });

    var generalNotes = $("#addlNotes").val();
    output += "\n" + generalNotes;

    $("#advisementEmailSummary").val(output);


}

function generateSISNotes () {
    var output = "";

    topics.forEach(function (element) {
        if ($("#" + element.id).is(':checked')) {
            output+=element.sisNoteText+"\n";
        }
    });

    semesters.forEach(function (element) {
        output += courses(element);
    });

    var generalNotes = $("#addlNotes").val();
    output += "\n" + generalNotes;

    $("#advisementNotes").val(output);
}


function addCourseCheckBoxes(courseCategories, courses, semester) {
    courseCategories.forEach(function (element) {
        $("#" + semester).append($("<h5>").text(element));
        $("#" + semester).append($("<div id=" + element + semester + ">"));
    });

    for (var category = 0; category < courseCategories.length; category++) {
        var i = 0;
        courses[category].forEach(function (element) {
            if (i % 4 == 0) {
                $("#" + courseCategories[category] + semester).append($("<p>"));
            }
            addCheckbox(element, $("#" + courseCategories[category] + semester), semester);
			$('<a>',{
				text: '(s)',
				title: 'syllabus',
				href: element.syllabus,
				target: '_blank'
			}).appendTo($("#" + courseCategories[category] + semester));
            i++;
        });
    }
}

function addCheckbox(course, container, semester) {
    $('<input />', { type: 'checkbox', id: course.name+semester, value: course.name, name: semester, 'class': 'input'+course.name }).appendTo(container);
    $('<label />', { 'data-toggle':'tooltip', 'title': course.present(), 'for': semester, text: course.name, 'class': 'label'+course.name }).appendTo(container);
}


function courses(semester) {
    var output = "\n";
    if ($(":input[name="+semester+"]").is(":checked")) {
        output += "For " + semester + ", take the following classes: ";
        $.each($("input[name=" + semester + "]:checked"), function () {
            output += "\n" + ($(this).val());
        });
    }
    return output;
}