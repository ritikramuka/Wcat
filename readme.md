# **Wcat: a command to show file content with additional features.**

###### Wcat is similar to cat command in linux or Unix system.
## The features includes:
###### 1.-s: Replace multiple spaces with single space.
###### 2.-b: Assign Serial Number only for non-empty spaces.
###### 3.-n: Assign Serial Number to all the Lines.

## Other features
###### 1. f1 > f2 => put all the content of filename f1 into filename f2 by overriding also creates filename2 if it doesn't exist.
###### 2. f1 >> f2 => append all the content of filename f1 into filename f2

## How to execute the code
###### Steps 1: Folk the project
###### Steps 2: Open Terminal in VSCODE
###### Steps 3: Run ``` npm i ```
###### Steps 4: Run ``` npm link ```
###### Steps 5: Execute: ``` wcat -s -b abc/f ```

## Introduction
###### Wcat is user-defined command created using Javascript and Node.js. The command is exactly similar to cat command in LINUX operating System.
###### cat command is used to display the content of the file with additional features. As cat cmd is not available in windows operating system, We can make use of Javascript to create user-defined cat command and execute it in global environment.
## Requirements:
###### IDE : VSCODE
###### Software : Node.js, Javascript, git.
## Explanation
###### Wcat allows you to display content of file and save it into a file. 