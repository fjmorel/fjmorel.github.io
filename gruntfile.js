﻿/// <binding ProjectOpened='bower-update' />

module.exports = function (grunt) {
  grunt.initConfig({
    bower: {
      install: {
        options: {
          targetDir: "./lib",
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

  grunt.registerTask("bower-update", ["watch:packages"]);

  //grunt.registerTask("compile-css", ["clean:css", "less:dist", "cssmin:dist"]);
  //grunt.registerTask("compile-js", ["clean:js", "uglify:min"]);
  //grunt.registerTask("compile", ["compile-js", "compile-css"]);
};