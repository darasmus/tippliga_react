/* eslint-disable */
var shelljs = require('shelljs');
var nodeSassGlobbing = require('node-sass-globbing');

module.exports = function(grunt) {
    var doLinting = !process.env.NO_LINT;

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    // load tasks from "tasks"-folder
    grunt.loadTasks('tasks');

    //
    // Grunt config
    //
    grunt.initConfig({
        srcFolder: 'src',
        outFolder: 'public',
        bldFolder: 'build',
        modFolder: 'node_modules',
        tmpFolder: '.tmp',

        pkg: grunt.file.readJSON('package.json'),

        rev: shelljs.exec(
            'bash -c \'echo -n `git rev-parse --short HEAD || date +%s`\'', {
                silent: true
            }
        ).stdout,

        tag: shelljs.exec(
            'bash -c \'echo -n $BUILD_NUMBER_LONG\'', {
                silent: true
            }
        ).stdout,

        env: {
            development: {
                NODE_ENV: 'development'
            },
            staging: {
                NODE_ENV: 'staging'
            },
            production: {
                NODE_ENV: 'production'
            }
        },

        //
        // {java,ecma}script processing
        //
        browserify: {
            options: {
                watch: true,
                browserifyOptions: {
                    debug: true
                }
            },
            dev: {
                files: {
                    '<%= outFolder %>/js/<%= pkg.name %>.js': '<%= srcFolder %>/js/main.js'
                }
            },
            prod: {
                options: {
                    watch: false,
                    browserifyOptions: {
                        debug: true,
                        fullPaths: false
                    }
                },
                files: {
                    '<%= outFolder %>/js/<%= pkg.name %>.js': '<%= srcFolder %>/js/main.js'
                }
            }
        },

        eslint: {
            app: ['<%= srcFolder %>/js/**/*.js']
        },

        //
        // (s)css handling/processing
        //
        sass: {
            options: {
                sourceMap: true,
                importer: nodeSassGlobbing
            },
            dist: {
                files: {
                    '<%= outFolder %>/css/<%= pkg.name %>.css': '<%= srcFolder %>/sass/main.scss'
                }
            }
        },

        scsslint: {
            allFiles: [
                '<%= srcFolder %>/sass/**/*.scss'
            ],
            options: {
                config: '.scss-lint.yml',
                colorizeOutput: true,
                compact: false,
                reporterOutput: '<%= bldFolder %>/reports/scss-lint-report.xml'
            }
        },

        cssshrink: {
            dist: {
                files: {
                    '<%= outFolder %>/css/<%= pkg.name %>.css': '<%= outFolder %>/css/<%= pkg.name %>.css'
                }
            }
        },

        //
        // Utilities
        //
        clean: {
            dest: ['<%= outFolder %>/**/*'],
            tmp: ['<%= tmpFolder %>/**/*'],
            build: ['<%= bldFolder %>/**/*.tar.gz']
        },

        copy: {
            assets: {
                expand: true,
                cwd: '<%= srcFolder %>/assets',
                src: ['**/*.*'],
                dest: '<%= outFolder %>'
            },
            data: {
                expand: true,
                cwd: '<%= srcFolder %>/data',
                src: ['**/*.*'],
                dest: '<%= outFolder %>'
            },
            html: {
                expand: true,
                cwd: '<%= srcFolder %>',
                src: ['*.html', '*.txt'],
                dest: '<%= outFolder %>',
                options: {
                    process: function(content) {
                        return grunt.template.process(content);
                    }
                }
            }
        },

        compress: {
            live: {
                options: {
                    archive: './<%= bldFolder %>/<%= pkg.name %>.tar.gz'
                },
                files: [{
                    expand: true,
                    cwd: '<%= outFolder %>',
                    src: ['**'],
                    dest: '<%= outFolder %>'
                }]
            }
        },

        watch: {
            assets: {
                files: ['<%= srcFolder %>/assets/**/*.*'],
                tasks: ['copy:assets']
            },
            js: {
                files: ['<%= srcFolder %>/js/**/*.js'],
                tasks: doLinting ? ['eslint'] : []
            },
            sass: {
                files: ['<%= srcFolder %>/sass/**/*.scss'],
                tasks: doLinting ? [
                    'scsslint',
                    'sass'
                ] : ['sass']
            },
            html: {
                files: ['<%= srcFolder %>/*.html'],
                tasks: ['copy:html']
            }
        }
    });

    //
    // composite tasks
    //

    // build-task
    grunt.registerTask('build', [
        'clean',
        'setenv',
        'lint',
        'sass',
        'copy'
    ]);

    grunt.registerTask('lint',
        doLinting ? ['eslint', 'scsslint'] : []
    );

    // development-build-task
    grunt.registerTask('build-dev', [
        'build',
        'browserify:dev'
    ]);

    // production-build-task
    grunt.registerTask('build-release', [
        'build',
        'browserify:prod',
        'cssshrink',
        'compress:live'
    ]);

    // production-build-task with live environment
    grunt.registerTask('build-prod', [
        'setlive',
        'build-release'
    ]);

    grunt.registerTask('default', [
        'build-dev',
        'watch'
    ]);


};
