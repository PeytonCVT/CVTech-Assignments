message = open('311-message.txt','w')
message.write('Testing file for player configuration')
message.close()

message_test = open('311-message.txt','r')
print('311-message is open')
