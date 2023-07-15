oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g usaco-cli
$ usaco COMMAND
running command...
$ usaco (--version)
usaco-cli/0.0.0 linux-x64 node-v19.3.0
$ usaco --help [COMMAND]
USAGE
  $ usaco COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`usaco hello PERSON`](#usaco-hello-person)
* [`usaco hello world`](#usaco-hello-world)
* [`usaco help [COMMANDS]`](#usaco-help-commands)
* [`usaco plugins`](#usaco-plugins)
* [`usaco plugins:install PLUGIN...`](#usaco-pluginsinstall-plugin)
* [`usaco plugins:inspect PLUGIN...`](#usaco-pluginsinspect-plugin)
* [`usaco plugins:install PLUGIN...`](#usaco-pluginsinstall-plugin-1)
* [`usaco plugins:link PLUGIN`](#usaco-pluginslink-plugin)
* [`usaco plugins:uninstall PLUGIN...`](#usaco-pluginsuninstall-plugin)
* [`usaco plugins:uninstall PLUGIN...`](#usaco-pluginsuninstall-plugin-1)
* [`usaco plugins:uninstall PLUGIN...`](#usaco-pluginsuninstall-plugin-2)
* [`usaco plugins update`](#usaco-plugins-update)

## `usaco hello PERSON`

Say hello

```
USAGE
  $ usaco hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/iacod/usaco-cli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `usaco hello world`

Say hello world

```
USAGE
  $ usaco hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ usaco hello world
  hello world! (./src/commands/hello/world.ts)
```

## `usaco help [COMMANDS]`

Display help for usaco.

```
USAGE
  $ usaco help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for usaco.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.12/src/commands/help.ts)_

## `usaco plugins`

List installed plugins.

```
USAGE
  $ usaco plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ usaco plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `usaco plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ usaco plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ usaco plugins add

EXAMPLES
  $ usaco plugins:install myplugin 

  $ usaco plugins:install https://github.com/someuser/someplugin

  $ usaco plugins:install someuser/someplugin
```

## `usaco plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ usaco plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ usaco plugins:inspect myplugin
```

## `usaco plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ usaco plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ usaco plugins add

EXAMPLES
  $ usaco plugins:install myplugin 

  $ usaco plugins:install https://github.com/someuser/someplugin

  $ usaco plugins:install someuser/someplugin
```

## `usaco plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ usaco plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ usaco plugins:link myplugin
```

## `usaco plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ usaco plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ usaco plugins unlink
  $ usaco plugins remove
```

## `usaco plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ usaco plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ usaco plugins unlink
  $ usaco plugins remove
```

## `usaco plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ usaco plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ usaco plugins unlink
  $ usaco plugins remove
```

## `usaco plugins update`

Update installed plugins.

```
USAGE
  $ usaco plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
