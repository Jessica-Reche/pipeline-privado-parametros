pipeline {
    agent any
    options {
        ignoreExceptions()
    }
    tools {
        nodejs 'nodejs'
    }
    parameters {
        string(name: 'SCRIPT1_RESULT', defaultValue: 'introduce correcto o incorrecto', description: 'Ingrese correcto o incorrecto')
        string(name: 'SCRIPT2_RESULT', defaultValue: 'introduce correcto o incorrecto', description: 'Ingrese correcto o incorrecto')
    }
    environment {
        SCRIPT1_RESULT = "${params.SCRIPT1_RESULT}"
        SCRIPT2_RESULT = "${params.SCRIPT2_RESULT}"
    }
 
    stages {
        stage('Script 1') {
            steps {
                sh 'npm install'
                sh "node ./jenkinsScripts/script-1.js ${params.SCRIPT1_RESULT}"
                error {
                    echo "Error in script 1, continuing with next stage"
                }
            }
        }
     
        stage('Script 2') {
            steps {
                sh "node ./jenkinsScripts/script-2.js ${params.SCRIPT2_RESULT}"
                error {
                    echo "Error in script 2, continuing with next stage"
                }
            }
        }
        stage('Script 3') {
            steps {
                sh "node ./jenkinsScripts/script-3.js"
                error {
                    echo "Error in script 3, continuing with next stage"
                }     
            }
        }
    }
}
