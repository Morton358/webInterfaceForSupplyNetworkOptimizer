import pytest

import prepare_data_lindo

allConstsOfConstraints = prepare_data_lindo.allConstsOfConstraints
columnStartIndices = prepare_data_lindo.columnStartIndices
constantsOfDecisionVariableOfConstrain1 = prepare_data_lindo.constantsOfDecisionVariableOfConstrain1
constantsOfDecisionVariableOfConstrain2 = prepare_data_lindo.constantsOfDecisionVariableOfConstrain2
constantsOfDecisionVariableOfConstrain3 = prepare_data_lindo.constantsOfDecisionVariableOfConstrain3
constantsOfDecisionVariableOfConstrain4 = prepare_data_lindo.constantsOfDecisionVariableOfConstrain4
constantsOfDecisionVariableOfConstrain5 = prepare_data_lindo.constantsOfDecisionVariableOfConstrain5
constantsOfDecisionVariableOfConstrain6 = prepare_data_lindo.constantsOfDecisionVariableOfConstrain6
constantsOfDecisionVariableOfConstrain7 = prepare_data_lindo.constantsOfDecisionVariableOfConstrain7
constantsOfDecisionVariableOfConstrain8 = prepare_data_lindo.constantsOfDecisionVariableOfConstrain8
constantsOfDecisionVariableOfConstrain9 = prepare_data_lindo.constantsOfDecisionVariableOfConstrain9
constantsOfFunctionFit = prepare_data_lindo.constantsOfFunctionFit
countOfConstraints = prepare_data_lindo.countOfConstraints
countOfDesitionVariables = prepare_data_lindo.countOfDesitionVariables
E = prepare_data_lindo.E
I = prepare_data_lindo.I
J1_R__1_E_arr = prepare_data_lindo.J1_R__1_E_arr
J1_R__1_I_arr = prepare_data_lindo.J1_R__1_I_arr
lowerBounds = prepare_data_lindo.lowerBounds
M1_R__1_E = prepare_data_lindo.M1_R__1_E
M1_R__1_I = prepare_data_lindo.M1_R__1_I
matrixOfDecisionVariables = prepare_data_lindo.matrixOfDecisionVariables
nonZeroCoeficients = prepare_data_lindo.nonZeroCoeficients
R = prepare_data_lindo.R
rowIndices = prepare_data_lindo.rowIndices
signsOfConstrainExpressions = prepare_data_lindo.signsOfConstrainExpressions
upperBounds = prepare_data_lindo.upperBounds


def count_non_zero_and_all_elements(matrix):
    non_zero_count = 0
    all_count = 0
    for i in range(len(matrix)):
        for j in matrix[i]:
            all_count += 1
            if j != 0:
                non_zero_count += 1
    return non_zero_count, all_count


class TestConstantsOfDescisionVariables():

    def test_constrain9(self):
        non_zero_count, all_count = count_non_zero_and_all_elements(
            constantsOfDecisionVariableOfConstrain9)
        assert non_zero_count == ((R * E) * 2) and all_count == (
            (((I * R) + (R * E)) * 2) * (R * E))

    def test_constrain8(self):
        non_zero_count, all_count = count_non_zero_and_all_elements(
            constantsOfDecisionVariableOfConstrain8)
        assert non_zero_count == ((I * R) * 2) and all_count == (
            (((I * R) + (R * E)) * 2) * (I * R))

    def test_constrain7(self):
        assert len(constantsOfDecisionVariableOfConstrain7) == ((I * R) +
                                                                (R * E)) * 2

    def test_constrain6(self):
        assert len(constantsOfDecisionVariableOfConstrain6) == ((I * R) +
                                                                (R * E)) * 2

    def test_constrain5(self):
        non_zero_count, all_count = count_non_zero_and_all_elements(
            constantsOfDecisionVariableOfConstrain5)
        assert non_zero_count == ((I + E) * R) and all_count == (
            (((I * R) + (R * E)) * 2) * R
        )

    def test_constrain4(self):
        non_zero_count, all_count = count_non_zero_and_all_elements(
            constantsOfDecisionVariableOfConstrain4)
        assert non_zero_count == (I * R) and all_count == (
            (((I * R) + (R * E)) * 2) * R)

    def test_constrain3(self):
        non_zero_count, all_count = count_non_zero_and_all_elements(
            constantsOfDecisionVariableOfConstrain3)
        assert non_zero_count == (R * E) and all_count == (
            (((I * R) + (R * E)) * 2) * E)

    def test_constrain2(self):
        non_zero_count, all_count = count_non_zero_and_all_elements(
            constantsOfDecisionVariableOfConstrain2)
        assert non_zero_count == (R * E) and all_count == (
            (((I * R) + (R * E)) * 2) * (R * E))

    def test_constrain1(self):
        non_zero_count, all_count = count_non_zero_and_all_elements(
            constantsOfDecisionVariableOfConstrain1)
        assert non_zero_count == (I * R) and all_count == (
            (((I * R) + (R * E)) * 2) * (I * R))

    def test_all_constrains(self):
        len(constantsOfDecisionVariableOfConstrain5[0]) == len(
            constantsOfDecisionVariableOfConstrain7) == len(
                constantsOfDecisionVariableOfConstrain6) == len(
                    constantsOfDecisionVariableOfConstrain4[0]) == len(
                        constantsOfDecisionVariableOfConstrain3[0]) == len(
                            constantsOfDecisionVariableOfConstrain2[0]) == len(
                                constantsOfDecisionVariableOfConstrain1[0]
        ) == len(
            constantsOfDecisionVariableOfConstrain8[0]
        ) == len(
            constantsOfDecisionVariableOfConstrain9[0]
        )


class TestCoeficientForTransportationCosts():

    def test_equality_arr_Mir_Jir(self):
        assert len(M1_R__1_I) == len(J1_R__1_I_arr)

    def test_equality_arr_Mre_Jre(self):
        assert len(M1_R__1_E) == len(J1_R__1_E_arr)


class TestPyLindoVariables():

    def test_equality_arr_desition_var_with_matrix(self):
        assert countOfDesitionVariables == len(
            matrixOfDecisionVariables[0]) == len(constantsOfFunctionFit) == \
            len(lowerBounds) == len(upperBounds)

    def test_equality_arr_count_of_constraints(self):
        assert countOfConstraints == len(
            allConstsOfConstraints) == len(signsOfConstrainExpressions) == \
            len(matrixOfDecisionVariables)

    def test_column_start_indices(self):
        assert len(columnStartIndices) - 1 == ((I * R) + (R * E)) * 2

    def test_non_zero_coeficients(self):
        assert len(nonZeroCoeficients) == len(rowIndices) and len(
            nonZeroCoeficients) == (
                ((I * R) + (R * E)) +  # constraint 7
                ((I + E) * R) +  # constraint 5
                (I * R) +  # constraint 6
                (I * R) +  # constraint 4
                (R * E) +  # constraint 3
                (I * R) +  # constraint 1
                (R * E) +  # constraint 2
                ((I * R) * 2) +  # constraint 8
                ((R * E) * 2))  # constraint 9

    def test_count_of_constraints(self):
        assert countOfConstraints == len(matrixOfDecisionVariables) == len(
            allConstsOfConstraints) == len(signsOfConstrainExpressions)
