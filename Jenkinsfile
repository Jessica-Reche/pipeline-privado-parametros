pipeline {
    agent any
    parameters {
        string(name: 'persona_a_saludar', defaultValue: 'Mundo', description: 'Nombre de la persona a saludar')
    }
    stages {
        stage('Execution') {
            steps {
                sh 'npm install'
                sh 'npm start ${params.persona_a_saludar}'
            }
        }
    }
}
