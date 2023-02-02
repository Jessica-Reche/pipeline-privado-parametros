pipeline {
    agent any
    tools {
        nodejs 'nodejs'
    }
    parameters {
        string(name: 'persona_a_saludar', defaultValue: 'Mundo', description: 'Nombre de la persona a saludar')
    }
    triggers {
        pollSCM('H */5 * * *')
    }
    stages {
        stage('Execution') {
            steps {
                sh 'npm install'
                sh "node index.js ${params.persona_a_saludar}"
            }
        }
     
         stage('Parallel stages') {
            parallel {
                stage('First parallel stage') {
                    steps {
                        echo 'This is the first parallel stage'
                    }
                }
                stage('Second parallel stage') {
                    steps {
                        echo 'This is the second parallel stage'
                    }
                }
            }
         }
    }
}
