pipeline {
    agent any
    tools {
        nodejs 'nodejs'
    }
    parameters {
        string(name: 'persona_a_saludar', defaultValue: 'Mundo', description: 'Nombre de la persona a saludar')
    }
    stages {
        stage('Execution') {
            steps {
                sh 'npm install'
                sh "node index.js ${params.persona_a_saludar}"
            }
        }
     
         stage('Pararell stages') {
            parallel {
                stage('Primer stage paralelo') {
                    steps {
                        echo 'Este es el primer stage paralelo'
                    }
                }
                stage('Segundo stage paralelo') {
                    steps {
                        echo 'Este es el segundo stage paralelo'
                    }
                }
            }
         }
    }
}
