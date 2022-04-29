/*
Alors si on s'amuse à faire des maths on a besoin de 2 list EXPECTED et OBSERVED pour vérifier l'équirépartition des data dans le dataset Test pour bien checker l'accuracy

expected = [1/3*len(datasetTest),1/3*len(datasetTest),1/3*len(datasetTest)]
donc expected(%) = [10,10,10] par exemple
chaque index correspond au label des plantes dans notre dataset donc setosa etc... il en faut 10 chacun en GROS

Le Observed(%) : [?,?,?] car on les trouves en comptant le nb de SPECICES dans notre dsTest
ça peut être [10,8,12] par exemple

Ensuite on calcul le chi2:
const x2 = sum((observed[i] - expected[i])² / expected[i])

Ensuite on calcul le degree of freedom (DF):
DF = ( N - 1 )   exemple ici DF = 3 - 1 = 2
    N est le nb de var dans ma list
donc en js
const DF = len(expected) - 1

On a besoin du DF ainsi que d'un P(value) que l'on fixe a 0.1
On regarde le «Chi-square Distribution Table» qui nous permet de trouver la «critical value of the test»
que l'on compare a la valeur du chi2
si chi2 > critical value of the test => we fail to reject the null hypothesis
si chi2 < critical value of the test => we reject the null hypothesis
Notre Null Hypothesis => on a autant d'espèce de fleurs dans notre datasetTest
Tout ça pour montrer que nos data sont bien réparti dans le datasetTest :)

Mais pour le rest on utilise la lib @stdlib/stats-chi2test :))))))
 */
import * as R from 'ramda';
import chi2test from '@stdlib/stats-chi2test';

var x = [
    [ 20, 30 ],
    [ 30, 20 ]
];
var opts = {
    'alpha': 0.1
};
var out = chi2test( x, opts );
/* returns
    {
        'rejected': true,
        'alpha': 0.1,
        'pValue': ~0.072,
        'df': 1,
        'statistic': 3.24,
        ...
    }
*/
//console.log(out);
console.log(out.print());
console.log(Object.keys(out));
console.log(out.df);
