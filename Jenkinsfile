pipeline {
    agent any
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
                sh 'chmod +x /jenkinsScripts/script-1.js'
                sh "./jenkinsScripts/script-1.js ${params.SCRIPT1_RESULT}"
               
            }
        }
     
        stage('Script 2') {
            steps {
                 sh 'chmod +x ./jenkinsScripts/script-2.js'
                sh "./jenkinsScripts/script-2.js ${params.SCRIPT2_RESULT}"
             
            }
        }
        stage('Script 3') {
            steps {

                sh 'chmod +x ./jenkinsScripts/script-3.js'
                sh "./jenkinsScripts/script-3.js"
            }
        }
    }
}
