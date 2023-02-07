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
                        echo "Script 2: Fallido ${e}"
                        
                    }
                }
            }
        }
        //guardar los resultados de los scripts anteriores en un  array que se utilizará en el script 3
        post {
            success {
                script {
                    env.SCRIPT1_RESULT = sh(returnStdout: true, script: "node ./jenkinsScripts/script-1.js ${params.SCRIPT1_RESULT}")
                    env.SCRIPT2_RESULT = sh(returnStdout: true, script: "node ./jenkinsScripts/script-2.js ${params.SCRIPT2_RESULT}")
                }
            }
        }
        //uso de los resultados de los scripts anteriores
        stage('Script 3') {
            steps {
                script {
                    try {
                        sh "node ./jenkinsScripts/script-3.js ${env.SCRIPT1_RESULT} ${env.SCRIPT2_RESULT}"
                    } catch (Exception e) {
                        echo "Script 3: Fallido ${e}"
                        
                    }
                }
            }
        }


    }


        
   
}
