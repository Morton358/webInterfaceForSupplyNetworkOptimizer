def calculate_transportation_costs_per_plant(I, R, E, primalSolutions,
                                             J1_R__1_I_FIT, J1_R__1_E_FIT):
    result = 0
    transportation_costs_raw_material = []
    transportation_costs_raw_material_plant = 0
    transportation_costs_products = []
    transportation_costs_products_plant = []
    index_primal_raw_material = (I * R) + (R * E)
    index_primal_product = index_primal_raw_material + (I * R)

    for iterator_plants in range(R):
        index_primal_raw_material_temp = (
            index_primal_raw_material + iterator_plants
        )
        for iterator_farmers in range(I):
            transportation_costs_raw_material_plant += (
                primalSolutions[index_primal_raw_material_temp]
                * J1_R__1_I_FIT[index_primal_raw_material_temp -
                                index_primal_raw_material]
            )
            index_primal_raw_material_temp += R
        transportation_costs_raw_material.append(
            transportation_costs_raw_material_plant)
        transportation_costs_raw_material_plant = 0

    for iterator_Ore in range(R * E):
        index_primal_product_temp = index_primal_product + iterator_Ore
        transportation_costs_products_plant.append(
            primalSolutions[index_primal_product_temp]
            * J1_R__1_E_FIT[iterator_Ore]
        )
        if len(transportation_costs_products_plant) == E:
            transportation_costs_products.append(
                sum(transportation_costs_products_plant))
            transportation_costs_products_plant = []

    result = [x + y for x, y in zip(transportation_costs_raw_material,
                                    transportation_costs_products)]
    return [round(elem, 5) for elem in result]


def calculate_production_costs_per_plant(I, R, E, primalSolutions, J1_I_FIT,
                                         J1_R_FIT):
    result = 0
    iterator = 0
    production_costs_raw_material = []
    production_costs_raw_material_plant = 0
    production_costs_products = []
    production_costs_products_plant = []

    for iterator_plants in range(R):
        iterator = iterator_plants
        for iterator_farmers in range(I):
            production_costs_raw_material_plant += (
                primalSolutions[iterator] * J1_I_FIT[iterator]
            )
            iterator += R
        production_costs_raw_material.append(
            production_costs_raw_material_plant)
        production_costs_raw_material_plant = 0

    for iterator_Xre in range(R * E):
        production_costs_products_plant.append(
            primalSolutions[iterator_Xre + (I * R)] * J1_R_FIT[iterator_Xre]
        )
        if len(production_costs_products_plant) == E:
            production_costs_products.append(
                sum(production_costs_products_plant))
            production_costs_products_plant = []

    result = [x + y for x, y in zip(production_costs_raw_material,
                                    production_costs_products)]
    return [round(elem, 5) for elem in result]


def get_counts_farmers_clients(I, R, E):
    return {'count_farmers': I,
            'count_clients': E,
            'count_factories': R
            }
