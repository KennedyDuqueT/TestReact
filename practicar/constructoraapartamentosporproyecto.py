#ejemplo diccionarios constructora
#ejemplo diccionario proyecto de vivienda

#Construyo lista de diccionario de apartamentos
def apartamentosproyecto():
    apartamentos = [
        {
            'habitaciones': 1,
            'areaPrivada': 50,
            'baños': 1
        },
        {
            'habitaciones': 2,
            'areaPrivada': 80,
            'baños': 2
        },
        {
            'habitaciones': 3,
            'areaPrivada': 100,
            'baños': 2
        }
    ]
    return apartamentos

diccionarioproyectovivienda = {
    'nombre': "mirador de la enea",
    'ubicacion': 'carrera 7 #95-36',
    'estrato': 6,
    'totalParqueaderos': 150,
    'totalDepositos': 22,
    'pisos': 20,
    'apartamentos': apartamentosproyecto() #Llamo a función que me devuelve lista de diccionarios de apartamentos
    }

print(diccionarioproyectovivienda)
#imprimo al primer elemento de la lista de diccionarios
print(diccionarioproyectovivienda['apartamentos'][0])


