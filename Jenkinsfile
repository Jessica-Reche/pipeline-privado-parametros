pipeline {
    agent any
    parameters {
        string(name: 'persona_a_saludar', defaultValue: '', description: 'Nombre de la persona a saludar')
    }
    stages {
        stage('Execution') {
            steps {
                sh 'node app.js ${params.persona_a_saludar}'
            }
        }
    }
}
