pipeline {
    agent any  
    stages {
        stage('Example Build') {
            steps {
                checkout scm
                sh 'docker-compose up'
            }
        }
    }
}