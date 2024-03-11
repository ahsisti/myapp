1- kubectl port-forward -n argocd service/argocd-server 8443:443
2- kubectl port-forward -n myapp deployment/myapp-deployment 3000:80 