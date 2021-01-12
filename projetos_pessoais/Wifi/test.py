import subprocess

data = subprocess.check_output(['netsh', 'wlan', 'show', 'profiles'], encoding='utf-8').decode('latin1').split('\n')
wifis = [line.split(':')[1][1:-1] for line in data if "All User Profile" in line]

for wifi in wifis:
    results = subprocess.check_output(['netsh', 'wlan', 'show', 'profile', wifi, 'key=clear'], encoding='utf-8').decode('latin1').split('\n')
    results = [line.split(':')[1][1:-1] for line in results if 'key Content' in line]
    try:
        print(f"Name:  {wifi}, Password: {results[0]}")
    except IndexError:
        print(f"Name: {wifi}, Password: Não foi possível encontrar!")