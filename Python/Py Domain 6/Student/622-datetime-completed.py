import datetime

current_time = datetime.datetime.now()
print("The current date and time is:", current_time.strftime("%m-%d-%y"))
print("Formatted (mm-dd-yyyy hh:mm):", current_time.strftime("%m-%d-%Y %H:%M"))
print("Weekday number:", current_time.weekday())
print("Weekday name:", current_time.strftime("%A"))