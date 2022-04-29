/*
Alors si on s'amuse à faire des maths on a besoin de 2 list EXPECTED et OBSERVED pour vérifier l'équirépartition des data dans le dataset Test

expected = [1/3*len(datasetTest),1/3*len(datasetTest),1/3*len(datasetTest)]
donc expected(%) = [10,10,10]
chaque index correspond au label des plantes dans notre dataset donc setosa etc... il en faut 10 chacun en GROS

Le Observed(%) : [?,?,?] car on les trouves en comptant le nb de SPECICES dans notre dsTest
ça peut être [10,8,12] par exemple

Ensuite on calcul le chi2:
const x2 = sum((observed[i] - expected[i])² / expected[i])

Ensuite on calcul le degree of freedom (DF):
DF =( N - 1 )   exemple ici DF = 3 - 1 = 2         car calcul mathématique :)
    N est le nb de var dans ma list
donc en js
const DF = len(expected) - 1

 */