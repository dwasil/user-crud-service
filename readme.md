# user-crud-service
*Node.JS, JavaScript, Postgres, Kubernetes, Skaffold, Helm.*

**Commands to start:**

## Simple

### Start db:
* kubectl apply -f ./kube/postgres.yaml

### Init db data:
* kubectl apply -f ./kube/app-config.yaml
* kubectl apply -f ./kube/initdb.yaml

### Simple

* kubectl apply -f ./kube/ingress.yaml -f ./kube/deployment.yaml -f ./kube/service.yaml

### Skaffold

* skaffold run

## Helm

* helm install user-crud-chart ./user-crud-chart/