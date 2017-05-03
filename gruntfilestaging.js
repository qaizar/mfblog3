module.exports = function (grunt) { 
 
    grunt.initConfig({   
        clean: { 
            //delete last backup  
            backup: {  
                src: ['backup/*'] 
            }, 
            //delete public folder 
            public: { 
                src: ['public'] 
            } 
        }, 
        //create backup 
        copy: { 
            backup: { 
                expand: true, 
                src: ['**', '!backup', '!**/node_modules/**'], 
                dest: 'backup/backup-<%=grunt.template.today("yyyy-mm-dd-hh-mm")%>/' 
            } 
        }, 
        //generate hugo public folder 
        exec: { 
            hugobuild: { 
                command: 'hugo' 
            } 
        }, 
        //html min
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'public/' : 'public/*.html', 
                    'public/page/**' : 'public/page/*.html', 
                    'public/tags/**' : 'public/tags/*.html', 
                    'public/2017/01/02/**' : 'public/2017/01/02/*.html', 
                    'public/2017/01/11/**' : 'public/2017/01/11/*.html'
                }
            }
        },
        //string replace bad links 
        'string-replace': { 
            badlinks : { 
                files : { 
                    'public/' : 'public/*.html', 
                    'public/page/' : 'public/page/*.html', 
                    'public/tags/' : 'public/tags/*.html', 
                    'public/2017/01/02/' : 'public/2017/01/02/*.html', 
                    'public/2017/01/11/' : 'public/2017/01/11/*.html', 
                    'public/2017/01/21/' : 'public/2017/01/21/*.html',
                    'public/2017/02/09/' : 'public/2017/02/09/*.html',
                    'public/2017/02/13/' : 'public/2017/02/13/*.html',
                    'public/2017/05/01/' : 'public/2017/05/01/*.html'
                }, 
                options: { 
                    replacements: [{ 
                        //baseurl
                        pattern: '<a href="http:\/\/mfblog3.blob.core.windows.net\/staging\/"', 
                        replacement: '<a href="http://mfblog3.blob.core.windows.net/staging/index.html"' 
                    }, 
                    { 
                        //starting-a-blog
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/01\/02\/starting-a-blog"', 
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/2017/01/02/starting-a-blog.html"' 
                    },
                    { 
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/01\/02\/starting-a-blog"', 
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/2017/01/02/starting-a-blog.html"' 
                    },
                    { 
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/01\/02\/starting-a-blog"', 
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/2017/01/02/starting-a-blog.html"' 
                    },
                    { 
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/01\/02\/starting-a-blog"', 
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/2017/01/02/starting-a-blog.html"' 
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/01\/02\/starting-a-blog"', 
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/2017/01/02/starting-a-blog.html"' 
                    },
                    {
                        //jenkins-on-azure-app-service
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/01\/11\/jenkins-on-azure-app-service"',
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/2017/01/11/jenkins-on-azure-app-service.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/01\/11\/jenkins-on-azure-app-service"',
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/2017/01/11/jenkins-on-azure-app-service.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/01\/11\/jenkins-on-azure-app-service"',
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/2017/01/11/jenkins-on-azure-app-service.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/01\/11\/jenkins-on-azure-app-service"',
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/2017/01/11/jenkins-on-azure-app-service.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/01\/11\/jenkins-on-azure-app-service"',
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/2017/01/11/jenkins-on-azure-app-service.html"'
                    },
                    {
                        //hugo-in-azure-blog-storage
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/01\/21\/hugo-in-azure-blob-storage"',
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/2017/01/21/hugo-in-azure-blob-storage.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/01\/21\/hugo-in-azure-blob-storage"',
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/2017/01/21/hugo-in-azure-blob-storage.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/01\/21\/hugo-in-azure-blob-storage"',
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/2017/01/21/hugo-in-azure-blob-storage.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/01\/21\/hugo-in-azure-blob-storage"',
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/2017/01/21/hugo-in-azure-blob-storage.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/01\/21\/hugo-in-azure-blob-storage"',
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/2017/01/21/hugo-in-azure-blob-storage.html"'
                    },
                    {
                        //microsoft-ignite-next-week
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/02\/09\/microsoft-ignite-next-week"',
                        replacement: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/02\/09\/microsoft-ignite-next-week.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/02\/09\/microsoft-ignite-next-week"',
                        replacement: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/02\/09\/microsoft-ignite-next-week.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/02\/09\/microsoft-ignite-next-week"',
                        replacement: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/02\/09\/microsoft-ignite-next-week.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/02\/09\/microsoft-ignite-next-week"',
                        replacement: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/02\/09\/microsoft-ignite-next-week.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/02\/09\/microsoft-ignite-next-week"',
                        replacement: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/02\/09\/microsoft-ignite-next-week.html"'
                    },
                    {
                        //live-demo
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/02\/13\/live-demo"',
                        replacement: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/02\/13\/live-demo.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/02\/13\/live-demo"',
                        replacement: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/02\/13\/live-demo.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/02\/13\/live-demo"',
                        replacement: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/02\/13\/live-demo.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/02\/13\/live-demo"',
                        replacement: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/02\/13\/live-demo.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/02\/13\/live-demo"',
                        replacement: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/02\/13\/live-demo.html"'
                    },
                    {
                        //getting started with Terraform
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/05\/01\/getting-started-with-terraform-on-azure"',
                        replacement: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/05\/01\/getting-started-with-terraform-on-azure.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/05\/01\/getting-started-with-terraform-on-azure"',
                        replacement: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/05\/01\/getting-started-with-terraform-on-azure.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/05\/01\/getting-started-with-terraform-on-azure"',
                        replacement: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/05\/01\/getting-started-with-terraform-on-azure.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/05\/01\/getting-started-with-terraform-on-azure"',
                        replacement: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/05\/01\/getting-started-with-terraform-on-azure.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/05\/01\/getting-started-with-terraform-on-azure"',
                        replacement: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/2017\/05\/01\/getting-started-with-terraform-on-azure.html"'
                    },
                    {
                        //tags
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/tags\/app-service"',
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/tags/app-service.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/tags\/app-service"',
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/tags/app-service.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/tags\/azure"',
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/tags/azure.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/tags\/azure"',
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/tags/azure.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/tags\/azure"',
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/tags/azure.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/tags\/azure"',
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/tags/azure.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/tags\/blob"',
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/tags/blob.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/tags\/blob"',
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/tags/blob.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/tags\/hugo"',
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/tags/hugo.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/tags\/hugo"',
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/tags/hugo.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/tags\/ignite"',
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/tags/ignite.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/tags\/ignite"',
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/tags/ignite.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/tags\/ignite"',
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/tags/ignite.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/tags\/ignite"',
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/tags/ignite.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/tags\/jenkins"',
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/tags/jenkins.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/tags\/jenkins"',
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/tags/jenkins.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/tags\/terraform"',
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/tags/terraform.html"'
                    },
                    {
                        pattern: 'href="http:\/\/mfblog3.blob.core.windows.net\/staging\/tags\/terraform"',
                        replacement: 'href="http://mfblog3.blob.core.windows.net/staging/tags/terraform.html"'
                    }
                    ] 
                } 
            } 
        } 
    }); 
 
    // Load the plugins 
    grunt.loadNpmTasks('grunt-contrib-clean'); 
    grunt.loadNpmTasks('grunt-contrib-copy'); 
    grunt.loadNpmTasks('grunt-exec'); 
    //grunt.loadNpmTasks('grunt-processhtml') 
    grunt.loadNpmTasks('grunt-string-replace'); 
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
 
    // Default task(s). 
    grunt.registerTask('default', ['htmlmin:dist', 'string-replace:badlinks']); 
 
}; 

