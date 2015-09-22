module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'assets/stylesheets/common.css': 'assets/stylesheets/src/common.scss',
          'assets/stylesheets/home.css': 'assets/stylesheets/src/home.scss',
          'assets/stylesheets/about.css': 'assets/stylesheets/src/about.scss',
          'assets/stylesheets/services.css': 'assets/stylesheets/src/services.scss',
          'assets/stylesheets/portfolio.css': 'assets/stylesheets/src/portfolio.scss',
          'assets/stylesheets/testimonial.css': 'assets/stylesheets/src/testimonial.scss',
          'assets/stylesheets/contact.css': 'assets/stylesheets/src/contact.scss'
        }
      }
    },
    watch: {
      css: {
        files: ['assets/stylesheets/src/*.scss'],
        tasks: ['sass', 'cssmin']
      }
    },
    cssmin: {
      target: {
        files: {
          'assets/stylesheets/app.min.css':
          [
           'assets/stylesheets/common.css', 
           'assets/stylesheets/home.css',
           'assets/stylesheets/about.css',
           'assets/stylesheets/services.css',
           'assets/stylesheets/portfolio.css',
           'assets/stylesheets/testimonial.css',
           'assets/stylesheets/contact.css'
          ]  
        }
      }
    }  
  });


  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['sass', 'cssmin', 'watch']);
};