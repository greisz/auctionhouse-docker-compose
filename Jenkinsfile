pipeline {
    agent any  
    stages {
        stage('SCM checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build') {
            steps {
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