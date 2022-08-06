pipeline {
    agent {
        dockerfile {
            filename 'Dockerfile'
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
    
        stage('Create Build Artifacts') {
            steps {
                sh 'yarn build:dev'
            }
        }

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
    }
}
