pipeline {
    agent any
    options {
        skipDefaultCheckout()
        disableConcurrentBuilds()
        timeout(time: 1, unit: 'HOURS')
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
                        echo "Script 1: Fallido ${e}"
                       
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
                        echo "Script 2: Fallido  ${e}"
                      
                    }
                }
            }
        }
    }
    //stage 3 donde se ejecuta el script 3 y pasa los resultados de los scripts anteriores
    //en el script 3 se usaran los resultados de los scripts anteriores y depende del resultado se mostrará un mensaje u otro
    stage('Script 3') {
        steps {
            script {
                try {
                    sh "node ./jenkinsScripts/script-3.js ${params.SCRIPT1_RESULT} ${params.SCRIPT2_RESULT}"
                } catch (Exception e) {
                    echo "Script 3: Fallido ${e}"
                    
                }
            }
        }
    }

}
