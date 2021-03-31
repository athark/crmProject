bootstrap jquery popper
npm install bootstrap jquery popper --save
then you have to go into angular.json and update the following
"styles": [
            
              "./node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
            "scripts": [
              "./node_modules/bootstrap/dist/js/bootstrap.min.js",
              "./node_modules/popper/index.js",
              "./node_modules/jquery/dist/jquery.min.js"
            ]
Angular Material to add  ng add @angular/material
 UI component library. help in constructing attractive, consistent, and functional web pages and web applications while adhering to modern web design principles like browser portability, device independence, and graceful degradation.
gives the option of picking themes. 
check package.json. to make sure its installed.

