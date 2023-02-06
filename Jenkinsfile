pipeline {
    agent any
    options {
       //aunque falle algun stage continua con el resto
        skipDefaultCheckout()

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
                script {
                    try {
                        sh "node ./jenkinsScripts/script-1.js ${params.SCRIPT1_RESULT}"
                    } catch (Exception e) {
                        echo "Result: ${e}"
                        error "Error en el script 1"
                     
                    }
                }
            }
        }
     
        stage('Script 2') {
            steps {
                script {
                    try {
                        sh "node ./jenkinsScripts/script-2.js ${params.SCRIPT2_RESULT}"
                    } catch (Exception e) {
                        echo "Result: ${e}"
                        error "Error en el script 2"
                      
                    }
                }
            }
        }
        stage('Script 3') {
            steps {
                script {
                    try {
                        sh "node ./jenkinsScripts/script-3.js"
                    } catch (Exception e) {
                        echo "Result: ${e}"
                        error "Error en el script 3"
                      
                    }     
                }
            }
        }
    }
}
