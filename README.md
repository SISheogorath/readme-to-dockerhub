README to Docker Hub
===

This is a quick hack to push README.md files to Docker hub.


# How to use?

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


## Environment variables

This image uses environment variables for configuration.

|Available variables     |Default value        |Description                                         |
|------------------------|---------------------|----------------------------------------------------|
|`DOCKERHUB_USERNAME`    |no default           |The Username (not mail address) used to authenticate|
|`DOCKERHUB_PASSWORD`    |no default           |Password of the `DOCKERHUB_USERNAME`-user           |
|`DOCKERHUB_REPO_PREFIX` |`$DOCKERHUB_USERNAME`|Organisation or username for the repository         |
|`DOCKERHUB_REPO_NAME`   |no default           |Name of the repository you want to push to          |


## Mount the README.md

This image always pushes the file `/data/README.md` as full description to Docker Hub.

For GitHub repositories you can use `-v /path/to/repository:/data/`.

If your description is not named `README.md` mount the file directory using `-v /path/to/description.md:/data/README.md`.

*Notice that the filename is case sensitive. If your readme is called `readme.md` you have to mount the file directly, not the directory*


# Additional Information

The user you use to push the README.md need to be admin of the repository.


# Implementations and references of this image

* [InspIRCd](https://github.com/Adam-/inspircd-docker/blob/master/.travis.yml)
* [Anope](https://github.com/Adam-/anope-docker/blob/master/.travis.yml)
* [Minecraft](https://github.com/SISheogorath/minecraft-docker/blob/master/.travis.yml)
* [isso](https://github.com/SISheogorath/isso-docker/blob/master/.travis.yml)


# Updates and updating

To update your setup simply pull the newest image version from docker hub and run it.


## Deprecated features

We provide information about features we remove in future.

* `DOCKERHUB_REPO` - is renamed to `DOCKERHUB_REPO_NAME` to be not mixed up with `DOCKERHUB_REPO_PREFIX`


# License

View [license information](https://www.npmjs.com/package/docker-hub-api) for the software contained in this image.

Everything in [this repository](https://github.com/SISheogorath/readme-to-dockerhub) is published under [GPL-3](https://spdx.org/licenses/GPL-3.0).


# Supported Docker versions

This image is officially supported on Docker version 17.06.0-CE.

Support for older versions (down to 1.12) is provided on a best-effort basis.

Please see [the Docker installation documentation](https://docs.docker.com/installation/) for details on how to upgrade your Docker daemon.


# User Feedback

## Issues

If you have any problems with or questions about this image, please contact us through a [GitHub issue](https://github.com/SISheogorath/readme-to-dockerhub/issues).


## Contributing

You are invited to contribute new features, fixes, or updates, large or small; we are always thrilled to receive pull requests, and do our best to process them as fast as we can.
