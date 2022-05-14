# ProjetJS

## Authors : 
  - Tristan CHEVET
  - Emilie ROUX
  - Norbet ASTIER
  - Massimo BACCI

## Description

In this project :
  - Reading a csv file and putting it in a dataset
  - Shuffling of the dataset
  - Creation of a trainset and testset
  - Chi² test on the test dataset
  - Principal Component Analysis of the dataset

## Installation

In order to run the project, you need to install Node JS : <https://nodejs.org/en/download/>

You then ned to install all of the necessaries libraries with the following command :

With npm :

```node
npm install
```

### Start the project

To start the project you just need to execute the following command :

With npm :

```node
npm start
```

### Test the project

To test the project you just need to execute the following command :

With npm :

```node
npm test
```

### Test the code-style of the code

To test the code-style of the code you just need to execute the following command :

With npm :

```node
npm run code-style
```

### Github Actions

When we have a pull request, we use Github Actions (the «pull_request_git.yml» file) to make sure the code:
  - Doesn't merge directly
  - Passes all required test (the style-code and the npm test) to see if there is any mistake in the code

## Libraries

ramda :

<https://ramdajs.com>

@stdlib/stats-chi2test (For the equirepartition on a dataset test) :

<https://www.npmjs.com/package/@stdlib/stats-chi2test>

pca-js :

<https://www.npmjs.com/package/pca-js>

chai :

<https://www.chaijs.com>

gulp :

<https://gulpjs.com>

mocha :

<https://mochajs.org>

xo :

<https://www.npmjs.com/package/xo>
