message = open('315-message.txt', 'w')
message.write('Testing file for player configuration\n')
message.write('Testing file for player score\n')
message.close()

message = open('315-message.txt', 'a')
message.write('Spencer')
message.close()