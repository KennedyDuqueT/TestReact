n=int(input("ingrese la cantidad de filas"))
m=int(input("ingrese la cantidad de columnas"))
from funciones import crearmatrizperson
from funcion import traspuesta
from funcion import multiplicaciones
from funcion import imprimirmat

matriza=crearmatrizperson
matrizb=traspuesta(matriza)
rmul=multiplicacion(matriza,matrizb)

imprimirmat(matriza)
imprimirmat(matrizb)
imprimirmat(rmul)
