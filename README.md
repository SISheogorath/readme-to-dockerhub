README to Docker Hub
===

This is a quick hack to push README.md files to Docker hub.

How to use?

Simply build the image using `docker build -t readme-to-hub .`

and run it with all needed parameter:

```console
docker run --rm \
    -v /path/to/readme.md:/data/README.md \
    -e DOCKERHUB_USERNAME=myhubuser \
    -e DOCKERHUB_PASSWORD=myhubpassword \
    -e DOCKERHUB_REPO_PREFIX=myorga \
    -e DOCKERHUB_REPO_NAME=myrepo \
     readme-to-hub
```

That's it.
