pipeline {
    agent any  
    stages {
        stage('Build') {
            steps {
                checkout scm
                sh 'docker-compose build'
            }
        }
        stage('Deploy'){
            steps{
                sh 'docker-compose push'
            }
        }
    }
}