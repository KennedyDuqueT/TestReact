#Ejercicios de Alejandra

#Se repita el mismo numero adyacente.

testNumero = int(input("ingrese un número entero: "))  

cifra1 = testNumero % 10                                
testNumeroCopia = testNumero // 10                      

noAdyacente = True

while (testNumeroCopia != 0) :                                           

    cifra2 = testNumeroCopia % 10                     
    testNumeroCopia = testNumeroCopia // 10            
    
    if (cifra1 == cifra2) :                              
        print("El numero ", testNumero, " tiene estos numeros adyacentes: ", cifra2, " y ", cifra2)  
        noAdyacente = False    

    cifra1 = cifra2                                    

if  (noAdyacente) :
    print("No tiene numero adyacente")