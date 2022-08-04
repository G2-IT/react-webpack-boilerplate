pipeline {
    agent {
        docker {
            image 'node:16.15.0-buster-slim'
            args '-p 3000:3000'
        }
    }
    
    environment {
        CI = 'true'
    }
    stages {
        stage('Install Packages') {
            steps {
                sh 'yarn install'
            }
        }
    
        stage('Test and Build') {
            parallel {
                stage('Run Unit Tests') {
                    steps {
                        sh 'yarn test:unit'
                    }
                }

                stage('Run Integration Tests') {
                    steps {
                        sh 'yarn test:integration'
                    }
                }

               stage('Create Build Artifacts') {
                    steps {
                        sh 'yarn build'
                    }
                }
            }
        }
    }
}
