'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // {{{ pelican
        pelican: {
            options: {
                themeDir: 'themes/pelican-theme-okam',
                contentDir: '../../notebook/blog/',
                outputDir: 'output'
            },
            dev: {
                configFile: 'pelicanconf.py'
            }
        }, // }}}

        // {{{ compass
        compass: {
            options: {
                cssDir: "<%= pelican.options.themeDir %>/static/css",
                fontsDir: '<%= pelican.options.themeDir %>/static/fonts',
                imagesDir: '<%= pelican.options.themeDir %>/static/img',
                javascriptsDir: '<%= pelican.options.themeDir %>/static/js',
                force: true,
                sassDir: "<%= pelican.options.themeDir %>/scss",
                require: ['susy']
            },
            dist: {
                options: {
                    environment: "production"
                }
            },
            dev: {
                options: {
                    environment: "development"
                }
            }
        },  // }}}

        // {{{ connect
        connect: {
            dev: {
                options: {
                    port: 9000,
                    hostname: '0.0.0.0',
                    base: '<%= pelican.options.outputDir %>'
                }
            }
        }, // }}}

        // {{{ watch
        watch: {
            options: {
                livereload: true
            },
            scss: {
                files: ['<%= compass.options.sassDir %>/**/*.scss'],
                tasks: ['compass:dev']
            },
            pelican: {
                files: ['<%= compass.options.cssDir %>/**/*.css',
                        '<%= compass.options.javascriptsDir %>/**/*.js',
                        '<%= pelican.options.contentDir %>/**/*.rst',
                        '<%= pelican.dev.configFile %>',
                        '<%= pelican.options.themeDir %>/templates/**/*.html',
                        'plugins/**/*.py'],
                tasks: ['pelican:dev']
            }
        } // }}}

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-pelican');
    
    grunt.registerTask('build', ['compass:dist', 'pelican:dist']);
    grunt.registerTask('default', ['connect', 'watch']);

};
