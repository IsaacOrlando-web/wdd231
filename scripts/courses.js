const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

//Connect the script and the html buttons
const allBtn = document.getElementById('button-all');
const cseBtn = document.getElementById('button-cse');
const wddBtn = document.getElementById('button-wdd');

//first show all courses
displayCourses(courses);

allBtn.addEventListener('click', () => {
    displayCourses(courses);
});

cseBtn.addEventListener('click', () => {
    const cseCourses = courses.filter(course => course.subject === 'CSE');
    displayCourses(cseCourses);
});

wddBtn.addEventListener('click', () => {
    const wddCourses = courses.filter(course => course.subject === 'WDD');
    displayCourses(wddCourses);
});

function displayCourses(filteredCourses){
    const container = document.querySelector('.courses-container');
    container.innerHTML = ''; // Clear previous content

    //number of credits
    let credits = 0;
    const creditsDiv = document.createElement('p');
    creditsDiv.innerHTML = `The total number of course listed below is: ${filteredCourses.reduce((acc, course) => acc + course.credits, 0)}`;
    creditsDiv.setAttribute('id', 'credits');
    container.appendChild(creditsDiv);
    creditsDiv.style.fontSize = '15px';
    creditsDiv.style.fontStyle = 'italic';
    creditsDiv.style.fontWeight = 'bold';
    creditsDiv.style.textAlign = 'center';

    filteredCourses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course');
        courseDiv.innerHTML = `
            <h3>${course.subject} ${course.number}: ${course.title}</h3>
        `;
        if (course.completed) {
            courseDiv.style.backgroundColor = '#8e978d';
        }else{
            courseDiv.style.backgroundColor = '#e6fcd9';
        }

        courseDiv.style.padding = '9px';
        courseDiv.style.margin = '5px';
        courseDiv.style.borderRadius = '5px';
        courseDiv.style.fontSize = '10px';
        courseDiv.style.textAlign= 'center';
        container.appendChild(courseDiv);
    });
}