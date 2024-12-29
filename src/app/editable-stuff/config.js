// Navigation Bar SECTION
const navBar = {
	show: true,
};

// Main Body SECTION
const mainBody = {
	gradientColors: '#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1',
	firstName: 'Puneet',
	middleName: '',
	lastName: 'Kumar',
	message: ' Passionate about changing the world with technology. ',
	icons: [
		{
			image: 'fa-github',
			url: 'https://github.com/puneet2003',
		},
		{
			image: 'fa-facebook',
			url: 'https://www.linkedin.com/in/puneet-chauhan-a03a69226/',
		},
		{
			image: 'fa-instagram',
			url: 'https://www.linkedin.com/in/puneet-chauhan-a03a69226/',
		},
		{
			image: 'fa-linkedin',
			url: 'https://www.linkedin.com/in/puneet-chauhan-a03a69226//',
		},
	],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/shahid.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
	show: true,
	heading: 'About Me',
	imageLink: "/images/myphoto.png",
	imageSize: 375,
	message:
		"My name is Puneet Kumar. Currently I'm pursuing Master of Computer Application from Motilal Nehru National Institute Of Technology. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on web related projects.",
	resume: './images/resume.pdf',
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
	show: true,
	heading: 'Recent Projects',
	gitHubUsername: 'puneet2003', //i.e."johnDoe12Gh"
	reposLength: 4,
	specificRepos: [],
};

// Leadership SECTION
const leadership = {
	show: true,
	heading: 'Leadership',
	message:
		'As a React developer with leadership experience, I bring technical expertise, project management skills, and strong communication abilities to the table. I have a proven track record of building large-scale applications, optimizing code for performance, and implementing best practices. Additionally, I have experience leading teams and projects, creating and maintaining project plans, managing timelines and budgets, and ensuring timely delivery of high-quality work. I excel at communicating effectively with team members, stakeholders, and clients, both verbally and in writing, and am a skilled listener who can provide clear and constructive feedback. I am also passionate about mentoring and training other developers to help them develop their skills and achieve their goals. With my ability to solve complex technical problems and think creatively, I am always up-to-date with the latest developments in React and related technologies, and am able to innovate and inspire a positive, collaborative work environment.',
	images: [
		{
			img: "./images/home.png",
			label: 'First slide label',
			paragraph:
				'Home page of Task Management system where a user can manage all their tasks',
		},
		{
			img: "./images/add.png",
			label: 'Second slide label',
			paragraph: 'User can add his task from this page',
		},
		{
			img: "./images/edit.png",
			label: 'Second slide label',
			paragraph:
				'If user Write somethings wrong then here he can edit the task ',
		},
		{
			img: "./images/1.png",
			label: 'Dashboards',
			paragraph: 'Dashboard with charts ',
		},
		{
			img: "./images/2.png",
			label: 'Users Module',
			paragraph: 'Users can be managed from here ',
		},
		{
			img: "./image/3.png",
			label: 'Products',
			paragraph: 'All the Products Are listed here ',
		},
		{
			img: "./images/4.png",
			label: 'Add Zone',
			paragraph: 'A Zone can be Added from here ',
		},
		{
			img: "./images/5.png",
			label: 'Transactions',
			paragraph: 'All the Transactions Are listed here',
		},
		{
			img: "./images/6.png",
			label: 'Vending Machine List',
			paragraph: 'All the Vending machines are listed here',
		},
		{
			img: "./images/7.png",
			label: 'Overview',
			paragraph: 'Vending Machine Overview ',
		},
		{
			img: "./images/8.png",
			label: 'Refill Vending Machine',
			paragraph: 'User can refill machine from here ',
		},
	],
	imageSize: {
		width: '615',
		height: '450',
	},
};

// SKILLS SECTION
const skills = {
	show: true,
	heading: 'Skills',
	hardSkills: [
		{ name: 'React', value: 90 },
		{ name: 'JavaScript', value: 90 },
		{ name: 'Data Structures', value: 65 },
		{ name: 'HTML/CSS', value: 55 },
		{ name: 'TypeScript', value: 80 },
		{ name: 'SQL', value: 75 },
	],
	softSkills: [
		{ name: 'Goal-Oriented', value: 80 },
		{ name: 'Collaboration', value: 90 },
		{ name: 'Positivity', value: 75 },
		{ name: 'Adaptability', value: 85 },
		{ name: 'Problem Solving', value: 75 },
		{ name: 'Empathy', value: 90 },
		{ name: 'Organization', value: 70 },
		{ name: 'Creativity', value: 90 },
	],
};

// GET IN TOUCH SECTION
const getInTouch = {
	show: true,
	heading: 'Get In Touch',
	message:
		"Feel free to reach out! Whether you have a question, an opportunity, or just want to say hi, I’d love to hear from you. Let’s connect and create something amazing together!",
	email: 'puneetkumar322003@gmail.com',
};

const experiences = {
	show: true,
	heading: 'Experiences',
	data: [
		{
			role: 'React Developer',
			companylogo: "./images/simpana.png",
			date: 'Aug 2020 – May 2022',
		},
		{
			role: 'Senior Software Engineer', // Here Add Company Name
			companylogo: "./images/vendify.png",
			date: 'May 2022 – March 2023',
		},
		{
			role: 'React Developer',
			companylogo: "./images/boeing.png",
			date: 'March 2023 – Present',
		},
		{
			role: 'React Developer',
			companylogo: "./images/dell.png",
			date: 'March 2023 – Present',
		}
	],
};

export {
	navBar,
	mainBody,
	about,
	repos,
	skills,
	leadership,
	getInTouch,
	experiences,
};
