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

# About Chi² test

The Chi² test is to make sure our test set is not biased.
In order to have a good accuracy on a model we need to have a good equirepartition of data in the test set.
Therefore we run the Chi² test on 2 list, OBSERVED and EXPECTED.
Chi² needs a null hypotesis, here we used « The EXPECTED and OBSERVED values are independant ».
If the null hypotesis is rejected it means the test set is biased.
If the Chi² test fails to reject null hypotesis it means the test set has a good equirepartition.

Exemple:
We have a dataset of 30 DOG, 30 CAT and 30 GIRAFFE.

The null hypotesis is « The EXPECTED and OBSERVED values are independant »

OBSERVED is the real quantities of values in the test set so [5,15,10]
EXPECTED is the quantities of values we want in the test set so [10,10,10]

Here you can see that the precision is not going to be good because we have more CAT than DOG.
So Chi² test will reject the null hypotesis.

Read more here https://towardsdatascience.com/chi-square-statistic-chi-squared-distribution-2499084b5da8
 

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
