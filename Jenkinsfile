pipeline {
    agent any

	stages {
        stage('Setup') {
            steps {
                git branch: 'main', url: 'https://github.com/raffathamires/teste-e2e-ebac.git'
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
		bat '''set NO_COLOR=1
		npx cypress run'''
            }
        }
    }
}
