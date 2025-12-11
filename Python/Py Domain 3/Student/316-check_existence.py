import os

if not os.path.exists('316-message.txt'):
    message = open('316-message.txt','w')
    message.write('Testing file for player configuration\n')
    message.write('Testing file for player score')
    print("Configuration file made")
    message.close()
else: 
    message_test = open('316-message.txt','r')
    content = message_test.read()
    print(content)
    message_test.close()