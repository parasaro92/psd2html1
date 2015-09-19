module.exports = function(grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'assets/stylesheets/style.css': 'assets/stylesheets/src/style.scss'
        }
      }
    },
    watch: {
      css: {
        files: ['assets/stylesheets/src/*.scss'],
        tasks: ['sass']
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  //grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['sass', 'watch']);
};