module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      options: {
        noCache: true,
        sourcemap: 'none'
      },
      dist: {
        files: [{
            expand: true,
            src: ['app/**/*.scss'],
            ext: '.css'
        }]
      }   
    },
    watch: {
      options: { 
        livereload: true 
      },
      files: ['app/**/*.html', 'app/**/*.js', 'app/**/*.css'],
      css: {
        files: 'app/**/*.scss',
        tasks: ['sass']
      }
    },
    connect: { 
      server: {}
    },
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default',['connect','watch']);
}
