Gluten Free Landing Page Mock-Up
=============

Responsive landing page mock-up built with [jQuery](https://jquery.com/) and [SASS](http://sass-lang.com/).


Configuration
------------
Configuring this project should be consistent across Mac (local) and Vagrant. You should already have [Ruby on Rails](http://rubyonrails.org/) installed before cloning. 

Start by cloning the repository
```
$ git clone https://github.com/carmenvkrol/gf-mock-up.git
```

Install Bower Packages by running
````
$ bower install
```

This application uses the [Ruby Gem Sass](https://rubygems.org/gems/sass/versions/3.4.19) in order to compile SASS into CSS.  To install the gem run:
```
$ sudo gem install sass
```

Running the Application
------------
Open [index.html](https://github.com/carmenvkrol/gf-mock-up/blob/master/index.html) in the browser.


Directory Structure
------------
```
gf-mock-up/
 |__images/ #images accessed by the index
 index.html
 app.js
 style.css
 style.scss

```


SASS
------------
This mock-up uses the CSS pre-processor [SASS](http://sass-lang.com/).  The custom SASS file, [style.scss](https://github.com/carmenvkrol/gf-mock-up/blob/master/style.scss), can be found in root directory.  

To compile SASS into CSS, run:
```
$ sass style.scss:style.css
```


Screenshots
------------
![](https://github.com/carmenvkrol/gf-mock-up/blob/master/gf-mock-up-screenshot.png)
