pipeline {

  agent none

  environment {
    DOCKER_IMAGE = "daodinhcong/frontend"
  }

  stages {
    stage("Test") {
      steps {
        sh "echo 'Hello'"
      }
    }

  //   stage("build") {
  //     agent { node {label 'master'}}
  //     environment {
  //       DOCKER_TAG="${GIT_BRANCH.tokenize('/').pop()}-${GIT_COMMIT.substring(0,7)}"
  //     }
  //     steps {
  //       sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} . "
  //       sh "docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${DOCKER_IMAGE}:latest"
  //       sh "docker image ls | grep ${DOCKER_IMAGE}"
  //       withCredentials([usernamePassword(credentialsId: 'docker-hub', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
  //           sh 'echo $DOCKER_PASSWORD | docker login --username $DOCKER_USERNAME --password-stdin'
  //           sh "docker push ${DOCKER_IMAGE}:${DOCKER_TAG}"
  //           sh "docker push ${DOCKER_IMAGE}:latest"
  //       }

  //       //clean to save disk
  //       sh "docker image rm ${DOCKER_IMAGE}:${DOCKER_TAG}"
  //       sh "docker image rm ${DOCKER_IMAGE}:latest"
  //     }
  //   }
  // }

  // post {
  //   success {
  //     echo "SUCCESSFUL"
  //   }
  //   failure {
  //     echo "FAILED"
  //   }
  // }
}
