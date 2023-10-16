#Apartamentos comprados en diferentes proyectos por un cliente
#Creo lista de aptos comprados y los retorno según el elemento de la lista pedido en el atributo elementolista
def listAptosComprados(elementolista):
    aptos = [
        [
            {
                'habitaciones': 3,
                'areaPrivada': 100,
                'baños': 2,
                'duplex': True
            },
            {
                'habitaciones': 3,
                'areaPrivada': 120,
                'baños': 3,
                'duplex': True
            }
        ],
        {
            'habitaciones': 2,
            'areaPrivada': 75,
            'baños': 2,
            'duplex': False
        },
        {
            'habitaciones': 2,
            'areaPrivada': 62,
            'baños': 1,
            'duplex': False
        },
    ]
    return aptos[elementolista]

#retorno lista de diccionarios de proyectos en los que ha comprado el cliente
def proyectosenlosquehacomprado():
    proyectos = [
        {
            'nombre': 'mirador de la enea',
            'estrato': 3,
            'pisos': 10,
            'numeroParqueaderos': 30,
            'aptosComprados': listAptosComprados(0)
        },
        {
            'nombre': 'torres de varsovia',
            'estrato': 4,
            'pisos': 8,
            'numeroParqueaderos': 20,
            'aptosComprados': listAptosComprados(1)
        },
        {
            'nombre': 'Torres de Barcelona',
            'estrato': 2,
            'pisos': 15,
            'numeroParqueaderos': 80,
            'aptosComprados': listAptosComprados(2)
        }
    ]
    return proyectos

def cliente():
    clientedict = {
        'nombre': 'Carlos',
        'apellido': 'Torrente',
        'telefono': '355598555',
        'aptosPropiedad': proyectosenlosquehacomprado()
    }

    return clientedict

clienteaptoscomprados = cliente()
#Imprimo el primer apartamento comprado en el primer proyecto del diccionario
print(clienteaptoscomprados['aptosPropiedad'][0]['aptosComprados'][0])

#Pregunto si la propiedad aptosComprados es un objeto de tipo lista
if isinstance(clienteaptoscomprados['aptosPropiedad'][0]['aptosComprados'], list ):
    #Recorro la lista de apartamentos comprados para el primer proyecto
    for i in clienteaptoscomprados['aptosPropiedad'][0]['aptosComprados']:
        print(i['habitaciones'])

#Pregunto si la propiedad aptosComprados es un objeto de tipo lista
if isinstance(clienteaptoscomprados['aptosPropiedad'][1]['aptosComprados'], dict ):
    for k,v in clienteaptoscomprados['aptosPropiedad'][1]['aptosComprados'].items():
        print("Llave: {}, valor: {}".format(k,v))

