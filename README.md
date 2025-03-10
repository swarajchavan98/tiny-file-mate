# Tiny File Mate

Tiny File Mate is a simple command-line tool for basic file management operations. It allows you to list, read, create, and delete files in the current directory.

## Installation

To install Tiny File Mate, clone the repository and install the dependencies:

```sh
git clone https://github.com/swarajchavan98/tiny-file-mate.git
cd tiny-file-mate
npm install
```

Then, make the script executable and install it globally so you can run it from anywhere:

```sh
chmod +x fileManager.js
npm link
```

## Usage

You can use Tiny File Mate by running the `tiny-file-mate` command followed by the desired operation.

### List Files

To list all files in the current directory:

```sh
tiny-file-mate list
```

### Read a File

To read the contents of a file:

```sh
tiny-file-mate read <fileName>
```

### Create a File

To create a new file with specified content:

```sh
tiny-file-mate create <fileName> <content>
```

### Delete a File

To delete a file:

```sh
tiny-file-mate delete <fileName>
```

## Examples

### List Files

```sh
tiny-file-mate list
```

### Read a File

```sh
tiny-file-mate read example.txt
```

### Create a File

```sh
tiny-file-mate create example.txt "Hello, World!"
```

### Delete a File

```sh
tiny-file-mate delete example.txt
```

## License

This project is licensed under the ISC License.