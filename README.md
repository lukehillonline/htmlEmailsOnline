# htmlEmailsOnline
This is a project setup for HTML emails, it contains all the necessary gulp tasks to create perfect emails.

# Setup

You will need gulp https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md

Download the project and run ```npm install``` from the command line in the root to get all required node modules.

# Use

From the command line run ```gulp watch```, this will watch the ```source``` folder for changes. Add your new HTML file into ```source``` folder. As you can see from the example in there you write all your CSS and HTML inside the same file, making sure all CSS goes inside a ```<style>```.

The gulp tasks that are used will read the CSS inside the ```<style>``` tag and find the class it is being applied to in the HTML, it will then inline the style on that HTML element. Once all style as been applied to all elements, any punctuation or special characters are converted into html entities and the HTML will then be minified.

The end result can be found inside the ```templates``` folder. This allows you to have your working version in ```source``` separate from the end result.