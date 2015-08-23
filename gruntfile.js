/// <binding ProjectOpened='bower-watch' />

module.exports = function (grunt) {
  grunt.initConfig({
    bower: {
      install: {
        options: {
          targetDir: "./bower_components",
          layout: "byComponent",
          cleanTargetDir: true,
          cleanBowerDir: true
        }
      }
    },
    watch: {
      //On script change, minify
      scripts: {
        files: ['src/js/*'],
        tasks: ['compile-js'],
        options: {
          spawn: true
        },
      },
      //On style change, compile and minify
      styles: {
        files: ['src/css/*'],
        tasks: ['compile-css'],
        options: {
          spawn: true
        },
      },
      packages: {
        files: ['bower.json'],
        tasks: ["bower:install"],
        options: { spawn: true }
      }
    }
  });

  grunt.loadNpmTasks("grunt-bower-task");
  grunt.loadNpmTasks("grunt-contrib-watch");

  grunt.registerTask("bower-update", ["bower:install"]);
  grunt.registerTask("bower-watch", ["watch:packages"]);

  //grunt.registerTask("compile-css", ["clean:css", "less:dist", "cssmin:dist"]);
  //grunt.registerTask("compile-js", ["clean:js", "uglify:min"]);
  //grunt.registerTask("compile", ["compile-js", "compile-css"]);
};