pipeline {
    agent any  
    stages {
        stage('Build') {
            steps {
                checkout scm
                sh 'docker-compose build'
            }
        }
        stage('Test'){
            steps{
                echo Hello
            }
        }
        stage('Deploy'){
            steps{
                sh 'docker-compose push'
            }
        }
    }
}