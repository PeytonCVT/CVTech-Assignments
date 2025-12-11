message = open('313-message.txt','w')
message.write('Testing file for player configuration')
message.write('Testing file for player score')
message.close()

message_test = open('313-message.txt','r')
contents = message.read()
contents(print)
message_test.close()