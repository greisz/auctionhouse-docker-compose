pipeline {
    agent any  
    stages {
        stage('Build') {
            steps {
                checkout scm
                sh 'docker-compose build'
            }
        }stage('Test'){
            echo Hello
        }stage('Deploy'){
            sh 'docker-compose push'
        }
    }
}