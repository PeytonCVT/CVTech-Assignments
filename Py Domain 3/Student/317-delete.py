import os
message_file = '317-message.txt'

if os.path.exists(message_file):
    os.remove(message_file)
    print("Message file removed")
    
else: 
    print("There was no message file to remove")
