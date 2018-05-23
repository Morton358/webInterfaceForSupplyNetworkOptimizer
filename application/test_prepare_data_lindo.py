import unittest
import prepare_data_lindo


I = prepare_data_lindo.I
R = prepare_data_lindo.R
E = prepare_data_lindo.E
constantsOfDecisionVariableOfConstrain7 = prepare_data_lindo.constantsOfDecisionVariableOfConstrain7

class TestConstantsOfDescisionVariables(unittest.TestCase):

  def test_constrain7(self):
      self.assertEqual(len(constantsOfDecisionVariableOfConstrain7), (
          (I * R) + (R * E)) * 2)

if __name__ == '__main__':
    unittest.main()
