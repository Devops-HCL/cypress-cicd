pipeline {
   agent any
   options{
        ansiColor('xterm')
   }
   stages {
//         stage('Build the image for Angular app') {
//            steps {
//                sh "docker build -f angular/Dockerfile -t angular-app ."
//            }
//         }
//         stage('app deploy in container') {
//            steps {
//                sh "docker run -d -p 4200:80 angular-app"
//            }
//         }
        stage('Deploying') {
           steps {
               echo "Deploy the app"
           }
        }
        stage('Application status') {
           steps {
               echo "Running on http://0.0.0.0:4200/"
           }
        }      
        stage('Build image') {
           steps {
               sh "docker build -t cypress-test ."
           }
        }
        stage('testing in chrome') {
           steps {
               sh "docker-compose run e2e-chrome"
           }
        }
        stage('testing in edge') {
           steps {
               sh "docker-compose run e2e-edge"
           }
        }   
        stage ('Report') {
            steps {
                  publishHTML(target: [allowMissing: false,
                  alwaysLinkToLastBuild: false,
                  keepAll: true,
                  reportDir: '/var/lib/jenkins/workspace/cypress_cicd/cypress/cypress/reports/',
                  reportFiles: '**/*.html',
                  reportName: 'Reports',
                  reportTitles: 'jenkins-reports$BUILD_NUMBER',
                  useWrapperFileDirectly: true,
                  ])
            }
        }     
   }
}
