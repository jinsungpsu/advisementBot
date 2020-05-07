let noMajor = new Topic();
noMajor.id = "noMajor";
noMajor.checkBoxTitle = "No Major Chosen";
noMajor.sisNoteText = "Advised student to choose major, so we can pick correct sequence sheet.";
noMajor.emailText = "Since you are unsure of what major to pursue, please research programs of study and connected degrees, so we can pick correct sequence sheet to follow. You can find more information on connected degrees at: https://www.dtcc.edu/academics/transfer-options/connected-degrees and all the majors at DTCC at https://www.dtcc.edu/academics/programs-study.";
noMajor.toolTip = "Student has not decided on a major.";

let progAdvisement = new Topic();
progAdvisement.id = "progAdvsement";
progAdvisement.checkBoxTitle = "Program Advisement Meeting";
progAdvisement.sisNoteText = "Spoke to student about various program advisement topics, including role of advisor/advisee, goals, and reminded student of various resources.";
progAdvisement.emailText = "It was great talking with you today.  Here's a summary of what we discussed for program advisement.  As we discussed, I am your program advisor, and I'll be reaching out to you periodically, but you can make an appointment with me anytime using youcanbook.me.";
progAdvisement.toolTip = "Program Advisement Meetig"

let connectedBasic = new Topic();
connectedBasic.id = "connectedBasic";
connectedBasic.checkBoxTitle = "Basic Connected Degree Info";
connectedBasic.emailText = "A connected degree allows you to finish a four year degree by doing two years at DTCC and two years at the designated four year schools.  This does not mean you cannot continue your education elsewhere, but you'd have to apply as a transfer student and your credits may not apply towards your four year degree.";
connectedBasic.sisNoteText = "Gave student information about connected degrees and transfer options.";
connectedBasic.toolTip = "Basic connected degree info";

let udRequirements = new Topic();
udRequirements.id = "udRequirements";
udRequirements.checkBoxTitle = "UD Connected Degree Requirements";
udRequirements.emailText = "U.D. requires a cumulative GPA of 3.0 or higher, CSC/CIS GPA of 3.0 or higher, and a B or better in MAT courses.";
udRequirements.sisNoteText = "Gave student UD connected degree requirements (B or better in MAT, 3.0 GPA cumulative and CSC/CIS.";
udRequirements.toolTip = "UD Connected Degree Requirements";

let otherCourses = new Topic();
otherCourses.id = "otherCourses";
otherCourses.checkBoxTitle = "Other Transfer Courses";
otherCourses.emailText = "Some transfer institutions, may not accept transfer credits and AP credits for the connected degree requirements.  The best and most accurate information will be from the transfer institutions, so please contact them directly and try to get any clarifications in writing.";
otherCourses.sisNoteText = "Warned students that AP and transfer credits may not be accepted by other transfer institutions.";
otherCourses.toolTip = "Transfer institutions and credits awarded may vary.";

let virtualSupport = new Topic();
virtualSupport.id = "virtualSupport";
virtualSupport.checkBoxTitle = "Virtual Support Center";
virtualSupport.emailText = "Many services, like technology support, registrar, financial aid are now at the virtual support center.  You can find more info at https://www.dtcc.edu/virtual/support";
virtualSupport.sisNoteText = "Shared information about the virtual support center.";
virtualSupport.toolTip = "Virtual support center info.";