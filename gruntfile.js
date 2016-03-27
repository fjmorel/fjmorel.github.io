/// <binding ProjectOpened='concat' />

module.exports = function(grunt) {
  grunt.initConfig({
    concat: {
			'libs': {
        files: {
          'css/angular-material.min.css': [
						'node_modules/angular-material/angular-material.min.css'
          ]
        }
      }
		}
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.registerTask('default', ['concat:libs']);
};