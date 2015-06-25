// Grunfile which does:
 // Linting 
  // SASS Compilation
  // HTTP Server with livereload
  // Karma (Cross browser testing) // Todo
  // File concatination // Todo
  // Minification // Todo


module.exports = function(grunt) {
  "use strict";
  grunt.initConfig({
    // Watch: Kick off build workflow whenever project files change. 
    watch: {
      options: { 
        // Create a livereload server. See: http://livereload.com/extensions/
        livereload: true 
      },
      // The more specific, the more performant. 
      files: ['app/**/*.html', 'app/**/*.js', 'app/**/*.css', 'Gruntfile.js', '!app/bower_components/**'],
      // Kick off Sass compilation
      css: {
        files: ['app/**/*.scss', '!app/bower_components/**'],
        tasks: ['newer:sass'], // Only compile updated files each time.
        // tasks: ['sass'], // Alt option: Compile all files each time. 
        options: {
          // Significantly faster, docs say possibly less stable.
          spawn: false
        }
      },
      // Kick off Jshint. 
      js: {
        files: ['Gruntfile.js', 'app/**/*.js', '!app/bower_components/**'],
        tasks: ['jshint'], // Lint all files each time.
        // tasks: ['newer:jshint'], // Alt option: Only lint updated files each time.
        options: {
          // Significantly faster, docs say possibly less stable.
          spawn: false
        } 
      }
    },
    // Jshint: default linting of javascripts. 
    jshint: {  
      files: {
        src: ['Gruntfile.js', 'app/**/*.js', '!app/bower_components/**']
      },
      options: browserLintOptions(),
    },
    // SASS: compile in place: *.scss -> *.css
    sass: {
      options: {
        noCache: true,
        sourcemap: 'none'
      },
      dist: {
        files: [{
            expand: true,
            src: 'app/**/*.scss',
            ext: '.css'
        }]
      }   
    },
    // Connect: Http server on port 8000. 
    connect: { 
      server: {}
    },
  });
 
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-newer');
  grunt.registerTask('default',['connect','watch']);


  // Source: letscodejavascript.com Lab #1
  // See http://jshint.com/docs/options/
  function globalLintOptions() {
    return {
      bitwise: true,
      curly: false,
      eqeqeq: true,
      forin: true,
      immed: true,
      latedef: false,
      newcap: true,
      noarg: true,
      noempty: true,
      nonew: true,
      regexp: true,
      undef: true,
      strict: true,
      trailing: true,
      globals: {
        "angular" : false,
        "module" : false,
      }
    };
  }

  function browserLintOptions(){
    var options = globalLintOptions();
    options.browser = true;
    return options;
  }
};
