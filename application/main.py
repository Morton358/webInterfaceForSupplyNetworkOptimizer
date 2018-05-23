#!/usr/bin/python
# -*- coding: utf-8 -*-
import time

from pyLindo import *

import prepare_data_lindo
from calculation_for_ui import (calculate_production_costs_per_plant,
                                calculate_transportation_costs_per_plant)


def solve_problem():
    # \\\\\\\\\\\\\\\\\\\\\\\\
    # for measure time of compilation
    # ////////////////////////
    start_time = time.time()

    # \\\\\\\\\\\\\\
    # model data
    # //////////////
    primalSolutions = []
    nCons = prepare_data_lindo.countOfConstraints  # count of constrains
    # count of decision variables
    nVars = prepare_data_lindo.countOfDesitionVariables
    nDir = 1  # direction 1 - it`s minimisation of function fit
    dObjConst = 0.0  # constant term in the objective function
    adC = N.array(prepare_data_lindo.constantsOfFunctionFit,
                  dtype=N.double)  # coficients of variables in function fit
    adB = N.array(prepare_data_lindo.allConstsOfConstraints,
                  dtype=N.double)  # constant on the right hand
    # of constrain expressions
    acConTypes = N.array(
        prepare_data_lindo.signsOfConstrainExpressions,
        dtype=N.character)  # signs of the
    # constrain expressions
    # the number of nonzero coefficients in the constraint matrix
    nNZ = len(prepare_data_lindo.nonZeroCoeficients)
    # column-start indices
    anBegCol = N.array(
        prepare_data_lindo.columnStartIndices, dtype=N.int32)
    pnLenCol = N.asarray(None)  # if no blanks are been lefy in matrix = None
    adA = N.array(prepare_data_lindo.nonZeroCoeficients,
                  dtype=N.double)  # nonzero coefficients
    anRowX = N.array(prepare_data_lindo.rowIndices,
                     dtype=N.int32)  # row indices
    # lower bounds for desition variables
    pdLower = N.array(prepare_data_lindo.lowerBounds, dtype=N.double)
    # upper bounds for desition variables
    pdUpper = N.array(prepare_data_lindo.upperBounds, dtype=N.double)
    pachVarType = N.array(prepare_data_lindo.pointersToCharacters,
                          dtype=N.character)  # A pointer to a character vector

    # print("\n nCons", nCons, "\n nVars", nVars, "\nnDir", nDir, "\ndObjCons", dObjConst, "\nlen adC", len(adC), "\nadC",
    #       adC, "\nlen adB", len(adB),"\nadB", adB, "\nlen acConTypes", len(acConTypes), "\nacConTypes", acConTypes)
    # print("\nnNZ", nNZ, "\nlen anBegCol", len(anBegCol), "\nanBegCol", anBegCol, "\npnLenCol", pnLenCol, "\nlen adA",
    #       len(adA), "\nadA", adA, "\nlen anRowX", len(anRowX), "\nanRowX", anRowX, "\nlen pdLower", len(pdLower),
    #       "\npdLower", pdLower, "\nlen pdUpper", len(pdUpper), "\npdUpper", pdUpper)
    # \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    # create LINDO environment and model objects
    # //////////////////////////////////////////
    LicenseKey = N.array('', dtype='S1024')
    lindo.pyLSloadLicenseString('/home/morton/lindoapi/license/lndapi110.lic',
                                LicenseKey)
    # A reference to an integer to return the error code
    pnErrorCode = N.array([-1], dtype=N.int32)
    pEnv = lindo.pyLScreateEnv(pnErrorCode, LicenseKey)

    pModel = lindo.pyLScreateModel(pEnv, pnErrorCode)

    geterrormessage(pEnv, pnErrorCode[0])

    #pszFname = "/home/morton/My_Files/Politechnika_Wroclawska/DYPLOM/Program/LINDO/input.mps"

    # \\\\\\\\\\\\\\\\\\\\\\\\\
    # load data into the model
    # /////////////////////////
    print("Loading LP data...")
    errorcode = lindo.pyLSloadLPData(pModel, nCons, nVars, nDir, dObjConst,
                                     adC, adB, acConTypes, nNZ, anBegCol,
                                     pnLenCol, adA, anRowX, pdLower, pdUpper)
    geterrormessage(pEnv, errorcode)

    # When use pachVarType (for example in MIP problem)
    errorcode = lindo.pyLSloadVarType(pModel, pachVarType)

    lindo.pyLSwriteMPSFile(pModel, "something.mps", 0)

    # \\\\\\\\\\\\\\\
    # solve the model
    # ///////////////
    print("Solving the model...")
    pnStatus = N.array([-1], dtype=N.int32)
    #errorcode = lindo.pyLSoptimize(pModel, LSconst.LS_METHOD_FREE, pnStatus)
    errorcode = lindo.pyLSsolveMIP(pModel, pnStatus)
    geterrormessage(pEnv, errorcode)

    # \\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    # retrieve the objective value
    # //////////////////////////////
    dObj = N.array([-1.0], dtype=N.double)
    #errorcode = lindo.pyLSgetInfo(pModel, LSconst.LS_DINFO_POBJ, dObj)
    errorcode = lindo.pyLSgetInfo(pModel, LSconst.LS_DINFO_MIP_OBJ, dObj)
    geterrormessage(pEnv, errorcode)
    print("Objective is: %.5f" % dObj[0])
    print("")

    # \\\\\\\\\\\\\\\\\\\\\\\\\\\\
    # retrieve the primal solution
    # /////////////////////////////
    padPrimal = N.empty((nVars), dtype=N.double)
    #errorcode = lindo.pyLSgetPrimalSolution(pModel, padPrimal)
    errorcode = lindo.pyLSgetMIPPrimalSolution(pModel, padPrimal)
    geterrormessage(pEnv, errorcode)
    print("Primal solution is: ")
    for x in padPrimal:
        primalSolutions.append(round(x, 5))
        print("%.5f" % x)

    # delete LINDO model pointer
    errorcode = lindo.pyLSdeleteModel(pModel)
    geterrormessage(pEnv, errorcode)

    # delete LINDO environment pointer
    errorcode = lindo.pyLSdeleteEnv(pEnv)
    geterrormessage(pEnv, errorcode)

    # show time of execution
    print("--- %s seconds ---" % (time.time() - start_time))

    transportation_costs_each_plant = calculate_transportation_costs_per_plant(
        prepare_data_lindo.I, prepare_data_lindo.R,
        prepare_data_lindo.E, primalSolutions,
        prepare_data_lindo.J1_R__1_I_FIT,
        prepare_data_lindo.J1_R__1_E_FIT)

    production_costs_each_plant = calculate_production_costs_per_plant(
        prepare_data_lindo.I, prepare_data_lindo.R,
        prepare_data_lindo.E, primalSolutions,
        prepare_data_lindo.J1_I_FIT,
        prepare_data_lindo.J1_R_FIT)

    return {"objective": round(dObj[0], 5),
            "primalSolutions": primalSolutions,
            "transportationCostsEachPlant": transportation_costs_each_plant,
            "productionCostsEachPlant": production_costs_each_plant
            }
