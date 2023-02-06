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
                try {
                    sh "node ./jenkinsScripts/script-1.js ${params.SCRIPT1_RESULT}"
                } catch (e) {
                    echo "Result: ${e}"
                }
              
               
            }
        }
     
        stage('Script 2') {
            steps {
                try {
                    sh "node ./jenkinsScripts/script-2.js ${params.SCRIPT2_RESULT}"
                } catch (e) {
                    echo "Result: ${e}"
                }
               
             
            }
        }
        stage('Script 3') {
            steps {
               try {
                    sh "node ./jenkinsScripts/script-3.js"
                } catch (e) {
                    echo "Result: ${e}"
                }     
               
            }
        }
    }
}
