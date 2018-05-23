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
G = []
J1_I = []
J1_R = []
J1_R__1_E = []
J1_R__1_E_arr = []
J1_R__1_I_arr = []
K = []
M1_R__1_E = []
M1_R__1_I = []
V = []
W = []
Y = []
Z = []
Z1_R = []


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
# """
# Database - myDB
# Collections - farmers, factories, customers
# """
# ############################################################
# """
# Example of farmers collection
# [
# {
# W:1000000,
# Z:22758,
# J1_I:0.66
# },
# W:3500000,
# Z:21374,
# J1_I:2.69
# },
# W:2500000,
# Z:14321,
# J1_I:0.76
# },
# ]
# """
#
#
# """
# Example of factories collection
#
# {
# adress:{},
# V:2.39,
# Z1_R:55571,
# Y:21386,
# J1_R:1.35,
# G:139414
# }
# """
#
#
# """
# Example of customers collection
# adress:{},
# K:36374
# """
#
#
# """
# Example of logistics data collection
# A1_R__1_I:[[23977, 31649], [6688, 29315], [5710, 25522]],
# A1_R__1_E:[[1830, 1563, 2901, 1516, 2616], [3795, 2896, 801, 2662, 2485]],
# A1_R__1_E_arr:[1830, 1563, 2901, 1516, 2616, 3795, 2896, 801, 2662, 2485],
# A1_R__1_I_arr:[23977, 31649, 6688, 29315, 5710, 25522],
# Q_TIR:24000,
# Q:500,
# M1_R__1_I:[30.3, 10.6, 28.6, 30.7, 12.9, 26.7],
# M1_R__1_E:[7.6, 10.0, 5.3, 10.7, 1.8, 13.2, 2.8, 2.5, 8.7, 13.2],
# J1_R__1_E:[[2.21, 1.77, 1.44, 1.1, 1.83], [1.99, 2.03, 1.14, 2.3, 1.28]],
# J1_R__1_E_arr:[2.21, 1.77, 1.44, 1.1, 1.83, 1.99, 2.03, 1.14, 2.3, 1.28] ,
# J1_R__1_I:[[2.5, 2.88], [3.54, 2.72], [3.47, 3.46]],
# J1_R__1_I_arr:[2.5, 2.88, 3.54, 2.72, 3.47, 3.46]
# """
# ################################
# """
# Write query?
# I =
# R =
# E =
# """
# I = 3 #random.randint(2, 20) # 3
# R = 2 #random.randint(2, 10) # 3
# E = 5 #random.randint(2, 50) # 5
# V = [2.39, 1.9] # wspolczynnik produkcji dla przeliczania ilosci surowca na ilosc produktu na kazdym zakladzie
# W = [1000000, 3500000, 2500000] # ilosc surowca u kazdego z sprzedawcow
# Z1_R = [55571, 4968] # ilosc juz przywiezionego surowca do zakladow produkcyjnych (kg)
# A1_R__1_E_arr = [1830, 1563, 2901, 1516, 2616, 3795, 2896, 801, 2662, 2485]
# A1_R__1_I_arr = [23977, 31649, 6688, 29315, 5710, 25522] # ogolna ilosc surowca, ktora bylo
# J1_R__1_E = [[2.21, 1.77, 1.44, 1.1, 1.83], [1.99, 2.03, 1.14, 2.3, 1.28]]
# J1_R__1_E_arr = [2.21, 1.77, 1.44, 1.1, 1.83, 1.99, 2.03, 1.14, 2.3, 1.28]
# J1_R__1_I = [[2.5, 2.88], [3.54, 2.72], [3.47, 3.46]]
# J1_R__1_I_arr = [2.5, 2.88, 3.54, 2.72, 3.47, 3.46]
# A1_R__1_I = [[23977, 31649], [6688, 29315], [5710, 25522]]
# A1_R__1_E = [[1830, 1563, 2901, 1516, 2616], [3795, 2896, 801, 2662, 2485]]
# Z = [22758, 21374, 14321] # ilosci juz zakupionych surowcow u sprzedawcow (kg)
# Y = [21386, 23309] # ilosc juz wyprodukowanych produktow na zakladach produkcyjnych ale nie dowiezionych
# Q_TIR = 24000
# Q = 500
# J1_I = [0.66, 2.69, 0.76] # koszt jednostkowy surowca u kazdego sprzedawcy
# J1_R = [1.35, 1.14] # koszt jednostkowy przetworstwa owocowo-warzywnej produkcji na kazdym zakladzie produkcyjnym
# M1_R__1_I = [30.3, 10.6, 28.6, 30.7, 12.9, 26.7] # dystans od sprzedawca do zakladu produkcyjnego
# M1_R__1_E = [7.6, 10.0, 5.3, 10.7, 1.8, 13.2, 2.8, 2.5, 8.7, 13.2]
# G = [139414, 638021]  # obserwowana produkcyjna moc kazdego z zakladow produkcyjnych
# K =  [36374, 36597, 13718, 47998, 39443] # obserwowany popyt/zapotrzebowanie na produkcje przedsiebiorstwa kazdego klienta
