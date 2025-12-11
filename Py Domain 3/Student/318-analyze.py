#message = open('318-message.txt','w')
#message.write('Testing file for player configuration\n')
#message.write('Testing file for player score\n')
#message.close()

with open('318-message.text','w+') as message:
    message.write('Testing file for player configuration\n')
    message.write('Testing file for player score\n')
    print('File created')
    print(message.read())