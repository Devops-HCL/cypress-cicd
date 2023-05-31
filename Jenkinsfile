pipeline {
    agent {
        docker {
            image 'cypress/base:12.16.1' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Install Dependencies') { 
            steps {
                sh 'cd cypress'
                sh 'npm install'
            }
        }
        stage('Build') { 
            steps {
                sh 'npm run testsmokechrome'
            }
        }
        stage('Test') { 
            steps {
                sh 'npm run testregedge'
            }
        }
    }
}
