operands = ['+','-','*','/','//','%']
for operand in operands:
    if operand == '//':
        print('// is a floor division operand')
        continue
    print(operand, 'is an operand')