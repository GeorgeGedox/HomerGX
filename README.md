<h1 align="center">
 <img
  width="120"
  alt="HomerGX"
  src="https://raw.githubusercontent.com/GeorgeGedox/HomerGX/master/public/logo.png">
    <br/>
    HomerGX
</h1>
<p align="center">
  <strong>
    <a href="https://homergx-demo.netlify.app/">Demo</a>
    |
    <a href="https://github.com/GeorgeGedox/HomerGX/pkgs/container/homergx">Docker image</a>
    |
    <a href="#getting-started">Getting started</a>
  </strong>
</p>

Light Mode             |  Dark Mode
:-------------------------:|:-------------------------:
![](https://raw.githubusercontent.com/GeorgeGedox/HomerGX/master/docs/screenshot-light.png)  |  ![](https://raw.githubusercontent.com/GeorgeGedox/HomerGX/master/docs/screenshot-dark.png)

![Build status](https://img.shields.io/github/workflow/status/georgegedox/homergx/Create%20Release)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/georgegedox/homergx/Lint?label=lint)
![GitHub](https://img.shields.io/github/license/georgegedox/homergx)
![Netlify](https://img.shields.io/netlify/423ddc71-a623-49be-aec3-3bef054b2c79)

## Table of Contents
- [Features over the original](#features)
- [Getting started](#getting-started)
- [Configuration](docs/configuration.md)
- [Custom services](docs/customservices.md)
- [Tips & tricks](docs/tips-and-tricks.md)
- [Development](docs/development.md)
- [Troubleshooting](docs/troubleshooting.md)

## Features over the original
The project was forked at version `v21.09.2`, some of the things below might not hold true anymore

- Cleaner code
- Color mode can be forced(light/dark/auto) and the button can be hidden
- Layout can be forced vertical/horizontal and the button can be hidden
- Search can be disabled
- Modern theme already bundled in

### Planned features
- More services
- More bundled themes

## Getting started

HomerGX is a full static html/js dashboard, generated from the source in `/src` using webpack. It's meant to be served by an HTTP server, **it will not work if you open dist/index.html directly over file:// protocol**.

See [documentation](docs/configuration.md) for information about the configuration (`assets/config.yml`) options.

### Using docker

To launch container:

```sh
docker run -d -p 8080:8080 -v </your/local/assets/>:/www/assets --restart=always ghcr.io/georgegedox/homergx:latest
```

Default assets will be automatically installed in the `/www/assets` directory. Use `UID` and/or `GID` env var to change the assets owner (`docker run -e "UID=1000" -e "GID=1000" [...]`).

### Using docker-compose

The `docker-compose.yml` file must be edited to match your needs.
Set the port and volume (equivalent to `-p` and `-v` arguments):

```yaml
volumes:
  - /your/local/assets/:/www/assets
ports:
  - 8080:8080
```

To launch container:

```sh
cd /path/to/docker-compose.yml
docker-compose up -d
```

Default assets will be automatically installed in the `/www/assets` directory. Use `UID` and/or `GID` env var to change the assets owner, also in `docker-compose.yml`:

```yaml
environment:
  - UID=1000
  - GID=1000
```

### Using the release zip (prebuilt, ready to use)

Download and extract the latest release (`homergx.zip`) from the [release page](https://github.com/GeorgeGedox/HomerGX/releases), rename the `assets/config.yml.dist` file to `assets/config.yml`, and put it on a web server.

```sh
wget https://github.com/GeorgeGedox/HomerGX/releases/latest/download/homergx.zip
unzip homer.zip
cd homer
cp assets/config.yml.dist assets/config.yml
npx serve # or python -m http.server 8010 or apache, nginx ...
```

### Build manually

```sh
# Using npm
npm install
npm run build
```

Your dashboard is now ready for use in the `/dist` directory.

## Credits
- Original code and assets by the [Homer](https://github.com/bastienwirtz/homer) project team and it's contributors
- Background images from [Unsplash](https://unsplash.com) content creators [Richard Horvath](https://unsplash.com/@orwhat), [SIMON LEE](https://unsplash.com/@simonppt), [Voicu Apostol](https://unsplash.com/@cerpow)