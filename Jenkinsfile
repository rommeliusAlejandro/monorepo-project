pipeline {

    agent none

    stages {

        stage('Code Analysis') {

                agent { label 'master'}

                environment {
                scannerHome = tool 'sonnarqube-scanner'
            }

            when {
                branch 'team'
            }


            steps {
                
                sh 'npm install'

                withSonarQubeEnv('sonarqube') {
                        sh "${scannerHome}/bin/sonar-scanner -Dproject.settings=${WORKSPACE}/sonar-project.properties"
                }

                timeout(time: 2, unit: 'MINUTES') {
                        waitForQualityGate abortPipeline: true
                }
            }
        }        
    }
}