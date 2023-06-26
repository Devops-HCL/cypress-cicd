pipeline {
   agent any
   options{
        ansiColor('xterm')
   }
   stages {     
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
                  reportDir: '/var/lib/jenkins/workspace/cypress_ci/cypress/cypress/reports/',
                  reportFiles: '**/*.html',
                  reportName: 'Reports',
                  reportTitles: 'jenkins-reports$BUILD_NUMBER',
                  useWrapperFileDirectly: true,
                  ])
            }
        }     
   }
}
