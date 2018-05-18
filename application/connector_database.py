import pymongo
from pymongo import MongoClient

client = MongoClient()

# Get the sampleDB database
db = client.safeYourMoney

farmers = db.farmers
factories = db.factories
customers = db.customers
logistics = db.logistics

I = farmers.count()
R = factories.count()
E = customers.count()

Q = round(logistics.distinct('Q')[0])
Q_TIR = round(logistics.distinct('Q_TIR')[0])


A1_R__1_E = []
A1_R__1_E_arr_temp = []
A1_R__1_E_temp = []
A1_R__1_I = []
A1_R__1_I_arr = []
J1_R__1_E = []
J1_R__1_E_arr = []
J1_R__1_I_arr = []
V = []
W = []
Z1_R = []
Z = []
Y = []
J1_I = []
J1_R = []
M1_R__1_I = []
M1_R__1_E = []
G = []
K = []


for farmer in farmers.find():
    W.append(farmer["W"])
    Z.append(round(farmer["Zi"]))
    J1_I.append(farmer["Ji"])


for factory in factories.find():
    V.append(factory["Vr"])
    Z1_R.append(factory["Zr"])
    A1_R__1_E_temp.append(factory["Are"])
    J1_R__1_E.append(factory["Jre"])
    Y.append(factory["Yr"])
    J1_R.append(factory["Jr"])
    G.append(round(factory["Gr"]))


for customer in customers.find():
    K.append(round(customer["Ke"]))

for i in range(I):
    for factory in factories.find():
        A1_R__1_I_arr.append(round(factory["Ari"][i]))
        J1_R__1_I_arr.append(round(factory["Jri"][i], 2))
        M1_R__1_I.append(round(factory["Mri"][i], 2))

for factory in factories.find():
    for e in range(E):
        M1_R__1_E.append(round(factory["Mre"][e], 2))

A1_R__1_I = [A1_R__1_I_arr[t:t + R] for t in range(0, len(A1_R__1_I_arr), R)]
J1_R__1_I = [J1_R__1_I_arr[t:t + R] for t in range(0, len(J1_R__1_I_arr), R)]
A1_R__1_E_arr_temp = [item for sublist in A1_R__1_E_temp for item in sublist]
J1_R__1_E_arr = [item for sublist in J1_R__1_E for item in sublist]
A1_R__1_E_arr = [ round(elem) for elem in A1_R__1_E_arr_temp ]
A1_R__1_E = [A1_R__1_E_arr[t:t + E] for t in range(0, len(A1_R__1_E_arr), E)]


# print('liczba jednostek sprzedajacej surowiec: ', "\n",
#       I, "\n",
#       'liczba jednostek produkcyjnych: ', "\n",
#       R, "\n",
#       'liczba klientow ktorzy tworza zapotrzebowanie w produkcii jednostek produkcyjnych: ', "\n",
#       E, "\n",
#       'wspolczynnik produkcji dla przeliczania ilosci surowca na ilosc produktu na kazdym zakladzie produkcyjnym: ', "\n",
#       V, "\n",
#       'Z1_R', "\n", Z1_R, "\n",
#       'A1_R__1_I_arr', "\n", A1_R__1_I_arr, "\n",
#       'A1_R__1_I', "\n", A1_R__1_I, "\n",
#       'A1_R__1_E_arr', "\n", A1_R__1_E_arr, "\n",
#       'A1_R__1_E', "\n", A1_R__1_E, "\n",
#       'J1_R__1_I_arr', "\n", J1_R__1_I_arr, "\n",
#       'J1_R__1_I', "\n", J1_R__1_I, "\n",
#       'J1_R__1_E', "\n", J1_R__1_E, "\n",
#       'J1_R__1_E_arr', "\n", J1_R__1_E_arr, "\n",
#       'Z', "\n", Z, "\n",
#       'Y', "\n", Y, "\n",
#       'Q_TIR', "\n", Q_TIR, "\n",
#       'Q', "\n", Q, "\n",
#       'J1_I', "\n", J1_I, "\n",
#       'J1_R', "\n", J1_R, "\n",
#       'M1_R__1_I', "\n", M1_R__1_I, "\n",
#       'M1_R__1_E', "\n", M1_R__1_E, "\n",
#       'G', "\n", G, "\n",
#       'K', "\n", K, "\n",
#       )
