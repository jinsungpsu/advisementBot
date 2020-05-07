/* List of semesters you want to add for registration planning */
var semesters = ["SU20", "FA20", "SP21"];
var topics = [progAdvisement, noMajor, connectedBasic, udRequirements, otherCourses, virtualSupport];


/* csc major */
var cscCourseCategories = ["Core", "MathScience", "English", "General"];
var cscCourses = [
    [csc114, csc164, cis130, csc214, cis211, csc264, csc210],
	[mat010, mat020, mat180, mat190, mat281, mat282, mat263, phy205, phy281],
	[eng090, eng101, eng102, eng122],
    [his111, his112, eco122, psy121, pol111, eco111, soc111, span136]
];

let csc = new Major("Computing and Information Science", "CSC", cscCourseCategories, cscCourses);

/* itn major */

var itnCourseCategories = ["Core", "Security", "Networking", "Programming", "General"];

var itnCourses = [
    [itn101, itn110, itn120, itn103, itn150, itn160, itn170, itn180, itn200, itn290],
	[itn251, itn271, itn272, itn273, itn274],
	[itn251, itn252, itn253, itn254, itn255],
	[itn265, itn261, itn262, itn263, itn264],
    [mat120, eng101, eng102, phl103, psy121, soc111, com111]
];

let itn = new Major("Information, Technology, and Networking", "ITN", itnCourseCategories, itnCourses);

/* array holding all majors you'd like displayed */

var majors = [csc, itn];