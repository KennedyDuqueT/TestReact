n=int(input("ingrese el valor de l matriz"))
from funciones import crearmatrizperson
matriz=crearmatrizperson(n,n)
matrizm=matriz
print(matrizm)

nconver=crearmatrizperson(2,n)
c=n-1
for i in range (n):
    nconver[0][i]=matriz[i][i]
    nconver[1][i]=matriz[i][c]
    matrizm[i][i]=0
    matrizm[i][c]=0
    c=c-1
print(matriz)
print(matrizm)
print(nconver)
