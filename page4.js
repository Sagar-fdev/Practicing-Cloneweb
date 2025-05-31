// Select the words
const project = document.getElementById('project');
const projectLine = document.getElementById('project-line');

// Add event listener to change the color on click
project.addEventListener('click', () => {
    // Remove active class from all lines
    document.querySelectorAll('.line').forEach(line => line.classList.remove('active-line'));

    // Add active class to the project line
    projectLine.classList.add('active-line');
});


{
    /* <div class="container">
        <div class="content">
            <h1>
                <span class="line"></span>
                <span class="text-part" id="design">Design</span><br>
                <span class="line" id="project-line"></span>
                <span class="text-part" id="project">Project</span><br>
                <span class="line"></span>
                <span class="text-part" id="execution">Execution</span>
            </h1>
            <p>Our team works with our clients to refine an idea...</p>
        </div>
        <div class="image">
            <img src="your-image.jpg" alt="Image Description">
        </div>
    </div> */
}