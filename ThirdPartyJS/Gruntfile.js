
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    connect: {
      consumer: {
        options: {
          port: 80,
          base: 'loaderexample',
          keepalive: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect']);
};