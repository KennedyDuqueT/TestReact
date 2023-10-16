def traspuesta(matriz):
    from funciones import crearmatriz
    m=crearmatriz(len(matriz[0]),len(matriz))
    for i in range(len(m)):
        for j in range(len(m[0])):
            m[i][j]=matriz[j][i]
    return(m)


def multiplicaciones(matriza,matrizb):
    resul=[]
    if len(matriza[0])==len(matrizb):
        for i in range(len(matriza)):
            resul.append([])
            for j in range(len(matriz)):
                resul[i].append(0)
        for i in range(len(matriza)):
            for j in range(len(matrizb[0])):
                for k in range (len(matrizb[0])):
                    resul[i][j]+=matriza[i][k]*matrizb[k][j]
        return(resul)

def imprimirmat(matriz):
    resul=""
    for i in range(len(matriz)):
        acum=""
        for j in range(len(matriz[0])):
            acum=acum+str(matriz[i][j]) + "\t"
        resul=resul + str(acum) + "\n"
    print(resul)
                   
